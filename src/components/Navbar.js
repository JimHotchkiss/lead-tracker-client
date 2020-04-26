import React from "react";
import "./navbar.css";
import { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { userLogOut } from "../actions/newUserSubmit";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
    };
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    this.setId();
  }

  setId = () => {
    if (this.props.currentUser) {
      console.log(this.props.currentUser);
    } else {
      console.log("fucking nothing");
    }
  };

  handleLogOut(event) {
    event.preventDefault();
    this.props.userLogOut();
  }

  render() {
    const logOut = () => {
      return (
        <div>
          <Link className='logout-link' onClick={this.handleLogOut} to='/login'>
            log out <span></span>
          </Link>
          <Link className='manage-leads-link' to='/manage_leads'>
            | manage leads
          </Link>
        </div>
      );
    };
    const welcome = () => {
      return (
        <Navbar.Brand className='welcome-span'>
          <span>
            Welcome{" "}
            <Link className='users-id' to='/users/:id'>
              <span className='name-color'>
                {this.props.currentUser.data.attributes.username}
              </span>
            </Link>
          </span>
        </Navbar.Brand>
      );
    };

    const notLoggedIn = <div>You're logged out</div>;
    return (
      <Navbar
        className='navbar'
        variant='light'
        expand='lg'
        bg='light'
        fixed='top'>
        <Container>
          <Navbar.Brand>Lead Tracker</Navbar.Brand>
          {this.props.currentUser ? welcome() : null}
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            {this.props.currentUser ? logOut() : notLoggedIn}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, { userLogOut })(NavBar);
