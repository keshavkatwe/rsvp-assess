import { createContext } from 'react';
import { IUserDataContext, IUserState } from './userStore.types';

const initialState: IUserState = {
  users: [],
};

export const UserStoreContext = createContext<IUserDataContext>({
  state: initialState,
});
