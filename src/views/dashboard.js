import EventForm from "../controllers/EvenForm";

export default () => (`
  <div class="container">
    <h1 class="mt-5">Créer un événement</h1>
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
        <label for="eventDate">Date de l'événement :</label>
        <input type="date" class="form-control" id="eventDate" name="eventDate" required>
      </div>

      <div class="form-group">
        <label for="eventLocation">Lieu de l'événement :</label>
        <input type="text" class="form-control" id="eventLocation" name="eventLocation" required>
      </div>
      <div class="form-group">
        <label for="eventNumberPerson">nombre d'inviter</label>
      </div>
      <div class="form-group">
        <label for="eventBudget">Budget :</label>
        <input type="text" class="form-control" id
      </div>


      <button type="submit" class="btn btn-primary">Créer l'événement</button>
    </form>
    <script>
    
    </script>
  </div>
`);

new EventForm('evenForm');
