import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <nav className="flex justify-between px-8 md:px-12 py-6 md:py-4 items-center">
      <button className="md:hidden" onClick={() => setToggleSidebar(true)}>
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
      <div
        className={`fixed inset-0 bg-white z-50 md:hidden transition-transform ${
          toggleSidebar ? "transform-none" : "-translate-x-full"
        }`}
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        <button
          className="md:hidden absolute right-4 top-4"
          onClick={() => setToggleSidebar(!toggleSidebar)}
        >
          <i class="fa-solid fa-x fa-xl"></i>
        </button>
        <div className="flex flex-col mt-14 gap-4 px-6 font-kanit uppercase">
          <Link
            to={"/"}
            className="flex items-center justify-between md:hidden border p-2 bg-gray-200 rounded-lg"
          >
            <span>Home</span> <i class="fa-solid fa-arrow-right"></i>
          </Link>
          <Link
            to={"/uberuns"}
            className="flex items-center justify-between md:hidden border p-2 bg-gray-200 rounded-lg"
          >
            <span>Über uns</span> <i class="fa-solid fa-arrow-right"></i>
          </Link>
          <Link
            to={"/galerie"}
            className="flex items-center justify-between md:hidden border p-2 bg-gray-200 rounded-lg"
          >
            <span>Galerie</span>

            <i class="fa-solid fa-arrow-right"></i>
          </Link>
          <Link
            to={"/kontakt"}
            className="flex items-center justify-between md:hidden border p-2 bg-gray-200 rounded-lg"
          >
            <span>Kontakt</span> <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="absolute bottom-20 right-[35%]">
          <img src={logo} alt="" className="w-30 h-10 block md:hidden "></img>
        </div>
      </div>
      <Link to={"/"}>
        <img src={logo} alt="" className="w-30 h-10 md:w-50 md:h-14"></img>
      </Link>
      <ul className="text-gray-900  gap-8 items-center justify-between md:flex font-kanit uppercase">
        <Link to={"/"} className="hover:cursor-pointer hidden md:flex">
          Home
        </Link>
        <Link to={"/uberuns"} className="hover:cursor-pointer hidden md:flex">
          Über uns
        </Link>
        <Link to={"/galerie"} className="hover:cursor-pointer hidden md:flex">
          Galerie
        </Link>
        <Link
          to={"/kontakt"}
          className="hover:cursor-pointer border rounded-xl p-2 px-4 bg-rose-400 hover:bg-rose-300 text-black sm:visible"
        >
          Kontakt
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
