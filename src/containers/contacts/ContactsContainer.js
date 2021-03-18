import React, { Component } from "react"
import { connect } from "react-redux"

export class ContactsContainer extends Component {
  render() {
    return <div>Show Contact</div>
  }
}

const mapStateToProps = (state) => {
  console.log(state.leads)
  return {}
}

export default connect(mapStateToProps)(ContactsContainer)
