import React, {Component} from 'react';

//higher order component
export default function(ComposedComponent) {
  class Authentication extends Component {
    render(){
      return <ComposedComponent {...this.props}/>
    }
  }

  return Authentication;
}
