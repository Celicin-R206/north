import React from "react";
import deliver from "../../../assets/icons/deliver.svg";
import security from "../../../assets/icons/security.svg";
import support from "../../../assets/icons/support.svg";
import "./about.css";

const About = () => {
  const about = [
    {
      image: deliver,
      title: "Livraison rapide",
      description: "Deux cycles par mois, livraison à l'étranger.",
    },
    {
      image: security,
      title: "Sécurité de paiement",
      description:
        "Deux cycles par mois, livraison à l'étranger.Sécurité optimale pour vos transactions en ligne.",
    },
    {
      image: support,
      title: "Supports 24h/7",
      description: "Assistance disponible 24/7 pour votre tranquillité.",
    },
  ];

  return (
    <div className="about container1 grid grid-cols-3 gap-8 mt-16 mb-10">
      {about.map((v, i) => {
        console.log(v.image);
        return (
          <div className="card flex items-center gap-4" key={i}>
            <div className="l">
              <img src={v.image} alt="deliver" className="w-[5rem] h-[5rem]" />
            </div>
            <div className="r">
              <h1 className="text">{v.title}</h1>
              <p>{v.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
