import AdvantagesSection from 'components/AdvantagesSection/advantages-section';
import SignUpForm from 'components/SignUpForm/SignUpForm';
import Container from 'components/Container/Container.jsx';

import css from './SignUpPage.module.css';

function SignUpPage() {
  return (
    <Container>
      <SignUpForm></SignUpForm>
      <div className={css.advantageContainer}>
        <AdvantagesSection></AdvantagesSection>
      </div>
    </Container>
  );
}

export default SignUpPage;
