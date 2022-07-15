import { render } from '@testing-library/react';
import Home from './Home';

describe('test home page', () => {
  it('should render homepage', () => {
    render(<Home />);
  });
});
