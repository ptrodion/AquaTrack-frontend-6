import WelcomeSection from '../../components/WelcomeSection/welcome-section.jsx';
import AdvantagesSection from '../../components/AdvantagesSection/advantages-section.jsx';
import Container from 'components/Container/Container.jsx';
import { useDispatch } from 'react-redux';
import {
  login,
  logout,
  refreshUser,
  register,
} from '../../redux/auth/operations.js';

function HomePage() {
  const dispatch = useDispatch();
  dispatch(
    register({ email: 'john12@example.com', password: 'securePassword123' })
  );
  // dispatch(
  //   login({ email: 'john10@example.com', password: 'securePassword123' })
  // );
  // setTimeout(() => {
  //   dispatch(refreshUser());
  // }, 2000);

  // dispatch(logout());

  // dispatch(refreshUser());

  return (
    <Container>
      <WelcomeSection />
      <AdvantagesSection />
    </Container>
  );
}

export default HomePage;
