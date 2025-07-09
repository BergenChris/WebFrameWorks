// src/components/Light.tsx
import React from 'react';

interface LightProps {
  color: string; // De kleur van het licht (rood, groen, oranje)
  on: boolean;  // Of het licht aan of uit is
}

const Light: React.FC<LightProps> = ({ color, on }) => {
  const backgroundColor = on ? color : 'black';

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: backgroundColor,
        margin: '10px auto',
      }}
    />
  );
};

export default Light;
