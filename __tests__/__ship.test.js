const Ship = require('../src/ship');

describe('Ship constructor', () => {
  const ship = new Ship('Plymouth');

  it('returns an object when instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    expect(ship.startingPort).toEqual('Plymouth');
  });
});
