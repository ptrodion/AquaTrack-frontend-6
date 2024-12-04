import css from './WaterDetailedInfo.module.css';
import UserPanel from '../../UserPanel/UserPanel.jsx';
import MonthInfo from 'components/MonthInfo/MonthInfo';
// import WaterList from 'components/DailyInfo/WaterList/WaterList.jsx';
import DailyInfo from 'components/DailyInfo/DailyInfo.jsx';

const WaterDetailedInfo = () => {
  return (
    <div className={css.waterDetailedInfo}>
      <UserPanel />
      {/* <WaterList /> */}
      <DailyInfo />
      <MonthInfo />
    </div>
  );
};

export default WaterDetailedInfo;
