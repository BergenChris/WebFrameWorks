import { useState } from 'react'

import './App.css'



const App = () =>{
  const [inputValue,setInputValue] = useState<string>("");

  

  return(
  
  <>
   <input type="text" value={inputValue} onChange={
      (e)=>{setInputValue(e.target.value)}
    }/>
     <input type="text" value={inputValue} onChange={
      (e)=>{setInputValue(e.target.value)}
    }/>
     <input type="text" value={inputValue} onChange={
      (e)=>{setInputValue(e.target.value)}
    }/>
     <input type="text" value={inputValue} onChange={
      (e)=>{setInputValue(e.target.value)}
    }/>
     <input type="text" value={inputValue} onChange={
      (e)=>{setInputValue(e.target.value)}
    }/>
  </>
   
    

   
  
 
 
  
  )

}



export default App
