import React, { useState, useRef } from 'react';

const LifeGameBoard: React.FC = () => {
  const [rows, setRows] = useState<number>(10);
  const [columns, setColumns] = useState<number>(10);

  // Grid initialiseren met 0 of 1
  function initializeGrid(rows: number, columns: number): number[][] {
    return Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => Math.round(Math.random()))
    );
  }

  const [board, setBoard] = useState<number[][]>(initializeGrid(rows, columns));
  // Flipped cells tracken waar wit naar rood gaat
  const [flippedCells, setFlippedCells] = useState<boolean[][]>(
    initializeGrid(rows, columns).map(row => row.map(() => false))
  );

  const [timerStarted, setTimerStarted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0.0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [gameEnded, setGameEnded] = useState(false);

  // Vernieuw bord en reset states
  const regenerateBoard = () => {
    const newBoard = initializeGrid(rows, columns);
    setBoard(newBoard);
    setFlippedCells(newBoard.map(row => row.map(() => false)));
    setTimerStarted(false);
    setTimeElapsed(0);
    setGameEnded(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Flip logica aangepast: zwart → wit (verwijderen zwart), wit → rood (fout)
  const flipElement = (x: number, y: number) => {
    if (gameEnded) return; // niks na einde

    if (!timerStarted) {
      setTimerStarted(true);
      timerRef.current = setInterval(() => {
        setTimeElapsed(t => t + 1);
      }, 100);
    }

    const cellValue = board[x][y];
    const isFlipped = flippedCells[x][y];
    if (isFlipped) return; // al rood, niks doen

    const newBoard = board.map(row => [...row]);
    const newFlipped = flippedCells.map(row => [...row]);

    if (cellValue === 1) {
      // zwart → wit (correct)
      newBoard[x][y] = 0;
      newFlipped[x][y] = false;
    } else {
      // wit → rood (fout)
      newFlipped[x][y] = true;
    }

    setBoard(newBoard);
    setFlippedCells(newFlipped);

    // Check of er nog zwarte cellen over zijn
    const anyBlackLeft = newBoard.some(row => row.some(cell => cell === 1));
    if (!anyBlackLeft) {
      setGameEnded(true);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
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

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 20px)`,
          justifyContent: 'center',
          gap: '2px',
          userSelect: 'none',
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
                backgroundColor: cell
                  ? 'black'    // zwart = levende cel
                  : flippedCells[i][j]
                  ? 'red'      // rood = fout klik op wit
                  : 'white',   // wit = dode cel
                border: '1px solid #ccc',
                cursor: gameEnded ? 'default' : 'pointer',
              }}
            />
          ))
        )}
      </div>

      {gameEnded && (
        <div style={{ marginTop: 20 }}>
          <p>Game over! ⏱️ Tijd: {timeElapsed/10} seconden</p>
          <p>Rode cellen (fouten): {flippedCells.flat().filter(Boolean).length}</p>
          <p>Score : {Math.max(0, 10 - (Math.round(timeElapsed / 10) + flippedCells.flat().filter(Boolean).length))} </p>
        </div>
      )}
    </div>
  );
};

export default LifeGameBoard;
