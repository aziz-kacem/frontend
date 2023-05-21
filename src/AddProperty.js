import React, { useState } from 'react';
import axios from 'axios';

function AddProperty() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [agence, setAgence] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = {
      title,
      description,
      price,
      location,
      type,
      status,
      agence,
      imageUrl
    };
    axios.post('http://localhost:5000/api/property/add-property', newProperty)
      .then(() => {
        setTitle('');
        setDescription('');
        setPrice(0);
        setLocation('');
        setType('');
        setStatus('');
        setAgence('');
        setImageUrl('');
        setSubmitMessage('Le bien a été ajouté avec succès.');
      })
      .catch(error => {
        console.log(error);
        setSubmitMessage('Une erreur s\'est produite. Veuillez réessayer plus tard.');
      });
  }

  return (
    <div className="add-property-form">
      <h2 className="add-property-heading">Ajouter un bien</h2>
      {submitMessage && <p>{submitMessage}</p>}
      <form onSubmit={handleSubmit} className="add-property-form-fields">
        <div className="add-property-form-field">
          <label htmlFor="title">Titre:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="add-property-form-field">
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div className="add-property-form-field">
          <label htmlFor="price">Prix:</label>
          <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="add-property-form-field">
          <label htmlFor="location">Emplacement:</label>
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="add-property-form-field">
          <label htmlFor="type">Type:</label>
          <input type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} />
        </div>
        <div className="add-property-form-field">
          <label htmlFor="status">Statut:</label>
          <input type="text" id="status" value={status} onChange={(e) => setStatus(e.target.value)} />
        </div>
        <div className="add-property-form-field">
          <label htmlFor="agence">Agence:</label>
          <input type="text" id="agence" value={agence} onChange={(e) => setAgence(e.target.value)} />
        </div>
        <div className="add-property-form-field">
          <label htmlFor="imageUrl">Image:</label>
          <input type="file" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          
        
        </div>
        <button type="submit" className="add-property-submit-btn">Ajouter</button>
      </form>
    </div>
  );
}

export default AddProperty;
