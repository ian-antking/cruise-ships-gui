const Ship = require('../src/ship');
const Port = require('../src/port');

describe('Ship', () => {
  const port = new Port('Dover');
  const ship = new Ship(port);

  it('returns an object when instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    expect(ship.startingPort).toBeInstanceOf(Port);
  });
});

describe('Set sail', () => {
  const port = new Port('Dover');
  const ship = new Ship(port);

  it('sets sail', () => {
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
});

describe('Dock', () => {
  const port = new Port('Dover');
  const ship = new Ship(port);

  it('Docks', () => {
    const newPort = new Port('Calais');
    ship.dock(newPort);
    expect(ship.startingPort).toBeTruthy();
  });
});
