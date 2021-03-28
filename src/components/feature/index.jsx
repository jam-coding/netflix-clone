import { Container, Title, SubTitle } from "./styles/feature";

const Feature = ({ children, ...restProps }) => {
  return <Container>{children}</Container>;
};

export default Feature;

Feature.Title = function FeatureTitle({ children }) {
  return <Title>{children}</Title>;
};
Feature.SubTitle = function FeatureSubTitle({ children }) {
  return <SubTitle>{children}</SubTitle>;
};
