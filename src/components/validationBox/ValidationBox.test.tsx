import { render, screen } from '@testing-library/react';
import ValidationBox from './ValidationBox';

describe('should test validation box', () => {
  it('should render validation box with error', () => {
    render(<ValidationBox error="This is required">Hello</ValidationBox>);
    const errorDom = screen.getByTestId('errorText');
    expect(errorDom.innerHTML).toBe('This is required');
  });
});
