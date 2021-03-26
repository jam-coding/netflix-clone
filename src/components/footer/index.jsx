import {
  Break,
  Column,
  Container,
  Link,
  Row,
  Text,
  Title,
} from "./styles/footer";

const Footer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Footer;

Footer.Column = function FooterColumn({ children }) {
  return <Column>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Row = function FooterRow({ children }) {
  return <Row>{children}</Row>;
};

Footer.Title = function FooterTitle({ children }) {
  return <Title>{children}</Title>;
};

Footer.Text = function FooterText({ children }) {
  return <Text>{children} </Text>;
};

Footer.Break = function FooterBreak({ children }) {
  return <Break>{children} </Break>;
};
