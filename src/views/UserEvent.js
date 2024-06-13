const userEvents = (events) => `
  <h2>Mes Événements</h2>
  <div class="events">
    ${events.map(event => `
      <div class="event">
        <h3>${event.title}</h3>
        <p>${event.description}</p>
        <p><strong>Date:</strong> ${new Date(event.date).toLocaleString()}</p>
      </div>
    `).join('')}
  </div>
`;

export default userEvents;
