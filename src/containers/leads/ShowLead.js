import React, { Component } from "react";
import { connect } from "react-redux";
import ShowLeadComponent from "../../components/show/ShowLeadComponent";
import DeleteButton from "../../components/deleteButton/DeleteButton";
class ShowLead extends Component {
  hanleConvertTime(dateTime) {
    let dateString = dateTime;
    let newDateString = new Date(dateString);
    return newDateString.toLocaleDateString();
  }

  handleDelete = (e) => {
    console.log(e);
  };
  render() {
    return (
      <div className='show-lead-div'>
        <ShowLeadComponent
          lead={this.props.showLead}
          contact={this.props.contact}
          convertTime={this.hanleConvertTime}
        />
        <DeleteButton handleDelete={this.handleDelete} />
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

export default connect(mapStateToProps)(ShowLead);
