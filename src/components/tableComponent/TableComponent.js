import React from "react";
import Table from "react-bootstrap/Table";
import "./tableComponent.css";
const TableComponent = (props) => {
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  const convertTime = (dateTime) => {
    console.log(dateTime);
    let dateString = dateTime;
    let newDateString = new Date(dateString);

    return newDateString.toString();
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
              <a href='#!'>{index + 1}</a>
            </td>
            <td>{truncateString(camera.description, 30)}</td>
            <td>{camera.contact_id}</td>
            <td>{convertTime(camera.created_at)}</td>
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
              <a href='#!'>{index + 1}</a>
            </td>
            <td>{truncateString(monitor.description, 30)}</td>
            <td>{monitor.contact_id}</td>
            <td>{convertTime(monitor.created_at)}</td>
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
              <a href='#!'>{index + 1}</a>
            </td>
            <td>{truncateString(insufflator.description, 30)}</td>
            <td>{insufflator.contact_id}</td>
            <td>{convertTime(insufflator.created_at)}</td>
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
              <a href='#!'>{index + 1}</a>
            </td>
            <td>{truncateString(digital_capture.description, 30)}</td>
            <td>{digital_capture.contact_id}</td>
            <td>{convertTime(digital_capture.created_at)}</td>
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
        {insufflatorTable}
        {digitalCaptureTable}
      </div>
    </div>
  );
};

export default TableComponent;
