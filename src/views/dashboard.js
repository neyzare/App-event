import EventForm from "../controllers/EvenForm";

export default () => (`
<div class="container">
  <h1 class="mt-5 d-flex justify-content-center">Créer un événement</h1>
  <form id="eventForm"> <!-- Utiliser le même ID que dans le constructeur -->
    <div class="form-group">
      <label for="eventName">Nom de l'événement :</label>
      <input type="text" class="form-control" id="eventName" name="eventName" required>
    </div>

    <div class="form-group">
      <label for="eventDescription">Description de l'événement :</label>
      <input type="text" class="form-control" id="eventDescription" name="eventDescription" required>
    </div>

    <div class="form-group">
      <label for="eventStartDate">Date de début de l'événement :</label>
      <input type="date" class="form-control" id="eventStartDate" name="eventStartDate" required>
    </div>

    <div class="form-group">
      <label for="eventEndDate">Date de fin de l'événement :</label>
      <input type="date" class="form-control" id="eventEndDate" name="eventEndDate" required>
    </div>

    <div class="form-group">
      <label for="eventLocation">Lieu de l'événement :</label>
      <input type="text" class="form-control" id="eventLocation" name="eventLocation" required>
    </div>
    
    <div class="form-group">
      <label for="eventNumberPerson">Nombre d'invités :</label>
      <input type="text" class="form-control" id="eventNumberPerson" name="eventNumberPerson" required>
    </div>
    
    <div class="form-group">
      <label for="eventBudget">Budget :</label>
      <input type="number" class="form-control" id="eventBudget" name="eventBudget" required>
    </div>

    <div class="form-group col d-flex justify-content-center">
      <button type="submit" class="btn btn-primary mt-5">Créer l'événement</button>
    </div>
  </form>
</div>
`);

new EventForm('#eventForm'); // Utiliser le même ID que dans le constructeur
