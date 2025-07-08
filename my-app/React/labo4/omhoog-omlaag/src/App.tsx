import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(prevCount => prevCount - 1)
  }
  const decrease = () => {
    setCount(prevCount => prevCount + 1)
  }
  let color = "black";

  if (count<0) {color="red"}
  else if (count>0) {color="green"}

  return(
    <div
    style={{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center"
    }}>
      <button onClick={increase}>Omlaag</button>
      <div style={{flex:1,color:color}}>Count: {count}</div>
      <button  onClick={decrease}>Omhoog</button>
    </div>
  )
}

function App() {
  

  return (
    <>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  )
}

export default App
