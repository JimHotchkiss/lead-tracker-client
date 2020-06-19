import React, { Component } from "react";
import { connect } from "react-redux";
import ShowLeadComponent from "../../components/show/ShowLeadComponent";
class ShowLead extends Component {
  hanleConvertTime(dateTime) {
    let dateString = dateTime;
    let newDateString = new Date(dateString);
    return newDateString.toLocaleDateString();
  }
  render() {
    return (
      <div className='show-lead-div'>
        <ShowLeadComponent
          lead={this.props.showLead}
          contact={this.props.contact}
          convertTime={this.hanleConvertTime}
        />
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
