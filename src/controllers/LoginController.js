import axios from 'axios';
import login from '../views/login';

const LoginController = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.isLoggedIn = false;
    this.run();
  }

  async handleLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const loginData = {
      email: formData.get('email'),
      mot_de_passe: formData.get('mot_de_passe')
    };
    console.log(loginData);

    try {
      const response = await this.postLogin(loginData);
      if (response.data.code === '200') { // Vérifiez le code de réponse dans le payload
        this.showMessage('Connexion réussie', 'success');
        // Mettre à jour l'état de connexion
        this.isLoggedIn = true;
        // Rediriger vers la page principale
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
      if (response.data.code === '200') {
        event.target.reset();
        this.showMessage('Inscription réussie', 'success');
      }
    } catch (error) {
      this.showMessage(`Erreur d'inscription : ${error.message}`, 'error');
    }
  }

  initializeLoginForm() {
    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', this.handleLogin.bind(this));
    }
  }

  initializeRegisterForm() {
    const registerForm = document.querySelector('#registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', this.handleRegister.bind(this));
    }
  }

  async postLogin(loginData) {
    return axios.post('http://localhost/verifs', loginData, {
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
    this.initializeLoginForm();
    this.initializeRegisterForm();
  }
};

export default LoginController;
