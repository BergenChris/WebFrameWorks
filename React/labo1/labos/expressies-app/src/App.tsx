
import './App.css'

const random:number=Math.random();
const random1:number = Math.floor(Math.random()*10);
const random2:number = Math.floor(Math.random()*10);
const result = () => {
  if (random1 < 5)
  {
    return  (random1 + random2)
  }
  else 
    return random1 * random2
};




const App = () => {
  return (
      <>
          <h1>Labo 1</h1>
          <p>Random = {random}</p>
          <p>Random getal = {random1}</p>
          <p>Random getal = {random2}</p>
          {random > 0.5 ? 
            (
              <p>Resultaat: {random1} × {random2} = {random1 * random2}</p>
            ) : 
            (
              <p>Resultaat: {random1} + {random2} = {random1 + random2}</p>
            )
          }
         


      </>
  );
}

export default App
