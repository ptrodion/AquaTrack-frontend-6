import { useTranslation } from 'react-i18next';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const WaterConsumptionChart = ({ weekData }) => {
  const { t } = useTranslation();
  const formatDate = date => {
    const weekday = t(
      `weekdays.${
        [
          'sunday',
          'monday',
          'tuesday',
          'wednesday',
          'thursday',
          'friday',
          'saturday',
        ][date.getDay()]
      }`
    );
    const month = t(
      `months.${
        [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ][date.getMonth()]
      }`
    );
    const day = date.getDate();
    return `${weekday}, ${month.substring(0, 3)} ${day}`; // Отображение краткой формы месяца
  };
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={weekData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid opacity={0} />
        <XAxis
          dataKey="day"
          tickFormatter={date => formatDate(date)}
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          fontSize={15}
          fontWeight={400}
          minTickGap={24}
          tickMargin={20}
        />
        <YAxis
          ticks={[0, 0.5, 1, 1.5, 2, 2.5]}
          domain={[0, 2.5]}
          tickFormatter={tick => (tick === 0 ? '0 %' : `${tick} L`)}
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          fontSize={15}
          fontWeight={400}
          minTickGap={24}
          tickMargin={20}
        />
        <Tooltip
          labelFormatter={label =>
            label instanceof Date ? formatDate(label) : 'Unknown Date'
          }
          formatter={value => [
            `${value.toFixed(2)} ${t('waterDailyNorma.liters')}`,
            t('calendar.consumption'),
          ]}
          contentStyle={{
            backgroundColor: '#fff',
            borderRadius: '5px',
            border: '1px solid #ccc',
            padding: '10px',
          }}
          itemStyle={{ color: '#9be1a0' }}
        />
        <Area
          type="monotone"
          dataKey="consumption"
          stroke="#9be1a0"
          fill="url(#colorWater)"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <defs>
          <linearGradient id="colorWater" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#9be1a0" stopOpacity={1} />
            <stop offset="95%" stopColor="#9be1a0" stopOpacity={0.1} />
          </linearGradient>
        </defs>
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default WaterConsumptionChart;
