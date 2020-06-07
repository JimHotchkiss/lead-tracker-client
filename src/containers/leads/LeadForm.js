import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { leadFormInput } from "../../redux/actions/leadSyncActions";
import { leadSubmit } from "../../redux/actions/leadAsyncActions";
import "./leadForm.css";

class LeadForm extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    const leadData = { ...this.props.leadFormData, [name]: value };
    this.props.leadFormInput(leadData);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const leadData = this.props.leadFormData;
    this.props.leadSubmit(leadData, this.props);
  };
  render() {
    const {
      lead_description,
      contact_name,
      email,
      phone_number,
    } = this.props.leadFormInput;
    return (
      <div className='lead-form-div'>
        <Form onSubmit={this.handleSubmit}>
          <div className='lead-form-title'>
            <h3>Lead Information</h3>
          </div>
          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Product</Form.Label>

            <select
              className='form-control'
              name='product'
              onChange={this.handleOnChange}>
              <option value=''>Select</option>
              <option value='camera'>Camera</option>
              <option value='monitor'>Monitor</option>
              <option value='digital_capture'>Digital Capture</option>
              <option value='insufflator'>Insufflator</option>
            </select>
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Lead Description</Form.Label>
            <Form.Control
              onChange={this.handleOnChange}
              value={lead_description}
              name='lead_description'
              as='textarea'
              rows='3'
            />
          </Form.Group>

          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Urgency</Form.Label>
            <select
              className='form-control'
              onChange={this.handleOnChange}
              name='urgency'>
              <option value=''>Select</option>
              <option value='low'>Low</option>
              <option value='medium'>Medium</option>
              <option value='high'>High</option>
            </select>
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Status</Form.Label>
            <select
              className='form-control'
              onChange={this.handleOnChange}
              name='status'>
              <option value=''>Select</option>
              <option value='new'>New</option>
              <option value='open'>Open</option>
              <option value='pending'>Pending</option>
              <option value='closed'>Closed</option>
            </select>
          </Form.Group>
          <div className='form-lead-contact-title'>
            <h3>Contact Information</h3>
          </div>
          <Form.Group controlId='formGroupEmail'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={this.handleOnChange}
              value={contact_name}
              name='contact_name'
              type='name'
              placeholder='Enter name'
            />
          </Form.Group>
          <Form.Group controlId='formGroupEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={this.handleOnChange}
              value={email}
              name='email'
              type='email'
              placeholder='Enter email'
            />
          </Form.Group>
          <Form.Group controlId='formGroupPassword'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              onChange={this.handleOnChange}
              value={phone_number}
              name='phone_number'
              type='phone_number'
              placeholder='Enter phone number'
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    leadFormData: state.leadInput,
  };
};

export default connect(mapStateToProps, { leadFormInput, leadSubmit })(
  LeadForm
);
