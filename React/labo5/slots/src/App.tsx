import { useState } from "react";

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
const SlotMachine = ({ slots:amountOfSlots  }: SlotMachineProps) => {
  const randomSlots =(): number[] => Array.from({ length: amountOfSlots }, () =>
    Math.floor(Math.random() * SLOTIMAGES.length)
  );
  
  const [slots,setSlots]= useState<number[]>(randomSlots);
  const [saldo,setSaldo] = useState<number>(25);

  const isWinning = slots.every((val) => val === slots[0]);

 

  const handleSpin = () => {
    setSlots(randomSlots);
    if (isWinning) {setSaldo((saldo)=>saldo+20)}
    else {setSaldo((saldo)=>saldo-1)}
  };

  return (
    <div style={{ marginBottom: '40px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {slots.map((slotValue, index) => (
          <Slot key={index} value={slotValue} />
        ))}
      </div>

      {/* Result */}
      <p>{isWinning ? "🎉 You Win! 🎉" : "😞 Try Again"}</p>

      {/* Spin Button */}
      {
        saldo===0 ?   <div>Bankroet</div>: 
        <>
          <div>Saldo : {saldo} €</div><button onClick={handleSpin} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Spin
      </button>
        </>

      }
     
    </div>
  );
};


interface SlotProps {
  value:number;
}
const Slot = ({value}:SlotProps) => {
  return(
    <>
    <img src={SLOTIMAGES[value]} alt={`slot1 `} width="100" /></>
  )
}

const App = () => {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <h1>Labo 2: slots</h1>
        <SlotMachine slots={3} />
       
      </div>
    </>
  );
}

export default App;