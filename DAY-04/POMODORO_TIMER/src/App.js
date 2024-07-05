import './App.css';
import Timer from './Timer.js';
import Settings from './Settings.js';
import {useState} from "react";

function App() {

  const [showSettings, setShowSettings] = useState(initialState: true);

  return (
    <main>
      {showSettings ? <Settings/> : <Timer/>}
      <Settings/>
      <Timer />
    </main>
  );
}

export default App;
