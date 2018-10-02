import React, { Component } from 'react';
import { Well, PanelGroup, Panel } from 'react-bootstrap';

import * as BlizzardAPI from './../../../data/BlizzardAPI.js';

import './talent.css';

class Talents extends Component{
    constructor(props) {
        super(props);

        this.state = {
            activeKey: 1,
        };
    }

    handleSelect = (activeKey) => {
        this.setState({ activeKey });
    }

    getTalentClass = (faction) => {
        var className = "alli-talentcontrolPanel";

        if (faction === "Horde")
            className = "horde-talentcontrolPanel";

        return className;
    }

    getTalentDescClass = (faction) => {
        var className = "alli-talentControlDesc";

        if (faction === "Horde")
            className = "horde-talentControlDesc";

        return className;
    }

    render () {
        var talentsData = this.props.data;
        var ControlPanelClass = this.getTalentClass(this.props.faction);
        var ControlPanelDescClass = this.getTalentDescClass(this.props.faction);

        var talents = "";
        if (talentsData) {
            var eventKey = 1;
            talents = talentsData.map(function (talent) {
                if (talent.spec) {
                    var icon = BlizzardAPI.GetIcon(talent.spec.icon);

                    // (No longer) Sorting by the tier value first, then mapping spells
                    var spells = talent.talents
                            .sort(function (a, b) { return (a.tier > b.tier) ? 1 : ((b.tier > a.tier) ? -1 : 0); })
                            .map(function (spell) {
                                var uniqueKey = "talentSpell-" + spell.spell.name;
                                return React.createElement(TalentSpell, { id: uniqueKey, key: uniqueKey }, spell.spell, spell.tier);
                            });

                    var uniqueKey = "ctcPanel-" + talent.spec.name;
                    return (<Panel id={uniqueKey} key={uniqueKey} eventKey={eventKey++}>
                                <Panel.Heading className="talentControlHeader">
                                    <Panel.Title toggle>
                                        <img src={icon} />
                                        <label>{talent.spec.name}</label>
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body className={ControlPanelClass} collapsible>
                                    <Well className={ControlPanelDescClass}>{talent.spec.description}</Well>
                                    <div className="talentSpellsContainer">
                                        {spells}
                                    </div>
                                </Panel.Body>
                            </Panel>);
                }
            });
        }   

        return (
                <div className="talentControl">
                    <div className="talentLabel">Talents</div>
                    <PanelGroup accordion id={'TalentPanelGroup'} activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                        {talents}
                    </PanelGroup>
                </div>
                );
    }
}

class TalentSpell extends Component{
    getLevel = (tierValue) => {
        var level = 15 * (tierValue + 1);

        if (level > 90) { level = 100; }

        return level;
    }

    render () {
        var spell = this.props.children[0];
        var tier = this.props.children[1];

        var icon = BlizzardAPI.GetIcon(spell.icon);
        var lvl = this.getLevel(tier);

        return (
                <div className="talentSpellControl">
                    <div className="talentSpellControlLvl">{lvl}</div>
                    <div className="tooltip-talent">
                        <TalentToolTip spell={spell} icon={icon} />
                        <img src={icon} />
                    </div>
                    <div className="talentSpellControlName">{spell.name}</div>
                    </div>
                );
    }
}

class TalentToolTip extends Component{
    render () {
        var name = this.props.spell.name;
        var castTime = this.props.spell.castTime;
        var desc = this.props.spell.description;

        return (
                <div className="tooltiptext-talent tooltip-talent-top">
                    <div style={{ marginBottom: "5px", display: "flex" }}>
                        <img style={{ margin: "0 5px", width: "35px", height: "35px" }} src={this.props.icon} />
                        <div style={{ margin: "auto 20px" }}>{name}</div>
                    </div>
                    <div style={{ margin: "10px" }}>{castTime}</div>
                    <div style={{ margin: "10px" }}>{desc}</div>
                </div>
                );
    }
}

export default Talents;
