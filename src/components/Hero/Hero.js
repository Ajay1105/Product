import { product } from "../../assests";
import Footer from "../Footer.jsx";
import Header from "../Header.jsx";

const Hero = () => {
  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>
      <header className="app w-full flex justify-center items-center flex-col" >
        <Header/>

        <h1 className="head_text orange_gradient">Company Name</h1>

        <div className="flex flex-row space-x-8 mx-16 my-16">
          <img src={product} alt="product" className="w-1/3 h-1/3" />
          <div className="flex flex-wrap justify-center align-middle items-center">
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Faucibus purus in massa tempor nec feugiat nisl pretium fusce.
              Nulla posuere sollicitudin aliquam ultrices sagittis.{" "}
            </p>
          </div>
        </div>
        <Footer />
      </header>
    </>
  );
};

export default Hero;
