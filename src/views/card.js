import mariage from '../assets/portrait-happy-married-couple-handsome-groom-stylish-gray-suit-hugging-bride-wedding-dress-with-bouquet-while-posing-garden-wedding-day-ceremony.jpg';
import anniversaire from '../assets/happy-birthday-card-with-flowers-assortment.jpg';
import seminaire from '../assets/people-taking-part-business-event.jpg';
import '../css/card.css';

export default () => (`
  <div class="d-flex justify-content-around d-flex align-items-center containerCard">
  <div class="card" style="width: 18rem;">
  <img src=${mariage} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Mariage</h5>
        <p class="card-text">Créez votre conte de fées avec notre site dédié au mariage : planifiez, partagez, et célébrez chaque moment magique.</p>
        <a href="#" class="btn btn-primary bouton-dashboard">Organiser</a>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <img src=${anniversaire} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Anniversaire</h5>
        <p class="card-text">Célébrez vos moments précieux : planifiez, partagez et immortalisez chaque instant avec notre plateforme.</p>
        <a href="#" class="btn btn-primary bouton-dashboard">Organiser</a>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <img src=${seminaire} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Seminaire</h5>
        <p class="card-text">Optimisez vos séminaires : planifiez, partagez, et inspirez avec notre plateforme dédiée aux événements professionnels.</p>
        <a href="#" class="btn btn-primary bouton-dashboard">Organiser</a>
      </div>
    </div>
  </div>
`);
