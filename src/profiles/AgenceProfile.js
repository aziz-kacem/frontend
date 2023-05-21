import React from 'react';

function AgenceProfile({ session }) {
  const { userEmail, username, userphone } = session;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de soumission du formulaire
  };

  return (
    <div className="navbar">
      <ul>
        <li><a href="/biens">Voir tous les biens disponibles</a></li>
        <li>
          <form action="/search-rabatteur" method="get">
            <label htmlFor="rabatteur-search">Rechercher un rabatteur :</label>
            <input type="text" id="rabatteur-search" name="query" />
            <button type="submit">Rechercher</button>
          </form>
        </li>
        <li><a href="/users/rabatteur">Voir tous les rabatteurs</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>

      <h2>Bienvenue {username}</h2>

      <form action="/agence/compte" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom:</label>
        <input type="text" id="nom" name="nom" placeholder={username} /><br />

        <label htmlFor="telephone">Téléphone:</label>
        <input type="text" id="telephone" name="telephone" placeholder={userphone} /><br />

        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" /><br />

        <input type="submit" value="Enregistrer" />
      </form>

      <br />
    </div>
  );
}

export default AgenceProfile;
