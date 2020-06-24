import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { populateEditForm } from "../../redux/actions/populateEditAction";
import "./editLeadFormComponent.css";

const EditLeadFormComponent = (props) => {
  useEffect(() => {
    console.log(props.lead.description);
    if (props.lead && props.lead.description) {
      const editFormData = props.lead.description;
      props.populateEditForm(editFormData);
    }
  });
  return (
    <div className='edit-lead-form-component-div'>
      <Form>
        <div className='edit-lead-form-title'>
          <h3>Edit Lead Information</h3>
        </div>
        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>Product</Form.Label>
          <select
            onChange={props.handleOnChange}
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
            onChange={props.handleOnChange}
            value={props.description}
            name='description'
            as='textarea'
            rows='3'
          />
        </Form.Group>

        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>Urgency</Form.Label>

          <select
            onChange={props.handleOnChange}
            className='form-control'
            name='urgency'>
            <option value='Low'>Low</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
          </select>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>Status</Form.Label>
          <select
            onChange={props.handleOnChange}
            className='form-control'
            name='status'>
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
            //   value={contact_name}
            onChange={props.handleOnChange}
            name='contact_name'
            type='name'
            placeholder='Name'
          />
        </Form.Group>
        <Form.Group controlId='formGroupEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            //   value={email}
            onChange={props.handleOnChange}
            name='email'
            type='email'
            placeholder='Email'
          />
        </Form.Group>
        <Form.Group controlId='formGroupPassword'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            //   value={phone_number}
            onChange={props.handleOnChange}
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

export default connect(mapStateToProps, { populateEditForm })(
  EditLeadFormComponent
);
