import React from "react";
import logo from "../images/logo.png";

function Kontakt() {
  return (
    <div className="pb-20">
      <div className="sm:block md:flex px-10 py-10 md:px-20 md:py-20">
        <div className="md:w-[40%] w-full ">
          <h1 className="font-baumans  text-2xl border w-fit p-3 bg-rose-400 mb-12">
            Kontaktdaten
          </h1>
          <div className="flex flex-col gap-8 font-raleway">
            <span className="flex gap-4 items-center">
              <i class="fa-solid fa-user fa-2xl"></i>Inh. Lundrim Zekaj
            </span>
            <a className="flex gap-4 items-center" href="tel:+49 162 4319768">
              <i class="fa-solid fa-phone fa-2xl"></i>
              Tel: +49 162 4319768
            </a>
            <a className="flex gap-4 items-center" href="tel:+49 177 9174910">
              <i class="fa-solid fa-phone fa-2xl"></i>
              Tel: +49 177 9174910
            </a>

            <a
              className="flex gap-4 items-center"
              href="https://www.google.com/maps/place/Zekaj+%E2%80%93+Maler+%26+Gipser/@48.5911425,-10.2694702,5z/data=!4m20!1m13!4m12!1m4!2m2!1d21.1764583!2d42.6532017!4e1!1m6!1m2!1s0x4799eb03d7f0e38d:0xc9706bccbb7fd2d7!2sZekaj+%E2%80%93+Maler+%26+Gipser!2m2!1d9.2431837!2d48.5906172!3m5!1s0x4799eb03d7f0e38d:0xc9706bccbb7fd2d7!8m2!3d48.590578!4d9.2431441!16s%2Fg%2F11thhfbzkc?entry=ttu"
            >
              <i class="fa-solid fa-location-dot fa-2xl"></i>
              <div className="flex flex-col items-center">
                <span>Panoramastraße 48,</span>
                <span>72654 Neckartenzlingen</span>
              </div>
            </a>
            <a
              className="flex gap-4 items-center"
              href="mailto:luki078@gmail.com"
            >
              <i class="fa-solid fa-envelope fa-2xl"></i>Mail:
              luki078@hotmail.com
            </a>
            <div className="flex text-center gap-4">
              <a
                className="border w-fit p-3 bg-green-700 text-white"
                href="https://wa.me/491624319768"
              >
                <i class="fa-brands fa-whatsapp fa-2xl"></i> WhatsApp
              </a>

              <a
                className="border w-fit p-3 bg-blue-700 text-white"
                href="https://www.facebook.com/profile.php?id=61558758450224"
              >
                <i class="fa-brands fa-facebook fa-2xl"></i> Facebook
              </a>

              <a
                className="border w-fit p-3 bg-rose-700 text-white"
                href="https://www.instagram.com/zekaj_maler_gipser/"
              >
                <i class="fa-brands fa-instagram fa-2xl"></i> Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-[60%] w-full mt-20 md:mt-0">
          <h1 className="font-baumans text-2xl border w-fit p-3 bg-rose-400 mb-12">
            Standort
          </h1>
          <div style={{ width: "100%" }}>
            <iframe
              width="100%"
              height="600"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Panoramastra%C3%9Fe%2048,%2072654%20Neckartenzlingen,%20Germany+(Zekaj%20Maler%20&amp;%20Gipser)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps systems</a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
