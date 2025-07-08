
 const SLOTIMAGES = [
    "./assets/0.png",
    "./assets/1.png",
    "./assets/2.png",
    "./assets/3.png",
    "./assets/4.png"

  ]


interface SlotMachineProps {
  slots:number;
}
const SlotMachine = ({ slots }: SlotMachineProps) => {
  const randomSlots: number[] = Array.from({ length: slots }, () =>
    Math.floor(Math.random() * 5)
  );

  const isWinning = randomSlots.every((val) => val === randomSlots[0]);

  return (
    <div>
      {randomSlots.map((slotValue, index) => (
        <Slot key={index} value={slotValue} />
      ))}

      {/* Display result */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        {isWinning ? <p>🎉 You Win! 🎉</p> : <p>😞 Try Again</p>}
      </div>
    </div>
  );
};


interface SlotProps {
  value:number;
}
const Slot = (value:SlotProps) => {
  return(
    <>
    <img src={SLOTIMAGES[value.value]} alt={`slot1 `} width="100" /></>
  )
}

const App = () => {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <h1>Labo 2: slots</h1>
        <SlotMachine slots={5} />
        <SlotMachine slots={3} />
        <SlotMachine slots={4} />
      </div>
    </>
  );
}

export default App;