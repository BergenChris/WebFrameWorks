import React, { useState } from 'react'
import './App.css'

export const COLOR : string[] = ["red","yellow","blue","green"]

const ColorSquare = () =>{
  
  const [colorIndex,setColorIndex] = useState<number>(0);

  const onClick : React.MouseEventHandler<HTMLDivElement>  =  () => {
    setColorIndex((colorIndex)=>(colorIndex+1)%COLOR.length);
  }
  
  return (
    <div style={{backgroundColor:COLOR[colorIndex], width:100,height:100}} onClick={onClick}>

    </div>
  )
}


const App = () => {
  const [name, setName] = useState<string>("");
  const [number,setNumber] = useState<number>(0);

  



  return (
    <>
     <input type="text" value={name} onChange={(event)=> {setName(event.target.value);}} />
      <p>Hello {name}</p>    
      <ColorSquare/>
    </>

    
  )
}

export default App
