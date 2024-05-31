import axios from 'axios';

class EventForm {
  constructor() {
    this.form = document.querySelector('#eventForm');
    if (this.form) {
      console.log('Form found, adding submit event listener.');
      this.addSubmitEvent();
    } else {
      console.error('Form not found.');
    }
  }

  addSubmitEvent() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  async handleSubmit(event) {
    console.log('hello');
    event.preventDefault();

    const formData = new FormData(this.form);
    const eventData = {};

    formData.forEach((value, key) => {
      eventData[key] = value;
    });

    // Ajout de l'id_organisateur et du timestamp
    eventData.organisateur_id = document.getElementById('organisateurId').value;
    eventData.date_creation = new Date().toISOString().slice(0, 19).replace('T', ' ');

    try {
      const response = await this.postEvent(eventData);

      if (response.status === 201) {
        alert('Événement ajouté avec succès.');
        this.form.reset();
      } else {
        alert(`Erreur: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur de connexion au serveur.');
    }
  }

  async postEvent(eventData) {
    return axios.post('http://localhost/event', eventData);
  }
}

export default EventForm;
