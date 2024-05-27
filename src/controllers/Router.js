import Quatre04 from './Error404';

const Router = class {
  constructor(routes = []) {
    this.path = window.location.pathname;
    this.params = !window.location.home ? {} : Object.fromEntries(
      window.location.home
        .split('?')[1]
        .split('&')
        .map((param) => param.split('=')[0])
    );
    this.routes = routes;

    this.run();
  }

  startController() {
    let ifExist = false;

    for (let i = 0; i < this.routes.length; i += 1) {
      const route = this.routes[i];

      if (route.url === this.path) {
        const Controller = route.controller;

        new Controller(this.params);
        ifExist = true;

        break;
      }
    }

    if (!ifExist) {
      new Quatre04();
    }
  }

  run() {
    this.startController();
  }
};

export default Router;
