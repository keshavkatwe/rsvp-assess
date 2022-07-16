import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { act } from 'react-dom/test-utils';
import Search from './search';
import UserStoreProvider from '../../store/userStore/userStoreProvider';
import { useUserData } from '../../store/userStore/userStore';

describe('should test search', () => {
  it('should render search page', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <UserStoreProvider>
        {children}
        <Search />
      </UserStoreProvider>
    );

    const { result } = renderHook(() => useUserData(), { wrapper });

    act(() => {
      result.current[1]({
        type: 'setList',
        data: [
          {
            firstName: 'Dunstan',
            lastName: 'Paireman',
            dob: new Date('1993-06-01'),
            profession: 'Employed',
            locality: 'Delhi',
            noOfGuest: 1,
            address: '018 Maple Wood Hill',
          },
          {
            firstName: 'Karlan',
            lastName: 'Bangle',
            dob: new Date('1997-12-17'),
            profession: 'Employed',
            locality: 'Mumbai',
            noOfGuest: 2,
            address: '28630 Fulton Crossing',
          },
        ],
      });
    });

    // render(<Search />, { wrapper });

    const item1 = screen.getByTestId('nameTest_Karlan');
    expect(item1).toBeInTheDocument();

    const inputDom = screen.getByTestId('input-search');
    fireEvent.change(inputDom, {
      target: {
        value: 'dun',
      },
    });

    const item2 = screen.queryByText('nameTest_Karlan');
    expect(item2).not.toBeInTheDocument();
  });
});
