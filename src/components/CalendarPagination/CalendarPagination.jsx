import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import css from './CalendarPagination.module.css';
import { useState } from 'react';
import { format, setMonth } from 'date-fns';
import { useTranslation } from 'react-i18next';

export const CalendarPagination = ({ initialDate, onSetDate }) => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(initialDate ?? new Date());

  const month = t(`months.${format(selectedDate, 'MMMM')}`);
  const formattedDate = `${month}, ${format(selectedDate, 'yyyy')}`;

  const onNextMonth = () => {
    const currentMonth = selectedDate.getMonth();
    const nextDate = setMonth(selectedDate, currentMonth + 1);
    setSelectedDate(nextDate);
    onSetDate(nextDate);
  };

  const onPrevMonth = () => {
    const currentMonth = selectedDate.getMonth();
    const prevDate = setMonth(selectedDate, currentMonth - 1);
    setSelectedDate(prevDate);
    onSetDate(prevDate);
  };

  return (
    <div className={css.paginationWrap}>
      <button
        type="button"
        className={css.paginationIcon}
        onClick={onPrevMonth}
      >
        <SlArrowLeft />
      </button>
      <p className={css.paginationText}>{formattedDate}</p>
      <button
        type="button"
        className={css.paginationIcon}
        onClick={onNextMonth}
      >
        <SlArrowRight />
      </button>
    </div>
  );
};
