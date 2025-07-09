// Pokedex.tsx
import { useState, useEffect } from 'react';

interface PokeDexProps {
  limit?: number;
}

interface Pokemon {
  name: string;
  url: string;
}

const Pokedex = ({ limit = 151 }: PokeDexProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filterName, setFilterName] = useState<string>('');
  const [inputLimit, setInputLimit] = useState<number>(limit);
  const [activeLimit, setActiveLimit] = useState<number>(limit);

  const displayedPokemons = pokemons.filter(p =>
    p.name.toLowerCase().includes(filterName.toLowerCase())
  );

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${activeLimit}`)
      .then(res => res.json())
      .then(data => {
        setPokemons(data.results);
        setLoading(false);
      })
      .catch(() => {
        setPokemons([]);
        setLoading(false);
      });
  }, [activeLimit]); // deze is de dependency waarde, wanneer deze verandert dan opnieuw doen, als deze dus leeg is ontstaat er een loop

  return (
    <div style={{ padding: 20 }}>
      <h1>Pokedex</h1>

      <input
        type="text"
        placeholder="Filter op naam"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />

      <div>
        {loading ? (
          <div>Laden...</div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {displayedPokemons.map(p => (
              <li key={p.name}>
                {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <input
          type="number"
          value={inputLimit}
          onChange={(e) => setInputLimit(Number(e.target.value))}
        />
        <button onClick={() => setActiveLimit(inputLimit)}>
          Herlaad met limiet
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <Pokedex />
    </div>
  );
}

export default App;

