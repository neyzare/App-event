export default () => (`
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid d-flex justify-content-space-evenly">
    <a class="navbar-brand text-primary">Organizer</a>
    <form class="d-flex align-items-center">
    <span>User</span>
    <button  href="/login" class="btn btn-outline-success ms-4" id="loginButton" type="submit">Login</button>
    </form>
  </div>
</nav>
`);
