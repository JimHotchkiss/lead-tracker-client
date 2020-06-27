import React from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { leadFormInput } from "../../redux/actions/leadSyncActions";

import "./editLeadFormComponent.css";
const EditLeadFormComponent = (props) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log("name:", name, "value:", value);
    const leadData = {
      ...props.leadFormData,
      [name]: value,
    };
    console.log(leadData);
    props.leadFormInput(leadData);
  };
  const {
    product,
    description,
    urgency,
    status,
    contact_name,
    email,
    phone_number,
  } = props.leadFormData;
  return (
    <div className='edit-lead-form-component-div'>
      <Form onSubmit={props.handleSubmit}>
        <div className='edit-lead-form-title'>
          <h3>Edit Lead Information</h3>
        </div>
        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>Product</Form.Label>
          <select
            onChange={handleOnChange}
            className='form-control'
            name='product'>
            <option value='Camera'>Camera</option>
            <option value='Monitor'>Monitor</option>
            <option value='Digital Capture'>Digital Capture</option>
            <option value='Insufflator'>Insufflator</option>
          </select>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Lead Description</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            value={description}
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
            {urgency === "Low" ? <option value='Low'>Low</option> : null}
            {urgency === "Medium" ? (
              <option value='Medium'>Medium</option>
            ) : null}
            {urgency === "High" ? <option value='High'>High</option> : null}
            {urgency === "Low" ? null : <option value='Low'>Low</option>}
            {urgency === "Medium" ? null : (
              <option value='Medium'>Medium</option>
            )}
            {urgency === "High" ? null : <option value='High'>High</option>}
          </select>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>Status</Form.Label>
          <select
            onChange={handleOnChange}
            className='form-control'
            name='status'>
            {status === "New" ? <option value='New'>New</option> : null}
            {status === "Open" ? <option value='Open'>Open</option> : null}
            {status === "Pending" ? (
              <option value='Pending'>Pending</option>
            ) : null}
            {status === "Closed" ? (
              <option value='Closed'>Closed</option>
            ) : null}
            {status === "New" ? null : <option value='New'>New</option>}
            {status === "Open" ? null : <option value='Open'>Open</option>}
            {status === "Pending" ? null : (
              <option value='Pending'>Pending</option>
            )}
            {status === "Closed" ? null : (
              <option value='Closed'>Closed</option>
            )}
          </select>
        </Form.Group>
        <div className='form-lead-contact-title'>
          <h3>Contact Information</h3>
        </div>
        <Form.Group controlId='formGroupEmail'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={contact_name}
            onChange={handleOnChange}
            name='contact_name'
            type='name'
            placeholder='Name'
          />
        </Form.Group>
        <Form.Group controlId='formGroupEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={handleOnChange}
            name='email'
            type='email'
            placeholder='Email'
          />
        </Form.Group>
        <Form.Group controlId='formGroupPassword'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            value={phone_number}
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
    leadFormData: state.leadInput,
  };
};

export default connect(mapStateToProps, { leadFormInput })(
  EditLeadFormComponent
);
