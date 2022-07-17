import { render } from '@testing-library/react';
import UserDetails from './UserDetails';

describe('should test user details', () => {
  it('should render user details', () => {
    render(
      <UserDetails
        firstName="John"
        lastName="Doe"
        dob="1991-02-18"
        age={20}
        profession="Student"
        noOfGuests={1}
        locality="Delhi"
        address="Delhi, Bangalore"
      />
    );
  });
});
