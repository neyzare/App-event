import Cookies from 'js-cookie';
import viewNav from '../views/Nav';
import carroussel from '../views/carroussel';
import card from '../views/card';

const Organizer = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();
  }

  initializeEventListeners() {
    const loginButton = document.querySelector('#loginButton');
    if (loginButton) {
      loginButton.addEventListener('click', () => { window.location.href = '/login'; });
    }

    const logoutButton = document.querySelector('#logoutButton');
    if (logoutButton) {
      logoutButton.addEventListener('click', this.handleLogout.bind(this));
    }
  }

  handleLogout() {
    Cookies.remove('isLoggedIn'); // Supprimer le cookie isLoggedIn
    Cookies.remove('user_id'); // Supprimer le cookie user_id
    window.location.href = '/login'; // Rediriger vers la page de connexion après déconnexion
    this.showMessage('Déconnexion réussie', 'success');
  }

  showMessage(message, type) {
    const messageContainer = document.createElement('div');
    messageContainer.className = `message ${type}`;
    messageContainer.textContent = message;
    this.el.appendChild(messageContainer);
    setTimeout(() => {
      messageContainer.remove();
    }, 3000);
  }

  render() {
    const isLoggedIn = Cookies.get('isLoggedIn') === 'true';
    return `
      ${viewNav(isLoggedIn)}
      ${carroussel()}
      ${card()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.initializeEventListeners();
  }
};

export default Organizer;
