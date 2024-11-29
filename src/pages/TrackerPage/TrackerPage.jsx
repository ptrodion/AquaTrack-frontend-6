import WaterMainInfo from 'components/TrackerSection/WaterMainInfo/WaterMainInfo.jsx';
import css from './TrackerPage.module.css';
import WaterDetailedInfo from 'components/TrackerSection/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterList from './WaterList';

function TrackerPage() {
  return (
    <div className={css.container}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    <WaterList />
    </div>
  );
}

export default TrackerPage;
