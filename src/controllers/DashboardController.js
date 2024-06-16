import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie
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

    const organisateurId = Cookies.get('session_id');
    if (!organisateurId) {
      console.log('il faut que vous ce connecter');
      return;
    }

    try {
      const response = await this.postEvent(eventData);
      if (response.status === 201) {
        event.target.reset();
        window.location.href = '/';
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

  async fetchUserEvents() {
    const userId = Cookies.get('session_id');

    try {
      const response = await axios.get(`http://localhost/user-events/${userId}`);
      if (response.status === 200) {
        this.renderUserEvents(response.data.created_events);
      } 
    } catch (error) {
      this.showMessage(`Erreur de récupération des événements : ${error.message}`, 'error');
    }
  }

  renderUserEvents(events) {
    const eventList = document.querySelector('#eventList');
    if (!events.length) {
      eventList.innerHTML = '<p>Aucun événement créé.</p>';
      return;
    }

    eventList.innerHTML = events.map((event) => `
      <div class="event">
        <h3>${event.nom}</h3>
        <p>${event.description}</p>
        <p>${event.date_debut} - ${event.date_fin}</p>
      </div>
    `).join('');
  }

  render() {
    return `
      ${dashboard()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.initializeEventForm();
    this.fetchUserEvents(); // Récupérer les événements créés par l'utilisateur lors du chargement
  }

  initializeEventForm() {
    const form = document.querySelector('#eventForm');
    if (form) {
      form.addEventListener('submit', this.handleSubmit.bind(this));
    }
  }
  
};

export default DashboardController;
