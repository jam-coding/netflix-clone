import { Container, Input, Text, Button, Break } from "./styles/opt-form";

const OptForm = ({ children, ...restProps }) => {
  return <Container>{children}</Container>;
};

export default OptForm;

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Break = function OptFormBreak() {
  return <Break />;
};
