import { isToday } from 'date-fns';
import css from './Calendar.module.css';
import CalendarItem from 'components/CalendarItem/CalendarItem';

export const Calendar = ({ days }) => {
  return (
    <div className={css.calendar}>
      {days.map(({ day, progress }) => {
        const isDayToday = isToday(day);
        return (
          <CalendarItem key={day.getDate()} day={day} progress={progress} isDayToday={isDayToday}/>
        );
      })}
    </div>
  );
};