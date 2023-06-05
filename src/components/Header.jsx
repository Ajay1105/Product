import React from 'react'
import { useNavigate} from "react-router-dom"
import { amazon} from "../assests";

const Header = () => {

  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center w-full mb-8 pt-3">
          <img src={amazon} alt="logo" className="w-40 object-contain" onClick={()=>navigate("/")} />

          <div>
            <button
              type="button"
              onClick={() => navigate("/about")}
              className="black_btn mx-1"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => navigate("/shop")}
              className="black_btn mx-1"
            >
              Shop
            </button>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="black_btn mx-1"
            >
              Contact Us
            </button>
          </div>
        </nav>
  )
}

export default Header