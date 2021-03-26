import {
  Container,
  Inner,
  Item,
  Pane,
  Title,
  SubTitle,
  Image,
} from "./styles/jumbotron";

const Jumbotron = ({ children, direction = "row" }) => {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({ children }) {
  return <Container>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children }) {
  return <Pane>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children }) {
  return <Title>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children }) {
  return <SubTitle>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
