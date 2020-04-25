import React from "react";
import { Component } from "react";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";

class LeadsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      contacts: [],
      products: [],
      urgencies: 0,
    };
  }

  componentDidMount() {
    this.setProducts();
    this.setContacts();
    // this.setUrgenies();
  }

  setProducts = () => {
    this.props.currentUser.included.map((item) => {
      for (const property in item.attributes) {
        if (property === "product") {
          this.setState((state) => {
            return { products: [...state.products, item.attributes[property]] };
          });
        }
      }
    });
  };

  setContacts = () => {
    this.props.currentUser.included.map((item) => {
      for (const property in item.attributes) {
        if (property === "email") {
          this.setState((state) => {
            return { contacts: [...state.contacts, item.attributes[property]] };
          });
        }
      }
    });
  };

  render() {
    console.log(this.props.currentUser);

    const products = this.state.products.map((item) => {
      return <td key={Math.random()}>{item}</td>;
    });

    const contacts = this.state.contacts.map((contact) => {
      return <td key={Math.random()}>{contact}</td>;
    });
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
        <tbody key={Math.random()}>
          <tr>{contacts}</tr>
          <tr>
            {products}
            {/* <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td> */}
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
