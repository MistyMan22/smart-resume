import logo from './logo.svg';
import react, {useState, useEffect} from 'react';
import willresume from './data';
import Resume from './Components/Resume/Resume';
import './App.css';

function App() {
  const [willsResume, setWillsResume] = useState({});

  function populateResume() {
    console.log("Hi there")
  }

  useEffect(() => {
    populateResume();
  }, []);

  return (
    <div className="App">
      <Resume resume={willsResume}/>
    </div>
  );
}

export default App;
