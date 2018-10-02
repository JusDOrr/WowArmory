import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

import './../Armory/armory.css';

class ArmoryNavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedKey: 1,
        };
    }

    getNavClass = (faction) => {
        return (faction === "Horde") ? "horde-navArmory" : "alli-navArmory";
    }

    getNavItemClass = (faction) => {
        return (faction === "Horde") ? "horde-nav-item" : "alli-nav-item";
    }

    onSelect = (e) => {
        this.setState({ selectedKey: e });
        this.props.selectCallback(e);
    }

    render () {
        var navClass = this.getNavClass(this.props.faction);
        var navItem = this.getNavItemClass(this.props.faction);
        
        return (
                <Nav className={navClass} bsStyle="pills" activeKey={this.state.selectedKey} onSelect={this.onSelect}>
                    <NavItem className={navItem} style={{marginLeft: "55px"}} eventKey={1}>CHARACTER</NavItem>
                    <NavItem className={navItem} eventKey={2}>ACHIEVEMENTS</NavItem>
                    <NavItem className={navItem} eventKey={3}>COLLECTIONS</NavItem>
                    <NavItem className={navItem} eventKey={4}>RAID PROGRESSION</NavItem>
                    <NavItem className={navItem} eventKey={5}>PVP</NavItem>
                    <NavItem className={navItem} eventKey={6}>REPUTATION</NavItem>
                </Nav>
                );
    }
}

export default ArmoryNavBar;
