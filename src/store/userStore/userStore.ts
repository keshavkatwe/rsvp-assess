import { useCallback, useContext } from 'react';
import { IUserDataActions, IUserState } from './userStore.types';
import { UserStoreContext } from './userStore.context';

export * from './userStore.context';
export const useUserData = (): [
  IUserState,
  (req: IUserDataActions) => void
] => {
  const { state, dispatch } = useContext(UserStoreContext);
  const dispatchAction = useCallback(
    (req: IUserDataActions) => dispatch(req),
    [dispatch]
  );
  return [state, dispatchAction];
};
