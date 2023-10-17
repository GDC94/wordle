import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import FormComponent from "../formComponent/formComponent";
import GuessResults from "../guessResults/guessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState(false);
  const [intentos, setIntentos] = useState(0);

  const onSubmitForm = (tentativeGuess) => {
    setIntentos(intentos + 1);
    setGuesses([...guesses, tentativeGuess]);
    if (tentativeGuess === answer) {
      setResult(true);
    }
  };

  return (
    <>
      <GuessResults
        intentos={intentos}
        guesses={guesses}
        answer={answer}
        result={result}
      />
      <FormComponent result={result} onSubmitForm={onSubmitForm} />
    </>
  );
}

export default Game;
