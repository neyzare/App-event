import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie
import login from '../views/login';

const LoginController = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  async handleLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const loginData = {
      email: formData.get('email'),
      mot_de_passe: formData.get('mot_de_passe')
    };

    try {
      const response = await this.postLogin(loginData);
      if (response.status === 200) {
        this.showMessage('Connexion réussie', 'success');
        Cookies.set('isLoggedIn', 'true', { expires: 7 });
        Cookies.set('session_id', response.data.session_id);
        console.log(response.data.id);
        window.location.href = '/';
      } else {
        this.showMessage(`Erreur de connexion : ${response.data.message}`, 'error');
      }
    } catch (error) {
      if (error.response) {
        this.showMessage(`Erreur de connexion : ${error.response.data.message}`, 'error');
      } else {
        this.showMessage(`Erreur de connexion : ${error.message}`, 'error');
      }
    }
  }

  async handleRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const registerData = {};
    formData.forEach((value, key) => {
      registerData[key] = value;
    });

    try {
      const response = await this.postRegister(registerData);
      if (response.status === 200) {
        event.target.reset();
        this.showMessage('Inscription réussie', 'success');
      }
    } catch (error) {
      this.showMessage(`Erreur d'inscription : ${error.message}`, 'error');
    }
  }

  initializeForms() {
    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', this.handleLogin.bind(this));
    }

    const registerForm = document.querySelector('#registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', this.handleRegister.bind(this));
    }

    const loginButton = document.querySelector('#loginButton');
    if (loginButton) {
      loginButton.addEventListener('click', () => { window.location.href = '/login'; });
    }

    const logoutButton = document.querySelector('#logoutButton');
    if (logoutButton) {
      logoutButton.addEventListener('click', this.handleLogout.bind(this));
    }
  }

  async postLogin(loginData) {
    return axios.post('http://127.0.0.1:80/verifs', loginData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async postRegister(registerData) {
    return axios.post('http://localhost/login', registerData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  handleLogout() {
    Cookies.remove('isLoggedIn');
    Cookies.remove('user_id');
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
    return `${login()}`;
  }

  run() {
    this.el.innerHTML = this.render();
    this.initializeForms();
  }
};

export default LoginController;
