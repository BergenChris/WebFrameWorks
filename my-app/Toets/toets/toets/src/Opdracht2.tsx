// src/components/Opdracht2.tsx
import React, { useState, useEffect } from 'react';
import { SteamGame } from '../types';

const Opdracht2: React.FC = () => {
  // State voor de games en filterinstellingen
  const [games, setGames] = useState<SteamGame[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');

  // Haal de data op van de API
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/similonap/json/refs/heads/master/steam.json')
      .then((response) => response.json())
      .then((data: SteamGame[]) => {
        setGames(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Filteren op basis van de naam
  const filteredGamesByName = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filteren op basis van platform
  const filteredGamesByPlatform = filteredGamesByName.filter((game) => {
    if (selectedPlatform === 'all') return true;
    return game.platforms[selectedPlatform as keyof SteamGame['platforms']];
  });

  return (
    <div>
      <h1>Steam Games</h1>

      {/* Input voor naam filter */}
      <div>
        <input
          type="text"
          placeholder="Zoek op naam"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Platform filter met radio buttons */}
      <div>
        <label>
          <input
            type="radio"
            value="all"
            checked={selectedPlatform === 'all'}
            onChange={() => setSelectedPlatform('all')}
          />
          Alle platformen
        </label>
        <label>
          <input
            type="radio"
            value="windows"
            checked={selectedPlatform === 'windows'}
            onChange={() => setSelectedPlatform('windows')}
          />
          Windows
        </label>
        <label>
          <input
            type="radio"
            value="mac"
            checked={selectedPlatform === 'mac'}
            onChange={() => setSelectedPlatform('mac')}
          />
          Mac
        </label>
        <label>
          <input
            type="radio"
            value="linux"
            checked={selectedPlatform === 'linux'}
            onChange={() => setSelectedPlatform('linux')}
          />
          Linux
        </label>
      </div>

      {/* Laadbericht */}
      {loading && <p>Laden...</p>}

      {/* Weergeven van gefilterde games */}
      <div>
        <p>{filteredGamesByPlatform.length} resultaten gevonden</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {filteredGamesByPlatform.map((game) => (
            <div key={game.name} style={{ width: '200px', textAlign: 'center' }}>
              <img src={game.image} alt={game.name} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
              <h3>{game.name}</h3>
              <p>{game.developer}</p>
              <p>{game.releaseYear}</p>
              <p>{game.minimumAge}+ Leeftijd</p>
              <p>{game.description.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Opdracht2;

