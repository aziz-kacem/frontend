import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);
  const [role, setRole] = useState('');
  const [matriculeFiscale, setMatriculeFiscale] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    const userData = {
      firstName,
      lastName,
      email,
      mobile,
      password,
      address,
      image,
      role,
      matriculeFiscale
    };

    try {
      const response = await axios.post('http://localhost:5000/api/user/register', userData);
      console.log('User added successfully:', response.data);
      setIsPending(false);
      history.push('/Home');
    } catch (error) {
      console.error(error);
      setIsPending(false);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="create">
      <h2>Add a new User</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input 
          type="text" 
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Last Name:</label>
        <input 
          type="text" 
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label>Email:</label>
        <input 
          type="email" 
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Mobile:</label>
        <input 
          type="text" 
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <label>Password:</label>
        <input 
          type="password" 
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Address:</label>
        <input 
          type="text" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label>Role:</label>
        <select value={role} onChange={handleRoleChange}>
          <option value="">Select a role</option>
          <option value="client">Client</option>
          <option value="rabatteur">Rabatteur</option>
          <option value="editeur">Editeur</option>
          <option value="admin">Admin</option>
          <option value="agence">Agence</option>
        </select>

        {role === 'agence' && (
          <div>
            <label>Matricule Fiscale:</label>
            <input
              type="text"
              value={matriculeFiscale}
              onChange={(e) => setMatriculeFiscale(e.target.value)}
            />
          </div>
        )}

        <label>Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        {!isPending && <button> Add User</button>}
        {isPending && <button disabled> Adding user...</button>}
      </form>
    </div>
  );
};

export default Register;
