import React, { Component } from "react"
import { connect } from "react-redux"
import ShowContactComponent from "../../components/show/ShowContactComponent"

export class ContactsContainer extends Component {
  convertTime(dateTime) {
    let dateString = dateTime
    let newDateString = new Date(dateString)
    return newDateString.toLocaleDateString()
  }
  render() {
    console.log(this.props.contact)
    const {
      id,
      contact_name,
      phone_number,
      email,
      created_at,
    } = this.props.contact
    return (
      <div>
        {console.log(created_at)}
        <ShowContactComponent
          id={id}
          name={contact_name}
          phone={phone_number}
          email={email}
          created_at={created_at}
          convertTime={this.convertTime}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.showContact,
  }
}

export default connect(mapStateToProps)(ContactsContainer)
