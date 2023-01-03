import Race from '../src/race';

// Since it's an abstract class, we need to create a child class to test it
class RaceTested extends Race {};
let raceTested: Race;

beforeAll(() => {
  raceTested = new RaceTested({
    name: 'Tested',
    speed: 30,
    size: 'Medium',
  });
});

describe ('Race properties tests', () => {
  it ('Should have a name', () => {
    expect(raceTested).toHaveProperty('name');
    expect(typeof raceTested.name).toBe('string');
  });

  it ('Should have a speed', () => {
    expect(raceTested).toHaveProperty('speed');
    expect(typeof raceTested.speed).toBe('number');
  });

  it ('Should have a size', () => {
    expect(raceTested).toHaveProperty('size');
    expect(typeof raceTested.size).toBe('string');
  });
});

describe ('Parameters given at constructor', () => {
  it ('Should assign all the properties properly', () => {
    const otherRaceTested = new RaceTested({
      name: 'KissFan',
      speed: 45,
      size: 'Large',
    });
    expect(otherRaceTested.name).toBe('KissFan');
    expect(otherRaceTested.speed).toBe(45);
    expect(otherRaceTested.size).toBe('Large');
  });

  it ('Should not have a negative speed', () => {
    expect(() => { new RaceTested({ name: 'Tested', speed: -1, size: 'Medium' }) }).toThrowError('The speed of the race cannot be negative');
  });
});