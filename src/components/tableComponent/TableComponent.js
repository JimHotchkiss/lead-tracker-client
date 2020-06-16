import React from "react";
import Table from "react-bootstrap/Table";
import "./tableComponent.css";
const TableComponent = (props) => {
  const contactEmail = (contactId) => {
    const contact_email = props.contacts.find(
      (contact) => contact.id === contactId
    );
    if (contact_email) {
      return contact_email.email;
    }
  };

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
              <a href='#!' style={{ textDecoration: "none", color: "#03a9f4" }}>
                {index + 1}. Show|Edit
              </a>
            </td>
            <td>{props.truncateString(camera.description, 30)}</td>
            <td>
              <a href='#!' style={{ textDecoration: "none", color: "#03a9f4" }}>
                {contactEmail(camera.contact_id)}
              </a>
            </td>
            <td>{props.convertTime(camera.created_at)}</td>
          </tr>
        </tbody>
      ))}
    </Table>
  );

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
              <a href='#!' style={{ textDecoration: "none", color: "#03a9f4" }}>
                {index + 1}. Show|Edit
              </a>
            </td>
            <td>{props.truncateString(monitor.description, 30)}</td>
            <td>
              <a href='#!' style={{ textDecoration: "none", color: "#03a9f4" }}>
                {contactEmail(monitor.contact_id)}
              </a>
            </td>
            <td>{props.convertTime(monitor.created_at)}</td>
          </tr>
        </tbody>
      ))}
    </Table>
  );

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
              <a href='#!' style={{ textDecoration: "none", color: "#03a9f4" }}>
                {index + 1}. Show|Edit
              </a>
            </td>
            <td>{props.truncateString(insufflator.description, 30)}</td>
            <td>
              <a href='#!' style={{ textDecoration: "none", color: "#03a9f4" }}>
                {contactEmail(insufflator.contact_id)}
              </a>
            </td>
            <td>{props.convertTime(insufflator.created_at)}</td>
          </tr>
        </tbody>
      ))}
    </Table>
  );

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
              <a href='#!' style={{ textDecoration: "none", color: "#03a9f4" }}>
                {index + 1}. Show|Edit
              </a>
            </td>
            <td>{props.truncateString(digital_capture.description, 30)}</td>
            <td>
              <a href='#!' style={{ textDecoration: "none", color: "#03a9f4" }}>
                {contactEmail(digital_capture.contact_id)}
              </a>
            </td>
            <td>{props.convertTime(digital_capture.created_at)}</td>
          </tr>
        </tbody>
      ))}
    </Table>
  );

  return (
    <div className='table-component-div'>
      <div className='table-title-div'>
        <h3>Leads Table</h3>
      </div>
      <div>
        {cameraTable}
        {monitorTable}
        {digitalCaptureTable}
        {insufflatorTable}
      </div>
    </div>
  );
};

export default TableComponent;
