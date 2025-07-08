// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './Root';
import Home from './Home';
import Opdracht1 from './Opdracht1';
import Opdracht2 from './Opdracht2';
import Opdracht3 from './Opdracht3';
import NotFound from './NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="opdracht-1" element={<Opdracht1 />} />
          <Route path="opdracht-2" element={<Opdracht2 />} />
          <Route path="opdracht-3" element={<Opdracht3 />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
