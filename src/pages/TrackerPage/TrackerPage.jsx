
import WaterMainInfo from 'components/TrackerSection/WaterMainInfo/WaterMainInfo.jsx';
import css from './TrackerPage.module.css';
import UserBar from '../../components/UserBar/UserBar.jsx';
import UserPanel from '../../components/UserPanel/UserPanel.jsx'
import MonthInfo from 'components/MonthInfo/MonthInfo';


function TrackerPage() {
  return (
    <MonthInfo/>
    <div className={css.container}>
      <UserPanel />
      <UserBar
      name="Nadia"
      avatarUrl="https://example.com/avatar.jpg"
      />
      <WaterMainInfo />
    </div>
>>>>>>> main
  );
}

export default TrackerPage;
