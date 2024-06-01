import '../css/login.css';

export default () => (`
<div class="container-fluid">
    <div class="row justify-content-center align-items-center" style="min-height: 100vh;">
      <!-- Première moitié de la page -->
      <div class="col-md-6">
        <div class="form-container p-4">
          <h2 class="text-center">Connexion</h2>
          <form id="loginForm">
            <div class="form-group">
              <label for="loginEmail">Email :</label>
              <input type="email" class="form-control" id="loginEmail" placeholder="Entrez votre email">
            </div>
            <div class="form-group">
              <label for="loginPassword">Mot de passe :</label>
              <input type="password" class="form-control" id="loginPassword" placeholder="Entrez votre mot de passe">
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-2">Se connecter</button>
          </form>
        </div>
      </div>
      <!-- Deuxième moitié de la page -->
      <div class="col-md-6">
        <div class="form-container p-4">
          <h2 class="text-center">Inscription</h2>
          <form id="registerForm">
            <div class="form-group">
              <label for="registerName">Nom :</label>
              <input type="text" class="form-control" id="registerName" placeholder="Entrez votre nom">
            </div>
            <div class="form-group">
              <label for="registerPrenom">Prénom :</label>
              <input type="text" class="form-control" id="registerPrenom" placeholder="Entrez votre prénom">
            </div>
            <div class="form-group">
              <label for="registerEmail">Email :</label>
              <input type="email" class="form-control" id="registerEmail" placeholder="Entrez votre email">
            </div>
            <div class="form-group">
              <label for="registerPassword">Nouveau Mot de passe :</label>
              <input type="password" class="form-control" id="registerPassword" placeholder="Entrez un nouveau mot de passe">
            </div>
            <div class="form-group">
              <label for="registerRole">Rôle :</label>
              <div>
                <input type="radio" id="roleAdmin" name="role" value="Admin">
                <label for="roleAdmin">Admin</label>
              </div>
              <div>
                <input type="radio" id="roleInvite" name="role" value="Invite">
                <label for="roleInvite">Invité</label>
              </div>
              <input type="hidden" id="userId" name="organisateur_id" value="1">
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-2">S'inscrire</button>
          </form>
        </div>
      </div>
    </div>
  </div>
`);
