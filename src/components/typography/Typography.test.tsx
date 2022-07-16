import { render, screen } from '@testing-library/react';
import Typography from './Typography';

describe('should test typography', () => {
  it('should render typography', () => {
    render(<Typography data-testid="test_text">Hello</Typography>);
    expect(screen.getByTestId('test_text').innerHTML).toEqual('Hello');
  });
});
