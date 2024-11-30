import AdvantagesSection from 'components/AdvantagesSection/advantages-section';
import SignUpForm from 'components/SignUpForm/SignUpForm';
import Container from 'components/Container/Container.jsx';

function SignUpPage() {
  return (
    <Container>
      <SignUpForm></SignUpForm>
      <AdvantagesSection></AdvantagesSection>
    </Container>
  );
}

export default SignUpPage;
