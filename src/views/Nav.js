export default (isLoggedIn) => {
  if (isLoggedIn) {
    return `
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid d-flex justify-content-space-evenly">
          <a class="navbar-brand text-primary">Organizer</a>
          <form class="d-flex align-items-center">
            <a href="/events" class="btn btn-outline-success ms-4" id="eventsButton">Events</a>
            <button class="btn btn-outline-danger ms-4" id="logoutButton">Logout</button>
          </form>
        </div>
      </nav>
    `;
  }
  return `
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid d-flex justify-content-space-evenly">
        <a class="navbar-brand text-primary">Organizer</a>
        <form class="d-flex align-items-center">
          <button class="btn btn-outline-success ms-4" id="loginButton" type="button">Login</button>
        </form>
      </div>
    </nav>
  `;
};
