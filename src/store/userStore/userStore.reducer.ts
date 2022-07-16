import { IUserDataActions, IUserState } from './userStore.types';

const UserStoreReducer = (state: IUserState, action: IUserDataActions) =>
  // if (action.type === 'setList') {
  ({
    ...state,
    users: action.data,
  });
// }
// return state;
export default UserStoreReducer;
