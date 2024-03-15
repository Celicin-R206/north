import React from "react";
import "./footer.css";

import fb from "../../../assets/icons/fb.svg";
import tw from "../../../assets/icons/tw.svg";
import insta from "../../../assets/icons/insta.svg";

const Footer = () => {
  return (
    <div className="footer mt-20 mb-4 container1 border-t pt-6 border-[#ddd] ">
      <div className="top flex justify-between items-center">
        <div className="l flex items-center gap-5">
          <img className="w-[2rem]" src={fb} alt="fb" />
          <img className="w-[2rem]" src={tw} alt="tw" />
          <img className="w-[2rem]" src={insta} alt="insta" />
        </div>
        <div className="c flex items-center gap-10">
          <a href="#">Accueil</a>
          <a href="#">A propos</a>
          <a href="#">Nos produit</a>
          <a href="#">Contact</a>
        </div>
        <div className="r">
          <button className="bg-[#0fbc60] text-white p-2 rounded-sm ">
            Français
          </button>
        </div>
      </div>
      <p className="text-center mt-8">&copy; copyright by JJM 2024 </p>
    </div>
  );
};

export default Footer;
