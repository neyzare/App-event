import dashboard from '../views/dashboard';
import axios from 'axios';

class DashboardController {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  render() {
    return `
      ${dashboard()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    new EventForm();
  }
}

class EventForm {
  constructor() {
    this.form = document.querySelector('#eventForm');
    if (this.form) {
      this.addSubmitEvent();
    }
  }

  addSubmitEvent() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  async handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(this.form);
    const eventData = {};
    formData.forEach((value, key) => {
      eventData[key] = value;
    });

    eventData.organisateur_id = document.getElementById('organisateurId').value;
    eventData.date_creation = new Date().toISOString().slice(0, 19).replace('T', ' ');

    try {
      const response = await this.postEvent(eventData);
      if (response.status === 201) {
        this.form.reset();
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  }

  async postEvent(eventData) {
    return axios.post('http://localhost/event', eventData);
  }
}

export default DashboardController;
