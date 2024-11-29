import WelcomeSection from '../../components/WelcomeSection/welcome-section.jsx';
import AdvantagesSection from '../../components/AdvantagesSection/advantages-section.jsx';
import Container from 'components/Container/Container.jsx';
// import styles from './home-page.module.css';

function HomePage() {
  return (
    <Container>
      <WelcomeSection />
      <AdvantagesSection />
    </Container>
  );
}

export default HomePage;
{
  /* <div className={styles.sectionsContainer}>
<WelcomeSection />
<AdvantagesSection />
</div> */
}
