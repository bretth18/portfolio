import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'bloomer';
import * as firebase from 'firebase';

import './Home.css';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.countRef = firebase.database().ref('count');
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    // listen for firebase updates
    // this.listenForUpdates(this.countRef);
    this.countRef.on('value', (snapshot) => {
      let newCount = snapshot.val();
      console.log(newCount);
      this.setState({
        count: newCount
      });
    });
  }

  // listener to grab firebase data and update state
  // listenForUpdates(countRef) {
  //   countRef.on('value', (dataSnapshot) => {
  //     var localCount = 0;
  //     dataSnapshot.forEach((child) => {
  //       localCount = child.val();
  //     });
  //     this.setState({
  //       count: localCount
  //     });
  //   });
  // }

  // add to the current count
  addCount() {
    this.countRef.transaction(function(count) {
      return (count || 0) + 1;
    });
  }
  render() {
    return (
      <div className="container" >
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">
                hello
              </h1>
              <h2 className="subtitle has-text-centered">
                how ya doin
              </h2>
              <div className="has-text-centered" >
                <Button isOutlined isColor='#EA526F' onClick={this.addCount.bind(this)}>doin well </Button>
                {/* <a class="button has-text-centered is-outlined" id="doinwell" onClick={console.log('poop')}>doin well</a> */}
                <p>{this.state.count} people are doing well </p>
              </div>

            </div>

          </div>
      </section>
    </div>
    );
  }

}
