import AdvantagesSection from 'components/AdvantagesSection/advantages-section';
import SignInForm from 'components/SignInForm/SignInForm';

import css from './SignInPage.module.css';

function SignInPage() {
  return (
    <>
      <div className={css.signInContainer}>
        <SignInForm></SignInForm>
        <div className={css.advantageContainer}>
          <AdvantagesSection></AdvantagesSection>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
