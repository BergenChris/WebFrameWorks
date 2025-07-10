import React, { useState } from 'react';

type SquareProps = {
  color: string;
  size: number;
  work: number;
  onWork: (amount: number) => void;
  limited: boolean; // true = heeft burnout-limiet
  initialProductivity: number;
};

export const Square = ({
  color,
  size,
  work,
  onWork,
  limited,
  initialProductivity,
}: SquareProps) => {
  const [productivity, setProductivity] = useState(initialProductivity);
  const [clicked, setClicked] = useState(0);

  const handleClick = () => {
    if (productivity === 0) return;

    onWork(productivity);

    if (limited) {
      const newClicked = clicked + 1;
      setClicked(newClicked);

      if (newClicked >= 10) {
        setProductivity(0); // uitgeput
        setTimeout(() => {
          setProductivity(initialProductivity);
          setClicked(0);
        }, 5000);
      }
    }
  };

  const getEmoji = () => {
    if (work === 100) return '😃';
    if (productivity === 0) return '😵';
    return '😐';
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        borderRadius: 10,
        cursor: productivity > 0 ? 'pointer' : 'not-allowed',
        userSelect: 'none',
        transition: '0.3s',
        padding: 8,
        boxSizing: 'border-box',
      }}
      title={limited ? `Kliks: ${clicked}/10` : 'Ongelimiteerd'}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
          fontSize: 'inherit',
          lineHeight: 1,
          maxWidth: '100%',
        }}
      >
        {Array(initialProductivity) // maakt array aan met lengte productiviteit dus 1 2 en 3
          .fill(null)
          .map((_, idx) => (
            <span
              key={idx}
              style={{
                width: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                userSelect: 'none',
              }}
            >
              {getEmoji()}
            </span>
          ))}
      </div>
    </div>
  );
};
