import clsx from 'clsx';
import css from './CalendarItem.module.css';
const CalendarItem = ({ day, progress, isDayToday }) => {
  return (
    <div key={day} className={css.dayContainer}>
      <button
        className={clsx(
          css.dayButton,
          {
            [css.fulldone]: progress >= 100,
            [css.inPgrogress]: progress < 100,
            [css.today]: isDayToday,
          }
          // progress === 101 && css.today
        )}
      >
        {day.getDate()}
      </button>
      <p className={css.dayInfo}>{progress}%</p>
    </div>
  );
};

export default CalendarItem;
