import { submitUserInfo } from './beeceptorService';

describe('should test beeceptor service', () => {
  it('should test api', async () => {
    const res = await submitUserInfo({
      firstName: 'John',
      lastName: 'Doe',
      profession: 'Student',
      noOfGuest: 2,
      locality: 'India',
      dob: new Date(),
      address: 'aa',
    });
    expect(res).toBeTruthy();
  });
});
