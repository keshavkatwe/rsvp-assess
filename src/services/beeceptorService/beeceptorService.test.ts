import { submitUserInfo } from './beeceptorService';

describe('should test beeceptor service', () => {
  it('should test api', async () => {
    global.fetch = jest.fn().mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolve({
            ok: true,
            json: () => ({}),
          });
        })
    );
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
