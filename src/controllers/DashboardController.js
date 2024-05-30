import dashboard from "../views/dashboard";

const  DashboardController = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  render() {
    return `
     ${dashboard()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
}

export default DashboardController;
