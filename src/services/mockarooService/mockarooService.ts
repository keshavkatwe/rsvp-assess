import { getRequest } from '../service';
import { IUserInfo } from '../../types/IUserInfo';

const baseUrl = 'https://keshavkatwe.github.io/rsvp-assess';

export const getUsersList = (): Promise<{ data: IUserInfo[] }> =>
  getRequest(`${baseUrl}/list.json`);
