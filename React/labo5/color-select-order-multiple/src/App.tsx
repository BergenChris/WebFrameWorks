import { useState } from 'react'

const ColorSelect = () =>{
    
  const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'black', 'white'];
  
  const [selectedColors,setSelectedColors] = useState<string[]>([]);
  const [shownColors,setShownColors] = useState<string[]>([]);

  const handleClick = (color: string) => {
    setSelectedColors((prev) => [...prev, color]);
  };

  return (
    <div>
      <h3>Select colors (clicks are tracked in order, duplicates allowed)</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1rem' }}>
        {colors.map((color) => (
          <button
            key={color}
            style={{
              backgroundColor: color,
              color: color === 'white' ? 'black' : 'white',
              border: '1px solid #ccc',
              padding: '8px 12px',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
            onClick={() => handleClick(color)}
          >
            {color}
          </button>
        ))}
      </div>
      <button onClick={()=>{setShownColors([...selectedColors])}}>Show Colors</button>
      <button onClick={()=>{setShownColors([]),setSelectedColors([])}}>Clear</button>
      <div>
        {
          shownColors.map((color)=> (
            <div style={{backgroundColor : color, height:20,flex:1}}/>
          ))
        }
        
      </div>
    </div>
  );
};

function App() {

  
  

  return (
    <>
      <ColorSelect />
    </>
  )
}

export default App
