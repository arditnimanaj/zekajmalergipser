import React from "react";
import Malerarbeiten from "../images/services/Malerarbeiten.jpg";
import Lackierarbeiten from "../images/services/Lackierarbeiten.jpg";
import Bodenverlegung from "../images/services/Bodenverlegung.jpg";
import Fassadenarbeiten from "../images/services/Fassadenarbeiten.jpg";
import Trockenbau from "../images/services/Trockenbau.jpg";
import Gipserarbeiten from "../images/services/Gipserarbeiten.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Services() {
  const services = [
    {
      name: "Malerarbeiten",
      description:
        "Wir machen Ihre Wände mit coolen Farben und Mustern fantastisch.",
      imageSource: Malerarbeiten,
    },
    {
      name: "Lackierarbeiten",
      description:
        " Wir schützen und verschönern Oberflächen, damit sie strahlen.",
      imageSource: Lackierarbeiten,
    },
    {
      name: "Gipserarbeiten",
      description:
        "Wir reparieren Wände und Decken, um sie glatt und schön zu machen.",
      imageSource: Gipserarbeiten,
    },
    {
      name: "Fassadenarbeiten",
      description:
        "Wir bringen die Außenseite Ihres Gebäudes auf Vordermann, damit esgroßartig aussieht.",
      imageSource: Fassadenarbeiten,
    },
    {
      name: "Trockenbau",
      description:
        "Wir schaffen tolle Strukturen in Ihrem Zuhause, um es gemütlich zu machen.",
      imageSource: Trockenbau,
    },
    {
      name: "Bodenverlegung",
      description:
        "Wir verlegen großartige Böden, damit sich Ihr Zuhause vollständig anfühlt.",
      imageSource: Bodenverlegung,
    },
  ];

  return (
    <div className="text-center  py-12">
      <h1 className="text-4xl">
        Unsere <span className="font-bold font-kanit">LEISTUNGEN.</span>
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 md:p-20 p-10">
        {services.map((service) => {
          return (
            <div className="border-4 rounded-2xl p-4 flex flex-col gap-3 items-center">
              <img
                src={service.imageSource}
                className="rounded-xl"
                alt={service.name}
              />
              <h1 className="font-kanit uppercase text-lg text-rose-900">
                {service.name}
              </h1>
              <span className="font-baumans text-md ">
                {service.description}
              </span>
              <Link to={`/${service.name}`}>
                <button className="border rounded-xl px-6 p-2 mt-4 bg-rose-400 text-white font-kanit uppercase">
                  Mehr erfahren
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
