import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const WaterConsumptionChart = ({ weekData }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={weekData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={(entry) => entry.day.getDate()}
          tickFormatter={(tick) => `${tick}`}
        />
        <YAxis
          ticks={[0, 0.5, 1, 1.5, 2, 2.5]}
          domain={[0, 2.5]}
          tickFormatter={(tick) => (tick === 0 ? "0" : `${tick}L`)}
        />
        <Tooltip
          labelFormatter={(label, payload) => {
            const date = payload?.[0]?.payload?.day;
            return date ? date.toDateString() : "Unknown Date";
          }}
          formatter={(value) => [`${value.toFixed(1)} L`, "Consumption"]}
        />
        <Line
          type="monotone"
          dataKey="consumption"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WaterConsumptionChart;