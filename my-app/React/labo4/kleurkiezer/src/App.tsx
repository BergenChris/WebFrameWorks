import { useState } from 'react'

const ColorPicker = () => {
  const [color,setColor] = useState<string>("#000000");
  return(
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
      <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
      <select onChange={(e)=>setColor(e.target.value)}>
        <option value="#000000">#000000</option>
        <option value="#FF0000">#FF0000</option>
        <option value="#00FF00">#00FF00</option>
        <option value="#0000FF">#0000FF</option>
      </select>
      <div style={{width:100,height:100,backgroundColor:color}}></div>
    </div>
  )
}

function App() {
  

  return (
    <>
      <ColorPicker/>
    </>
  )
}

export default App
