import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import './css/style.css';

// Import pages
import Dashboard from './pages/Dashboard';
import Downloads from './pages/Downloads';
import Download from './pages/Download';
import Settings from './pages/Settings';
import NewDownload from './pages/NewDownload';
import Help from './pages/Help';

const unhandled = require('electron-unhandled');
unhandled();

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <div className="app">
      <Routes>
        <Route index path="/" exact element={<Dashboard />} />
        <Route index path="/downloads" exact element={<Downloads />} />
        <Route index path="/downloads-filter/:filterId" exact element={<Downloads />} />
        <Route index path="/downloads/:id" exact element={<Download />} />
        <Route index path="/settings" exact element={<Settings />} />
        <Route index path="/start" exact element={<NewDownload />} />
        <Route index path="/start/:id" exact element={<NewDownload />} />
        <Route index path="/help" exact element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
