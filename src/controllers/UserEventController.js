import axios from 'axios';

const UserEvents = async () => {
  const userId = localStorage.getItem('userId');
  let events = [];

  try {
    const response = await axios.get(`http://localhost/user-events?user_id=${userId}`);
    if (response.status === 200) {
      events = response.data;
    }
  } catch (error) {
    console.error('Error fetching user events:', error);
  }

  return `
    <div>
      <h1>My Events</h1>
      <ul>
        ${events.map((event) => `
          <li>
            <h2>${event.title}</h2>
            <p>${event.description}</p>
            <p>${event.date}</p>
            <p>${event.location}</p>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
};

export default UserEvents;
