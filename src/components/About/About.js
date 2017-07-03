import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './About.css'


export default class About extends Component {



  render() {
    return (
  <div className="container" id="toplevel">
    <div className="columns">
      <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-50x50">
                <img src="https://user-images.githubusercontent.com/955730/27772540-7d9b4d6a-5f19-11e7-956f-b9d4a5d9440b.jpg" alt="Image" id="mainp" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Brett Henderson</p>
                  <p className="subtitle is-6">@bretth18</p>
                </div>
              </div>

              <div className="content">
                <p id="booty">hey, that's me</p>
              </div>
            </div>
          </div>
        </div>
      <div className="column">
        <div className="box">
          <h1 className="title" id="about">about<h1 className="title">me</h1></h1>
          <p> Hi, I'm Brett. I'm a full time student at the University of San Francisco studying computer science. I spend my freetime taking photos, making music, and critiquing blockchain networks.
          </p>
        </div>
        <div className="box">
          <h1 className="title" >about<h1 className="title" id="about">this site</h1></h1>
          <p> this is an overly engineered portfolio that's running React behind the hood. If you're interested in the source code, it's available
            <a href="https://github.com/bretth18/portfolio"> here.</a>
          </p>
        </div>
      </div>
    </div>
  </div>
    );
  }

}
