const Port = require('../src/port');
// const Ship = require('../src/ship');

describe('Port', () => {
  const port = new Port('Calais');

  it('returns an object when instantiated', () => {
    expect(port).toBeInstanceOf(Object);
  });

  it('the port has a name', () => {
    expect(port.name).toEqual('Calais');
  });

  it('the port has an empty ships array', () => {
    expect(port.ships).toEqual([]);
  });
});

describe('adding and removing a ship from the port', () => {
  it('adds a ship to the port', () => {
    const port = new Port('Dover');
    const ship = {};
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });

  it('Removes a ship from the port', () => {
    const port = new Port('Belfast');
    const titanic = { name: 'titanic' };
    const queenMary = { name: 'Queen Mary' };

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });
});
