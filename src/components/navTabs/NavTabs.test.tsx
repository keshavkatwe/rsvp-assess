import { fireEvent, render, screen } from '@testing-library/react';
import NavTabs from './NavTabs';

describe('should test tabs', () => {
  it('should render tabs', () => {
    const fn = jest.fn();
    render(<NavTabs onClick={fn} activePage="home" />);
    const btn = screen.getByTestId('button_test_home');
    fireEvent.click(btn);
    expect(fn).toBeCalled();
  });
});
