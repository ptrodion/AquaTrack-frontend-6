import css from './Calendar.module.css';

export const Calendar = () => {
  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  return (
    <div className={css.calendar}>
      {days.map(day => (
        <div key={day} className={css.dayContainer}>
          <button className={css.dayButton}>{day}</button>
          <p className={css.dayInfo}>{day}%</p>
        </div>
      ))}
    </div>
  );
};
