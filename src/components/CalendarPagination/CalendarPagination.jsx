import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import css from './CalendarPagination.module.css';

export const CalendarPagination = () => {
  return (
    <div className={css.paginationWrap}>
      <button>
        <SlArrowLeft className={css.paginationIcon} />
      </button>
      <p className={css.paginationText}>Month, YYYY</p>
      <button>
        <SlArrowRight className={css.paginationIcon} />
      </button>
    </div>
  );
};
