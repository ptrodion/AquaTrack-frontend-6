import { Calendar } from 'components/Calendar/Calendar';
import { CalendarPagination } from 'components/CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';
import { useState } from 'react';
import { getDaysInMonth, startOfWeek, addDays } from 'date-fns';
import { useTranslation } from 'react-i18next';
import WaterConsumptionChart from 'components/WaterConsumptionChart/WaterConsumptionChart';
import { FiPieChart } from 'react-icons/fi';

const MonthInfo = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState('calendar');
  const { t } = useTranslation();

  const toggleView = () => {
    setView((prev) => (prev === 'calendar' ? 'chart' : 'calendar'));
  };

  const onSetDate = selectedDate => {
    setDate(selectedDate);
  };

  const days = Array.from({ length: getDaysInMonth(date) }, (_, index) => ({
    //[{day:number, progress:number}, {day:number, progress:number}, ...]
    // day: index + 1,
    day: new Date(date.getFullYear(), date.getMonth(), index + 1),
    progress: Math.floor(Math.random() * 102), // Випадковий прогрес від 0 до 100
  }));

  const startOfCurrentWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const currentWeekDays = Array.from({ length: 7 }, (_, i) => {
    const day = addDays(startOfCurrentWeek, i);
    const calendarDay = days.find((d) => d.day.getDate() === day.getDate());
    return {
      day,
      consumption: calendarDay ? (calendarDay.progress / 100) * 3 : 0,
    };
  });

  return (
    <div className={css.calendarWrap}>
      <div className={css.titleWrap}>
        <h2 className={css.title}>
          {view === 'calendar' ? t('calendar.month') : t('calendar.statistics')}
        </h2>
        <div className={css.paginationWrap}>
          <CalendarPagination initialDate={date} onSetDate={onSetDate} />
          <button onClick={toggleView} className={css.statsToggleBtn}>
          <FiPieChart size={24} className={css.statsToggleIcon} />
          </button>
        </div>
      </div>
      <div>
        {view === 'calendar' ? (
          <Calendar days={days} />
        ) : (
          <WaterConsumptionChart weekData={currentWeekDays} />
        )}
      </div>
    </div>
  );
};
export default MonthInfo;