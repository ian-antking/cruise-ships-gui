const Itinerary = require('../src/itinerary');

describe('itinerary', () => {
  const dover = jest.fn(); // mock
  const calais = jest.fn(); // mock
  const ports = [dover, calais];
  const itinerary = new Itinerary(ports);

  it('instantiates an object', () => {
    expect(itinerary).toBeInstanceOf(Object);
  });

  it('instantiates with an array of ports', () => {
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
