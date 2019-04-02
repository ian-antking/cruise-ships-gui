class Controller {
  constructor(ship) {
    this.initialiseSea();
    this.ship = ship;
    document.querySelector('#sailbutton').addEventListener('click', () => {
      this.setSail();
    });
  }

  initialiseSea() {
    const backgrounds = [
      './images/water0.png',
      './images/water1.png',
    ];
    let backgroundIndex = 0;
    window.setInterval(() => {
      document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
      backgroundIndex += 1;
    }, 1000);
  }

  renderPorts(ports) {
    const portsElement = document.querySelector('#ports');
    portsElement.style.width = '0px';
    ports.forEach((port, index) => {
      const newPortElement = document.createElement('div');
      newPortElement.className = 'port';
      newPortElement.dataset.portIndex = index;
      newPortElement.dataset.portName = port.name;
      portsElement.appendChild(newPortElement);
      const portsElementWidth = parseInt(portsElement.style.width, 10);
      portsElement.style.width = `${portsElementWidth + 256}px`;
    });
  }

  renderShip() {
    const ship = this.ship;
    const portIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const portElement = document.querySelector(`[data-port-index = "${portIndex}"]`);
    const shipElement = document.querySelector('#ship');
    shipElement.style.top = `${portElement.offsetTop + 32}px`;
    shipElement.style.left = `${portElement.offsetLeft - 32}px`;
  }

  setSail() {
    const ship = this.ship;
    const portIndex = ship.itinerary.ports.indexOf(ship.currentPort) + 1;
    const portElement = document.querySelector(`[data-port-index = "${portIndex}"]`);
    if (!portElement) {
      return alert('End of the line!');
    }
    const portPosition = portElement.offsetLeft;
    const shipElement = document.querySelector('#ship');
    let shipPosition = shipElement.offsetLeft;
    ship.setSail();
    let message = `Now departing ${ship.previousPort.name}`;
    this.renderMessage(message);
    const sailing = setInterval(() => {
      if (shipPosition === portPosition - 32) {
        clearInterval(sailing);
      }
      shipElement.style.left = `${shipPosition + 1}px`;
      shipPosition += 1;
    }, 10);
    ship.dock();
    message = `Now docking at ${ship.currentPort.name}`;
    this.renderMessage(message);
  }

  renderMessage(message) {
    const newMessageElement = document.createElement('div');
    newMessageElement.id = 'message';
    newMessageElement.innerHTML = message;
    document.querySelector('#viewport').appendChild(newMessageElement);
    window.setTimeout(() => {
      document.querySelector('#viewport').removeChild(newMessageElement);
    }, 2000);
  }
}
