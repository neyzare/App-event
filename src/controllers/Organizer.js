import viewNav from '../views/Nav';
import carroussel from '../views/carroussel';
import card from '../views/card';

const Organizer = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();
  }

  

  render() {
    return `
      ${viewNav()}
      ${carroussel()}
      ${card()} 
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Organizer;
