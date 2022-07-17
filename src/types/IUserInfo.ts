export interface IUserInfo {
  id: number;
  age: number;
  firstName: string;
  lastName: string;
  dob: Date;
  profession: 'Employed' | 'Student';
  locality: string;
  noOfGuest: 1 | 2;
  address: string;
}
