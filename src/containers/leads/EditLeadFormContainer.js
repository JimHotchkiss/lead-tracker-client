import React, { Component } from "react";
import { connect } from "react-redux";
import { editFormInputAction } from "../../redux/actions/leadSyncActions";
import EditLeadFormComponent from "../../components/editLeadForm/EditLeadFormComponent";
import { populateEditForm } from "../../redux/actions/leadSyncActions";
import "./editLeadForm.css";

class EditLeadForm extends Component {
  handleOnChange = (e) => {
    const { name, value } = e.target;
    const editLeadFormData = {
      ...this.props.editFormInput,
      [name]: value,
    };
    this.props.editFormInputAction(editLeadFormData);
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
          lead={this.props.description}
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
    description: state.showLead,
    showLeadContact: state.showLeadContact,
  };
};

export default connect(mapStateToProps, {
  editFormInputAction,
  populateEditForm,
})(EditLeadForm);
