import React from 'react'
import { amazon} from "../assests";

const Header = () => {
  return (
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
  )
}

export default Header