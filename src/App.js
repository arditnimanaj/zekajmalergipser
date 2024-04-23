import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import UberUns from "./pages/UberUns.jsx";
import Kontakt from "./pages/Kontakt.jsx";
import Galerie from "./pages/Galerie.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/uberuns" element={<UberUns />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/Galerie" element={<Galerie serviceType="Galerie" />} />
        <Route
          path="/Malerarbeiten"
          element={<Galerie serviceType="Malerarbeiten" />}
        />
        <Route
          path="/Lackierarbeiten"
          element={<Galerie serviceType="Lackierarbeiten" />}
        />
        <Route
          path="/Gipserarbeiten"
          element={<Galerie serviceType="Gipserarbeiten" />}
        />
        <Route
          path="/Fassadenarbeiten"
          element={<Galerie serviceType="Fassadenarbeiten" />}
        />
        <Route
          path="/Trockenbau"
          element={<Galerie serviceType="Trockenbau" />}
        />
        <Route
          path="/Bodenverlegung"
          element={<Galerie serviceType="Bodenverlegung" />}
        />
      </Routes>
      <Footer />
      <a href="https://wa.me/491624319768">
        <div className="border-2 border-green-800 rounded-full p-5 md:rounded-lg md:p-2 gap-4 flex items-center bg-gray-700 fixed bottom-5 left-5 text-green-400 text-lg z-50">
          <i className="fab fa-whatsapp fa-xl "></i>
          <span className="hidden md:block font-raleway">WhatsApp</span>
        </div>
      </a>
    </div>
  );
}

export default App;
