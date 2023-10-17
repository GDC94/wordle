import React from "react";
import Guess from "../guess/guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import HappyBanner from "../happyBanner/happyBanner";
import SadBanner from "../sadBanner/sadBanner";

function GuessResults({ guesses, answer, result, intentos }) {
  return (
    <>
      {result && <HappyBanner intentos={intentos} />}
      {intentos === NUM_OF_GUESSES_ALLOWED && <SadBanner answer={answer} />}
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED)?.map((num) => (
          <Guess key={num} value={guesses[num]} answer={answer} />
        ))}
      </div>
    </>
  );
}

export default GuessResults;
