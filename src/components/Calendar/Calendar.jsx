import css from './Calendar.module.css';
import clsx from 'clsx';

export const Calendar = () => {
  const days = Array.from({ length: 31 }, (_, index) => ({
    day: index + 1,
    progress: Math.floor(Math.random() * 102), // Випадковий прогрес від 0 до 100
  }));

  return (
    <div className={css.calendar}>
    {days.map(({ day, progress }) => (
      <div key={day} className={css.dayContainer}>
        <button
          className={clsx(
            css.dayButton,
            progress === 100 && css.fulldone,
            progress < 100 && css.inPgrogress,
            progress === 101 && css.today

          )}
        >
          {day}
        </button>
        <p className={css.dayInfo}>{progress}%</p>
      </div>
    ))}
  </div>
  );
};