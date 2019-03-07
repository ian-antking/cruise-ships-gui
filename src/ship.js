function Ship(port) {
  this.startingPort = port;
  this.docked = true;
}

Ship.prototype.setSail = function setSail() {
  this.startingPort = '';
};

Ship.prototype.dock = function dock(newPort) {
  this.startingPort = newPort;
};

module.exports = Ship;
