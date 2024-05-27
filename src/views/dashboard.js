export default () => (`
<div class="container">
<h1 class="mt-5 d-flex justify-content-center">Créer un événement</h1>
<form id="eventForm">
  <div class="form-group">
    <label for="eventName">Nom de l'événement :</label>
    <input type="text" class="form-control" id="eventName" name="eventName" required>
  </div>

  <div class="form-group">
    <label for="eventType">Type d'événement :</label>
    <select class="form-control" id="eventType" name="eventType">
      <option value="anniversaire">Anniversaire</option>
      <option value="mariage">Mariage</option>
      <option value="séminaire">Séminaire</option>
    </select>
  </div>

  <div class="form-group">
    <label for="eventDate">Date de debut de l'événement :</label>
    <input type="date" class="form-control" id="eventDate" name="eventDate" required>
  </div>

  <div class="form-group">
    <label for="eventDate">Date de fin de l'événement :</label>
    <input type="date" class="form-control" id="eventDate" name="eventDate" required>
  </div>

  <div class="form-group">
    <label for="eventLocation">Lieu de l'événement :</label>
    <input type="text" class="form-control" id="eventLocation" name="eventLocation" required>
  </div>
  <div class="form-group">
    <label for="eventNumberPerson">nombre d'inviter</label>
    <input type="text" class="form-control" id="eventNumberPerson" name="eventNumberPerson" required>
  </div>
  <div class="form-group">
    <label for="eventBudget">Budget :</label>
    <input type="text" class="form-control" id="eventBudget" name="eventBudget" required>
  </div>

  <div class="form-group">
    <label for="eventBudget"> Ajouter une photo pour l'evenements :</label>
    <input type="file" class="form-control" id="eventBudget" name="eventBudget" required>
  </div>
  
  <div class="form-group col d-flex justify-content-center">
    <button type="submit" class="btn btn-primary mt-5">Créer l'événement</button>
  </div>

</form>
<div id="calendar" class="mt-5"></div>
</div>
;
`);
