import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import './styles.scss'

const Graph = () => {

  const data = [
    {
      date: "27/05/2022",
      average: parseFloat(Math.random() * 5).toFixed(2),

    },
    {
      date: "28/05/2022",
      average: parseFloat(Math.random() * 5).toFixed(2),

    },
    {
      date: "29/05/2022",
      average: parseFloat(Math.random() * 5).toFixed(2),

    },
    {
      date: "30/05/2022",
      average: parseFloat(Math.random() * 5).toFixed(2),

    },
    {
      date: "01/06/2022",
      average: 5,
      comment: "Salary rises announced!"
    },
    {
      date: "02/06/2022",
      average: 3.1,
    },
    {
      date: "03/06/2022",
      average: 0.2,
      comment: "A new leaver announced"
    },
    {
      date: "04/06/2022",
      average: parseFloat(Math.random() * 5).toFixed(2),

    },
    {
      date: "05/06/2022",
      average: parseFloat(Math.random() * 5).toFixed(2),

    },
    {
      date: "06/06/2022",
      average: parseFloat(Math.random() * 5).toFixed(2),

    },
    {
      date: "07/06/2022",
      average: parseFloat(Math.random() * 5).toFixed(2),

    }
  ];


  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {

      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          {payload[0]?.payload?.comment && <p className="desc">{payload[0].payload.comment}</p>}
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer height={400}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="5 3" />
        <XAxis dataKey="date" />
        <YAxis type="number" domain={[0, 5]} tickCount={5} minTickGap={1} tickSize={6} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="average"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />

      </LineChart>
    </ResponsiveContainer>
  );

}


export default Graph;