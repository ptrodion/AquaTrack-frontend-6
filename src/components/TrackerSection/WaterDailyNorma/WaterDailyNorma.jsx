import { useTranslation } from 'react-i18next';
import css from './WaterDailyNorma.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/user/selector';

const WaterDailyNorma = () => {
  const { t } = useTranslation();
  const user = useSelector(selectUser);

  const dayliNorma =
    user === null ? 0 : (user.currentDailyNorm / 1000).toFixed(1);

  return (
    <div className={css.dayliNorma}>
      <p className={css.dayliNormaLiters}>
        {dayliNorma}
        {t('waterDailyNorma.liters')}
      </p>
      <p className={css.dayliNormaText}>{t('waterDailyNorma.dailyNorma')}</p>
    </div>
  );
};

export default WaterDailyNorma;
