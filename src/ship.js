function Ship(port) {
  this.currentPort = port;
}

Ship.prototype.setSail = function setSail() {
  this.currentPort = '';
};

Ship.prototype.dock = function dock(newPort) {
  this.currentPort = newPort;
};

module.exports = Ship;
