import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Stuff.css';


export default class Stuff extends Component {

  static propTypes = {

  };

  render() {
    return (
      <div className="container">
          <section className="hero is-primary is-medium">
            <div className="hero-body">
              <div className="container has-text-centered">
                <h1 className="title">
                  My Projects
                </h1>
                <h2 className="subtitle">
                  stuff i make
                </h2>
              </div>
            </div>
        </section>


          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box">
                <p className="title">Web</p>
                <p>I'm a relatively talented webdev. This includes front/back-end work using a variety of frameworks. I specialize in React as a front end framework but am extremely versatile.</p>
              </div>
              <div className="tile is-child box">
                <p className="title">Mobile</p>
                <p>I've been writing mobile applications for 7 years now, beginning with Android and working my way to a multi-platform portfolio. Right now I am into using React-Native for my multi-platform applications, but am well versed in both Swift and Java.</p>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title">hello</p>
                <p>I have spent most of my academic career writing code in either C++ or Assembly (ARM, x86, MIPS) which has given me a diverse skill set for a wide range of development.</p>
                <p>For backend server development I'm well versed in libraries like Node.js and Flask. I've written multiple applications using classic stacks such as MEAN or AIO's like Meteor.</p>
                <section className="section">
                  <h3 className="title"> <a id="linktitle" href="https://github.com/bretth18">github portfolio</a></h3>
                </section>

              </div>
            </div>
          </div>
        </div>
    );
  }

}
