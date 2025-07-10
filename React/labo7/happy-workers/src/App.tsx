import { useState } from 'react';
import './App.css';
import { Square } from './components/Square';

function App() {
  // Bovenste rij (ongelimiteerd)
  const [topWork, setTopWork] = useState(0);
  const handleTopWork = (amount: number) => {
    setTopWork((prev) => Math.min(prev + amount, 100));
  };

  // Onderste rij (gelimiteerd)
  const [bottomWork, setBottomWork] = useState(0);
  const handleBottomWork = (amount: number) => {
    setBottomWork((prev) => Math.min(prev + amount, 100));
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>Happy Workers</h1>

      {/* 🔼 Bovenste rij - ongelimiteerd */}
      <h2>Bovenste rij (ongelimiteerd)</h2>
      <progress value={topWork} max="100" style={{ width: '100%' }} />
      <p>Work done: {topWork}%</p>
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
        <Square color="red" size={100} work={topWork} onWork={handleTopWork} limited={false} initialProductivity={1} />
        <Square color="blue" size={100} work={topWork} onWork={handleTopWork} limited={false} initialProductivity={2} />
        <Square color="green" size={100} work={topWork} onWork={handleTopWork} limited={false} initialProductivity={3} />
      </div>

      <hr style={{ margin: '40px 0' }} />

      {/* 🔽 Onderste rij - met burnout */}
      <h2>Onderste rij (met burnout na 10 kliks)</h2>
      <progress value={bottomWork} max="100" style={{ width: '100%' }} />
      <p>Work done: {bottomWork}%</p>
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
        <Square color="orange" size={100} work={bottomWork} onWork={handleBottomWork} limited={true} initialProductivity={1} />
        <Square color="purple" size={100} work={bottomWork} onWork={handleBottomWork} limited={true} initialProductivity={2} />
        <Square color="teal" size={100} work={bottomWork} onWork={handleBottomWork} limited={true} initialProductivity={3} />
      </div>
    </div>
  );
}

export default App;
