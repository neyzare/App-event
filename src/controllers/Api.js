import axios from 'axios'

const Api = class {
  constructor(url) {
    this.url = url;
  }

  fetchData() {
    return axios.get(this.url)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
}

export default Api;