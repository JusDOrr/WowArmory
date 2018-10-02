import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

import ArmoryNavBar from './../../NavBars/ArmoryNavBar.js';
import Progression from './Progression.js';
import Talents from './Talents.js';
import Stats from './Stats.js';
import Gear from './Gear.js';

import * as BlizzardAPI from './../../../data/BlizzardAPI.js';
import * as ClassDetails from './../../../data/ClassDetails.js';
import * as Enums from './../../../data/Enums.js';

import HordeBackground from './../../../images/RedChalkboard.jpg';
import AllianceBackground from './../../../images/BlueChalkboard.jpg';
import Shield from './../../../images/Icons/shieldicon.png';
import Sword from './../../../images/Icons/swordsicon.png';
import Honor from './../../../images/Pvp/Honor.png'
import HonorKills from './../../../images/Pvp/HonorableKills.png'
import Pretige from './../../../images/Pvp/Prestige.png'
import PvpFrame from './../../../images/Pvp/PvpFrame.png'

import './../armory.css';

class Character extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            ArmoryNavType: Enums.ArmoryNavType.Character
        };
    }

    onSelect = (armoryNavType) => {
        this.setState({ ArmoryNavType: armoryNavType });
    }

    getArmoryControl = (faction) => {
        switch (this.state.ArmoryNavType) {
            case Enums.ArmoryNavType.Character:
                return (<CharacterViewer data={this.props.data} faction={faction}></CharacterViewer>);
            default:
                return (<div/>);
        }
    }

    render () {
        var char = this.props.data;
        
        // Unused Variables
        var calcClass = char.calcClass;
        var lastModified = char.lastModified;
        var totalHKills = char.totalHonorableKills;

        var raceInfo = ClassDetails.GetRaceInfo(char.race);
        var ArmoryControl = this.getArmoryControl(raceInfo.faction);

        return (
                <div style={{marginTop: "5px"}}>
                    <NamePlate data={char} faction={raceInfo.faction} />
                    <PvpPlate />
                    <ArmoryNavBar selectCallback={this.onSelect} faction={raceInfo.faction} />
                    {ArmoryControl}
                </div>
                );
    }
}

class PvpPlate extends Component{
    renderPrestige = (value) => {
        return (
            <div className="armory-pvp-plate tooltip">
                <span className="tooltiptext tooltip-top">Prestige Level</span>
                <div style={{display: "inline-block"}}>
                    <img src={Pretige} style={{marginLeft: "-10px"}} />
                </div>
                {value}
            </div>
            )
    }

    renderItem = (imgSource, icon, tooltip, value) => {
        return (
            <div className="armory-pvp-plate tooltip">
                <span className="tooltiptext tooltip-top">{tooltip}</span>
                <div style={{display: "inline-block"}}>
                    <img src={imgSource} />
                    <div>{icon}</div>
                </div>
                {value}
            </div>
            )
    }

    render () {
        return (
                <Well className="armory-pvp">
                    {this.renderPrestige("0")}
                    {this.renderItem(Honor, "", "Honor Level", "0")}
                    {this.renderItem(HonorKills, "", "Honorable Kills", "0")}
                    {this.renderItem(PvpFrame, "2v2", "2v2 Rating", "0")}
                    {this.renderItem(PvpFrame, "3v3", "3v3 Rating", "0")}
                    {this.renderItem(PvpFrame, "BG", "Battlegrounds Rating", "0")}
                </Well>
                );
    }
}

class NamePlate extends Component{
    render () {
        var backgroundImg = (this.props.faction === "Alliance") ? AllianceBackground : HordeBackground;

        return (
                <Well className="armory-name-plate" style={{ backgroundImage: "url(" + backgroundImg + ")" }}>
                    <div>
                        <NameDetails data={this.props.data} />
                        <InfoDetails data={this.props.data} />
                    </div>
                </Well>
                );
    }
}

class NameDetails extends Component{
    render() {
        var char = this.props.data;

        if (!char)
            return null;

        var raceInfo = ClassDetails.GetRaceInfo(char.race);
        var classInfo = ClassDetails.GetClassInfo(char.class);
        var logo = BlizzardAPI.GetLogo(raceInfo.faction);

        var title = "";
        if (char.titles) {
            var titleItem = char.titles.filter(function (obj) { return obj.selected == true; })[0];
            if(titleItem)
                title = String(titleItem.name).replace(/%s | %s|%s, /gi, "");
        }

        return (
                <div className="name-section">
                    <div className="name-section-logo" style={{ backgroundImage: "url(" + logo + ")" }} />
                    <div className="name-section-name-title">
                        <div className="name-section-name" style={{ color: classInfo.color}}>{char.name}</div>
                        <div className="name-section-title">{title}</div>
                    </div>
                </div>
                );
    }
}

class InfoDetails extends Component{
    render () {
        var char = this.props.data;

        if (!char)
            return null;

        var raceInfo = ClassDetails.GetRaceInfo(char.race);
        var classInfo = ClassDetails.GetClassInfo(char.class);
        var guild = (char.guild) ? char.guild.name : "";
        var itemlvl = (char.items) ? char.items.averageItemLevelEquipped : "";

        return (                
                <div className="info-section">
                    <div className="info-section-stats">
                        <div className="info-section-stats-logo" style={{ backgroundImage: "url(" + Shield + ")" }} />
                        <div className="info-section-standard">{char.achievementPoints}</div>
                        <div className="info-section-stats-logo" style={{ backgroundImage: "url(" + Sword + ")", marginLeft: "5px" }} />
                        <div className="info-section-standard">{itemlvl} ILVL</div>
                    </div>
                    <div className="info-section-stats-data">
                        <div style={{ float: "left" }}>{char.level}</div>
                        <div className="info-section-standard">{raceInfo.race}</div>
                        <div className="info-section-standard">{classInfo.name}</div>
                        <div className="info-section-standard" style={{ color: "#f8b700" }}>&lt;{guild}&gt;</div>
                        <div className="info-section-standard">{char.realm}</div>
                    </div>
                </div>
                );
    }
}

class CharacterViewer extends Component{
    render () {
        var char = this.props.data;
        var avatar = BlizzardAPI.GetAvatar(char.race, char.gender, char.thumbnail);

        return (
                <div style={{marginTop: "1px"}}>
                    <div className="armory-character" style={{backgroundImage: "url(" + avatar + ")"}}>
                        <div style={{display: "inline-block"}}>
                            <Gear data={char.items} />
                        </div>
                    </div>
                    <Stats data={char.stats} faction={this.props.faction} charClass={char.class}/>
                    <Talents data={char.talents} faction={this.props.faction} />
                    <Progression data={char.progression} />
                </div>
                );
    }
}

export default Character;
