const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('itinerary', () => {
  const dover = new Port('Dover');
  const calais = new Port('Calais');
  const ports = [dover, calais];
  const itinerary = new Itinerary(ports);

  it('instantiates an object', () => {
    expect(itinerary).toBeInstanceOf(Object);
  });

  it('instantiates with an array of ports', () => {
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
