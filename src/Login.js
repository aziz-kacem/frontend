import React from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic

    // Assuming the User object contains a 'role' property
    const User = {
      email: e.target.email.value,
      password: e.target.password.value,
      role: 'client' // Replace with the actual role received from authentication
    };

    // Redirect based on the User's role
    switch (User.role) {
      case 'agence':
        history.push('/agence');
        break;
      case 'client':
        history.push('/client');
        break;
      case 'admin':
        history.push('/admin');
        break;
      case 'rabatteur':
        history.push('/rabatteur');
        break;
      case 'editeur':
        history.push('/editeur');
        break;
      default:
        // Handle unknown roles or redirect to a default page
        history.push('/annonce');
        break;
    }
  };

  return (
    <div className="create-blog content">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" />
        <br />
        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
