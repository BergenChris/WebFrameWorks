interface ColorSquareProps{
  color:string;
  size:number;
}

const ColorSquare = ({ color, size }: ColorSquareProps) => {
  
  const handleClick = () => {
    alert(`De Hexcode van de kleur is: ${color}`);
  };
  
  return (
    <div
    onClick={handleClick}
    style={{
        width: size,
        height: size,
        backgroundColor: color,
        display: "inline-block",
        margin: 5,
      }}
    />
  );
};

function getRandomColor() {
  // Generate a random hex color like #a1b2c3
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {

  const squares = Array.from({ length: 10 }, (_, i) => (
    <ColorSquare key={i} color={getRandomColor()} size={50} />
  ));

  return <div>{squares}</div>;
}

export default App
