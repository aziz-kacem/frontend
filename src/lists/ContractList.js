import React, { useState, useEffect } from 'react';

const ContractList = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await fetch('/api/contract'); 
        const data = await response.json();
        setContracts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchContracts();
  }, []);

  return (
    <div>
      <h2>Contract List</h2>
      <ul>
        {contracts.map(Contract => (
          <li key={Contract.UniqueId}>
            <p>Contract ID: {Contract.UniqueId}</p>
            <p> propritaire: {Contract.owner}</p>
            <p> etat: {Contract.etat}</p>
            <p> client: {Contract.client}</p>
            <p> agence: {Contract.agence}</p>
            <p> rabatteur: {Contract.rabatteur}</p>

           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContractList;
