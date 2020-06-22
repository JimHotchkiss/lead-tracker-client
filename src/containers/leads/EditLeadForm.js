import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
// import { leadFormInput } from "../../redux/actions/leadSyncActions";
// import { leadSubmit } from "../../redux/actions/leadAsyncActions";
import "./editLeadForm.css";

class EditLeadForm extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.handleOnChange = this.handleOnChange.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //   }
  //   handleOnChange = (e) => {
  //     const { name, value } = e.target;
  //     const leadData = {
  //       ...this.props.leadFormData,
  //       [name]: value,
  //     };

  //     this.props.leadFormInput(leadData);
  //   };

  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     const leadData = this.props.leadFormData;
  //     this.props.leadSubmit(leadData, this.props);
  //   };
  render() {
    console.log(this.props.name);

    // added = {} for 'undefined'
    // const {
    //   description,
    //   contact_name,
    //   email,
    //   phone_number,
    //   contact_attributes: { contact_name } = {},
    //   contact_attributes: { email } = {},
    //   contact_attributes: { phone_number } = {},
    // } = this.props.leadFormInput;
    return (
      <div className='edit-lead-form-div'>
        <Form>
          <div className='edit-lead-form-title'>
            <h3>Edit Lead Information</h3>
          </div>
          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Product</Form.Label>

            <select className='form-control' name='product'>
              <option value={this.props.showLead.product}>
                {this.props.showLead.product}
              </option>
              {this.props.showLead.product === "Camera" ? null : (
                <option value='Camera'>Camera</option>
              )}
              {this.props.showLead.product === "Monitor" ? null : (
                <option value='Monitor'>Monitor</option>
              )}
              {this.props.showLead.product === "Digital Capture" ? null : (
                <option value='Digital Capture'>Digital Capture</option>
              )}
              {this.props.showLead.product === "Insufflator" ? null : (
                <option value='Insufflator'>Insufflator</option>
              )}

              {/* <option value='Camera'>Camera</option>
              <option value='Monitor'>Monitor</option>
              <option value='Digital Capture'>Digital Capture</option>
              <option value='Insufflator'>Insufflator</option> */}
            </select>
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Lead Description</Form.Label>
            <Form.Control
              value={this.props.showLead.description}
              name='description'
              as='textarea'
              rows='3'
            />
          </Form.Group>

          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Urgency</Form.Label>
            <select className='form-control' name='urgency'>
              <option value={this.props.showLead.urgency}>
                {this.props.showLead.urgency}
              </option>
              {this.props.showLead.urgency === "Low" ? null : (
                <option value='Low'>Low</option>
              )}
              {this.props.showLead.urgency === "Medium" ? null : (
                <option value='Medium'>Medium</option>
              )}
              {this.props.showLead.urgency === "High" ? null : (
                <option value='High'>High</option>
              )}
              {/* <option value='Low'>Low</option>
              <option value='Medium'>Medium</option>
              <option value='High'>High</option> */}
            </select>
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Status</Form.Label>
            <select className='form-control' name='status'>
              <option value={this.props.showLead.status}>
                {this.props.showLead.status}
              </option>
              {this.props.showLead.status === "New" ? null : (
                <option value='New'>New</option>
              )}
              {this.props.showLead.status === "Open" ? null : (
                <option value='Open'>Open</option>
              )}
              {this.props.showLead.status === "Pending" ? null : (
                <option value='Pending'>Pending</option>
              )}
              {this.props.showLead.status === "Closed" ? null : (
                <option value='Closed'>Closed</option>
              )}
              {/* <option value='New'>New</option>
              <option value='Open'>Open</option>
              <option value='Pending'>Pending</option>
              <option value='Closed'>Closed</option> */}
            </select>
          </Form.Group>
          <div className='form-lead-contact-title'>
            <h3>Contact Information</h3>
          </div>
          <Form.Group controlId='formGroupEmail'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              //   value={contact_name}
              name='contact_name'
              type='name'
              placeholder={this.props.name}
            />
          </Form.Group>
          <Form.Group controlId='formGroupEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              //   value={email}
              name='email'
              type='email'
              placeholder={this.props.email}
            />
          </Form.Group>
          <Form.Group controlId='formGroupPassword'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              //   value={phone_number}
              name='phone_number'
              type='phone_number'
              placeholder={this.props.phone}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Edit Lead
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let contact = {};
  if (state.showLead.contact ? (contact = state.showLead.contact) : null)
    console.log(state.showLead.contact);
  return {
    leadFormData: state.leadInput,
    showLead: state.showLead,
    name: contact.contact_name,
    email: contact.email,
    phone: contact.phone_number,
  };
};

export default connect(mapStateToProps)(EditLeadForm);
