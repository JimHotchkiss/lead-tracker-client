import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import "./barGraph.css";

const BarGraphComponent = (props) => {
  const obj = props;
  const limits = Object.keys(obj).map(function (key) {
    return obj[key].length;
  });
  const max = Math.max.apply(null, limits);
  const data = {
    labels: ["New", "Open", "Pending", "Closed"],
    datasets: [
      {
        label: "Leads By Status",
        data: [
          props.statusNew.length,
          props.statusOpen.length,
          props.statusPending.length,
          props.statusClosed.length,
        ],
        backgroundColor: ["#507DBC", "#A1C6EA", "#BBD1EA", "#DAE3E5"],
      },
    ],
  };
  return (
    <div className='horizontal-bar-div'>
      <HorizontalBar
        data={data}
        width={10}
        height={350}
        options={{
          scales: {
            xAxes: [
              {
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: max + 0.5,
                },
              },
            ],
          },
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Status Of Leads",
            fontSize: 25,
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
};

export default BarGraphComponent;
