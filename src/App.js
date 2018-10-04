import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Well } from 'react-bootstrap';

import HeaderNavBar from './components/NavBars/HeaderNavBar';
import Armory from './components/Armory/Armory';
import Realms from './components/Realms/Realms';

import './App.css';
import './site.css';

class App extends Component{
  render() {
    return (
      <BrowserRouter basename="/WowArmory">
        <div style={{minHeight: "calc(100vh - 112px)"}}>
          <HeaderNavBar />
          <NavBarRouter />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const NavBarRouter = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Realms}/>
        <Route path='/armory' component={Armory}/>
    </Switch>
  </main>
);

const Footer = () => (
  <Well className="footer">
    <div className="footer-copyright">
      Website: Copyright (c) 2018 Justin Orr -||- Artwork: All property of Blizzard
    </div>
  </Well>
);

export default App;
