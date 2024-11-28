import WaterMainInfo from 'components/TrackerSection/WaterMainInfo/WaterMainInfo.jsx';
import css from './TrackerPage.module.css';
import WaterDetailedInfo from 'components/TrackerSection/WaterDetailedInfo/WaterDetailedInfo';

function TrackerPage() {
  return (
    <div className={css.container}>
      <WaterDetailedInfo />
      <WaterMainInfo />
    </div>
  );
}

export default TrackerPage;
