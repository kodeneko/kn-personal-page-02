import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="main-layout">
    <header>Header</header>
    <main>{children}</main>
    <footer>Footer</footer>
  </div>
);

export default MainLayout;
