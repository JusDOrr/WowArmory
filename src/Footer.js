import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

import './css/site.css';

class Footer extends Component{
    render() {
      return (
        <Well className="footer">
          <div className="footer-copyright">
          Website: Copyright (c) 2018 Justin Orr -||- Artwork: All property of Blizzard
          </div>
        </Well>
      );
    }
  }

export default Footer;
