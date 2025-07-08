// src/components/Opdracht3.tsx
import React, { useState, useEffect } from 'react';
import Light from './Light';

const Opdracht3: React.FC = () => {
  // State for the current light (red, green, or orange)
  const [currentLight, setCurrentLight] = useState<'red' | 'green' | 'orange'>('red');
  const [speed, setSpeed] = useState<number>(1); // 1x, 2x, 4x speed
  const [intervalTime, setIntervalTime] = useState<number>(6000); // Default to 6 seconds for red/green
  const [orangeIntervalTime, setOrangeIntervalTime] = useState<number>(2000); // Orange changes 3x faster than red/green

  // useEffect for handling the traffic light change
  useEffect(() => {
    // Function to change the current light color in sequence
    const changeLight = () => {
      if (currentLight === 'red') {
        setCurrentLight('green');
      } else if (currentLight === 'green') {
        setCurrentLight('orange');
      } else {
        setCurrentLight('red');
      }
    };

    // Set the interval for the red/green lights
    const interval = setInterval(changeLight, intervalTime);

    // Cleanup function to clear the interval when the component unmounts or when the intervalTime changes
    return () => clearInterval(interval);
  }, [currentLight, intervalTime]);

  // useEffect for handling the faster interval for the orange light
  useEffect(() => {
    const changeOrangeLight = () => {
      if (currentLight === 'orange') {
        // Switch the orange light faster than red and green (every X/3 seconds)
        setCurrentLight('red'); // After orange, go back to red
      }
    };

    // Set the faster interval for orange light (3x faster)
    const orangeInterval = setInterval(changeOrangeLight, orangeIntervalTime);

    // Cleanup function to clear the interval for the orange light
    return () => clearInterval(orangeInterval);
  }, [currentLight, orangeIntervalTime]);

  // Handler for changing the speed of the light changes
  const handleSpeedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSpeed = parseInt(event.target.value);
    setSpeed(selectedSpeed);

    // Adjust the interval time based on the selected speed
    if (selectedSpeed === 1) {
      setIntervalTime(6000); // 6 seconds for red/green lights
      setOrangeIntervalTime(2000); // Orange light changes 3x faster (2 seconds)
    } else if (selectedSpeed === 2) {
      setIntervalTime(3000); // 3 seconds for red/green lights
      setOrangeIntervalTime(1000); // Orange light changes 3x faster (1 second)
    } else {
      setIntervalTime(1500); // 1.5 seconds for red/green lights
      setOrangeIntervalTime(500); // Orange light changes 3x faster (0.5 seconds)
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Verkeerslicht Simulator</h1>

      {/* Traffic lights: Red on top, orange in the middle, green at the bottom */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Light color="red" on={currentLight === 'red'} />
        <Light color="orange" on={currentLight === 'orange'} />
        <Light color="green" on={currentLight === 'green'} />
      </div>

      {/* Dropdown to select the speed of the light change */}
      <div style={{ marginTop: '20px' }}>
        <label htmlFor="speed">Kies snelheid: </label>
        <select id="speed" value={speed} onChange={handleSpeedChange}>
          <option value={1}>1x (6 seconden)</option>
          <option value={2}>2x (3 seconden)</option>
          <option value={4}>4x (1.5 seconden)</option>
        </select>
      </div>
    </div>
  );
};

export default Opdracht3;
