import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>por favor regitre ou entre para acessar o conteúdo</h2>
      <Link to="/register">Register</Link>
      <br/>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Home;