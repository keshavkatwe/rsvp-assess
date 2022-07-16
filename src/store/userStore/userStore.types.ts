import { Dispatch } from 'react';
import { IUserInfo } from '../../types/IUserInfo';

export interface IUserState {
  users: IUserInfo[];
}

export interface IUpdateSchemaDataAction {
  type: 'setList';
  data: IUserInfo[];
}

export type IUserDataActions = IUpdateSchemaDataAction;

export interface IUserDataContext {
  state: IUserState;
  dispatch?: Dispatch<IUserDataActions>;
}
