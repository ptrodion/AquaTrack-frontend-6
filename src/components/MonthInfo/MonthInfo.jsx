import { Calendar } from 'components/Calendar/Calendar';
import { CalendarPagination } from 'components/CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';

const MonthInfo = () => {
  return (
    <div className={css.calendarWrap}>
      <div className={css.titleWrap}>
        <h2 className={css.title}>Month</h2>
        <CalendarPagination />
      </div>
      <Calendar />
    </div>
  );
};

export default MonthInfo;
