import type React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import HomeView from './views/HomeView';

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomeView />} />
      </Route>
    </Routes>
  );
};

export default Routing;
