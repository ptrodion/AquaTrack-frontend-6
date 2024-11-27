import WaterMainInfo from 'components/TrackerSection/WaterMainInfo/WaterMainInfo.jsx';
import css from './TrackerPage.module.css';
import UserBar from '../../components/UserBar/UserBar.jsx';
import UserPanel from '../../components/UserPanel/UserPanel.jsx'

function TrackerPage() {
  return (
    <div className={css.container}>
      <UserPanel />
      <UserBar
      name="Nadia"
      avatarUrl="https://example.com/avatar.jpg"
      />
      <WaterMainInfo />
    </div>
  );
}

export default TrackerPage;
