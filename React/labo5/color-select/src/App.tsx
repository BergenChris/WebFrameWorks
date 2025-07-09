import { useState } from 'react'

const ColorSelect = () =>{
    
  let colors:string[] = ["red", "green", "blue", "yellow", "orange", "purple", "black", "white"];
  const [selectedColors,setSelectedColors] = useState<string[]>([]);
  const [shownColors,setShownColors] = useState<string[]>([]);

  const selectColors: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    
    let selectedOptions:string[]=[];
    for(let option of Array.from(e.target.selectedOptions)) {
      selectedOptions.push(option.value);
    }
    setSelectedColors(selectedOptions);
    
  }

  return(
    <div>
      <select multiple value={selectedColors}  onChange={selectColors}>
        {
          colors.map(color=>(
              <option value={color}>{color}</option>
          ))
        }
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
