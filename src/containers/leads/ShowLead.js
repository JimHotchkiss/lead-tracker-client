import React, { Component } from "react";
import { connect } from "react-redux";
import ShowLeadComponent from "../../components/show/ShowLeadComponent";
import DeleteButton from "../../components/deleteButton/DeleteButton";
import EditButton from "../../components/editButton/EditButton";
import { leadDelete } from "../../redux/actions/leadAsyncActions";
import "./showLeadContainer.css";
class ShowLead extends Component {
  hanleConvertTime(dateTime) {
    let dateString = dateTime;
    let newDateString = new Date(dateString);
    return newDateString.toLocaleDateString();
  }

  handleDelete = (e) => {
    e.preventDefault();
    const data = e.target.dataset.id;
    this.props.leadDelete(data, this.props);
  };
  render() {
    return (
      <div className='show-lead-div'>
        <ShowLeadComponent
          lead={this.props.showLead}
          contact={this.props.contact}
          convertTime={this.hanleConvertTime}
        />
        <div className='buttons-div'>
          <div className='delete-button-component'>
            <DeleteButton
              leadId={this.props.showLead && this.props.showLead.id}
              handleDelete={this.handleDelete}
            />
          </div>
          <div className='edit-button-component'>
            <EditButton
              leadId={this.props.showLead && this.props.showLead.id}
              lead={this.props.showLead}
              // leadId={this.props.showLead && this.props.showLead.id}
              // handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showLead: state.showLead,
    contact: state.showLeadContact,
  };
};

export default connect(mapStateToProps, { leadDelete })(ShowLead);
