import { ReactNode, useMemo, useReducer } from 'react';
import { UserStoreContext } from './userStore.context';
import userStoreReducer from './userStore.reducer';

function UserStoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(userStoreReducer, {
    users: [],
  });

  const providerVal = useMemo(
    () => ({
      dispatch,
      state,
    }),
    [state]
  );
  return (
    <UserStoreContext.Provider value={providerVal}>
      {children}
    </UserStoreContext.Provider>
  );
}
export default UserStoreProvider;
