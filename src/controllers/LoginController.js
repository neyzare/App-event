import login from "../views/login";

class LoginController {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.run();
  }

  render() {
    return `
     ${login()}
    `;
  }

  run() {
    this.render();
  }
}

export default LoginController;