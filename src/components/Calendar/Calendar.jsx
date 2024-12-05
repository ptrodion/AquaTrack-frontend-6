import { isToday } from 'date-fns';
import css from './Calendar.module.css';
import CalendarItem from 'components/CalendarItem/CalendarItem';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedDay } from '../../redux/common/operations';
import { getFormatedChoswnDate } from '../../utils/getDateNow';
import { getWaterByDay } from '../../redux/water/operations';

export const Calendar = ({ days }) => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDaySelect = day => {
    dispatch(setSelectedDay(day));
    dispatch(getWaterByDay(getFormatedChoswnDate(day)));

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
