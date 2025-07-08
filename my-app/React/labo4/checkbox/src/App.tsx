import { useState } from 'react';
import "./styles.css";
import './App.css'


const App = () => {
 
  const [show,setShow] = useState(false);

  return (
    <>
    <label>
      <input type="checkbox" onChange={(e)=>setShow(e.target.checked)} checked = {setShow}/>
      Show/hide 
    </label>

  <div style ={{border:"1px solid black", height: 400, padding:5,backgroundRepeat : "repeat",backgroundImage : "url("https://media.tenor.com/yheo1GGu3FwAAAAM/rick-roll-rick-ashley.gif&quot"}} >

  </div>
    
      


    </>
  )
}

export default App
