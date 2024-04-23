import React from "react";
import hero from "../images/hero.jpg";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="text-center relative">
      <img
        src={hero}
        className="w-full max-h-[110vh] object-fit opacity-100 md:opacity-90"
      ></img>
      <div className="flex flex-col md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 border rounded-2xl opacity-100 md:opacity-90  md:w-fit md:mx-auto mx-6 my-6 px-[5%] py-[3%] bg-gray-200 ">
        <img src={logo} className="w-30 h-10 md:w-50 md:h-20 mx-auto" alt="" />
        <p className="lead text-sm md:text-m text-center min-w-full mx-auto md:p-0 mt-4 mb-4 font-raleway">
          Wir machen Ihren Traum von Haus und Raum wahr, indem wir mit
          individueller Beratung, erstklassiger Planung und Ausführung sowie
          einem professionellen Team arbeiten. Unsere Dienstleistungen umfassen
          Malerarbeiten, Lackierarbeiten, Gipserarbeiten, Fassadenarbeiten,
          Trockenbau und Bodenverlegung.
        </p>

        <Link
          to={"/kontakt"}
          className="mx-auto max-w-sm bg-rose-400 border rounded-xl px-4 py-2 text-white font-kanit uppercase"
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
}

export default Hero;
