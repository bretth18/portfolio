import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './FooterBar.css';



export default class FooterBar extends Component {


  render() {
    return (
      <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <a className="icon" id="iconman" href="https://github.com/bretth18">
                  <i className="fa fa-github"></i>
                </a>
                <a className="icon" id="iconman" href="https://instagram.com/bretth18">
                  <i className="fa fa-instagram"></i>
                </a>
                <a className="icon" id="iconman" href="https://twitter.com/brett_h18">
                  <i id="iconman" className="fa fa-twitter"></i>
                </a>
              </p>
              <p> copyright 2017; Brett Henderson</p>
            </div>
          </div>
      </footer>
    );
  }

}
