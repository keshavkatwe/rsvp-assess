import { render } from '@testing-library/react';
import BottomSheet from './bottomSheet';

describe('should test modal', () => {
  it('should render modal', () => {
    render(<BottomSheet isShow>Hello</BottomSheet>);
  });

  it('should not show modal', () => {
    render(<BottomSheet isShow={false}>Hello</BottomSheet>);
  });
});
