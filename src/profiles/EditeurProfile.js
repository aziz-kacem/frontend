import React from 'react';

function EditeurProfile({ session }) {
  const { userEmail} = session;

  return (
    <div>
      <h1>Bienvenue sur votre page d'accueil</h1>
      <h2>Bienvenue {userEmail}</h2>
      <ul>
        <li><a href="/editeur-admin/articles">Gérer les articles</a></li>
        <li><a href="/editeur-admin/publications">Gérer les publications</a></li>
      </ul>
      <br />
      <form action="/login" method="get">
        <input type="submit" value="Logout" />
      </form>
    </div>
  );
}

export default EditeurProfile;
