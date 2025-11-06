import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => (
  <div className="main-layout">
    <header>Header</header>
    <main>
      <Outlet></Outlet>
    </main>
    <footer>Footer</footer>
  </div>
);

export default MainLayout;
