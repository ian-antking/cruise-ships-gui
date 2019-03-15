const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship', () => {
  // const mockPort = jest.fn();
  // const ship = new Ship(mockPort);

  const port = new Port('Liverpool');
  const itinerary = new Itinerary([port]);
  const ship = new Ship(itinerary);

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

  it('Ship > can set sail', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    
    expect(ship.currentPort).toBeFalsy();
    expect(dover.ships).not.toContain(ship);
  });
});

describe('Dock', () => {
  // const mockPort = jest.fn(); // using a mock to simulate a port
  // const ship = new Ship(mockPort);
  let dover;
  let itinerary;
  let ship;

  beforeEach(() => {
    dover = new Port('Dover');
  });

  it('Ship > gets added to the port on instantiation', () => {
    itinerary = new Itinerary([dover]);
    ship = new Ship(itinerary);
    expect(dover.ships).toContain(ship);
  });

  it('Ship > can dock at a different port', () => {
    const calais = new Port('Calais');
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });
});
