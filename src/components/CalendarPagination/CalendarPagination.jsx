import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import css from './CalendarPagination.module.css';

export const CalendarPagination = () => {
  return (
    <div className={css.paginationWrap}>
      <button type="button" className={css.paginationIcon}>
        <SlArrowLeft />
      </button>
      <p className={css.paginationText}>Month, YYYY</p>
      <button type="button" className={css.paginationIcon}>
        <SlArrowRight />
      </button>
    </div>
  );
};
