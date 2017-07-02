import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './About.css'


export default class About extends Component {

  static propTypes = {

  };

  render() {
    return (
  <div className="container" id="toplevel">
    <div className="columns">
      <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-50x50">
                <img src="https://user-images.githubusercontent.com/955730/27767950-f101c472-5ebb-11e7-943e-2dcb0d13ab56.jpg" alt="Image" id="mainpic" />
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
                <a>links</a>
              </div>
            </div>
          </div>
        </div>
      <div className="column">
        <div className="box">
          <h1>poop</h1>
        </div>
      </div>
    </div>
  </div>
    );
  }

}
