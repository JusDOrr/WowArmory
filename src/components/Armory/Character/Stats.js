import React, { Component } from 'react';
import { Well, Table } from 'react-bootstrap';

import * as ClassDetails from './../../../data/ClassDetails.js';

// Stats Icons
import Rage from './../../../images/Stats/Rage100.png';
import Mana from './../../../images/Stats/Mana100.png';
import Fury from './../../../images/Stats/Fury100.png';
import Maelstrom from './../../../images/Stats/Maelstrom100.png';
import Energy from './../../../images/Stats/Energy100.png';
import RunicPower from './../../../images/Stats/RunicPower100.png';
import Focus from './../../../images/Stats/Focus100.png';
import Strength from './../../../images/Stats/Strength100.png';
import Agility from './../../../images/Stats/Agility100.png';
import Intellect from './../../../images/Stats/Intellect100.png';
import Health from './../../../images/Stats/Health.png';
import Stamina from './../../../images/Stats/Stamina.png';
import Crit from './../../../images/Stats/CriticalStrike100.png';
import Haste from './../../../images/Stats/Haste.png';
import Mastery from './../../../images/Stats/Mastery100.png';
import Versatility from './../../../images/Stats/Versatility.png';

import './stats.css';

class Stats extends Component{
    getTableCell = (img, stat, title) => {
        return(<StatCell image={img} stat={stat} title={title} />);
    }

    getStatClass = (faction) => {
        var className = (faction === "Horde") ? "horde-stats" : "alli-stats";

        return className;
    }

    getPowerCell = (powerType, power) => {
        var icon = "";
        if (powerType === "rage") icon = Rage;
        else if (powerType === "mana") icon = Mana;
        else if (powerType === "fury") icon = Fury;
        else if (powerType === "maelstrom") icon = Maelstrom;
        else if (powerType === "energy") icon = Energy;
        else if (powerType === "runic-power") icon = RunicPower;
        else if (powerType === "focus") icon = Focus;

        return this.getTableCell(icon, power.toLocaleString(), powerType.toLocaleString().toUpperCase());
    }

    getMainStatCell = (stat) => {
        var statVal = "";
        var statName = "";
        var icon = "";

        if (stat.str) {
            statVal = stat.str.toLocaleString();
            statName = "STRENGTH";
            icon = Strength;
        }
        else if (stat.agi) {
            statVal = stat.agi.toLocaleString();
            statName = "AGILITY";
            icon = Agility;
        }
        else if (stat.int) {
            statVal = stat.int.toLocaleString();
            statName = "INTELLECT";
            icon = Intellect;
        }

        return this.getTableCell(icon, statVal, statName);
    }

    render () {
        var stats = this.props.data;

        if (!stats)
            return null;

        var className = this.getStatClass(this.props.faction);
        var classStats = ClassDetails.GetClassStats(this.props.charClass, stats);

        // AM I ALLOWED TO USE THESE? /static/components/Icon/Icon.svg#haste, etc.
        return (
                <Well className={className}>
                    <Table>
                        <tbody>
                            <tr className="stats-tr">
                                <StatCell image={Health} stat={classStats.health.toLocaleString()} title="HEALTH" />
                                {this.getPowerCell(classStats.powerType, classStats.power)}
                                {this.getMainStatCell(classStats)}
                                <StatCell image={Stamina} stat={classStats.sta.toLocaleString()} title="STAMINA" />
                            </tr>
                            <tr className="stats-tr">
                                <StatCell image={Crit} stat={classStats.crit} title="CRITICAL STRIKE" rating={classStats.critRating} />
                                <StatCell image={Haste} stat={classStats.haste} title="HASTE" rating={classStats.hasteRating} />
                                <StatCell image={Mastery} stat={classStats.mastery} title="MASTERY" rating={classStats.masteryRating} />
                                <StatCell image={Versatility} stat={classStats.versatilityDamageDoneBonus} title="VERSATILITY" rating={classStats.versatility} />
                            </tr>
                        </tbody>
                    </Table>
                </Well>
                );
    }
}

class StatCell extends Component{
    render () {
        var stat = this.props.stat;

        if (this.props.rating)
            stat = Math.round(stat) + "%";

        return (
                <td className="tooltip-stat" style={{borderTop: "transparent"}}>
                    <StatToolTip stat={this.props.stat} title={this.props.title} rating={this.props.rating} />
                    <img src={this.props.image} />
                    <div>
                        <div>{stat}</div>
                        <div>{this.props.title}</div>
                    </div>
                </td>
                );
    }
}

class StatToolTip extends Component{
    round = (num, precis) => {
        var factor = Math.pow(10, precis);
        var tempNumber = num * factor;
        var roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    }

    getRating = (rating) => {
        return (
                <div style={{display: "inline-flex", width: "auto"}}>
                    <div style={{ margin: "0 5px 0 10px", width: "auto", fontSize: "14px" }}>Total Rating</div>
                    <div style={{ margin: "auto 0", width: "auto", fontSize: "11px" }}>{rating}</div>
                </div>
               )
    }

    render () {
        var stat = this.props.stat;
        var title = this.props.title;

        var rating = "";
        if (this.props.rating) {
            rating = this.getRating(this.props.rating);
            stat = this.round(stat, 2) + "%";
        }

        return (
                <div className="tooltiptext-stat tooltip-stat-top">
                    <div style={{display: "inline-flex", width: "auto"}}>
                        <div style={{ margin: "5px 5px 5px 10px", width: "auto", fontSize: "16px" }}>{title}</div>
                        <div style={{ margin: "auto 0", width: "auto", fontSize: "11px" }}>{stat}</div>
                    </div>
                    {rating}
                </div>
                );
    }
}

export default Stats;
