import React from 'react';
import './App.css';

import Navbar from './Component/Navbar/Navbar.component';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>
    </Router>
  );
}
export default App;
