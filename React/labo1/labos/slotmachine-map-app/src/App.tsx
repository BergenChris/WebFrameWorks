const getRandomSlots = (numberOfSlots:number) => {
  let slots : number[] =[];
  for (let i=0;i<numberOfSlots;i++) {
    slots.push(Math.floor(Math.random()*5))
  }
  return slots;
}
const NUMBER_OF_SLOTS = 3

const App = () => {

  let slots = getRandomSlots(NUMBER_OF_SLOTS);

  let winning:boolean = slots.every(slot=>slot === slots[0]);

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
              {slotImages.map(image => <img src={image} alt="slot "width="100"/>)}
            </div>
            
            <h2>Uw combo:</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              {slots.map(slot=> <img src={slotImages[slot]} alt="slot "width="100"/>)}
            </div>
            {winning ? <p>Je hebt gewonnen</p> : <p>Je hebt verloren</p>}

            

        </>
  );
}

export default App