import React from "react";
import { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const signedIn = () => {
      return (
        <Navbar.Text>
          <span className="name-span"> {this.props.currentUser.username} </span>
          is logged in
        </Navbar.Text>
      );
    };

    const notLoggedIn = () => {
      return <Navbar.Text>Your shit aint logged in</Navbar.Text>;
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
export default connect(mapStateToProps)(NavBar);
