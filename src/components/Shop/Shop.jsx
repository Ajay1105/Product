import React from "react";

import Footer from "../Footer.jsx";
import Header from "../Header.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";
import Product from "../../products/ProductDetail.js";

import "./Shop.css";

const Shop = () => {
  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>
      <header className="app w-full flex justify-center items-center flex-col">
        <Header />
       
        <h1 className="head_text orange_gradient">Our Products</h1>
        <div className="flex flex-wrap justify-center space-x-8 my-8">
          {Product.map((item, index) => (
            <ProductCard
              img={item.image} 
              name={item.name}
              desc={item.desc}
              key={index}
            />
          ))}
        </div>
        <Footer />
      </header>
    </>
  );
};

export default Shop;
