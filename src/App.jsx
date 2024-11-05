
import { useState } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import GuessResult from './components/GuessResult';
import { sample } from './utils';

function App() {
  const [guesses,setGusses] = useState([]);

  function handleSubmitGuess(guess){
    setGusses(prev=> [...prev,guess]);
  }
  return (
    <div>
    <GuessResult guesses={guesses} />
    <InputForm handleSubmitGuess={handleSubmitGuess}/>
    </div>
  )
}

export default App
