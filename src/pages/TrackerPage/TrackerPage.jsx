import WaterMainInfo from 'components/TrackerSection/WaterMainInfo/WaterMainInfo.jsx';
// import css from './TrackerPage.module.css';
import WaterDetailedInfo from 'components/TrackerSection/WaterDetailedInfo/WaterDetailedInfo.jsx';
import Container from 'components/Container/Container.jsx';

function TrackerPage() {
  return (
    <Container>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </Container>
  );
}

export default TrackerPage;

{
  /* <div className={css.container}>
<WaterMainInfo />
<WaterDetailedInfo />
</div> */
}
