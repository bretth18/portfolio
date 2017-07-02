import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import './NavigationBar.css';

import { NavToggle, NavRight, NavItem } from 'bloomer';


export default class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.showToggleNav = this.showToggleNav.bind(this);
    this.state = {
      isActive:false
    };
  }

  showToggleNav() {
    if (this.state.isActive) {
      this.setState({ isActive: false  });

    } else {
      this.setState({ isActive: true });
    }
  }

  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <h1 className="title" id="navtitle"> bretth18 </h1>
          </div>

          <NavToggle isActive={this.state.isActive} onClick={this.showToggleNav} />

          {/* <span id="nav-toggle" className="nav-toggle" isActive={this.state.isActive} onClick={this.showToggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </span> */}

          {/* <div id="nav-menu" className="nav-right nav-menu"> */}
          <NavRight isMenu isActive={this.state.isActive}>
                <a className="nav-item" id="navtitle"><IndexLink to="/" activeClassName="active" id="navtitle">home</IndexLink></a>
                <a className="nav-item" id="navtitle"><Link to="/stuff" activeClassName="active" id="navtitle">stuff</Link></a>
                <a className="nav-item" id="navtitle"><Link to="/about" activeClassName="active" id="navtitle">about</Link></a>
                <a className="nav-item" id="navtitle"><Link to="/contact" activeClassName="active" id="navtitle">contact</Link></a>
          </NavRight>
          {/* </div> */}
        </div>
      </nav>
    );
  }

}
