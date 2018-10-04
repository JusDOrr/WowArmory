import React, { Component } from 'react';
import { Well, ProgressBar } from 'react-bootstrap';

import * as ClassDetails from './../../../data/ClassDetails.js';
import * as Enums from './../../../data/Enums.js';

import './Reputation.css';

class Reputation extends Component{
    GetExpansionReputations = (exansionType, reps) => {
        var factions = ClassDetails.Reputations.find(v => v.Expansion === exansionType).Factions;
        var result = factions.map(function (val) {
            return Object.assign({}, val, reps.find(x => x.id === val.Id));
        });

        return result.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
    }

    render () {
        if (!this.props.data)
            return (<div />);

        var LegionReps = this.GetExpansionReputations(Enums.ExpansionType.Legion, this.props.data);

        var repProgress = LegionReps.map(function (rep) {
            return <ReputationProgress key={rep.id} data={rep} />
        });

        return (
                <Well className="reputation" style={{ height: "auto", backgroundImage: "var(--AlliBackImage)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div style={{color: "rgb(248, 183, 0)", fontSize: "20px"}}>LEGION</div>
                    {repProgress}
                </Well>
                );
    }
}

class ReputationProgress extends Component{
    getProgressStyle = (standing) => {
        var style = "info";
        switch (standing) {
            case 0:
            case 1:
            case 2:
                style = "danger";
                break;
            case 3:
                style = "warning";
                break;
            case 4:
            case 5:
            case 6:
                style = "success";
                break;
            case 7:
                style = "info";
                break;
        }

        return style;
    }

    render () {
        var rep = this.props.data;

        var max = (rep.max === 0) ? 100 : rep.max;
        var now = (rep.value === 0 && rep.max === 0) ? 100 : rep.value;

        var label = (max === 100 && now === 100) ? "" : rep.value + "\/" + rep.max;
        var invLabel = (rep.value === 0 && rep.max !== 0) ? "Not Started" : "";

        var standing = ClassDetails.GetReputationInfo(rep.standing, rep.max);
        var style = this.getProgressStyle(rep.standing);

        var progressWidth = (rep.value === 0 && rep.max === 0) ? 100 : Math.floor((rep.value / rep.max) * 100);
        if(progressWidth === 0 && rep.value > 0)
            progressWidth = 10;

        var inverseWidth = (100 - progressWidth);

        return (
                <div style={{ color: "var(--GoldColor)" }}>
                    <div style={{display: "flex", justifyContent: "space-between", width: "auto"}}>
                        <div>{rep.name}</div>
                        <div>{standing}</div>
                    </div>
                    <ProgressBar min={0} max={max} style={{ backgroundColor: "#222", display: "inline-block", width: "735px", marginLeft: "0", marginBottom: "5px" }} >
                        <ProgressBar active bsStyle={style} now={now} label={label}
                                    style={{width: progressWidth + "%", color: "white"}}/>
                        <ProgressBar now={rep.max - rep.value} label={invLabel}
                                    style={{width: inverseWidth + "%", backgroundImage: "none", backgroundColor: "grey", color: "white"}}/>
                    </ProgressBar>
                </div>
               );
    }
}

export default Reputation;
