import React, { Component } from 'react';
import { Well, PageHeader, Table, Glyphicon } from 'react-bootstrap';

import * as BlizzardAPI from './../../data/BlizzardAPI.js';
import './realm.css';

class Realms extends Component{
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount () {
        BlizzardAPI.GetRealmStatus(this.onload, this.onerror);
    }

    onload = (data) => {
        this.setState({ data: data.realms });
    }

    onerror = (e) => {
        // Nothing with this yet
    }

    render () {
        var HeaderElement = React.createElement(PageHeader, { className: "pageHeader" }, "Realm Status");
        var DescElement = React.createElement("p", { className: "pageDescription"},
                                "This page consumes Blizzard's WOW Realm API.");

        return (
          <div>
            <Well className="pageWell">
                {HeaderElement}
                {DescElement}
                <RealmTable data={this.state.data} />
            </Well>
          </div>
      );
    }
}

class RealmTable extends Component{
    getHeader = () => {
        var header = React.createElement("tr", { style: { background: "#d6d6d6" } },
                        React.createElement("th", null, "Status"),
                        React.createElement("th", null, "Name"),
                        React.createElement("th", null, "Type"),
                        React.createElement("th", null, "Battlegroup"),
                        React.createElement("th", null, "Population"),
                        React.createElement("th", null, "Timezone"),
                        React.createElement("th", null, "Locale")
                     );

        return header;
    }

    render () {
        var Header = this.getHeader();
        var Realms = this.props.data.map(function (realm) {
            return (<RealmRow key={realm.slug} data={realm}></RealmRow>);
        });

        return (
        <Table className="pageTable" striped>
            <thead>{Header}</thead>
            <tbody>{Realms}</tbody>
        </Table>
        );
    }
}

class RealmRow extends Component{
    getStatus = (status, queue) => {
        var queue = this.getQueue(queue);

        var icon = "";
        if (status)
            icon = React.createElement(Glyphicon, { glyph: "arrow-up", style: { color: "green" } });
        else
            icon = React.createElement(Glyphicon, { glyph: "arrow-down", style: { color: "red" } });

        return React.createElement('td', null, icon, queue);
    }

    getQueue = (queue) => {
        var element = "";

        if (queue) {
            element = React.createElement("div", { className: "tooltip" },
                        React.createElement(Glyphicon, { glyph: "time", style: { margin: "0 0 0 5" } },
                            React.createElement("span", { className: "tooltiptext tooltip-top" }, "Login Queue")
                        )
                      );
        }

        return element;
    }

    getType = (type) => {
        var element = "(PvE)";

        if (type == 'pvp')
            element = "(PvP)";

        return React.createElement('td', null, element);
    }

    getPopulation = (population) => {
        var element = "New Players";

        if (population == "full")
            element = "Full";
        else if (population == "low")
            element = "Low";
        else if (population == "medium")
            element = "Medium";

        return React.createElement('td', null, element);
    }

    getLocale = (locale) => {
        var element = locale;

        if (element == 'en_US')
            element = "United States";
        else if (element == 'es_MX')
            element = "Mexico";
        else if (element == 'pt_BR')
            element = "Brazil";

        return React.createElement('td', null, element);
    }

    getTimezone = (timezone) => {
        var element = timezone;

        if (element == 'America/Chicago')
            element = "CDT";
        else if (element == 'America/Denver')
            element = "MDT";
        else if (element == 'America/Los_Angeles')
            element = "PDT";
        else if (element == 'America/New_York')
            element = "EDT";
        else if (element == 'America/Sao_Paulo')
            element = "BRT";
        else if (element == 'Australia/Melbourne')
            element = "AEDT";

        return React.createElement('td', null, element);
    }

    render () {
        var realm = this.props.data;

        // Build the columns
        var Name = React.createElement('td', null, realm.name);
        var Battlegroup = React.createElement('td', null, realm.battlegroup);
        var Status = this.getStatus(realm.status, realm.queue);       
        var Type = this.getType(realm.type);        
        var Population = this.getPopulation(realm.population);
        var Timezone = this.getTimezone(realm.timezone);
        var Locale = this.getLocale(realm.locale);

        return (
                <tr>
                    {Status}
                    {Name}
                    {Type}
                    {Battlegroup}
                    {Population}
                    {Timezone}
                    {Locale}
                </tr>
            );
    }
}

export default Realms;

//http://media.blizzard.com/wow/icons/{size}/{icon_name}.jpg Icon hosting location
//http://media.blizzard.com/wow/icons/36/inv_ability_mount_cockatricemount_white.jpg
