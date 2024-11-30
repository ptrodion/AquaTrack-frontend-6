import { Calendar } from 'components/Calendar/Calendar';
import { CalendarPagination } from 'components/CalendarPagination/CalendarPagination';
import WaterConsumptionChart from 'components/WaterConsumptionChart/WaterConsumptionChart';
import css from './MonthInfo.module.css';
import { useState } from 'react';

import { FiPieChart } from "react-icons/fi";

const MonthInfo = () => {
  const [view, setView] = useState('calendar');

  const toggleView = () => {
    setView((prev) => (prev === 'calendar' ? 'chart' : 'calendar'));
  };

  return (
    <div className={css.calendarWrap}>
      <div className={css.titleWrap}>
        <h2 className={css.title}>{view === 'calendar' ? 'Month' : 'Statistics'}</h2>
        <div className={css.paginationWrap}>
          <CalendarPagination />
          <button onClick={toggleView} className={css.statsToggleBtn}>
            <FiPieChart size={24} className={css.statsToggleIcon} />
          </button>
        </div>
      </div>
      <div>
        {view === 'calendar' ? <Calendar /> : <WaterConsumptionChart />}
      </div>
    </div>
  );
};

export default MonthInfo;

