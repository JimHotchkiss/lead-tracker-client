import React from "react";
import { Component } from "react";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class LeadsTable extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("Inside leads table CDM:", this.props.currentUser);
  }
  render() {
    const tableOutput = this.props.currentUser.included.map((item, index) => {
      if (item.type === "lead") {
        // console.log(item.attributes);
        return (
          <tr key={Math.random()}>
            <td>
              <a href='#'>{item.attributes.contact_email}</a>
            </td>
            <td>{item.attributes.urgency}</td>

            <td>
              <Link
                className='show-lead-link'
                to={`/leads/${item.attributes.id}`}>
                {item.attributes.product}
              </Link>
            </td>
            <td>{item.attributes.status}</td>
          </tr>
        );
      }
    });

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Contact</th>
            <th>Urgency</th>
            <th>Product</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{tableOutput}</tbody>
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
