import Router from './Router';
import Organizer from './controllers/Organizer';
import DashboardController from './controllers/DashboardController';
import LoginController from './controllers/LoginController';
import UserEventController from './controllers/UserEventController';

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
  },
  {
    url: '/events',
    controller: UserEventController
  }
];

new Router(routes);
