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
              <option value=''>Select</option>
              <option value='Camera'>Camera</option>
              <option value='Monitor'>Monitor</option>
              <option value='Digital Capture'>Digital Capture</option>
              <option value='Insufflator'>Insufflator</option>
            </select>
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Lead Description</Form.Label>
            <Form.Control
              //   value={description}
              name='description'
              as='textarea'
              rows='3'
            />
          </Form.Group>

          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Urgency</Form.Label>
            <select className='form-control' name='urgency'>
              <option value=''>Select</option>
              <option value='Low'>Low</option>
              <option value='Medium'>Medium</option>
              <option value='High'>High</option>
            </select>
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Status</Form.Label>
            <select className='form-control' name='status'>
              <option value=''>Select</option>
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
              name='contact_name'
              type='name'
              placeholder='Enter name'
            />
          </Form.Group>
          <Form.Group controlId='formGroupEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              //   value={email}
              name='email'
              type='email'
              placeholder='Enter email'
            />
          </Form.Group>
          <Form.Group controlId='formGroupPassword'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              //   value={phone_number}
              name='phone_number'
              type='phone_number'
              placeholder='Enter phone number'
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
  return {
    leadFormData: state.leadInput,
    contact: state.leadInput.contact_attributes,
  };
};

export default connect(mapStateToProps)(EditLeadForm);
