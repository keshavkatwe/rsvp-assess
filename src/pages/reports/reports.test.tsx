import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Reports from './reports';

describe('should render reports page', () => {
  it('should render happy flow', () => {
    render(
      <BrowserRouter>
        <Reports />
      </BrowserRouter>
    );
  });
});
