function Ship(port) {
  this.currentPort = port;
  this.currentPort.addShip(this);
}

Ship.prototype.setSail = function setSail() {
  this.currentPort = '';
};

Ship.prototype.dock = function dock(newPort) {
  this.currentPort = newPort;
  this.currentPort.addShip(this);
};

module.exports = Ship;
