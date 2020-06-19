import React, { Component } from "react";
import { connect } from "react-redux";
import ShowLeadComponent from "../../components/show/ShowLeadComponent";
class ShowLead extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='show-lead-div'>
        <ShowLeadComponent
          lead={this.props.showLead}
          contact={this.props.contact}
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
