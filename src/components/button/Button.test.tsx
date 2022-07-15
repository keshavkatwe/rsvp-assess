import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('test button', () => {
  it('should render button', () => {
    render(<Button>Submit</Button>);
    const primaryButton = screen.getByRole('button');
    expect(primaryButton.innerHTML).toBe('Submit');
  });
});
