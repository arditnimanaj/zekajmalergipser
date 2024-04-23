import React from "react";
import client from "../images/clients.svg";
import people from "../images/people.svg";
import worker from "../images/worker.svg";
import AnimatedNumbers from "react-animated-numbers";

function About() {
  return (
    <div className="mx-auto min-w-full grid lg:grid-cols-3 sm:grid-cols-1 p-10 md:p-20 gap-8 sm:min-w-full">
      <div className="flex flex-col gap-2 items-center border rounded-2xl shadow-lg shadow-rose-300 p-10 py-12 text-center">
        <div className="border max-w-fit rounded-full p-8 bg-rose-400">
          <img src={client} alt="" className="w-20" />
        </div>
        <div className="flex items-center font-kanit text-3xl text-rose-400 gap-3 ">
          <AnimatedNumbers
            animateToNumber={15}
            className="font-bold"
            formatValue={(value) => `+${value}`}
            transitions={(index) => ({
              type: "spring",
              duration: index + 3.5,
            })}
          />
          +
        </div>
        <span className="font-baumans text-lg ">
          Mehr als 15 Jahre Erfahrung
        </span>
      </div>
      <div className="flex flex-col gap-2 items-center border rounded-2xl shadow-lg shadow-rose-300 p-10 py-12 text-center">
        <div className="border flex justify-center items-center max-w-fit rounded-full p-8 bg-rose-400">
          <img src={people} alt="" className="w-20" />
        </div>
        <div className="flex items-center font-kanit text-3xl text-rose-400 gap-3 ">
          <AnimatedNumbers
            animateToNumber={200}
            className="font-bold"
            formatValue={(value) => `+${value}`}
            transitions={(index) => ({
              type: "spring",
              duration: index + 3.5,
            })}
          />
          +
        </div>
        <span className="font-baumans text-lg ">
          Mehr als 200+ zufriedene Kunden und erfolgreich abgeschlossene
          Projekte
        </span>
      </div>
      <div className="flex flex-col gap-2 items-center border rounded-2xl shadow-lg shadow-rose-300 p-10 py-12 text-center">
        <div className="border max-w-fit rounded-full p-8 bg-rose-400">
          <img src={worker} alt="" className="w-20" />
        </div>
        <div className="flex items-center font-kanit text-3xl text-rose-400 gap-3">
          <AnimatedNumbers
            animateToNumber={10}
            className="font-bold"
            formatValue={(value) => `+${value}`}
            transitions={(index) => ({
              type: "spring",
              duration: index + 3.5,
            })}
          />
          +
        </div>
        <span className="font-baumans text-lg ">
          Mehr als 10+ engagierte Mitarbeiter, bereit für Ihre Projekte
        </span>
      </div>
    </div>
  );
}

export default About;
