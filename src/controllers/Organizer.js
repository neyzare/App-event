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
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
    window.location.href = '/login';
    this.showMessage('Déconnexion réussie', 'success');
    this.render();
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
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
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
