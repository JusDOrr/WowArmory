import React, { Component } from 'react';
import { Well, PageHeader, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import * as BlizzardAPI from './../../data/BlizzardAPI.js';
import Character from './Character/Character.js';

import DefaultImage from './../../extra/FullChar.png'

import './armory.css';

class Armory extends Component{
    constructor(props) {
        super(props);

        this.state = {
            characterDetails: "",
        };
    }

    onSearchClick = () => {
        var realm = document.getElementById('formControlsRealm').value;
        var char = document.getElementById('formControlsChar').value;

        BlizzardAPI.GetCharacter(this.onload, this.onerror, realm, char);
    }

    onload = (data) => {
        this.setState({characterDetails: data});
    }

    onerror = (e) => {
        // Nothing with this yet
    }

    render() {
        var HeaderElement = React.createElement(PageHeader, { className: "pageHeader" }, "Armory");
        var DescElement = React.createElement("p", { className: "pageDescription" }, "This page consumes Blizzard's WOW Character APIs.");

        var BodyElement = "";
        if (this.state.characterDetails) {
            if (this.state.characterDetails.reason != undefined)
                BodyElement = React.createElement(ErrorLayout, { data: this.state.characterDetails.reason }, null);
            else
                BodyElement = React.createElement(Character, { data: this.state.characterDetails }, null);
        }
        else {
            BodyElement = (<div style={{textAlign: 'center', margin: '20px 0'}}><img src={DefaultImage} style={{opacity: ".75"}}/></div>);
        }

        return (
            <div>
              <Well className="pageWell" style={{minHeight: "calc(100vh - 112px)"}}>
                <div>
                  {HeaderElement}
                  {DescElement}
                  <Form inline className="armory-form">
                      <FormGroup controlId="formControlsRealm">
                          <ControlLabel>Realm:</ControlLabel>
                          <FormControl label="Realm" placeholder="Enter Realm Name..." style={{ marginLeft: "5px" }}/>
                      </FormGroup>
                      <FormGroup controlId="formControlsChar" style={{ marginLeft: "5px" }}>
                          <ControlLabel>Character:</ControlLabel>
                          <FormControl label="Character" placeholder="Enter Character Name..." style={{ marginLeft: "5px" }} />
                      </FormGroup>
                      <Button type="button" onClick={this.onSearchClick} style={{ marginLeft: "5px" }}>
                      Search
                      </Button>
                  </Form>
                  {BodyElement}
                </div>
              </Well>
          </div>
          );
    }
}

const ErrorLayout = () => {
    return (
    <div style={{marginTop: "5px"}}>
        <Well className="error-well">{this.props.data}</Well>
    </div>
    )
}

export default Armory;
