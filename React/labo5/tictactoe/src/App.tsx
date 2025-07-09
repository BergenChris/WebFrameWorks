import { useState } from 'react'

const TicTacToe =() =>{

  const element:string="";
  
  const [board,setBoard]= useState<string[]>(Array(9).fill(""));
  const [player,setPlayer] = useState<`X`|`O`>(`X`);
  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = (board: string[]): string | null => {
  const winningCombos = [
    [0, 1, 2], // rij 1
    [3, 4, 5], // rij 2
    [6, 7, 8], // rij 3
    [0, 3, 6], // kolom 1
    [1, 4, 7], // kolom 2
    [2, 5, 8], // kolom 3
    [0, 4, 8], // diagonaal
    [2, 4, 6], // diagonaal
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return board[a]; // 'X' of 'O'
    }
  }
  return null;
};


  const handleClick = (index: number) => 
    {
      if (board[index] !== '' || winner) return; // niet klikken als veld al ingevuld of spel klaar

  const newBoard = board.map((value, i) =>
    i === index ? player : value
  );

  setBoard(newBoard);

  const foundWinner = checkWinner(newBoard);
  if (foundWinner) {
    setWinner(foundWinner);
  } else {
    setPlayer(prev => (prev === 'X' ? 'O' : 'X'));
  }
    };

  return (
    <>
      <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 60px)',
        gridGap: '5px',
        marginTop: '20px',
      }}
      >
        {board.map((value, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: '60px',
              height: '60px',
              border: '1px solid black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              cursor: 'pointer',
              userSelect: 'none',
              backgroundColor: value === 'X' ? '#eef' : '#fff',
            }}
          >
            {value}
          </div>
        ))}

      </div>
      <h2>
          {winner
            ? `🎉${winner} wins!`
            : `Currently: ${player}`}
        </h2>
    </>
    
  );
}

function App() {


  return (
    <>
      <TicTacToe/>
      <TicTacToe/>
    </>
  )
}

export default App
