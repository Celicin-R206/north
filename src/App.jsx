import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/icons/logo.png";
import Loader from "../public/loader.svg"; // Assurez-vous d'importer correctement votre fichier de loader

// ---- components ---- //
import LandingPage from "./components/landingPage/landingPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div
          className={`loaderSpinner fixed top-0 left-0 w-full flex items-center justify-center ${
            loading ? "" : "loader_hidden"
          }`}>
          <img src={Loader} alt="loader" className="w-[3rem]" />
          <img src={logo} alt="logo" className="w-[13rem]" />
        </div>
      ) : null}
      <LandingPage />
    </div>
  );
}

export default App;
