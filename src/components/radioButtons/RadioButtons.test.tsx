import { fireEvent, render, screen } from '@testing-library/react';
import RadioButtons from './RadioButtons';

describe('test radio buttons', () => {
  it('should render radio', () => {
    const fn = jest.fn();
    render(
      <RadioButtons
        label="gender"
        possibleValues={['Male', 'Female']}
        onChange={fn}
      />
    );
    const maleButton = screen.getByTestId('radio_button_Male');
    fireEvent.click(maleButton);

    expect(fn).toBeCalledWith('Male');
  });
});
