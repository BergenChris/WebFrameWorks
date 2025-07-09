// src/components/Root.tsx
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Root: React.FC = () => {
  return (
    <div>
      
            <NavLink to="/" className="nav-link" end>
              -- Home -
            </NavLink>
          
            <NavLink to="/opdracht-1" className="nav-link">
              - Opdracht 1 -
            </NavLink>
          
            <NavLink to="/opdracht-2" className="nav-link">
              - Opdracht 2 -
            </NavLink>
          
            <NavLink to="/opdracht-3" className="nav-link">
              - Opdracht 3 --
            </NavLink>
         
      <Outlet />
    </div>
  );
};

export default Root;

