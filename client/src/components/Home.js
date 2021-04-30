import React, { useState } from "react";
import { GlobalStyle } from "../globalStyles";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feature from "./Feature";
import Hero from "./Hero";
import Products from "./Products";
import QuickBook from "./Quickbook";
import { productData, productDataTwo } from "./Products/data";
import { movieData } from "./Hero/data";
import { movieDataTwo, sessionData } from "./Quickbook/data";
import Tabs from "./Tabs";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero data={movieData} />
      <QuickBook data={movieDataTwo} sessions={sessionData} />
      <Products heading="Choose your favourite" data={productData} />
      <Tabs />
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
    </>
  );
};

export default Home;
