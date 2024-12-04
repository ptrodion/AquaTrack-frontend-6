// import WaterList from './WaterList';
import ChooseDate from './ChooseDate.jsx';
import AddWaterBtn from './AddWaterBtn.jsx';
import WaterList from './WaterList.jsx';
import css from "./DailyInfo.module.css";
const DailyInfo = () => {
  return (
    <div className={css.info}>
      <div className={`${css.header} five-step`}>
        <ChooseDate />
        <AddWaterBtn />
      </div> 
      
      <WaterList />
     
    </div>
  );
};

export default DailyInfo;
