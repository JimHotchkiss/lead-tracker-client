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
    props.leadFormInput(leadData);
  };
  // Product Select
  const cameraSelect = (
    <>
      <option value='Camera'>Camera</option>
      <option value='Monitor'>Monitor</option>
      <option value='Digital Capture'>Digital Capture</option>
      <option value='Insufflator'>Insufflator</option>
    </>
  );
  const monitorSelect = (
    <>
      <option value='Monitor'>Monitor</option>
      <option value='Camera'>Camera</option>
      <option value='Digital Capture'>Digital Capture</option>
      <option value='Insufflator'>Insufflator</option>
    </>
  );
  const digitalCaptureSelect = (
    <>
      <option value='Digital Capture'>Digital Capture</option>
      <option value='Monitor'>Monitor</option>
      <option value='Camera'>Camera</option>
      <option value='Insufflator'>Insufflator</option>
    </>
  );
  const insufflatorSelect = (
    <>
      <option value='Insufflator'>Insufflator</option>
      <option value='Digital Capture'>Digital Capture</option>
      <option value='Monitor'>Monitor</option>
      <option value='Camera'>Camera</option>
    </>
  );

  // Urgency Select
  const lowSelect = (
    <>
      <option value='Low'>Low</option>
      <option value='Medium'>Medium</option>
      <option value='High'>High</option>
    </>
  );
  const mediumSelect = (
    <>
      <option value='Medium'>Medium</option>
      <option value='Low'>Low</option>
      <option value='High'>High</option>
    </>
  );
  const highSelect = (
    <>
      <option value='High'>High</option>
      <option value='Medium'>Medium</option>
      <option value='Low'>Low</option>
    </>
  );
  const newSelect = (
    <>
      <option value='New'>New</option>
      <option value='Open'>Open</option>
      <option value='Pending'>Pending</option>
      <option value='Closed'>Closed</option>
    </>
  );
  const openSelect = (
    <>
      <option value='Open'>Open</option>
      <option value='New'>New</option>
      <option value='Pending'>Pending</option>
      <option value='Closed'>Closed</option>
    </>
  );
  const pendingSelect = (
    <>
      <option value='Pending'>Pending</option>
      <option value='Open'>Open</option>
      <option value='New'>New</option>
      <option value='Closed'>Closed</option>
    </>
  );
  const closedSelect = (
    <>
      <option value='Closed'>Closed</option>
      <option value='Pending'>Pending</option>
      <option value='Open'>Open</option>
      <option value='New'>New</option>
    </>
  );

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
            {product === "Camera" ? cameraSelect : null}
            {product === "Monitor" ? monitorSelect : null}
            {product === "Digital Capture" ? digitalCaptureSelect : null}
            {product === "Insufflator" ? insufflatorSelect : null}
          </select>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Lead Description</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            value={description ? description : " "}
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
            {urgency === "Low" ? lowSelect : null}
            {urgency === "Medium" ? mediumSelect : null}
            {urgency === "High" ? highSelect : null}
          </select>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>Status</Form.Label>
          <select
            onChange={handleOnChange}
            className='form-control'
            name='status'>
            {status === "New" ? newSelect : null}
            {status === "Open" ? openSelect : null}
            {status === "Pending" ? pendingSelect : null}
            {status === "Closed" ? closedSelect : null}
          </select>
        </Form.Group>
        <div className='form-lead-contact-title'>
          <h3>Edit Contact Information</h3>
        </div>
        <Form.Group controlId='formGroupEmail'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={contact_name ? contact_name : " "}
            onChange={handleOnChange}
            name='contact_name'
            type='name'
            placeholder='Name'
          />
        </Form.Group>
        <Form.Group controlId='formGroupEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email ? email : " "}
            onChange={handleOnChange}
            name='email'
            type='email'
            placeholder='Email'
          />
        </Form.Group>
        <Form.Group controlId='formGroupPassword'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            value={phone_number ? phone_number : " "}
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
