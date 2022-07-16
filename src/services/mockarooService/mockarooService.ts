import { getRequest } from '../service';
import { IUserInfo } from '../../types/IUserInfo';

const baseUrl = 'http://localhost:3000/';

export const getUsersList = (): Promise<{ data: IUserInfo[] }> =>
  getRequest(`${baseUrl}/list.json`);
