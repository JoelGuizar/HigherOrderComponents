import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  authButton(){
    if(this.props.authenticated){
      //passing an action creator from *, and from actions
      return <button onClick={()=>{this.props.authenticate(false)}}> Sign Out</button>
    }
    return <button onClick{()=>{this.props.authenticate(true)}}> Sign In</button>
  }

  render(){
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/"> Home </Link>
          </li>
          <li className="nav-item">
            <Link to="/resources"> Resources </Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
            <Link to="/"> </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

//coming from combined reducers call, check what the part of the state is called in there
//this refers to which part of the container/state you need in the component
//you're 'connecting' to it
function mapStateToProps(state){
  return { authenticated: state.authenticated}
}

export default connect(mapStateToProps, actions)(Header);
