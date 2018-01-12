import React, {Component} from 'react';
import {connect} from 'react-redux';
//higher order component
export default function(ComposedComponent) {
  class Authentication extends Component {
    //ContextTypes are 'data' the whole application has access to
    //this is how we access the Router component
    //we have to define it, since Context can be easily abused
    //instead of using props
    //static = class Level property, not instance class
    //now we have access to router by doing this below
    static contextTypes = {
      router: React.PropTypes.object
    }

    //called before about to hit the DOM
    componentWillMount(){
      if (!this.props.authenticated){
        this.context.router.push('/')
      }
    }

    //called whenever about to have a new set of props or rerendered
    //nextProps = next set of properties it will be handled with
    componentWillUpdate(nextProps){
    //if the next set of props still not authenticated/not auth'd any longer
    //kick them out --- great to keep checking if they're still auth'd
      if(!nextProps.authenticated){
        this.context.router.push('/')
      }
    }

    render(){
      //to make sure that any future props typed in, gets passed into here.
      return <ComposedComponent {...this.props}/>
    }
  }

  //makes the State into Props, now available through this.props
  function mapStateToProps(state){
    return {authenticated: state.autheticated}
  }

  return connect(mapStateToProps)(Authentication);
}
