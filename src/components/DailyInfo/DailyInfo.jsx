import ChooseDate from '../DailyInfo/ChooseDate/ChooseDate.jsx';
import WaterList from '../DailyInfo/WaterList/WaterList.jsx';
import AddWaterBtn from '../DailyInfo/AddWaterBtn/AddWaterBtn.jsx';
import { useState } from 'react';
import { css } from 'styled-components';

const DailyInfo = () => {
  const [waterItems, setWaterItems] = useState([
    { id: 1, amount: 250, time: '7:00 AM' },
    { id: 2, amount: 250, time: '11:00 AM' },
    { id: 3, amount: 250, time: '2:00 PM' },
    { id: 4, amount: 300, time: '4:00 PM' },
    { id: 5, amount: 200, time: '6:00 PM' },
  ]);

  console.log('WaterItems in DailyInfo:', waterItems);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      amount: Math.floor(Math.random() * 500 + 100),
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setWaterItems([...waterItems, newItem]);
  };

  return (
    <div>
      <h4 className={css.TitelDailyInfo}></h4>
      <ChooseDate />
      <AddWaterBtn addItem={addItem} />
      <WaterList
        waterItems={waterItems || []}
        setWaterItems={setWaterItems}
        addItem={addItem}
      />
    </div>
  );
};

export default DailyInfo;
