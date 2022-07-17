import { fireEvent, renderHook, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import UserStoreProvider from '../../store/userStore/userStoreProvider';
import { useUserData } from '../../store/userStore/userStore';

describe('test home page', () => {
  it('should render search page', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <UserStoreProvider>
        <BrowserRouter>
          {children}
          <Home />
        </BrowserRouter>
      </UserStoreProvider>
    );

    const { result } = renderHook(() => useUserData(), { wrapper });

    act(() => {
      result.current[1]({
        type: 'setList',
        data: [
          {
            id: 1,
            firstName: 'Dunstan',
            lastName: 'Paireman',
            dob: new Date('1993-06-01'),
            profession: 'Employed',
            locality: 'Delhi',
            noOfGuest: 1,
            address: '018 Maple Wood Hill',
            age: 18,
          },
          {
            id: 2,
            firstName: 'Karlan',
            lastName: 'Bangle',
            dob: new Date('1997-12-17'),
            profession: 'Student',
            locality: 'Mumbai',
            noOfGuest: 2,
            address: '28630 Fulton Crossing',
            age: 18,
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

    const userItem = screen.getByTestId('user-item-Dunstan');
    fireEvent.click(userItem);

    const overlay = screen.getByTestId('bottom-sheet-overylay');
    fireEvent.click(overlay);
  });
});
