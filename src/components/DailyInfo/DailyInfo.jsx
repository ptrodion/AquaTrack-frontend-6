import WaterList from './WaterList';

import AddWaterBtn from '../AddWaterSecond/AddWaterSecond';
const DailyInfo = () => {
  return (
    <div>
      <h4>Daily Info</h4>
      <div>
        <AddWaterBtn />
      </div> 
      
      <WaterList />
     
    </div>
  );
};

export default DailyInfo;
