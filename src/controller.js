class Controller {
  constructor() {
    this.initialiseSea();
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

  renderShip(ship) {
    const port = ship.currentPort;
    const portIndex = ship.itinerary.ports.indexOf(port);
    const portElement = document.querySelector(`.port[data-port-index = "${portIndex}"]`);
    const portOffsetLeft = portElement.offsetLeft;
    const portWidth = portElement.offsetWidth;
    const shipElement = document.querySelector('#ship');
    const shipWidth = shipElement.offsetWidth;
    const shipPosition = portOffsetLeft - (shipWidth - portWidth) / 2;
    shipElement.style.left = `${shipPosition}px`;
  }
}
