import Header from "../components/header";
import * as ROUTES from "../constants/routes";

const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo alt="Home" src="/images/misc/logo.svg" to={ROUTES.HOME} />
        <Header.ButtonLink>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
};

export default HeaderContainer;
