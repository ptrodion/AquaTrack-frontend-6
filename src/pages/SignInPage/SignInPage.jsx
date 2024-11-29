import AdvantagesSection from 'components/AdvantagesSection/advantages-section';
import SignInForm from 'components/SignInForm/SignInForm';
import Container from 'components/Container/Container.jsx';

function SignInPage() {
  return (
    <>
      <Container>
        <SignInForm></SignInForm>
        <AdvantagesSection></AdvantagesSection>
      </Container>
    </>
  );
}

export default SignInPage;
