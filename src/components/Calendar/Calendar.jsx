import { isToday } from 'date-fns';
import css from './Calendar.module.css';
import CalendarItem from 'components/CalendarItem/CalendarItem';
import { useState } from 'react';

export const Calendar = ({ days }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDaySelect = day => {
    setSelectedDate(day);
  };

  return (
    <div className={css.calendar}>
      {days.map(({ day, progress }) => {
        const isDayToday = isToday(day);
        return (
          <CalendarItem
            key={day.getDate()}
            day={day}
            progress={progress}
            isDayToday={isDayToday}
            selectedDate={selectedDate}
            onSetDate={handleDaySelect}
          />
        );
      })}
    </div>
  );
};
