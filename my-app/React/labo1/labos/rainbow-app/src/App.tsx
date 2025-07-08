

function App() {

  const colors = Array.from({length: 100}, (_, i) => `hsl(${i * 360 / 100}, 100%, 50%)`);
  return (
    <div style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}>
    {colors.map((color, index) => (
        <div key={index} 
        style={{
            backgroundColor: color,
            height: `calc(100vh / 100)`, // divide full height by number of bars
            width: "100%",
          }}></div>
      ))}
    </div>
  )
}

export default App
