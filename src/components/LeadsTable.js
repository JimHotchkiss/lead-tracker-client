import React from "react";
import { Component } from "react";
import MaterialTable from "material-table";

class LeadsTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const columns = () => {
      const newArray = [];
      if (this.props.leads) {
        this.props.leads.map(lead => {
          for (let [key, value] of Object.entries(lead.attributes)) {
            if (key === lead.attributes.product) {
              return newArray.push(key);
            }
          }
        });
      }
      console.log(newArray);
    };
    const MultipleActions = () => {
      return (
        <MaterialTable
          title="Leads"
          columns={[
            {
              title: "Name",
              field: "name"
            },
            { title: "Surname", field: "surname" },
            { title: "Birth Year", field: "birthYear", type: "numeric" },
            {
              title: "Birth Place",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
            }
          ]}
          data={[
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63
            },
            {
              name: "Zerya Betül",
              surname: "Baran",
              birthYear: 2017,
              birthCity: 34
            }
          ]}
          actions={[
            {
              icon: "search",
              tooltip: "View and make changes to this lead",
              onClick: (event, rowData) => alert("You deleted " + rowData.name)
            },
            {
              icon: "delete",
              tooltip: "Remove lead",
              onClick: (event, rowData) =>
                alert("You want to delete " + rowData.name)
            }
          ]}
        />
      );
    };
    return (
      <div className="leads-table">
        {columns()}
        {MultipleActions()}
      </div>
    );
  }
}

export default LeadsTable;
