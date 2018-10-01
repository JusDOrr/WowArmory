import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './css/site.css';

class HeaderNavBar extends Component {
    render(){
      return (
        <Navbar className="navbarHeader" inverse>
            <Navbar.Header>
            <Navbar.Brand>
                <NavLink to="/">Realm Status</NavLink>
            </Navbar.Brand>
            </Navbar.Header>
            <Nav>
            <LinkContainer to="/armory">
                <NavItem eventKey={1}>Armory</NavItem>
            </LinkContainer>
            </Nav>
        </Navbar>
        );
    }
  }

export default HeaderNavBar;
