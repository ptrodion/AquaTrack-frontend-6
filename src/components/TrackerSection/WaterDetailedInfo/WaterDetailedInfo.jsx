import css from './WaterDetailedInfo.module.css';
import UserPanel from '../../UserPanel/UserPanel.jsx';
import MonthInfo from 'components/MonthInfo/MonthInfo';

const WaterDetailedInfo = () => {
  return (
    <div className={css.waterDetailedInfo}>
      <UserPanel />
      <MonthInfo />
    </div>
  );
};

export default WaterDetailedInfo;
