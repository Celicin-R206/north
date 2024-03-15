import React from "react";
import vanille1 from "../../../assets/images/vanille1.jpg";
import vanille2 from "../../../assets/images/vanille2.jpg";
import vanille3 from "../../../assets/images/vanille3.jpg";
import "./apropos.css";

const Appro = () => {
  return (
    <div>
      <div className="apropos container1 mt-32 flex items-start gap-16">
        <div className="l sticky top-16">
          <h1>A propos de North SPICES</h1>
          <p>
            Nous sommes habitués à collaborer avec une variété de clients,
            qu'ils soient locaux ou internationaux, grands ou petits. La qualité
            de nos produits est le pilier de notre entreprise, guidant toutes
            nos décisions stratégiques. Évoluant dans un environnement
            concurrentiel, nous investissons continuellement dans la technologie
            et la recherche pour rester à l'avant-garde. Notre objectif est de
            toujours progresser, et notre engagement envers la qualité assure
            notre succès et votre satisfaction.
          </p>
          <button className="mt-6">En savoir plus</button>
        </div>
        <div className="r flex flex-col gap-20">
          <img src={vanille2} alt="vanille2" className="rounded-lg" />
          <img src={vanille1} alt="vanille1" className="rounded-lg" />
          <img src={vanille3} alt="vanille3" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Appro;
