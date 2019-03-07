const Port = require('../src/port');

describe('Port', () => {
  const port = new Port('Calais');

  it('returns an object when instantiated', () => {
    expect(port).toBeInstanceOf(Object);
  });

  it('the port has a name', () => {
    expect(port.name).toEqual('Calais');
  });
});
