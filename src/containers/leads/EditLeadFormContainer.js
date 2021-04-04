import React, { Component } from "react"
import { connect } from "react-redux"
import EditLeadFormComponent from "../editLeadForm/EditLeadFormComponent"
import { submitEditForm } from "../../redux/actions/leadAsyncActions"
import { populateEditForm } from "../../redux/actions/populateEditAction"

import "./editLeadForm.css"

class EditLeadForm extends Component {
  componentDidMount() {
    if (this.props && this.props.showLead && this.props.showLeadContact) {
      const editLeadData = this.props.showLead
      const editContactData = this.props.showLeadContact
      this.props.populateEditForm(editLeadData, editContactData)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.props.leadFormData)
    const editLeadData = this.props.leadFormData
    this.props.submitEditForm(editLeadData, this.props)
  }
  render() {
    return (
      <div className='edit-lead-container-div'>
        <EditLeadFormComponent
          editFormInput={this.props.editFormInput}
          lead={this.props.showLead}
          contact={this.props.showLeadContact}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    editFormInput: state.editFormInput,
    leadFormData: state.leadInput,
    showLead: state.showLead,
    contact: state.showLeadContact,
    description: state.showLead,
    showLeadContact: state.showLeadContact,
  }
}

export default connect(mapStateToProps, {
  populateEditForm,
  submitEditForm,
})(EditLeadForm)
