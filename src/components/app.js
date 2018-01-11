import React, { Component } from 'react';
import Header from './header';

//test 1
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        //a gotcha in React Router, have to tell the App
        //if it ever gets passed any children, to show them
        {this.props.children}
      </div>
    );
  }
}
