import viewNav from '../views/Nav';
import carroussel from '../views/carroussel';
import card from '../views/card';
import createLoginPage from '../views/login';
import createDashboardPage from '../views/dashboard';

const Organizer = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();
  }

  addEventListeners() {
    const loginButton = document.getElementById('loginButton');
    const buttonDashboard = document.querySelectorAll('.bouton-dashboard');
    if (loginButton) {
      loginButton.addEventListener('click', () => {
        this.showLoginPage();
      });
    }
    buttonDashboard.forEach((button) => {
      button.addEventListener('click', () => {
        this.showDashboardPage();
      });
    });
  }

  showLoginPage() {
    this.el.innerHTML = createLoginPage();
  }

  showDashboardPage() {
    this.el.innerHTML = createDashboardPage();
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
    this.addEventListeners();
  }
};

export default Organizer;
