import Router from './Router';
import Organizer from './controllers/Organizer';
import createLoginPage from './views/login';
import createDashboardPage from './views/dashboard';

const routes = [
  {
    url: '/',
    controller: Organizer
  },
  {
    url: '/login',
    controller: () => {
      document.getElementById('root').innerHTML = createLoginPage();
    }
  },
  {
    url: '/dashboard',
    controller: () => {
      createDashboardPage();
    }
  }
];

new Router(routes);
