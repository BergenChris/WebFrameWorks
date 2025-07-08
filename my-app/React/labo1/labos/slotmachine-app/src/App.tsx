

const App = () => {

  let slot1:number = Math.floor(Math.random()*5);
  let slot2:number = Math.floor(Math.random()*5);
  let slot3:number = Math.floor(Math.random()*5);

  let winning = (slot1 === slot2) && (slot3 === slot2);

  let slotImages = [
    "./assets/0.png",
    "./assets/1.png",
    "./assets/2.png",
    "./assets/3.png",
    "./assets/4.png"

  ]

  return (
        <>
            <h1>Labo 1: slots</h1>
            <div style={{ display: 'flex', gap: '10px' }}>
              <img src={slotImages[0]} alt="slot0" width="100" />
              <img src={slotImages[1]} alt="slot1" width="100" />
              <img src={slotImages[2]} alt="slot2" width="100" />
              <img src={slotImages[3]} alt="slot1" width="100" />
              <img src={slotImages[4]} alt="slot2" width="100" />
            </div>
            <h2>Uw combo:</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <img src={slotImages[slot1]} alt={`slot1 - ${slot1}`} width="100" />
              <img src={slotImages[slot2]} alt={`slot2 - ${slot2}`} width="100" />
              <img src={slotImages[slot3]} alt={`slot3 - ${slot3}`} width="100" />
            </div>
            {winning ? <p>Je hebt gewonnen</p> : <p>Je hebt verloren</p>}

            

        </>
  );
}

export default App