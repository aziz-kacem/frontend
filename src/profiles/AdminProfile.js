import React from 'react';

function AdminProfile() {
  const userEmail = "<%= userEmail %>";
  const username = "<%= username %>";
  const userphone = "<%= userphone %>";

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici la logique pour gérer la soumission du formulaire
  };

  return (
    <div>
      <div className="navbar">
        <ul>
          <li><a href="/biens">Voir tous les biens disponibles</a></li>
          <li><a href="/submissions">submissions</a></li>
          <li><a href="/add-users">add-users</a></li>
          <li><a href="/users">users</a></li>
          <li><a href="/contracts">les contrats</a></li>
          <li><a href="/users/agence">les agences</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </div>

      <h1>Bienvenue sur votre page d'accueil</h1>
      <h2>Bienvenue {userEmail}</h2>

      <form action="/admin-compte" method="POST" onSubmit={handleSubmit}>
        Gérer votre compte :
        <br />
        <label htmlFor="nom">Nom:</label>
        <input type="text" id="nom" name="nom" placeholder={username} /><br />

        <label htmlFor="telephone">Téléphone:</label>
        <input type="text" id="telephone" name="telephone" placeholder={userphone} /><br />

        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" /><br />

        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" /><br />

        <input type="submit" value="Enregistrer" />
      </form>
    </div>
  );
}

export default AdminProfile;
