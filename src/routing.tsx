import type React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from './layout/main';
import HomeView from './views/home';
import NotFoundView from './views/not-found';

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomeView />} />
        <Route path="/welcome" element={<HomeView />} />
        <Route path="/services" element={<HomeView />} />
        <Route path="/skills" element={<HomeView />} />
        <Route path="/portfolio" element={<HomeView />} />
        <Route path="/contact" element={<HomeView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};

export default Routing;
