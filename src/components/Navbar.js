import React from "react";
import "./navbar.css";
import { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { userLogOut } from "../actions/newUserSubmit";
import { BrowserRouter as Router, Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(event) {
    event.preventDefault();
    this.props.userLogOut();
  }
  render() {
    console.log(this.props);
    const logOut = () => {
      return (
        <Button onClick={this.handleLogOut} variant='link'>
          {" "}
          log out
        </Button>
      );
    };

    const welcome = () => {
      return (
        <Navbar.Brand className='welcome-span'>
          <span className='welcome-color'>
            Welcome {this.props.currentUser.username}
          </span>
        </Navbar.Brand>
      );
    };

    const notLoggedIn = () => {
      return <div>You're logged out</div>;
    };

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
            {this.props.currentUser ? logOut() : notLoggedIn()}
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
