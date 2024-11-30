import WaterMainInfo from 'components/TrackerSection/WaterMainInfo/WaterMainInfo.jsx';
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
