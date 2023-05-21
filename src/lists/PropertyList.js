import React, { useState, useEffect } from 'react';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/property'); 
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h2>Properties </h2>
      <ul>
        {properties.map(Property => (
          <li key={Property.UniqueId}>
            <p>Property ID: {Property.UniqueId}</p>
            <p> tittre: {Property.title}</p>
            <p> description: {Property.description}</p>
            <p> prix: {Property.price}</p>
            <p> location: {Property.location}</p>
            <p> agence: {Property.agence}</p>
            <p> status: {Property.status}</p>

            <p> images: {Property.images}</p>

           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
