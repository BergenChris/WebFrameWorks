const alfabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

const alphabetImages = Array.from({ length: 26 }, (_, i) => {
  const letter = String.fromCharCode(65 + i); // 65 = 'A'
  return `https://raw.githubusercontent.com/slimmii/alien-alphabet/master/${letter}.png`;
});

function App() {
  

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {alphabetImages.map((url, index) => (
        <button
          key={index}
          style={{ border: 'none', background: 'none', padding: 0, textAlign: 'center' }}
        >
          <img
            src={url}
            alt={`Letter ${alfabet[index]}`}
            width={50}
            height={50}
          />
          <div>{alfabet[index]}</div> {/* show the lowercase letter below the image */}
        </button>
      ))}
    </div>
  )
}

export default App
