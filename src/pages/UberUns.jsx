import React from "react";
import { Link } from "react-router-dom";
import Malerarbeiten from "../images/services/paintingsvg.png";
import Lackierarbeiten from "../images/services/lackiersvg.png";
import Gipserarbeiten from "../images/services/gipsersvg.png";
import Fassadenarbeiten from "../images/services/facadesvg.png";
import Trockenbau from "../images/services/trockensvg.png";
import Bodenverlegung from "../images/services/bodensvg.png";

function UberUns() {
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
    <div className="p-10 text-center flex flex-col gap-10 min-w-full md:p-20">
      <h1 className="font-bold text-3xl text-rose-400 border-b-4 font-raleway ">
        WER WIR SIND UND WAS WIR MACHEN
      </h1>
      <div className=" flex flex-col justify-start gap-5  ">
        <p className="font-baumans">
          Willkommen bei{" "}
          <span className="font-bold text-rose-400 ">Zekaj Maler & Gipser</span>
          , wo Erfahrung auf Qualität trifft! Mit über 15 Jahren Erfahrung in
          der Branche haben wir Wohnungen und Häuser verwandelt und ihnen neuen
          Glanz verliehen. Unser Hauptziel? Die Zufriedenheit unserer Kunden!
          Bei Zekaj Maler & Gipser haben wir ein tolles Team von mehr als 10
          großartigen Kollegen, die wirklich gut in dem sind, was sie tun. Wir
          haben bereits über 200 Kunden zum Lächeln gebracht und sind bereit,
          dasselbe für Sie zu tun! Hier ist, was wir tun:
        </p>
        <div>
          <div className="md:grid md:grid-cols-2 flex flex-col gap-4 px-2">
            {services.map((service) => {
              return (
                <div className="flex gap-4 mx-auto border-4 p-4 max-w-xl items-center">
                  <img src={service.imageSource} className="w-20 h-20" />
                  <div>
                    <span className="font-bold text-rose-400 font-raleway">
                      {service.name}{" "}
                    </span>
                    <p className="font-baumans">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <span className="font-macondo text-2xl  text-rose-800">
          Ganz egal, ob groß oder klein, wir sind hier, um Ihre Wohnträume wahr
          werden zu lassen!
        </span>
      </div>
      <div className="flex mx-auto gap-6 font-kanit uppercase">
        <Link
          to={"/kontakt"}
          className="border rounded-xl bg-rose-400 text-white font-bold p-4"
        >
          Kontakt
        </Link>
        <Link
          to={"/galerie"}
          className="border rounded-xl bg-rose-400 text-white font-bold p-4"
        >
          Galerie ansehen
        </Link>
      </div>
    </div>
  );
}

export default UberUns;
