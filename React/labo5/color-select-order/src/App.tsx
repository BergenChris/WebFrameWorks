import { useState } from 'react'

const ColorSelect = () =>{
    
  let colors:string[] = ["red", "green", "blue", "yellow", "orange", "purple", "black", "white"];
  const [selectedColors,setSelectedColors] = useState<string[]>([]);
  const [shownColors,setShownColors] = useState<string[]>([]);

 

  const selectColorOrder = (color: string) => {
    setSelectedColors((prev) => {
      if (prev.includes(color)) {
        // If already selected, remove it
        return prev.filter((c) => c !== color);
      } else {
        // If not selected, add to the end (preserve click order)
        return [...prev, color];
      }
    });
  };
  

  return(
    <div>
      <select multiple value={selectedColors}  >
        {colors.map((color) => (
          <option
            key={color}
            value={color}
            onClick={() => selectColorOrder(color)}
          >
            {color[0].toUpperCase() + color.slice(1)}
          </option>
        ))}
      </select>
      <button onClick={()=>{setShownColors([...selectedColors])}}>Show Colors</button>
      <div>
        {
          shownColors.map((color)=> (
            <div style={{backgroundColor : color, height:20,flex:1}}/>
          ))
        }
        
      </div>
    </div>
    
  )
  }

function App() {

  
  

  return (
    <>
      <ColorSelect />
    </>
  )
}

export default App
