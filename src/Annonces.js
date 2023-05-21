import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Annonces = () => {
  const [properties, setProperties] = useState([]);
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [showClients, setShowClients] = useState(false);
  const [showRabatteurs, setShowRabatteurs] = useState(false);
  const [showAgences, setShowAgences] = useState(false);

  useEffect(() => {
    axios.get('/api/properties') // Replace '/api/properties' with your actual API endpoint for fetching properties
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.error('Error fetching properties:', error);
      });

    axios.get('/api/users') // Replace '/api/users' with your actual API endpoint for fetching users
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleToggleUsers = () => {
    setShowUsers(!showUsers);
  };

  const handleToggleClients = () => {
    setShowClients(!showClients);
  };

  const handleToggleRabatteurs = () => {
    setShowRabatteurs(!showRabatteurs);
  };

  const handleToggleAgences = () => {
    setShowAgences(!showAgences);
  };

  const clients = users.filter((user) => user.role === 'client');
  const rabatteurs = users.filter((user) => user.role === 'rabatteur');
  const agences = users.filter((user) => user.role === 'agence');

  return (
    <div className="properties-content">
      <h2 id="all-users" onClick={handleToggleUsers}>
        Tous les utilisateurs
      </h2>

      {showUsers && (
        <>
          {clients.length > 0 && (
            <div id="clients-list">
              <h3 onClick={handleToggleClients}>Tous les clients</h3>
              <ul>
                {clients.map((user) => (
                  <li key={user._id}>
                    <a href={`/users/${user._id}`}>{user.nom}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {rabatteurs.length > 0 && (
            <div id="rabatteurs-list">
              <h3 onClick={handleToggleRabatteurs}>Tous les rabatteurs</h3>
              <ul>
                {rabatteurs.map((user) => (
                  <li key={user._id}>
                    <a href={`/users/${user._id}`}>{user.nom}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {agences.length > 0 && (
            <div id="agences-list">
              <h3 onClick={handleToggleAgences}>Toutes les agences</h3>
              <ul>
                {agences.map((user) => (
                  <li key={user._id}>
                    <a href={`/users/${user._id}`}>{user.nom}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {clients.length === 0 && rabatteurs.length === 0 && agences.length === 0 && (
            <p>Aucun utilisateur à afficher...</p>
          )}
        </>
      )}


      <h2>Tous les biens</h2>

      {properties.length > 0 ? (
        properties.map((blog) => (
          <a className="single" href={`/properties/${blog._id}`} key={blog._id}>
            <h3 className="title">{blog.title}</h3>
            <p className="snippet">{blog.snippet}</p>
            <form method="POST" action={`/add-to-favorites/${blog._id}`}>
              <button type="submit">
                <i className="far fa-star"></i> Add to favorites
              </button>
            </form>
          </a>
        ))
      ) : (
        <p>There are no properties to display...</p>
      )}
    </div>
  );
};

export default Annonces;
