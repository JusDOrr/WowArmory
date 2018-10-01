import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Armory from './components/Armory/Armory';
import Realms from './components/Realms/Realms';
import HeaderNavBar from './HeaderNavBar';
import Footer from './Footer';

import './App.css';

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div>
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

export default App;
