import React from "react";
import { Component } from "react";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";

class LeadsTable extends Component {
  constructor() {
    super();
    this.state = {
      holding: null,
    };
  }

  render() {
    this.props.currentUser.included.map(function (item, index) {
      if (item.type === "lead") {
        console.log(index);
      }
    });
    console.log(this.props.currentUser);
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Contact</th>
            <th>Product</th>
            <th>Urgency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href='#!'>1</a>
            </td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan='2'>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan='2'>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan='2'>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

const stateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(stateToProps)(LeadsTable);
