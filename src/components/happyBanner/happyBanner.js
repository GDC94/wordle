import React from "react";

function HappyBanner({ intentos }) {
  return (
    <div className="happy banner">
      <p>
        <strong>¡Felicidades!</strong> Lo adivinaste en
        <strong>
          <br />
          {intentos} suposiciones
        </strong>
        .
      </p>
    </div>
  );
}

export default HappyBanner;
