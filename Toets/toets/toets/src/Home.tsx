// src/components/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welkom op de applicatie!</h1>
      <p>Dit is de homepagina. Kies een van de onderstaande opdrachten:</p>
      <ul>
        <li><Link to="/opdracht-1">Opdracht 1</Link></li>
        <li><Link to="/opdracht-2">Opdracht 2</Link></li>
        <li><Link to="/opdracht-3">Opdracht 3</Link></li>
      </ul>
    </div>
  );
};

export default Home;
