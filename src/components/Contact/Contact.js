import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './Contact.css';

export default class Contact extends Component {



  render() {
    return (
      <div className="container">
        <section className="hero is-primary is-medium" id="contact">
          <div className="hero-body" id="contact">
            <div className="container has-text-centered">
              <h1 className="title">
                Contact Me
              </h1>
              <h2 className="subtitle">
                <a className="icon is-large" id="mylilicon" href="mailto:bretth18@gmail.com">
                  <i className="fa fa-envelope"></i>
                </a>
                <a className="icon is-large" id="mylilicon" href="https://www.linkedin.com/in/bretth18/">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a className="icon is-large" id="mylilicon" href="https://github.com/bretth18">
                  <i className="fa fa-github"></i>
                </a>
                <a className="icon is-large" id="mylilicon"  href="https://instagram.com/bretth18">
                  <i className="fa fa-instagram"></i>
                </a>
                <a className="icon is-large" id="mylilicon" href="https://twitter.com/brett_h18">
                  <i  className="fa fa-twitter"></i>
                </a>
              </h2>
            </div>
          </div>
        </section>

      </div>
    );
  }

}
