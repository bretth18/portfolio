import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import FooterBar from '../components/FooterBar/FooterBar';

import {init as firebaseInit} from '../api/firebase'


class App extends Component {
  constructor(props){
    super(props);
    firebaseInit();
  }

  render() {
    return (
      <div>
        <NavigationBar />
        {this.props.children}
        <FooterBar />
      </div>
    );
  }
}

export default App;
