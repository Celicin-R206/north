import React from "react";
import "./information.css";
import person from "../../../assets/images/person.png";
import abs1 from "../../../assets/icons/abs1.svg";
import abs2 from "../../../assets/icons/abs2.svg";
import abs3 from "../../../assets/icons/abs3.svg";

const Info = () => {
  return (
    <div className="container1 p-[2rem] pb-0 rounded-[3rem] bg-[#a00100] mt-20 flex items-center gap-4 relative">
      <div className="l flex-1">
        <h1 className="text-[2rem] font-bold text-white">
          Sans quitter votre canapé - explorez notre gamme de produits en ligne
          dès maintenant !
        </h1>
        <p className="bg-[#F7981D] mt-[1rem] p-3 text-white z-30">
          Nous assurons la livraison directement chez vous, pour un shopping en
          toute simplicité.
        </p>
      </div>
      <div className="r flex-1 flex justify-end">
        <img src={person} alt="person" className="w-[30rem] z-10" />
      </div>
      <img src={abs1} alt="abs1" className="absolute top-8 w-[8rem]" />
      <img
        src={abs2}
        alt="abs2"
        className="absolute right-10 w-[15rem] top-8 "
      />
    </div>
  );
};

export default Info;
