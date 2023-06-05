import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { email,mobile,location } from "../../assests";

const Contact = () => {
  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>
      <header className="app w-full flex justify-center items-center flex-col">
        <Header />
        <h1 className="head_text italic font-serif font-light">
          Feel Free to Contact us
        </h1>

        <div className="flex flex-row my-20">
          <div className="flex mx-32 flex-col items-center ">
          <img src={location} className="h-32 w-24 mx-6 mb-6" alt="location" />
          <p>1 Hacker Way<br/> Menlo Park, California <br/> pin-94025</p>
          </div>

          <div className="flex flex-col px-10">
            <div className="flex flex-row items-center mb-10 rounded-xl bg-cyan-200 px-10 py-4">
              <img src={email} className="h-12 mx-6 " alt="email" />
              <a href="mailto:hello@ajay.com" className="font-sans text-base font-medium">
                hello@ajay.com
              </a>
            </div>
            <div className="flex flex-row items-center rounded-xl bg-pink-200 px-10 py-2">
              <img src={mobile} className="h-24" alt="phone" />
              <a href="tel:+91 123-456-7890" className="font-sans text-base font-medium">
                +91 123-456-7890
              </a>
            </div>
          </div>

        </div>
        <Footer />
      </header>
    </>
  );
};

export default Contact;
