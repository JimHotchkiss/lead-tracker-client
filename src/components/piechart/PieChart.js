import React from "react";
import { Pie } from "react-chartjs-2";
const PieChart = (props) => {
  console.log(props);
  const data = {
    labels: ["Camera", "Monitor", "Digital Capture", "Insufflator"],
    datasets: [
      {
        label: "Leads By Categories",
        data: [
          props.camera,
          props.monitor,
          props.digital_capture,
          props.insufflator,
        ],
        backgroundColor: ["#1b83dc", "#4e9ee4", "#9ac8ef", "#cce3f7"],
      },
    ],
  };

  return (
    <Pie
      data={data}
      width={30}
      height={15}
      options={{
        maintainAspectRatio: false,
        title: {
          display: true,
          text: `Leads By Product`,
          fontSize: 25,
        },
      }}
    />
  );
};

export default PieChart;
