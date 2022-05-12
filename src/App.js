import logo from './logo.svg';
import react, {useState, useEffect} from 'react';
import willresume from './data';
import Resume from './Components/Resume/Resume';
import SkillOfPerson from './Components/SkillOfPerson/SkillOfPerson';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Resume/>}/>
          <Route path='/:persontoskillid' element={<SkillOfPerson/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
