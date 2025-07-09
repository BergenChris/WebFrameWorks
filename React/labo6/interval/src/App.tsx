import{ useState, useEffect } from 'react';



const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  // soms lopen er meerdere hooks tesamen, de return zorgt voor dat onafgewerkte hooks worden geannuleerd

  return <div>{seconds}</div>;
}


const CurrentTime = () => {
  const [timeString, setTimeString] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => setTimeString(formatTime(new Date())), 1000);
    return () => clearInterval(interval);
  }, []);

  function formatTime(date: Date) {
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');
    const s = date.getSeconds().toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  }

  return <div>Current time: {timeString}</div>;
}

interface RandomValueProps {
  min: number;
  max: number;
}

function RandomValue({min,max}: RandomValueProps) {

  


  const [value, setValue] = useState(() => randomBetween(min, max));

  useEffect(() => {
    const interval = setInterval(() => setValue(randomBetween(min, max)), 1000); 
    return () => clearInterval(interval);
  }, [min, max]); // door [min,max] te gebruiken wordt deze aangepast wanneer je deze wijzigt

  function randomBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div>
      Random value between {min} and {max}: {value}
    </div>
  );
}



function App() {

  const [min,setMin] = useState(1);
  const [max,setMax] = useState(100);
  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <Timer />
      <CurrentTime />
      <RandomValue min={1} max={100} />
      <RandomValue min={100} max={200} />
      <div>
        <input type="number" onChange={(e)=>setMin(Number(e.target.value))} value={min}/>
        <input type="number" onChange={(e)=>setMax(Number(e.target.value))} value={max}/>
      </div>
      <RandomValue min={min} max={max} />
    </div>
 
  );
}

export default App;


