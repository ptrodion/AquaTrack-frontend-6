import clsx from 'clsx';
import css from './CalendarItem.module.css';
const CalendarItem = ({ day, progress, isDayToday, selectedDate, onSetDate }) => {
  
  const isSelectedDay = selectedDate?.getDate() === day.getDate()
  const isActiveDay = !selectedDate && isDayToday;
  return (
    <div key={day} className={css.dayContainer}>
      <button onClick={() => onSetDate(day)}
        className={clsx(css.dayButton, {
          [css.fulldone]: progress >= 100,
          [css.inPgrogress]: progress < 100,
          [css.today]: isActiveDay || isSelectedDay
        })}
      >
        {day.getDate()}
      </button>
      <p className={css.dayInfo}>{Math.round(Number(progress))}%</p>
    </div>
  );
};

export default CalendarItem;
