import { Calendar } from 'components/Calendar/Calendar';
import { CalendarPagination } from 'components/CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';
import { useEffect, useState } from 'react';
import { getDaysInMonth, startOfWeek, addDays, isSameDay } from 'date-fns';
import { useTranslation } from 'react-i18next';
import WaterConsumptionChart from 'components/WaterConsumptionChart/WaterConsumptionChart';
import { useDispatch, useSelector } from 'react-redux';
import { getWaterByMonth } from '../../redux/water/operations.js';
import { selectMonthWater } from '../../redux/water/selectors.js';
import { selectUser } from '../../redux/user/selector';

const MonthInfo = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState('calendar');
  const user = useSelector(selectUser);
  const monthWater = useSelector(selectMonthWater);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    const formattedDate = date.toISOString().split('T')[0];
    dispatch(getWaterByMonth(formattedDate));
  }, [dispatch, date]);

  const toggleView = () => {
    setView(prev => (prev === 'calendar' ? 'chart' : 'calendar'));
  };

  const onSetDate = selectedDate => {
    setDate(selectedDate);
  };

  const days = Array.from({ length: getDaysInMonth(date) }, (_, index) => {
    const day = new Date(date.getFullYear(), date.getMonth(), index + 1);
    const waterEntriesByDay = monthWater.filter(item =>
      isSameDay(new Date(item.date), day)
    );

    const dailyNormaWater = user?.currentDailyNorm ?? 0;
    const sumWaterOfDay = waterEntriesByDay.reduce((accumulator, dailyItem) => {
      return accumulator + dailyItem.amount;
    }, 0);

    const dailyPercent = dailyNormaWater
      ? Math.min((sumWaterOfDay / dailyNormaWater) * 100, 100)
      : 0;

    return {
      day,
      progress: dailyPercent,
    };
  });

  const startOfCurrentWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const currentWeekDays = Array.from({ length: 7 }, (_, i) => {
    const day = addDays(startOfCurrentWeek, i);
    const calendarDay = days.find(d => d.day.getDate() === day.getDate());
    return {
      day,
      consumption: calendarDay ? (calendarDay.progress / 100) * 3 : 0,
    };
  });

  return (
    <div className={css.calendarWrap}>
      <div className={css.titleWrap}>
        <h2 className={css.title}>
          {view === 'calendar' ? t('calendar.month') : t('calendar.statistics')}
        </h2>
        <div className={css.paginationWrap}>
          <CalendarPagination initialDate={date} onSetDate={onSetDate} />
          <button onClick={toggleView} className={css.statsToggleBtn}>
            <svg width={20} height={20} className={css.toggleIcon}>
              <use href='/src/assets/icons/sprite.svg#icon-pie-chart'></use>
            </svg>
          </button>
        </div>
      </div>
      <div>
        {view === 'calendar' ? (
          <Calendar days={days} />
        ) : (
          <WaterConsumptionChart weekData={currentWeekDays} />
        )}
      </div>
    </div>
  );
};
export default MonthInfo;
