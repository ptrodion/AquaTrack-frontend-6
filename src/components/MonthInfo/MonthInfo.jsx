import { Calendar } from 'components/Calendar/Calendar';
import { CalendarPagination } from 'components/CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';
import { useState } from 'react';
import { getDaysInMonth } from 'date-fns';

const MonthInfo = () => {
  const [date, setDate] = useState(new Date());

  const onSetDate = selectedDate => {
    setDate(selectedDate);
  };

  const days = Array.from({ length: getDaysInMonth(date) }, (_, index) => ({
    //[{day:number, progress:number}, {day:number, progress:number}, ...]
    // day: index + 1,
    day: new Date(date.getFullYear(), date.getMonth(), index + 1),
    progress: Math.floor(Math.random() * 102), // Випадковий прогрес від 0 до 100
  }));

  return (
    <div className={css.calendarWrap}>
      <div className={css.titleWrap}>
        <h2 className={css.title}>Month</h2>
        <CalendarPagination initialDate={date} onSetDate={onSetDate} />
      </div>
      <Calendar days={days} />
    </div>
  );
};

export default MonthInfo;
