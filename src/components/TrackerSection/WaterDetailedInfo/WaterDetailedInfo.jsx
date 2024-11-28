import css from './WaterDetailedInfo.module.css';
import UserPanel from '../../UserPanel/UserPanel.jsx';
import UserBar from '../../UserBar/UserBar.jsx';

const WaterDetailedInfo = () => {
  return (

    <div className={css.waterDetailedInfo}>
      <UserPanel />
      <UserBar
        name="Nadia"
      />
    </div>
  );
};


export default WaterDetailedInfo;
