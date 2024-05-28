import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useradmin from './useradmin.json';


const LoginForm = styled.form`
  display: ${props => props.hide ? 'none' : 'flex'};
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: #222;
  color: #fff;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #00ff00; /* Color de botón cyberpunk */
  color: #000;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0f0; /* Cambia el color al pasar el cursor */
  }
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  margin-top: 10px;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ff0000; /* Botón de cerrar sesión */
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f00; /* Cambia el color al pasar el cursor */
  }
`;

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      onLogin(JSON.parse(loggedInUser));
      setIsLoggedIn(true);
    }
  }, [onLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = useradmin.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user)); 
      onLogin(user);
      setIsLoggedIn(true);
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); 
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    onLogin(null);
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit} hide={isLoggedIn}>
        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <Button type="submit">Login</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </LoginForm>
      {isLoggedIn && <LogoutButton onClick={handleLogout}>Logout</LogoutButton>}
    </>
  );
};

export default Login;
