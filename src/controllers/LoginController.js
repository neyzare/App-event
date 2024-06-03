import axios from 'axios';
import login from '../views/login';

const LoginController = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  async handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const eventData = {};
    formData.forEach((value, key) => {
      eventData[key] = value;
    });

    eventData.userId = document.querySelector('#userId').value;
    eventData.dateCreation = new Date().toISOString().slice(0, 10).replace('T', '');

    try {
      const response = await this.postRegister(eventData);
      if (response.status === 201) {
        e.target.reset();
      }
    } catch (error) {
      console.log('erreur', error);
    }
  }

  initializeLoginForm() {
    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', this.handleSubmit.bind(this));
    }
  }

  async postRegister(eventData) {
    return axios.post('http://localhost/login', eventData);
  }

  render() {
    return `
      ${login()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.initializeLoginForm();
  }
};

export default LoginController;
