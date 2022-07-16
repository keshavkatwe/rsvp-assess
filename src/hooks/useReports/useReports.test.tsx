import { renderHook } from '@testing-library/react';
import { ReactNode } from 'react';
import { act } from 'react-dom/test-utils';
import { useUserData } from '../../store/userStore/userStore';
import UserStoreProvider from '../../store/userStore/userStoreProvider';
import useReports from './useReports';

describe('should test useReports hook', () => {
  it('should test happy case', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <UserStoreProvider>{children}</UserStoreProvider>
    );

    const { result } = renderHook(
      () => ({
        useReports: useReports(),
        useUserData: useUserData(),
      }),
      { wrapper }
    );

    act(() => {
      result.current.useUserData[1]({
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
            age: 14,
          },
          {
            firstName: 'John',
            lastName: 'Doe',
            profession: 'Student',
            noOfGuest: 2,
            locality: 'India',
            dob: new Date(),
            address: 'aa',
            age: 20,
          },
        ],
      });
    });

    expect(result.current.useReports.avgGroupSize).toEqual(2);
    expect(result.current.useReports.ageRange).toEqual([
      ['Age Range', 'Count'],
      ['13-18', 1],
      ['18-25', 1],
      ['25+', 0],
    ]);
  });
});
