import { render } from '@testing-library/react';
import UserItem from './UserItem';

describe('should test user item', () => {
  it('should render user item', () => {
    render(<UserItem firstName="John" lastName="Doe" locality="Bangalore" />);
  });
});
