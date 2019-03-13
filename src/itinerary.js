function Itinerary(port) {
  this.ports = [port];
}

Itinerary.prototype.addPort = function addPort(port) {
  this.ports.push(port);
};
module.exports = Itinerary;
