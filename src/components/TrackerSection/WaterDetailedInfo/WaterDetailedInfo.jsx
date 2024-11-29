import css from './WaterDetailedInfo.module.css';
import UserPanel from '../../UserPanel/UserPanel.jsx';
import MonthInfo from 'components/MonthInfo/MonthInfo';
import WaterList from 'components/WaterList/WaterList.jsx';

const WaterDetailedInfo = () => {
  return (
    <div className={css.waterDetailedInfo}>
      <UserPanel />
      <MonthInfo />
      <WaterList />
    </div>
  );
};

export default WaterDetailedInfo;
