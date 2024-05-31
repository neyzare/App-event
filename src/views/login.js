import '../css/login.css';

export default () => (`
<div class="container-fluid">
    <div class="row justify-content-center align-items-center" style="min-height: 100vh;">
      <!-- Première moitié de la page -->
      <div class="col-md-6">
        <div class="form-container p-4">
          <h2 class="text-center mb-4">Connexion</h2>
          <form>
            <div class="form-group">
              <label for="email">email :</label>
              <input type="email" class="form-control" id="email" placeholder="Entrez votre email">
            </div>
            <div class="form-group">
              <label for="password">Mot de passe :</label>
              <input type="password" class="form-control" id="password" placeholder="Entrez votre mot de passe">
            </div>
            <button type="submit" class="btn btn-primary btn-block">Se connecter</button>
          </form>
        </div>
      </div>
      <!-- Deuxième moitié de la page -->
      <div class="col-md-6">
        <div class="form-container p-4">
          <h2 class="text-center mb-4">Inscription</h2>
          <form>
            <div class="form-group">
              <label for="name">Nom :</label>
              <input type="text" class="form-control" id="newUsername" placeholder="Entrez votre nom">
            </div>
            <div class="form-group">
              <label for="prenom">Prenom :</label>
              <input type="text" class="form-control" id="prenom" placeholder="Entrez votre prenom">
            </div>
            <div class="form-group">
              <label for="email">Email :</label>
              <input type="email" class="form-control" id="email" placeholder="Entrez votre email">
            </div>
            <div class="form-group">
              <label for="newPassword">Nouveau Mot de passe :</label>
              <input type="password" class="form-control" id="newPassword" placeholder="Entrez un nouveau mot de passe">
            </div><div class="form-group">
            <label for="newUsername">Role :</label>
            <input type="radio" id="contactChoice1" name="contact" value="Admin" />
            <label for="role">admin</label>
        
            <input type="radio" id="contactChoice2" name="contact" value="telephone" />
            <label for="role">Invite</label>
          </div>
            <button type="submit" class="btn btn-primary btn-block">S'inscrire</button>
          </form>
        </div>
      </div>
    </div>
  </div>
`);
