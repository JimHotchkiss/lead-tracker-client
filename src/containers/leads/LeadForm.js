import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "./leadForm.css";

class LeadForm extends Component {
  render() {
    return (
      <div className='lead-form-div'>
        <Form>
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
            <Form.Control as='textarea' rows='3' />
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
            <Form.Control type='email' placeholder='Enter name' />
          </Form.Group>
          <Form.Group controlId='formGroupEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>
          <Form.Group controlId='formGroupPassword'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type='password' placeholder='Enter phone number' />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default LeadForm;
