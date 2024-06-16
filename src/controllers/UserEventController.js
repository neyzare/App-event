import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie

const UserEventController = class {
  constructor() {
    this.el = document.querySelector('#events');
    this.loadUserEvents();
  }

  async loadUserEvents() {
    const userId = Cookies.get('session_id');
    if (!userId) {
      console.error('User ID not found in cookies');
      return;
    }

    try {
      const response = await axios.get(`http://localhost/user-events/${userId}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        this.renderEvents(response.data);
      } else {
        console.error('Failed to load user events:', response.data.message);
      }
    } catch (error) {
      console.error('Error loading user events:', error.message);
    }
  }

  renderEvents(events) {
    this.el.innerHTML = events.map((event) => `
      <div class="event">
        <h2>${event.title}</h2>
        <p>${event.description}</p>
        <p>Date: ${event.date}</p>
      </div>
    `).join('');
  }
};

export default UserEventController;
