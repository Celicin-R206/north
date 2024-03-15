import React from "react";

// components
import Header from "./header/header";
import Head from "./head/head";
import About from "./about/about";
import Appro from "./apropos/apropos";
import Product from "./product/product";
import Info from "./information/information";
import Footer from "./footer/footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Head />
      <About />
      <Appro />
      <Product />
      <Info />
      <Footer />
    </div>
  );
};

export default LandingPage;
