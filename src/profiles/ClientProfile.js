import React, { useState, useEffect } from 'react';

function ClientProfile() {
  const [username, setUsername] = useState('');
  const [userphone, setUserphone] = useState('');
  const [pdp, setPdp] = useState('');
  const [userId, setUserId] = useState('');
  const [contratCount, setContratCount] = useState(0);

  useEffect(() => {
    fetch('/contracts')
      .then(response => response.json())
      .then(data => {
        const contratList = data.filter(contrat => contrat.client === username); // Filtrer les contrats par nom du client
        const contratCount = contratList.length;
        setContratCount(contratCount);
        console.log(`Le client ${username} a ${contratCount} contrat(s) dans la collection Contrat`);
      });
  }, [username]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(`/users/${userId}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      console.log(data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="navbar">
      <ul>
        <li><a href="/biens">Voir tous les biens disponibles</a></li>
        <li><a href="/users/rabatteur">Voir tous les rabatteurs</a></li>
        <li><a href="/users/agence">les agences</a></li>
        <li><a href="/contracts">Voir vos contrats signés et en attente</a></li>
        <li><a href="/favorites">Voir vos favoris</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
      <h2>Bienvenue {username} !</h2>
      <p>Le client {username} a {contratCount} contrat(s).</p>
      <img src={pdp} alt="photo de profil" />
      <form id="updateUserForm" method="POST" action={`/users/${userId}`} encType="multipart/form-data" onSubmit={handleSubmit}>
        Gérer votre compte:
        <br />
        <input type="hidden" id="userId" name="userId" value={userId} />
        <label htmlFor="nom">Nom:</label>
        <input type="text" id="nom" name="nom" value={username} /><br />
        <label htmlFor="mobile">Téléphone:</label>
        <input type="text" id="mobile" name="mobile" value={userphone} /><br />
        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" /><br />
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" /><br />
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default ClientProfile;
