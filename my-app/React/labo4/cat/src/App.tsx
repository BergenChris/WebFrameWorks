import { useState } from 'react'

interface Position{
  x:number;
  y:number
}

const RandomCat = () => {
  const [position, setPosition] = useState<Position>();

  const getRandomPosition = () => {
  

    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);

    setPosition({x,y});
  };

  return (
    <div>
      <button onClick={getRandomPosition}>Random Cat</button>
      {position && <img
        src="https://cataas.com/cat?width=200&height=200"
        alt="Random Cat"
        style={{
          position: 'fixed',
          top: position.x,
          left: position.y,
          width: 200,
          height: 200,
        }}
      />}
    </div>
  );
}

function App()  {
  return(
    <>
      <RandomCat />
    </>
  )
}

export default App;
