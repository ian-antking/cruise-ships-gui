const Itinerary = require('../src/itinerary');

describe('itinerary', () => {
  const mockPort = jest.fn();
  const itinerary = new Itinerary(mockPort);

  it('instantiates an object', () => {
    expect(itinerary).toBeInstanceOf(Object);
  });

  it('has a ports array with a port in it', () => {
    expect(itinerary.ports).toEqual([mockPort]);
  });
});

describe('adds a port', () => {
  it('adds a port to the array', () => {
    const dover = { name: 'Dover' };
    const calais = { name: 'Calais' };
    const itinerary = new Itinerary(dover);
    itinerary.addPort(calais);
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
