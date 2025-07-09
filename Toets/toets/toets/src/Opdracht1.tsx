// src/components/Opdracht1.tsx
import React, { useState } from 'react';

const Opdracht1: React.FC = () => {
  // State voor Celsius en Fahrenheit
  const [celsius, setCelsius] = useState<number | ''>('');
  const [fahrenheit, setFahrenheit] = useState<number | ''>('');

  // Functie om Celsius naar Fahrenheit om te zetten
  const handleCelsiusToFahrenheit = () => {
    if (celsius !== '') {
      const fahrenheitValue = (Number(celsius) * 9) / 5 + 32;
      setFahrenheit(fahrenheitValue);
    }
  };

  // Functie om Fahrenheit naar Celsius om te zetten
  const handleFahrenheitToCelsius = () => {
    if (fahrenheit !== '') {
      const celsiusValue = ((Number(fahrenheit) - 32) * 5) / 9;
      setCelsius(celsiusValue);
    }
  };

  return (
    <div>
      <h1>Temperatuur Converter</h1>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="celsius">Graden Celsius: </label>
        <input
          type="number"
          id="celsius"
          value={celsius === '' ? '' : celsius}
          onChange={(e) => setCelsius(e.target.value ? Number(e.target.value) : '')}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="fahrenheit">Graden Fahrenheit: </label>
        <input
          type="number"
          id="fahrenheit"
          value={fahrenheit === '' ? '' : fahrenheit}
          onChange={(e) => setFahrenheit(e.target.value ? Number(e.target.value) : '')}
        />
      </div>

      <div>
        <button onClick={handleCelsiusToFahrenheit}>
          Van Celsius naar Fahrenheit
        </button>
        <button onClick={handleFahrenheitToCelsius}>
          Van Fahrenheit naar Celsius
        </button>
      </div>
    </div>
  );
};

export default Opdracht1;
