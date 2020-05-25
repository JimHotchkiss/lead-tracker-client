import React from "react";
import { Pie } from "react-chartjs-2";
import "./products.css";
const Products = (props) => {
  const data = {
    labels: ["Cameras", "Monitors", "Digital Captures", "Insufflators"],
    datasets: [
      {
        label: "Leads By Categories",
        data: [
          props.cameras.length,
          props.monitors.length,
          props.digital_captures.length,
          props.insufflators.length,
        ],
        backgroundColor: ["#507DBC", "#A1C6EA", "#BBD1EA", "#DAE3E5"],
      },
    ],
  };

  return (
    <div className='pie-chart-div'>
      <Pie
        data={data}
        width={750}
        height={350}
        options={{
          maintainAspectRatio: false,
          legend: {
            position: "top",
            fullWidth: true,
          },
          title: {
            display: true,
            text: `Leads By Product`,
            fontSize: 25,
          },
        }}
      />
    </div>
  );
};

export default Products;
