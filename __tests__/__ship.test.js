const Ship = require('../src/ship');

describe('Ship', () => {
  const ship = new Ship('Plymouth');

  it('returns an object when instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    expect(ship.startingPort).toEqual('Plymouth');
  });
});

describe('Set sail', () => {
  const ship = new Ship('Plymouth');

  it('sets sail', () => {
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
});
