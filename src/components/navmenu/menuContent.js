import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './menuContent.css';
import Emoji from '../emoji';

class MenuContent extends Component {
  constructor(props) {
    super(props)

    this.items = []
    for (let i=1; i<=5; i++) {
      this.items.push(i)
    }
  }

  render() {
    return (
        <div className="menu">
          <div className="menu-item">
            <Link
                to="/"
                onClick={this.props.closeCallback}>
              Home
            </Link>

            <Link
                to="/aboutme"
                onClick={this.props.closeCallback}>
              About
            </Link>

            <Link
                to="/projects"
                onClick={this.props.closeCallback}>
              Projects
            </Link>

            <Link
                to="/contact"
                onClick={this.props.closeCallback}>
              Contact
            </Link>

          </div>

          <p className="hint">
            Powered by React. <Emoji symbol="⚡" label="power"/><br/><br/>
            Made with <Emoji symbol="💜" label="love"/> by James Pan.
          </p>
        </div>
    )
  }
}

export default MenuContent
