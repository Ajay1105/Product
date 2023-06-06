import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Contact from "./components/contact/Contact.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/shop" element={<Shop />}> </Route>
        <Route path="/contact" element={<Contact />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
