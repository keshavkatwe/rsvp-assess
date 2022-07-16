import { render } from '@testing-library/react';
import Reports from './reports';

describe('should render reports page', () => {
  it('should render happy flow', () => {
    render(<Reports />);
  });
});
