import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { leadFormInput } from "../../redux/actions/leadSyncActions";
import "./leadForm.css";

class LeadForm extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    const leadFormData = { ...this.props.leadFormData, [name]: value };
    console.log(leadFormData);
    this.props.leadFormInput(leadFormData);
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    const {
      lead_description,
      name,
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
            <Form.Control as='select'>
              <option>Camera</option>
              <option>Monitor</option>
              <option>Digital Capture</option>
              <option>Insufflator</option>
            </Form.Control>
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
            <Form.Control as='select'>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Status</Form.Label>
            <Form.Control as='select'>
              <option>New</option>
              <option>Open</option>
              <option>Pending</option>
              <option>Closed</option>
            </Form.Control>
          </Form.Group>
          <div className='form-lead-contact-title'>
            <h3>Contact Information</h3>
          </div>
          <Form.Group controlId='formGroupEmail'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={this.handleOnChange}
              value={name}
              name='name'
              type='text'
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
    leadFormData: state.leadFormInput,
  };
};

export default connect(mapStateToProps, { leadFormInput })(LeadForm);
