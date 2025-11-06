
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';

const App: React.FC = () => (
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
      </Routes>
    </MainLayout>
  </Router>
);

export default App;
