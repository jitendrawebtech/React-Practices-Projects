import { useState } from 'react';
// import './App.css'
import PlayGame from './Components/PlayGame';
import StartGame from './Components/StartGame';





function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  function toggleGamePlay() {
    setIsGameStarted(prev => !prev);
  }
  return (
    <>
      {
        isGameStarted ? <PlayGame /> : <StartGame toggle={toggleGamePlay} />
      }
    </>
  )
}

export default App
