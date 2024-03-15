import React, { useRef } from "react";
import "./head.css";

const Head = () => {
  return (
    <div className="head flex items-center justify-center flex-col gap-6">
      <span className="flex flex-col gap-4 text-center">
        <h1>
          Nous vous souhaitons <br /> la bienvenue sur notre site
        </h1>
        <p>
          Dans notre approche, atteindre l'excellence est notre priorité
          absolue. Cela démontre notre engagement total envers la qualité, que
          nous mettons en pratique dans tous les aspects de notre travail et de
          nos services.
        </p>
      </span>
      <button>Commandez maintenant.</button>
    </div>
  );
};

export default Head;
