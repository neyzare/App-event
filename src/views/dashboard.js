import EventForm from '../controllers/EvenForm';

export default () => (`
<div class="container">
  <h1 class="mt-5 d-flex justify-content-center">Créer un événement</h1>
  <form id="eventForm">
    <div class="form-group">
      <label for="eventName">Nom de l'événement :</label>
      <input type="text" class="form-control" id="eventName" name="nom" required>
    </div>

    <div class="form-group">
      <label for="eventDescription">Description de l'événement :</label>
      <input type="text" class="form-control" id="eventDescription" name="description" required>
    </div>

    <div class="form-group">
      <label for="eventStartDate">Date de début de l'événement :</label>
      <input type="datetime-local" class="form-control" id="eventStartDate" name="date_debut" required>
    </div>

    <div class="form-group">
      <label for="eventEndDate">Date de fin de l'événement :</label>
      <input type="datetime-local" class="form-control" id="eventEndDate" name="date_fin" required>
    </div>

    <div class="form-group">
      <label for="eventLocation">Lieu de l'événement :</label>
      <input type="text" class="form-control" id="eventLocation" name="lieu" required>
    </div>
    
    <div class="form-group">
      <label for="eventNumberPerson">Nombre d'invités :</label>
      <input type="number" class="form-control" id="eventNumberPerson" name="nombre_inviter" required>
    </div>
    
    <div class="form-group">
      <label for="eventBudget">Budget :</label>
      <input type="number" class="form-control" id="eventBudget" name="budget" required>
    </div>

    <!-- Ajout du champ caché pour l'id_organisateur -->
    <input type="hidden" id="organisateurId" name="organisateur_id" value="1"> <!-- Remplacez "1" par l'ID réel de l'organisateur -->

    <div class="form-group col d-flex justify-content-center">
      <button type="submit" class="btn btn-primary mt-5">Créer l'événement</button>
    </div>
  </form>
</div>
`);

// Assurez-vous que le code suivant est exécuté après que le document est complètement chargé
document.addEventListener('DOMContentLoaded', () => {
  new EventForm(); // Utilisation de la classe EventForm pour initialiser le formulaire
});
