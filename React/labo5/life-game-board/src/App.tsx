import React, { useState } from 'react';

const LifeGameBoard: React.FC = () => {
  const [rows, setRows] = useState<number>(10);
  const [columns, setColumns] = useState<number>(10);
  const [board, setBoard] = useState<number[][]>(initializeGrid(10, 10));

  // 🔄 Genereer willekeurig bord met 0 (dood) of 1 (levend)
  function initializeGrid(rows: number, columns: number): number[][] {
    return Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => Math.round(Math.random()))
    );
  }

  // 🔄 Vernieuw bord met huidige rijen/kolommen
  const regenerateBoard = () => {
    setBoard(initializeGrid(rows, columns));
  };

  // 🔁 Wissel cel (0 → 1 of 1 → 0)
  const flipElement = (x: number, y: number) => {
    const newBoard = board.map((row, i) =>
      row.map((cell, j) => (i === x && j === y ? 1 - cell : cell))
    );
    setBoard(newBoard);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Game of Life – Board</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>
          Rows:
          <input
            type="number"
            value={rows}
            min={1}
            onChange={(e) => setRows(Number(e.target.value))}
            style={{ margin: '0 10px' }}
          />
        </label>

        <label>
          Columns:
          <input
            type="number"
            value={columns}
            min={1}
            onChange={(e) => setColumns(Number(e.target.value))}
            style={{ margin: '0 10px' }}
          />
        </label>

        <button onClick={regenerateBoard}>Vernieuw Bord</button>
      </div>

      {/* ✅ Grid van cellen */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 20px)`,
          justifyContent: 'center',
          gap: '2px',
        }}
      >
        {board.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => flipElement(i, j)}
              style={{
                width: 20,
                height: 20,
                backgroundColor: cell ? 'black' : 'white',
                border: '1px solid #ccc',
                cursor: 'pointer',
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default LifeGameBoard;

