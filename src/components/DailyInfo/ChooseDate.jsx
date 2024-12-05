import css from './ChooseDate.module.css';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectChoosenDay } from '../../redux/common/selectors';
import { useEffect } from 'react';
import { setSelectedDay } from '../../redux/common/operations';

const ChooseDate = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectedDay = useSelector(selectChoosenDay);

  useEffect(() => {
    dispatch(setSelectedDay(new Date()));
  }, [dispatch]);

  return <h3 className={css.selectedDate}>{selectedDay}</h3>;
};

export default ChooseDate;
