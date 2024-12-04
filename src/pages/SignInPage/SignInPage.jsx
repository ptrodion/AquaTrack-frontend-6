import AdvantagesSection from 'components/AdvantagesSection/advantages-section';
import SignInForm from 'components/SignInForm/SignInForm';
import Container from 'components/Container/Container.jsx';

import css from './SignInPage.module.css';

function SignInPage() {
  return (
    <>
      <Container>
        <SignInForm></SignInForm>
        <div className={css.advantageContainer}>
          <AdvantagesSection></AdvantagesSection>
        </div>
      </Container>
    </>
  );
}

export default SignInPage;
