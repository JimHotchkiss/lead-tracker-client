import React from "react";
import { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { userLogOut } from "../actions/newUserSubmit";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(event) {
    console.log("handl logout");
    event.preventDefault();
    this.props.userLogOut();
  }
  render() {
    const signedIn = () => {
      return (
        <Button onClick={this.handleLogOut} variant="link">
          {this.props.currentUser.username} log out?
        </Button>
      );
    };

    const notLoggedIn = () => {
      return <div>Login fix</div>;
    };

    return (
      <Navbar
        className="navbar"
        variant="light"
        expand="lg"
        bg="light"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/users/:id">Lead Tracker</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {this.props.currentUser ? signedIn() : notLoggedIn()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};
export default connect(mapStateToProps, { userLogOut })(NavBar);
