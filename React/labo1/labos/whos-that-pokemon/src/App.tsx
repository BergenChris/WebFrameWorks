import React from 'react';

interface Pokemon {
  id: number;
  name: string;
}

function App() {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [fourUnique, setFourUnique] = React.useState<number[]>([]);
  const [message, setMessage] = React.useState("");
  const [correct, setCorrect] = React.useState(false);


  // Functie om unieke random nummers te genereren
  function getUniqueRandomNumbers(count: number, max: number): number[] {
    const numbers = new Set<number>();
    while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * max) + 1); // 1 t/m max
    }
    return Array.from(numbers);
  }

  function handleGuess(name: string) {
    if (name === chosenPokemon?.name) {
      setCorrect(true);
      setMessage("✅ Correct!");
      setTimeout(() => {
        window.location.reload();
      }, 2000); // 10 seconden
    } else {
      setMessage("❌ Try again!");
    }
  }



  React.useEffect(() => {
    async function fetchPokemons() {
      const promises = [];
      for (let i = 1; i <= 150; i++) {
        promises.push(
          fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(res => res.json())
            .then(data => ({ id: i, name: data.name }))
            .catch(() => ({ id: i, name: 'unknown' }))
        );
      }
      const results = await Promise.all(promises);
      setPokemons(results);
      setFourUnique(getUniqueRandomNumbers(4, 150));
    }
    fetchPokemons();
  }, []);

  if (pokemons.length === 0 || fourUnique.length < 4) {
    return <p>Loading Pokémon...</p>;
  }

  const chosenId = fourUnique[0];
  const chosenPokemon = pokemons.find(p => p.id === chosenId);
  const shuffled = [...fourUnique].sort(() => Math.random() - 0.5);

  return (
    <>
      <h1>Who's that Pokémon?</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${chosenId}.png`}
        alt={chosenPokemon?.name || 'Pokémon'}
        style={{ filter: correct ? 'brightness(1)' : 'brightness(0)', width: 200, height: 200 }}
      />
      <div style={{ marginTop: '20px' }}>
        {shuffled.map(id => {
          const p = pokemons.find(p => p.id === id);
          return (
            <button key={id} style={{ marginRight: '10px' }} onClick={() => handleGuess(p?.name || "")}>
        {p ? p.name : 'Loading...'}
      </button>
          );
        })}
      </div>
      <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{message}</p>
    </>
  );
}

export default App;

