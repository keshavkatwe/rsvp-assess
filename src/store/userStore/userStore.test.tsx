import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { ReactNode } from 'react';
import { useUserData } from './userStore';
import UserStoreProvider from './userStoreProvider';

describe('should test userStore', () => {
  it('should check happy flow', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <UserStoreProvider>{children}</UserStoreProvider>
    );
    const { result } = renderHook(() => useUserData(), { wrapper });

    expect(result.current[0].users.length).toEqual(0);
    act(() => {
      result.current[1]({
        type: 'setList',
        data: [
          {
            firstName: 'John',
            lastName: 'Doe',
            profession: 'Student',
            noOfGuest: 2,
            locality: 'India',
            dob: new Date(),
            address: 'aa',
            age: 12,
          },
        ],
      });
    });

    expect(result.current[0].users.length).toEqual(1);
  });
});
