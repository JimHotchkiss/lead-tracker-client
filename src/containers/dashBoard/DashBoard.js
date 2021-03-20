import React, { Component } from "react"
import { connect } from "react-redux"
import { getCurrentUser } from "../../redux/actions/userAsyncActions"
import Products from "../../components/products/Products"
import BarGraphComponent from "../../components/barGraphComponent/BarGraphComponent"
import TableComponent from "../../components/tableComponent/TableComponent"
import { showLeadAction } from "../../redux/actions/showLeadAsyncAction"
import { showContactAction } from "../../redux/actions/showContactAsyncAction"
import "./dashBoard.css"
class DashBoard extends Component {
  componentDidMount() {
    this.props.getCurrentUser(this.props).catch((error) => {
      alert("You'll need to login:", error)
      this.props.history.push("/login")
    })
  }

  handleShowContact = (event) => {
    console.log(event.target.dataset.id)
    const contactData = event.target.dataset.id
    this.props.showContactAction(contactData)
  }

  handleShowLead = (event) => {
    const leadData = event.target.dataset.id
    this.props.showLeadAction(leadData, this.props)
  }

  truncateString(str, num) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + "..."
  }

  convertTime(dateTime) {
    let dateString = dateTime
    let newDateString = new Date(dateString)
    return newDateString.toLocaleDateString()
  }

  render() {
    const { leads } = this.props
    const { cameras } = this.props
    const { monitors } = this.props
    const { digital_captures } = this.props
    const { insufflators } = this.props
    const { statusNew } = this.props
    const { statusOpen } = this.props
    const { statusPending } = this.props
    const { statusClosed } = this.props
    const { contacts } = this.props
    return (
      <div className='dashboard-container-div'>
        <div className='products-component-div'>
          <Products
            leads={leads}
            cameras={cameras}
            monitors={monitors}
            digital_captures={digital_captures}
            insufflators={insufflators}
          />
        </div>
        <div className='table-graph-div'>
          <div className='table-component-div'>
            <TableComponent
              cameras={cameras}
              monitors={monitors}
              digital_captures={digital_captures}
              insufflators={insufflators}
              leads={leads}
              contacts={contacts}
              handleShowContact={this.handleShowContact}
              handleShowLead={this.handleShowLead}
              truncateString={this.truncateString}
              convertTime={this.convertTime}
            />
          </div>
          <div className='graph-component-div'>
            <BarGraphComponent
              statusNew={statusNew}
              statusOpen={statusOpen}
              statusPending={statusPending}
              statusClosed={statusClosed}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    lead: state.lead,
    leads: state.leads.map((lead) => {
      return {
        ...lead,
        contact: state.contacts.find(
          (contact) => contact.id === lead.contact_id
        ),
      }
    }),
    contacts: state.contacts,
    cameras: state.leads.filter((lead) => lead.product === "Camera"),
    monitors: state.leads.filter((lead) => lead.product === "Monitor"),
    digital_captures: state.leads.filter(
      (lead) => lead.product === "Digital Capture"
    ),
    insufflators: state.leads.filter((lead) => lead.product === "Insufflator"),
    statusNew: state.leads.filter((lead) => lead.status === "New"),
    statusOpen: state.leads.filter((lead) => lead.status === "Open"),
    statusPending: state.leads.filter((lead) => lead.status === "Pending"),
    statusClosed: state.leads.filter((lead) => lead.status === "Closed"),
    user: state.user,
  }
}

export default connect(mapStateToProps, {
  getCurrentUser,
  showLeadAction,
  showContactAction,
})(DashBoard)
