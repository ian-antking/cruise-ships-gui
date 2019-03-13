const Ship = require('../src/ship');
const Port = require('../src/port');

describe('Ship', () => {
  // const mockPort = jest.fn();
  // const ship = new Ship(mockPort);

  const port = new Port('Liverpool');
  const ship = new Ship(port);

  it('returns an object when instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });

  // it('has a starting port', () => {
  //   expect(ship.currentPort).toEqual(mockPort);
  // });
  it('has a starting port', () => {
    expect(ship.currentPort).toEqual(port);
  });
});

describe('Set sail', () => {
  // const mockPort = jest.fn(); // using a mock to simulate a port
  // const ship = new Ship(mockPort);
  const port = new Port('Belfast');
  const ship = new Ship(port);

  // it('sets sail', () => {
  //   ship.setSail();
  //   expect(ship.currentPort).toBeFalsy();
  // });
  it('sets sail', () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
});

describe('Dock', () => {
  // const mockPort = jest.fn(); // using a mock to simulate a port
  // const ship = new Ship(mockPort);
  let port;
  let ship;

  beforeEach(() => {
    port = new Port('Dover');
    ship = new Ship(port);
  });

  it('Docks at a new port', () => {
    // const newMockPort = jest.fn();
    // ship.dock(newMockPort);
    const newPort = new Port('Calais');
    ship.dock(newPort);
    expect(ship.currentPort).toBeTruthy();
  });

  it('Ship > gets added to the port on instantiation', () => {
    expect(ship.currentPort.ships).toEqual([ship]);
  });

  it('Ship > can dock at a different port', () => {
    const newPort = new Port('Ayr');
    ship.dock(newPort);
    expect(ship.currentPort).toEqual(newPort);
    expect(ship.currentPort.ships).toEqual([ship]);
  });
});
