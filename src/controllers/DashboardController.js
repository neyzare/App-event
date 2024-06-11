import axios from 'axios';
import dashboard from '../views/dashboard';

const DashboardController = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  async handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const eventData = {};
    formData.forEach((value, key) => {
      eventData[key] = value;
    });

    eventData.organisateur_id = document.getElementById('organisateurId').value;

    try {
      const response = await this.postEvent(eventData);
      if (response.status === 201) {
        event.target.reset();
        this.showMessage('Événement créé avec succès', 'success');
      }
    } catch (error) {
      this.showMessage(`Erreur : ${error.response ? error.response.data : error.message}`, 'error');
    }
  }

  async postEvent(eventData) {
    return axios.post('http://localhost/event', eventData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  render() {
    return `
      ${dashboard()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.initializeEventForm();
  }

  initializeEventForm() {
    const form = document.querySelector('#eventForm');
    if (form) {
      form.addEventListener('submit', this.handleSubmit.bind(this));
    }
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
};

export default DashboardController;
