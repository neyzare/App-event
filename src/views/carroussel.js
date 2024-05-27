import mariage from '../assets/wedding-couple-france.jpg';
import anniversaire from '../assets/delicious-birthday-cake-with-candles.jpg';
import seminaire from '../assets/GA5ZXRT3GJCBHNYQD6XMVOLQPU.jpg';
import '../css/carroussel.css';

export default () => (`
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src=${mariage} class="d-block w-100" alt="logo">
    </div>
    <div class="carousel-item">
      <img src=${anniversaire} class="d-block w-100" alt="logo">
    </div>
    <div class="carousel-item">
      <img src=${seminaire} class="d-block w-100" alt="logo"
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
`);
