import { render } from '@testing-library/react';
import Modal from './modal';

describe('should test modal', () => {
  it('should render modal', () => {
    render(<Modal isShow>Hello</Modal>);
  });

  it('should not show modal', () => {
    render(<Modal isShow={false}>Hello</Modal>);
  });
});
