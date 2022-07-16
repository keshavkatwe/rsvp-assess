import { fireEvent, render, screen } from '@testing-library/react';
import Registration from './Registration';

const typeInDom = (testId: string, value?: string | number) => {
  const elementDom = screen.getByTestId(testId);
  if (value) {
    fireEvent.change(elementDom, {
      target: {
        value,
      },
    });
  } else {
    fireEvent.click(elementDom);
  }
};

describe('should test registration page', () => {
  it('should render page', () => {
    render(<Registration />);
    const buttonDom = screen.getByTestId('submitButton');
    fireEvent.click(buttonDom);

    typeInDom('firstNameInput', 'John');
    typeInDom('lastNameInput', 'Doe');
    typeInDom('dobInput', '1991-02-18');
    typeInDom('radio_button_Employed');
    typeInDom('localityInput', 'Bangalore');
    typeInDom('radio_button_1');
    typeInDom('addressInput', 'Bangalore');

    fireEvent.click(buttonDom);
  });
});
