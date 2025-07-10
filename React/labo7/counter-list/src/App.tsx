import { useState } from 'react'

const CounterList = () => {
    const [counters, setCounters] = useState<number[]>([]);

    const addCounter = () => {
        setCounters([...counters, 0]);
    }

    const increaseCounter = (index: number) => {
        setCounters(counterCpy => counterCpy.map((counter, i) => (i === index) ? counter + 1 : counter));
    }

    const decreaseCounter = (index: number) => {
        setCounters(counterCpy => counterCpy.map((counter, i) => (i === index) ? counter - 1 : counter));
    }
    const sum = counters.reduce((acc, val) => acc + val, 0);

    return (
        <>
            {counters.map((value, index) => (         
                <Counter
                  key={index}
                  index={index}
                  value={value}
                  onIncrease={() => increaseCounter(index)}
                  onDecrease={() => decreaseCounter(index)}
                />  
            ))}
            <h2>Som van alle tellers: {sum}</h2>
            <button onClick={addCounter}>Voeg teller toe</button>
        </>
    )
}
interface CounterProps {
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
  index: number;
}

const Counter = ({ value, onIncrease, onDecrease, index }: CounterProps) => {
  let color = 'black';
  if (value > 0) color = 'green';
  else if (value < 0) color = 'red';

  return (
    <div
      key={index}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
      }}
    >
      <button onClick={onDecrease}>Omlaag</button>
      <div
        style={{
          flex: 1,
          textAlign: 'center',
          color: color,
          fontWeight: 'bold',
        }}
      >
        Count: {value}
      </div>
      <button onClick={onIncrease}>Omhoog</button>
    </div>
  );
};


function App() {
  

  return (
    <>
      <CounterList/>
    </>
  )
}

export default App
