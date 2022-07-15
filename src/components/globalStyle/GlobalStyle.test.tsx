import { render } from '@testing-library/react';
import GlobalStyle from './GlobalStyle';

describe('should test global style', () => {
  it('should render global styles', () => {
    render(<GlobalStyle />);
  });
});
