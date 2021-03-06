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
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      profession: 'Student',
      noOfGuest: 2,
      locality: 'India',
      dob: new Date(),
      address: 'aa',
      age: 12,
    });
    expect(res).toBeTruthy();
  });
});
