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

    eventData.organisateurId = document.getElementById('organisateurId').value;
    eventData.dateCreation = new Date().toISOString().slice(0, 19).replace('T', ' ');

    try {
      const response = await this.postEvent(eventData);
      if (response.status === 201) {
        event.target.reset();
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  }

  async postEvent(eventData) {
    return axios.post('http://localhost/event', eventData);
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
}

export default DashboardController;
