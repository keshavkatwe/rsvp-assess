import { postRequest } from '../service';
import { IUserInfo } from '../../types/IUserInfo';

const baseUrl = 'https://keshav-rsvp1.free.beeceptor.com/';

export const submitUserInfo = (req: IUserInfo) =>
  postRequest(`${baseUrl}my/api/path`, req);
