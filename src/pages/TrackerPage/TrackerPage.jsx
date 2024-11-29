import WaterMainInfo from 'components/TrackerSection/WaterMainInfo/WaterMainInfo.jsx';
import css from './TrackerPage.module.css';
import WaterDetailedInfo from 'components/TrackerSection/WaterDetailedInfo/WaterDetailedInfo.jsx';

function TrackerPage() {
  return (
    <div className={css.container}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
}

export default TrackerPage;
