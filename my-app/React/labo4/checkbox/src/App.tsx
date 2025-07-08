import { useState } from 'react';


enum Label { Show, Hide };
interface CheckBoxProps{
  label:Label;
}
const Checkbox = ({label}:CheckBoxProps) => {
  const [visibility,setVisibility] = useState(label === Label.Hide);
  return (
    <>
      <label
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          padding: "5px",
          borderRadius: "4px",
          zIndex: 1
        }}
      >
        <input
          type="checkbox"
          onChange={(e) => setVisibility(e.target.checked)}
          checked={visibility}
        />
        Show/Hide
      </label>
      {visibility && (
        
        <div
          style={{
            width: "100vw", // or a fixed value like "600px"
            height: "100vh",
            padding: "5px",
            backgroundImage:
              'url("https://media.tenor.com/yheo1GGu3FwAAAAM/rick-roll-rick-ashley.gif")',
            backgroundSize: "auto", // keeps original size
            backgroundRepeat: "repeat", // repeat the image
            backgroundPosition: "top left", // optional
          }}
        ></div>
      
    )}
  </>
  )
}



const App = () => {
 
  

  return (
   <>
   <Checkbox label={Label.Hide} />
   </>
  )
}

export default App;
