import './App.css';
import { useState } from 'react';

const ColorSquare = () => {
  let colors:string[] = ["red","blue","green"];
  let emotions:string[] = [":(",":|",":)"];
  const [name,setName] = useState<string>("Joske");
  const [colorIndex, setColorIndex] = useState<number>(0);
  const [emotion, setEmotion] = useState<string>(emotions[0]);
  const [isCircle, setIsCircle] = useState<boolean>(false);

  const resetName = () => {
    setName("Joske")
  }

  const handleSquareClick = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <input
        type="text"
        placeholder="Voer je naam in"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={resetName} style={{ marginTop: 8 }}>Reset naam</button>
      <p><b>{name}</b></p>
      <label style={{ marginTop: 12 }}>Kies een emotie:</label>
      <select value={emotion} onChange={(e) => setEmotion(e.target.value)} style={{ marginTop: 4 }}>
        {emotions.map((emo, index) => (
          <option key={index} value={emo}>
            {emo}
          </option>
        ))}
      </select>
      <label style={{ marginTop: 12 }}>
        <input
          type="checkbox"
          checked={isCircle}
          onChange={() => setIsCircle(!isCircle)}
          style={{ marginRight: 6 }}
        />
        Cirkelvorm
      </label>
      <div className="square" onClick={handleSquareClick} style={{ backgroundColor: colors[colorIndex], width: 100, height: 100, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 10,  borderRadius: isCircle ? "50%" : "20%", }}>
        <p style={{ fontSize: 24 }}>{emotion}</p>
      </div>
    </div>
  )
}
const App = () => {
    return <ColorSquare/>
}

export default App;

