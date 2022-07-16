import { render } from '@testing-library/react';
import Container from './Container';

describe('should test container', () => {
  it('should display happy flow', () => {
    render(<Container margin={[20]}>Hello</Container>);
  });
});
