import React from "react";
import { Component } from "react";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showLeadAction } from "../actions/showLeadAction";

class LeadsTable extends Component {
  constructor() {
    super();
    this.showLead = this.showLead.bind(this);
  }

  showLead(event) {
    // event.preventDefault();
    // this.props.showLeadAction();
  }
  render() {
    const tableOutput = this.props.currentUser.included.map((item, index) => {
      if (item.type === "lead") {
        // console.log(item.attributes);
        return (
          <tr key={Math.random()}>
            <td>
              <a href='#!'>{item.attributes.contact_email}</a>
            </td>
            <td>{item.attributes.urgency}</td>

            <td>
              <Link
                id={item.attributes.id}
                className='show-lead-link'
                onClick={this.showLead}
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

export default connect(stateToProps, { showLeadAction })(LeadsTable);
