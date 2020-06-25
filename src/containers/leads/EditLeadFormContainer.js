import React, { Component } from "react";
import { connect } from "react-redux";
import EditLeadFormComponent from "../../components/editLeadForm/EditLeadFormComponent";
import { populateEditForm } from "../../redux/actions/populateEditAction";

import "./editLeadForm.css";

class EditLeadForm extends Component {
  componentDidMount() {
    if (this.props && this.props.showLead && this.props.showLeadContact) {
      const editLeadData = this.props.showLead;
      const editContactData = this.props.showLeadContact;
      this.props.populateEditForm(editLeadData, editContactData);
    }
  }
  handleOnChange = (e) => {
    console.log(this.props.editFormInput);
    const { name, value } = e.target;
    const editLeadFormData = {
      ...this.props.editFormInput,
      [name]: value,
    };
    // this.props.editFormInputAction(editLeadFormData);
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const leadData = this.props.leadFormData;
  //   this.props.leadSubmit(leadData, this.props);
  // };
  render() {
    // console.log(this.props.editLeadFormData)
    return (
      <div className='edit-lead-container-div'>
        <EditLeadFormComponent
          editFormInput={this.props.editFormInput}
          lead={this.props.showLead}
          contact={this.props.showLeadContact}
          handleOnChange={this.handleOnChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editFormInput: state.editFormInput,
    showLead: state.showLead,
    contact: state.showLeadContact,
    description: state.showLead,
    showLeadContact: state.showLeadContact,
  };
};

export default connect(mapStateToProps, {
  populateEditForm,
})(EditLeadForm);
