// Please remember to follow the track from a dev branch. It makes giving feedback a lot easier.
// Because the controller is never used in the node environment, I'm not sure you need to wrap it in an IIFE.
// Doesn't break anything in this instance though.
(function exportController() {
  class Controller {
    constructor(ship) {
      this.initialiseSea();
      this.ship = ship;
      document.querySelector('#sailbutton').addEventListener('click', () => {
        this.setSail();
      });
      this.createDisplay();
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
        // Try to keep your variables declared as far up the block as you can.
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
      const nextPortIndex = ship.itinerary.ports.indexOf(ship.currentPort) + 1;
      const portElement = document.querySelector(`[data-port-index = "${nextPortIndex}"]`);
      if (!portElement) {
        this.renderMessage('Your journey has finished. Please disembark!');
        return;
      }
      const portPosition = portElement.offsetLeft;
      const shipElement = document.querySelector('#ship');
      let shipPosition = shipElement.offsetLeft;
      ship.setSail();
      const departingMessage = `Now departing ${ship.previousPort.name}`;
      const sailing = setInterval(() => {
        if (shipPosition === portPosition - 32) {
          clearInterval(sailing);
        }
        shipElement.style.left = `${shipPosition + 1}px`;
        shipPosition += 1;
      }, 10);
      ship.dock();
      const dockingMessage = `Now docking at ${ship.currentPort.name}`;
      this.renderMessage(departingMessage);
      window.setTimeout(() => {
        this.renderMessage(dockingMessage);
      }, 2000);
      window.setTimeout(() => {
        this.createDisplay();
      }, 3000);
    }

    renderMessage(message) {
      const newMessageElement = document.createElement('div');
      newMessageElement.id = 'message';
      newMessageElement.innerHTML = message;
      const viewport = document.querySelector('#viewport');
      viewport.appendChild(newMessageElement);
      window.setTimeout(() => {
        viewport.removeChild(newMessageElement);
      }, 2000);
    }

    createDisplay() {
      const ship = this.ship;
      const portIndex = ship.itinerary.ports.indexOf(ship.currentPort) + 1;
      const currentPortElement = document.getElementById('currentPort');
      const nextPortElement = document.getElementById('nextPort');
      currentPortElement.innerHTML = `Current port: ${ship.currentPort.name}`;
      if (portIndex < ship.itinerary.ports.length) {
        nextPortElement.innerHTML = `Next port: ${ship.itinerary.ports[portIndex].name}`;
      } else {
        nextPortElement.innerHTML = 'You are at you final destination';
      }
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
}());
