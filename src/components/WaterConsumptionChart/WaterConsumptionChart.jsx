import { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const getCurrentWeekDates = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDay + 1);

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    weekDates.push(day);
  }

  return weekDates;
};

const WaterConsumptionChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const weekDates = getCurrentWeekDates();
    const consumptionData = weekDates.map(date => {
      const dayString = date.getDate();

      const consumption = Math.floor(Math.random() * 3);

      return {
        day: dayString,
        consumption: consumption,
      };
    });

    setChartData(consumptionData);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis
          ticks={[0, 0.5, 1, 1.5, 2, 2.5]}
          domain={[0, 2.5]}
          tickFormatter={tick => (tick === 0 ? '0' : `${tick}L`)}
        />
        <Tooltip />
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
