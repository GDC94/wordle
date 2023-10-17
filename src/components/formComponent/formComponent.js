import React, { useState } from "react";

function FormComponent({ onSubmitForm, result }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (tentativeGuess.length !== 5) {
      window.alert("La palabra debe tener 5 letras 🚧 ");
      return;
    }
    onSubmitForm(tentativeGuess);
    setTentativeGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Ingrese su palabra:</label>
      <input
        minLength={5}
        maxLength={5}
        required
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value;
          setTentativeGuess(nextGuess.toUpperCase());
        }}
        disabled={result}
        pattern="[a-zA-Z]{5}"
      />
    </form>
  );
}

export default FormComponent;
