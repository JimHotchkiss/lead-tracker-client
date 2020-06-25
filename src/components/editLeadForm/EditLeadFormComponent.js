import React from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import "./editLeadFormComponent.css";

const EditLeadFormComponent = ({ lead, contact, handleOnChange }) => {
  console.log(lead.product);
  return (
    <div className='edit-lead-form-component-div'>
      <Form>
        <div className='edit-lead-form-title'>
          <h3>Edit Lead Information</h3>
        </div>
        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>Product</Form.Label>
          <select
            onChange={handleOnChange}
            className='form-control'
            name='product'>
            {lead.product === "Camera" ? (
              <option value='Camera'>Camera</option>
            ) : null}
            {lead.product === "Monitor" ? (
              <option value='Monitor'>Monitor</option>
            ) : null}
            {lead.product === "Digital Capture" ? (
              <option value='Digital Capture'>Digital Capture</option>
            ) : null}
            {lead.product === "Insufflator" ? (
              <option value='Digital Capture'>Insufflator</option>
            ) : null}
          </select>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Lead Description</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            value={lead.description}
            name='description'
            as='textarea'
            rows='3'
          />
        </Form.Group>

        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>Urgency</Form.Label>

          <select
            onChange={handleOnChange}
            className='form-control'
            name='urgency'>
            {lead.urgency === "Low" ? <option value='Low'>Low</option> : null}
            {lead.urgency === "Medium" ? (
              <option value='Medium'>Medium</option>
            ) : null}
            {lead.urgency === "High" ? (
              <option value='High'>High</option>
            ) : null}
          </select>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>Status</Form.Label>
          <select
            onChange={handleOnChange}
            className='form-control'
            name='status'>
            {lead.status === "New" ? <option value='New'>New</option> : null}
            {lead.status === "Open" ? <option value='Open'>Open</option> : null}
            {lead.status === "Pending" ? (
              <option value='Pending'>Pending</option>
            ) : null}
            {lead.status === "Closed" ? (
              <option value='Closed'>Closed</option>
            ) : null}

            <option value='New'>New</option>
            <option value='Open'>Open</option>
            <option value='Pending'>Pending</option>
            <option value='Closed'>Closed</option>
          </select>
        </Form.Group>
        <div className='form-lead-contact-title'>
          <h3>Contact Information</h3>
        </div>
        <Form.Group controlId='formGroupEmail'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={contact.contact_name}
            onChange={handleOnChange}
            name='contact_name'
            type='name'
            placeholder='Name'
          />
        </Form.Group>
        <Form.Group controlId='formGroupEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={contact.email}
            onChange={handleOnChange}
            name='email'
            type='email'
            placeholder='Email'
          />
        </Form.Group>
        <Form.Group controlId='formGroupPassword'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            value={contact.phone_number}
            onChange={handleOnChange}
            name='phone_number'
            type='phone_number'
            placeholder='Phone'
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Edit Lead
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showLead: state.showLead,
  };
};

export default connect(mapStateToProps)(EditLeadFormComponent);
