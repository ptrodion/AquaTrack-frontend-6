import { useTranslation } from 'react-i18next';
import {
  StyledPercentOfDrinkingWater,
  StyledProgressBarSpan,
  StyledProgressDot,
} from './styled';
import css from './WaterProgressBar.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/user/selector';
import { useEffect } from 'react';
import { getWaterByDay } from '../../../redux/water/operations';
import { getDateNow } from '../../../utils/getDateNow';
import {
  selectDailyWater,
  selectPercentOfDrinkingWater,
} from '../../../redux/water/selectors';

const WaterProgressBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const percentOfDrinkingWater = useSelector(selectPercentOfDrinkingWater);

  const date = getDateNow();

  useEffect(() => {
    dispatch(getWaterByDay(date));
  }, [dispatch, date]);

  return (
    <div className={css.progressBarWrapper}>
      <div className={css.progressBar}>
        <p className={css.progressBarText}>{t('chooseDate.today')}</p>
        <div className={css.progressLine}>
          <span className={css.progressBarBackground}></span>

          <StyledProgressBarSpan $percent={percentOfDrinkingWater}>
            <StyledPercentOfDrinkingWater>
              {percentOfDrinkingWater}%
            </StyledPercentOfDrinkingWater>
          </StyledProgressBarSpan>
          <StyledProgressDot $percent={percentOfDrinkingWater} />
        </div>
        <div className={css.progressBarPercentageWrapper}>
          <p className={css.progressBarPercentage}>0%</p>
          <p className={clsx(css.progressBarPercentage, css.centered)}>50%</p>
          <p className={css.progressBarPercentage}>100%</p>
        </div>
      </div>
    </div>
  );
};

export default WaterProgressBar;
