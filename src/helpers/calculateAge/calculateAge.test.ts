import calculateAge from './calculateAge';

describe('should test calculate age', () => {
  it('should test age', () => {
    expect(calculateAge('1991-02-18')).toEqual(31);
  });
});
