import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('test home page', () => {
  it('should render homepage', async () => {
    global.fetch = jest.fn().mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolve({
            ok: true,
            json: () => ({
              data: [],
            }),
          });
        })
    );
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });
});
