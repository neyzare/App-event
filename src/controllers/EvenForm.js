import axios from 'axios';

export default class EventForm {
  constructor(formId) {
    this.form = document.querySelector(formId);
    if (this.form) {
      this.addSubmitEvent();
    }
  }

  addSubmitEvent() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  async handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(this.form);
    const eventData = {};

    formData.forEach((value, key) => {
      eventData[key] = value;
    });

    try {
      const response = await this.postEvent(eventData);

      if (response.status === 201) {  // Changer le statut en fonction de votre API (201 pour création)
        alert('Événement ajouté avec succès.');
      } else {
        alert(`Erreur: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur de connexion au serveur.');
    }
  }

  async postEvent(eventData) {
    return axios.post('http://localhost/event', eventData);  // Assurez-vous que l'URL est correcte
  }
}
