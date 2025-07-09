
import './App.css';
import styles from './App.module.css';
import styled from "styled-components";
import ColorSquare from "./components/Colorsquare";



const App = () => {


  return (
  
      <div>
        <ColorSquare height={50} width={20} color={'red'} />
        <ColorSquare height={10} width={50} color={'blue'} />


      </div>
      )
     
  
}

export default App
