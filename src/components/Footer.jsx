import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return ( 
    <div app w-full flex justify-center items-center>
      <div className="flex flex-row">
        <div className="social_media">
          <BsTwitter />
        </div>
        <div className="social_media">
          <BsInstagram />
        </div>
        <div className="social_media">
          <FaFacebookF />
        </div>
      </div>
      <p className="mx-8">© All right Reserved</p>
    </div>
  );
};

export default Footer;
