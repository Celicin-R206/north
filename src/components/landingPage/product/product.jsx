import React from "react";
import product1 from "../../../assets/images/pro1.jpg";
import product2 from "../../../assets/images/pro2.jpg";
import product3 from "../../../assets/images/pro3.png";
import product4 from "../../../assets/images/pro4.jpg";
import product5 from "../../../assets/images/pro5.jpg";
import product6 from "../../../assets/images/pro6.jpg";
import product7 from "../../../assets/images/pro7.jpg";
import "./product.css";

const Product = () => {
  const product = [
    {
      image: product1,
      title: "Produit 1",
      description: "ceci est un description du produit",
      price: 15000,
    },
    {
      image: product2,
      title: "Produit 2",
      description: "ceci est un description du produit",
      price: 15000,
    },
    {
      image: product3,
      title: "Produit 3",
      description: "ceci est un description du produit",
      price: 15000,
    },
    {
      image: product4,
      title: "Produit 4",
      description: "ceci est un description du produit",
      price: 15000,
    },
    {
      image: product5,
      title: "Produit 5",
      description: "ceci est un description du produit",
      price: 15000,
    },
    {
      image: product6,
      title: "Produit 6",
      description: "ceci est un description du produit",
      price: 15000,
    },
    {
      image: product7,
      title: "Produit 7",
      description: "ceci est un description du produit",
      price: 15000,
    },
    {
      image: product2,
      title: "Produit 2",
      description: "ceci est un description du produit",
      price: 15000,
    },
  ];
  return (
    <div className="product container1 mt-32">
      <div className="top flex items-center justify-between">
        <span>Nos produit</span>
        <button className="flex items-center gap-4">
          <span>Voir tout nos produit</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="w-[1rem]">
            <path
              d="M10.757813 3.050781L10.042969 3.75L13.214844 7L2 7L2 8L13.214844 8L10.042969 11.25L10.757813 11.949219L15.097656 7.5Z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
      <div className="bottom grid grid-cols-4 gap-8 mt-16">
        {product.map((v, i) => {
          return (
            <div className="card w-fit p-[1.5rem] rounded-[1.5rem]" key={i}>
              <img
                src={v.image}
                alt={v.image}
                className="w-[15rem] h-[15rem]"
              />
              <h1>{v.title}</h1>
              <p>{v.description}</p>
              <p className="font-semibold text-[1.2rem]">{v.price} Ar</p>
              <button className="flex items-center bg-[#0fbc60] text-white p-2 rounded-lg mt-4 gap-3">
                <span>Ajouter au panier</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="w-[1.5rem]">
                  <path
                    d="M1 1L1 2L3 2C3.214844 2 3.398438 2.140625 3.46875 2.34375L4.402344 10.671875C4.488281 11.429688 5.136719 12.003906 5.894531 12.003906C5.386719 12.058594 5 12.488281 5 13C5 13.550781 5.449219 14 6 14C6.550781 14 7 13.550781 7 13C7 12.488281 6.609375 12.058594 6.101563 12.003906L10.894531 12.003906C10.386719 12.058594 10 12.488281 10 13C10 13.550781 10.449219 14 11 14C11.550781 14 12 13.550781 12 13C12 12.488281 11.609375 12.058594 11.097656 12.003906L12 12.003906L12 11.003906L5.894531 11.003906C5.636719 11.003906 5.425781 10.820313 5.398438 10.5625L5.335938 10L11.679688 10C12.390625 10 13.011719 9.492188 13.152344 8.796875L14.109375 4L13 4L13 4.453125L12.171875 8.597656C12.121094 8.835938 11.921875 9 11.679688 9L5.21875 9L4.445313 2.101563L4.429688 2.054688C4.238281 1.429688 3.65625 1 3 1 Z M 8 2L8 4L6 4L6 5L8 5L8 7L9 7L9 5L11 5L11 4L9 4L9 2Z"
                    fill="#ffffff"
                  />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
