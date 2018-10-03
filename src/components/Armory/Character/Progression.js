import React, { Component } from 'react';
import { Well, ProgressBar } from 'react-bootstrap';

import * as BlizzardAPI from './../../../data/BlizzardAPI.js';

import './progress.css';

class Progression extends Component{
    render () {
        if (!this.props.data)
            return (<div />);

        var progression = this.props.data;

        // Current Content Raids are: The Emerald Nightmare, Trial of Valor, The Nighthold, and Tomb of Sargeras
        var raids = progression.raids.slice(progression.raids.length - 5, progression.raids.length).map(function (raid) {
            return React.createElement(Raid, { key:"Raid-" + raid.name, data: raid }, null);
        });;

        return (
                <div>
                    <div className="progressControl">Legion Raid Progress</div>
                    <Well className="progressControlWell">
                        {raids}
                    </Well>
                </div>
                );
    }
}

class Raid extends Component{
    render () {
        var raid = this.props.data;
        var raidImg = BlizzardAPI.GetRaidImage(raid.name);

        // Retreive boss status per raid difficulty
        var lfrBossProg = { "name": "LFR", bosses: [] },
            normBossProg = { "name": "Normal", bosses: [] },
            heroBossProg = { "name": "Heroic", bosses: [] },
            mythicBossProg = { "name": "Mythic", bosses: [] };

        var progress = raid.bosses.map(function (boss) {
            if (boss.lfrKills != undefined)
                lfrBossProg.bosses.push({ "name": boss.name, "kills": boss.lfrKills, "time": boss.lfrTimestamp });
            if (boss.normalKills != undefined)
                normBossProg.bosses.push({ "name": boss.name, "kills": boss.normalKills, "time": boss.normalTimestamp });
            if (boss.heroicKills != undefined)
                heroBossProg.bosses.push({ "name": boss.name, "kills": boss.heroicKills, "time": boss.heroicTimestamp });
            if (boss.mythicKills != undefined)
                mythicBossProg.bosses.push({ "name": boss.name, "kills": boss.mythicKills, "time": boss.mythicTimestamp });
        })

        // Build LFR, Normal, Heroic, and Mythic Progress Bars...
        var lfrProg = React.createElement(RaidProgression, { raid: raid.name, progress: lfrBossProg }, null);
        var normProg = React.createElement(RaidProgression, { raid: raid.name, progress: normBossProg }, null);
        var heroProg = React.createElement(RaidProgression, { raid: raid.name, progress: heroBossProg }, null);
        var mythicProg = React.createElement(RaidProgression, { raid: raid.name, progress: mythicBossProg }, null);

        return (
                <Well className="raidWell">
                    <img src={raidImg} />
                    <div>{raid.name}</div>
                    <div style={{ color: "#c69b6d", fontSize: "11px" }}>Level 110</div>
                    <div>
                        {lfrProg}
                        {normProg}
                        {heroProg}
                        {mythicProg}
                    </div>
                </Well>
                );
    }
}

class RaidProgression extends Component{
    getProgressStyle = (killTotal, bossTotal) => {
        var percent = (killTotal / bossTotal) * 100;
        var style = "success";
        if (percent >= 50 && percent < 100)
            style = "warning";
        else if (percent < 50)
            style = "danger";

        return style;
    }

    render () {
        var difficultyName = this.props.progress.name;
        var progress = this.props.progress.bosses;

        var killTotal = 0;
        progress.forEach(function (boss, index) {
            if (boss.kills > 0)
                killTotal += 1;
        });

        var label = killTotal + "/" + progress.length;
        var invLabel = (killTotal === 0) ? "0/" + progress.length : "";

        var style = this.getProgressStyle(killTotal, progress.length);

        var progressWidth = Math.floor((killTotal / progress.length) * 100);
        var inverseWidth = (100 - progressWidth);

        return (
                <div className="raid">
                    <div>{difficultyName}</div>
                    <div className="tooltip-raid-progress">
                        <RaidProgressionToolTip key={Math.random()} raid={this.props.raid} progress={this.props.progress} />
                        <ProgressBar min={0} max={progress.length} style={{ display: "inline-block", width: "190px", marginLeft: "5px" }}> 
                            <ProgressBar active bsStyle={style} now={killTotal} label={label}
                                        style={{width: progressWidth + "%", color: "white"}}/>
                            <ProgressBar now={progress.length - killTotal} label={invLabel}
                                        style={{width: inverseWidth + "%", backgroundImage: "none", backgroundColor: "grey", color: "white"}}/>
                        </ProgressBar> 
                    </div>
                </div>
                );
    }
}

class RaidProgressionToolTip extends Component{
    render () {
        var name = this.props.raid;
        var progress = this.props.progress;

        var bosses = progress.bosses.map(function (boss) {
            var color = (boss.kills > 0) ? "green" : "grey";

            return React.createElement("div", { key: progress.name + "-" + boss.name, style:{ margin: "0 10px", width: "auto", color: color } }, boss.kills + "x " + boss.name);
        });

        return (
                <div className="tooltiptext-raid-progress tooltip-raid-progress-top" style={{display: "inline-grid"}}>
                    <div style={{ margin: "10px 10px 0 10px", fontSize: "20px", width: "auto" } }>{name}</div>
                    <div style={{ margin: "0 10px 10px 10px" } }>{progress.name}</div>
                    {bosses}
                </div>
                );
    }
}

export default Progression;
