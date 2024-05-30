import Router from './Router';
import Organizer from './controllers/Organizer';
import LoginController from './controllers/LoginController';
import DashboardController from './controllers/DashboardController';

const routes = [
  {
    url: '/',
    controller: Organizer
  },
  {
    url: '/login',
    controller: LoginController
  },
  {
    url: '/dashboard',
    controller: DashboardController
  }
];

new Router(routes);
