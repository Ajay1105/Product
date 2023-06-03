import { amazon, product } from "../../assests";
import Footer from "../Footer.jsx";

const Hero = () => {
  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>
      <header className="app w-full flex justify-center items-center flex-col" >
        <nav className="flex justify-between items-center w-full mb-8 pt-3">
          <img src={amazon} alt="logo" className="w-40 object-contain" />

          <div>
            <button
              type="button"
              onClick={() => window.open("https://github.com/Ajay1105")}
              className="black_btn mx-1"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => window.open("https://github.com/Ajay1105")}
              className="black_btn mx-1"
            >
              Shop
            </button>
            <button
              type="button"
              onClick={() => window.open("https://github.com/Ajay1105")}
              className="black_btn mx-1"
            >
              Contact Us
            </button>
          </div>
        </nav>

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
