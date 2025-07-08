import { useState } from 'react'



interface InputFieldProps{
  inputValue?:string;


}

const InputFields = ({inputValue =  ""}:InputFieldProps) => {
  
  const [liveInput, setLiveInput] = useState(inputValue);
  const [tempInput, setTempInput] = useState(inputValue);
 

  const handleLiveChange = (value: string) => {
    
    setLiveInput(value);
    setTempInput(value);
  };

  const handleTempChange = (value: string) => {

    setTempInput(value);
  };

  // Opslaan bij Enter
  const handleTempKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      
      setLiveInput(tempInput);

      
    }
  }

  return(
    <>
     <>
      {[...Array(5)].map((_, i) => (
        <input
          key={i}
          type="text"
          value={liveInput}
          onChange={(e) => handleLiveChange(e.target.value)}
          placeholder={`Live input ${i + 1}`}
          style={{ display: "block", marginBottom: 8 }}
        />
      ))}

      {[...Array(5)].map((_, i) => (
        <input
          key={i + 5}
          type="text"
          value={tempInput}
          onChange={(e) => handleTempChange(e.target.value)}
          onKeyDown={(e) => handleTempKeyDown(e)}
          placeholder={`Confirm input ${i + 6}`}
          style={{ display: "block", marginBottom: 8 }}
        />
      ))}
    </>
    </>
  )
}



const App = () =>{

  return(
  <>
   
    <InputFields />
  </>

  )

}


export default App
