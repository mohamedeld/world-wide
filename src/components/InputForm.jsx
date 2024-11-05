import { useState } from "react";

const InputForm = ({handleSubmitGuess}) => {
  const [guess, setGuess] = useState("");
  const handleChange = (e) => {
    setGuess(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitGuess(guess);
    setGuess('')
  };
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess</label>
      <input
        type="text"
        id="guess-input"
        value={guess}
        onChange={handleChange}
        name="guess"
      />
    </form>
  );
};

export default InputForm;
