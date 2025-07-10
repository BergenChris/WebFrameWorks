import { createContext, useContext, useState } from 'react'

interface SettingsContext{
  color:string;
  setColor:(color:string)=>void;
}

const SettingContext = createContext<SettingsContext>({
  color:"black",
  setColor:()=>{}
});

const Square = () => {
  const {color} = useContext(SettingContext);
  return(
    <div style={{width:100,height:100,margin:10,backgroundColor:color}}/>
  )
}

const SquareRow = () => {
  return(
    <>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <SelectionBox/>
    </>
    
  )
}

const SelectionBox = () => {
  
  const {color,setColor} = useContext(SettingContext);

  return(
    <select onChange={(e)=>setColor(e.target.value)} value={color}>
      <option value="red" >red</option>
      <option value="blue">blue</option>
      <option value="green">green</option>
    </select>
  )
}

function App() {

  const [color,setColor] = useState("yellow");

  return (
    <SettingContext.Provider value={{color, setColor}}>
      <SquareRow/>
    </SettingContext.Provider>
  )
}

export default App
