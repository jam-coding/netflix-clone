import HeaderContainer from "../containers/header";
import FaqsContainer from "../containers/faqs";
import FooterContainer from "../containers/footer";
import JumbotronContainer from "../containers/jumbotron";
import OptForm from "../components/opt-form";
import Feature from "../components/feature";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
            <OptForm.Break />
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Getting Started</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
