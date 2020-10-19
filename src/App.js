import React from 'react';
import './App.css';


import Navbar from './Component/Navbar/Navbar.component';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Education from './Pages/Education/Education.jsx';
import Skills from './Pages/Skill/Skills.jsx';
import Contact from './Pages/Contact/Contact.jsx'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
          </Route> 
         <Route path = "/education">
           <Education />
          </Route>
         <Route path = "/skills">
           <Skills />
          </Route>
         <Route path = "/contact">
           <Contact />
          </Route>
      </div>
    </Router>
  );
}
export default App;
