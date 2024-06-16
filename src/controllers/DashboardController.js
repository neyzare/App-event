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
      this.showMessage('Vous devez être connecté pour créer un événement.', 'error');
      return;
    }

    try {
      const response = await this.postEvent(eventData);
      if (response.status === 201) {
        event.target.reset();
        this.showMessage('Événement créé avec succès', 'success');
        this.fetchUserEvents(); // Mise à jour des événements affichés après la création
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
      } else {
        this.showMessage(`Erreur de récupération des événements : ${response.data.message}`, 'error');
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
