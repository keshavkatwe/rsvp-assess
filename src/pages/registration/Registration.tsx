import FlexBox from 'components/flexbox/FlexBox';
import Container from '../../components/container/Container';

function Registration() {
  return (
    <FlexBox display="flex" direction="column" isFullHeight>
      <Container>
        <h1>Hello</h1>
        <h2>World</h2>
      </Container>

      <FlexBox display="flex" direction="column" flexGrow={2}>
        <Container
          borderRadius={[30, 30, 0, 0]}
          backgroundColor="secondaryBackground"
          height="100%"
        >
          Hello
        </Container>
      </FlexBox>
    </FlexBox>
  );
}
export default Registration;
