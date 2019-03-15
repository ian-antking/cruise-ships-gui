const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship', () => {
  describe('with ports and an itinerary', () => {
    let dover;
    let calais;
    let itinerary;
    let ship;

    beforeEach(() => {
      dover = new Port('Dover');
      calais = new Port('Calais');
      itinerary = new Itinerary([dover, calais]);
      ship = new Ship(itinerary);
    });

    it('can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
      expect(ship.currentPort).toEqual(dover);
    });

    it('Ship > gets added to the port on instantiation', () => {
      expect(dover.ships).toContain(ship);
    });

    it('Ship > can set sail', () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(dover.ships).not.toContain(ship);
    });

    it('Ship > can dock at a different port', () => {
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toEqual(calais);
      expect(calais.ships).toContain(ship);
    });
  });
});
