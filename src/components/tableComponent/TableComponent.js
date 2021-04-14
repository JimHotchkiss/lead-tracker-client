import React from "react"
import Table from "react-bootstrap/Table"
import "./tableComponent.css"
import { Link } from "react-router-dom"

const TableComponent = (props) => {
  console.log(props)
  const contactEmail = (contactId) => {
    const contact_email = props.contacts.find(
      (contact) => contact.id === contactId
    )
    if (contact_email) {
      return contact_email.email
    }
  }

  const cameraTable = (
    <Table striped bordered hover size='sm' variant='dark' responsive='sm'>
      <thead>
        <tr>
          <th>Cameras</th>
          <th>description</th>
          <th>Contact</th>
          <th>Date Created</th>
        </tr>
      </thead>
      {props.cameras.map((camera, index) => (
        <tbody key={Math.random()}>
          <tr>
            <td>
              <Link
                onClick={props.handleShowLead}
                data-id={camera.id}
                to={`/leads/${camera.id}/show`}
                style={{ textDecoration: "none", color: "#03a9f4" }}>
                {index + 1}. Show|Edit
              </Link>
            </td>
            <td>{props.truncateString(camera.description, 30)}</td>
            <td>
              <Link
                onClick={props.handleShowContact}
                data-id={camera.contact_id}
                to={`/contacts/${camera.contact_id}/show`}
                style={{ textDecoration: "none", color: "#03a9f4" }}>
                {contactEmail(camera.contact_id)}
              </Link>
            </td>
            <td>{props.convertTime(camera.created_at)}</td>
          </tr>
        </tbody>
      ))}
    </Table>
  )

  const monitorTable = (
    <Table striped bordered hover size='sm' variant='dark' responsive='sm'>
      <thead>
        <tr>
          <th>Monitors</th>
          <th>description</th>
          <th>Contact</th>
          <th>Date Created</th>
        </tr>
      </thead>
      {props.monitors.map((monitor, index) => (
        <tbody key={Math.random()}>
          <tr>
            <td>
              <Link
                onClick={props.handleShowLead}
                data-id={monitor.id}
                to={`/leads/${monitor.id}/show`}
                style={{ textDecoration: "none", color: "#03a9f4" }}>
                {index + 1}. Show|Edit
              </Link>
            </td>
            <td>{props.truncateString(monitor.description, 30)}</td>
            <td>
              <Link
                onClick={props.handleShowContact}
                data-id={monitor.contact_id}
                to={`/contacts/${monitor.contact_id}/show`}
                style={{ textDecoration: "none", color: "#03a9f4" }}>
                {contactEmail(monitor.contact_id)}
              </Link>
            </td>
            <td>{props.convertTime(monitor.created_at)}</td>
          </tr>
        </tbody>
      ))}
    </Table>
  )

  const insufflatorTable = (
    <Table striped bordered hover size='sm' variant='dark' responsive='sm'>
      <thead>
        <tr>
          <th>Insufflators</th>
          <th>description</th>
          <th>Contact</th>
          <th>Date Created</th>
        </tr>
      </thead>
      {props.insufflators.map((insufflator, index) => (
        <tbody key={Math.random()}>
          <tr>
            <td>
              <Link
                onClick={props.handleShowLead}
                data-id={insufflator.id}
                to={`/leads/${insufflator.id}/show`}
                style={{ textDecoration: "none", color: "#03a9f4" }}>
                {index + 1}. Show|Edit
              </Link>
            </td>
            <td>{props.truncateString(insufflator.description, 30)}</td>
            <td>
              <Link
                onClick={props.handleShowContact}
                data-id={insufflator.contact_id}
                to={`/contacts/${insufflator.contact_id}/show`}
                style={{ textDecoration: "none", color: "#03a9f4" }}>
                {contactEmail(insufflator.contact_id)}
              </Link>
            </td>
            <td>{props.convertTime(insufflator.created_at)}</td>
          </tr>
        </tbody>
      ))}
    </Table>
  )

  const digitalCaptureTable = (
    <Table striped bordered hover size='sm' variant='dark' responsive='sm'>
      <thead>
        <tr>
          <th>Digital Captures</th>
          <th>description</th>
          <th>Contact</th>
          <th>Date Created</th>
        </tr>
      </thead>
      {props.digital_captures.map((digital_capture, index) => (
        <tbody key={Math.random()}>
          <tr>
            <td>
              <Link
                onClick={props.handleShowLead}
                data-id={digital_capture.id}
                to={`/leads/${digital_capture.id}/show`}
                style={{ textDecoration: "none", color: "#03a9f4" }}>
                {index + 1}. Show|Edit
              </Link>
            </td>
            <td>{props.truncateString(digital_capture.description, 30)}</td>
            <td>
              <Link
                onClick={props.handleShowContact}
                data-id={digital_capture.contact_id}
                to={`/contacts/${digital_capture.contact_id}/show`}
                style={{ textDecoration: "none", color: "#03a9f4" }}>
                {contactEmail(digital_capture.contact_id)}
              </Link>
            </td>
            <td>{props.convertTime(digital_capture.created_at)}</td>
          </tr>
        </tbody>
      ))}
    </Table>
  )

  return (
    <div className='table-component-div'>
      <div className='table-title-div'>
        <h3>Leads Table</h3>
      </div>
      <div>
        {digitalCaptureTable}
        {cameraTable}
        {monitorTable}
        {insufflatorTable}
      </div>
    </div>
  )
}

export default TableComponent
