import WaterMainInfo from 'components/TrackerSection/WaterMainInfo/WaterMainInfo.jsx';
import WaterDetailedInfo from 'components/TrackerSection/WaterDetailedInfo/WaterDetailedInfo.jsx';
import Container from 'components/Container/Container.jsx';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/user/operations.js';


function TrackerPage() {
  const dispatch = useDispatch();
  dispatch(getUser());
  return (
    <Container>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </Container>
  );
}
export default TrackerPage;
