import { render, screen, waitFor } from '@testing-library/react';
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
    render(<Home />);
  });
});
