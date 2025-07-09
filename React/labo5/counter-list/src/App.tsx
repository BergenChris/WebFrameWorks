import { useState } from 'react'

const Counter =()=>{
  const [counters, setCounters] = useState<number[]>([]);

  const addCounter = () => {
    // Voeg een nieuwe teller met startwaarde 0 toe
    setCounters([...counters, 0]);
  };

  const updateCounter = (index: number, delta: number) => {
    setCounters(counters.map((counter,i)=>i === index ? counter+delta:counter)); // deze gebruikt oude data dus doet een reset, zet deze bovenaan en dan werkt het wel zelfs 3 keer
    setCounters(prev =>
      prev.map((count, i) => (i === index ? count + delta : count)) 
    );
    setCounters(prev =>
      prev.map((count, i) => (i === index ? count + delta : count)) // deze werkwijze is beste, want deze 2 keer na elkaar werkt wel op de meeste recente data
    );
    setCounters(counters.map((counter,i)=>i === index ? counter+delta:counter)); // deze gebruikt oude data dus doet een reset, onderaan neemt hij de oude niet bijgewerkte waarde van in het begin en doet dus een SetCounters met 1 anpassing

  };

  return (
    <>
      <button onClick={addCounter}>Add Counter</button>
      {counters.map((count, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            gap: 10,
          }}
        >
          <button onClick={() => updateCounter(index, -1)}>Omlaag</button>
          <div
            style={{
              width: 80,
              textAlign: 'center',
              color: count < 0 ? 'red' : count > 0 ? 'green' : 'black',
            }}
          >
            Count: {count}
          </div>
          <button onClick={() => updateCounter(index, 1)}>Omhoog</button>
        </div>
      ))}
      <div>Som van counters : {counters.reduce((acc, curr) => acc + curr, 0)}</div>
    </>
  )
}


function App() {
  

  return (
    <>
      <Counter/>
    </>
  )
}

export default App
