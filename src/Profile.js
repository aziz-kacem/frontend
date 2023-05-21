import React from 'react';

const Profile = ({ User }) => {
  return (
    <div className="profile">
      <h1>{User.nom}</h1>
      <p>Téléphone: {User.telephone ? User.telephone : 'N/A'}</p>
      <p>Image: {User.image_url}</p>
      <p>Rôle: {User.role}</p>
      <p>Email: {User.email}</p>
    </div>
  );
};

export default Profile;
