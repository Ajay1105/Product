import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import { motor, product } from "../../assests";
import ProductCard from "../ProductCard/ProductCard.jsx";

const About = () => {
  const navigate = useNavigate();

  return (
    <>

      <div className="main">
        <div className="gradient" />
      </div>
      <header className="app w-full flex justify-center items-center flex-col">
        <Header />

        <p className="head_text italic">
         
          Welcome to <br />
          <span className="font-serif orange_gradient italic">
            Company Name
          </span>
        </p>
        <p className="text-2xl font-serif italic my-4">
          
          Your Trusted Source for Air Compressors and Repairs
        </p>

        <img
          src={motor}
          alt="motor"
          className=" h-96 rounded-md hover:outline outline-2"
        />

        <p className="text-3xl font-serif italic text-center my-4">
          "We are commited to provid you top-notch products and services to meet
          your customers' needs"
        </p>

        <div className="flex flex-wrap justify-center space-x-8 my-8">
          <ProductCard
            img={product}
            name="Example 1"
            desc="In this section display some top products"
            key={1}
          />
          <ProductCard
            img={product}
            name="Example 2"
            desc="In this section display some top products"
            key={2}
          />
        </div>
        <button
          className="outline outline-2 rounded-3xl px-4 py-2 mb-4 hover:bg-[#F9ED69]"
          onClick={() => navigate("/shop")}
        >
          See more
        </button>

        <p className="text-3xl font-serif italic text-center my-3">
          We offer wide range of services including:{" "}
        </p>
        <ul className="list-disc mb-8">
          <li className="text-lg hover:list-none hover:text-2xl ">
            Repair work
          </li>
          <li className="text-lg hover:list-none hover:text-2xl ">
            Sale of new product
          </li>
        </ul>
       
        <Footer />
      </header>
    </>
  );
};

export default About;
