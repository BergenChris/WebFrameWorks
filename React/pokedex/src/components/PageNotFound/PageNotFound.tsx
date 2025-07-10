import React from 'react';

const PageNotFound: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Pokémon Niet Gevonden!</h1>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="Pikachu"
        style={styles.image}
      />
      <p style={styles.text}>
        Oeps! De Pokémon die je zoekt is ontsnapt in de wijde wereld. Probeer een andere route of ga terug naar huis.
      </p>
      <a href="/" style={styles.link}>Ga terug naar de Pokédex</a>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '3rem auto',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
  },
  title: {
    color: '#ffcb05',
    textShadow: '1px 1px #3b4cca',
  },
  image: {
    width: '150px',
    margin: '1rem 0',
  },
  text: {
    fontSize: '1.1rem',
    color: '#333',
    marginBottom: '1.5rem',
  },
  link: {
    textDecoration: 'none',
    backgroundColor: '#3b4cca',
    color: '#fff',
    padding: '0.6rem 1.2rem',
    borderRadius: '5px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
};

export default PageNotFound;
