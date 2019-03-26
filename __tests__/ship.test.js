const Ship = require('../src/ship');

describe('Ship', () => {
  describe('with ports and an itinerary', () => {
    let dover;
    let calais;
    let itinerary;
    let ship;

    beforeEach(() => {
      // dover = new Port('Dover');
      const port = {
        removeShip: jest.fn(),
        addShip: jest.fn(),
      };
      dover = {
        ...port,
        name: 'Dover',
      };
      // calais = new Port('Calais');
      calais = {
        ...port,
        name: 'Calais',
      };
      // itinerary = new Itinerary([dover, calais]);
      itinerary = {
        ports: [dover, calais],
      };
      ship = new Ship(itinerary);
    });

    it('can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
      expect(ship.currentPort).toEqual(dover);
    });

    it('Ship > gets added to the port on instantiation', () => {
      // expect(dover.ships).toContain(ship);
      expect(dover.addShip).toHaveBeenCalledWith(ship); // using a spy
    });

    it('Ship > can set sail', () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(dover.removeShip).toHaveBeenCalledWith(ship); // using a spy
      // expect(dover.ships).not.toContain(ship);
    });

    it('Ship > can dock at a different port', () => {
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toEqual(calais);
      expect(calais.addShip).toHaveBeenCalledWith(ship); // using a spy
      // expect(calais.ships).toContain(ship);
    });
  });
});
