const Ship = require('../src/ship');
const Port = require('../src/port');

describe('Ship', () => {
  // const port = new Port('Dover');
  const mockPort = jest.fn();
  const ship = new Ship(mockPort);

  it('returns an object when instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    expect(ship.currentPort).toEqual(mockPort);
  });
});

describe('Set sail', () => {
  // const port = new Port('Dover');
  const mockPort = jest.fn(); // using a mock to simulate a port
  const ship = new Ship(mockPort);

  it('sets sail', () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
});

describe('Dock', () => {
  const port = new Port('Dover');
  const ship = new Ship(port);

  it('Docks', () => {
    const newPort = new Port('Calais');
    ship.dock(newPort);
    expect(ship.currentPort).toBeTruthy();
  });
});
