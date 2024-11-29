import css from './WaterDetailedInfo.module.css';
import UserPanel from '../../UserPanel/UserPanel.jsx';
import UserBar from '../../UserBar/UserBar.jsx';
import MonthInfo from 'components/MonthInfo/MonthInfo';

const WaterDetailedInfo = () => {
  return (
    <div className={css.waterDetailedInfo}>
      WaterDetailedInfo
      <UserPanel />
      <UserBar />
      <MonthInfo />
    </div>
  );
};

export default WaterDetailedInfo;
