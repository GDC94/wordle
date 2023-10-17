import React from "react";

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Lo siento, la respuesta correcta es <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default SadBanner;
