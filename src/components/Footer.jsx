import React from "react";

function Footer() {
  return (
    <div className="relative flex  flex-col bg-gray-100 mx-auto p-20 font-raleway ">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Standort</h1>
          <br className="hidden md:block"></br>
          <br></br>
          <span>Zekaj Maler&Gipser</span>
          <a href="https://www.google.com/maps/place/Zekaj+%E2%80%93+Maler+%26+Gipser/@48.5911425,-10.2694702,5z/data=!4m20!1m13!4m12!1m4!2m2!1d21.1764583!2d42.6532017!4e1!1m6!1m2!1s0x4799eb03d7f0e38d:0xc9706bccbb7fd2d7!2sZekaj+%E2%80%93+Maler+%26+Gipser!2m2!1d9.2431837!2d48.5906172!3m5!1s0x4799eb03d7f0e38d:0xc9706bccbb7fd2d7!8m2!3d48.590578!4d9.2431441!16s%2Fg%2F11thhfbzkc?entry=ttu">
            Panoramastraße 48
          </a>
          <a href="https://www.google.com/maps/place/Zekaj+%E2%80%93+Maler+%26+Gipser/@48.5911425,-10.2694702,5z/data=!4m20!1m13!4m12!1m4!2m2!1d21.1764583!2d42.6532017!4e1!1m6!1m2!1s0x4799eb03d7f0e38d:0xc9706bccbb7fd2d7!2sZekaj+%E2%80%93+Maler+%26+Gipser!2m2!1d9.2431837!2d48.5906172!3m5!1s0x4799eb03d7f0e38d:0xc9706bccbb7fd2d7!8m2!3d48.590578!4d9.2431441!16s%2Fg%2F11thhfbzkc?entry=ttu">
            72654 Neckartenzlingen
          </a>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Kontakt</h1>
          <br className="hidden md:block"></br>
          <br></br>
          <h1 className="font-bold">Inh. Lundrim Zekaj</h1>
          <a href="tel:+49 162 4319768">Tel: +49 162 4319768</a>
          <a href="tel: +49 177 9174910">Tel: +49 177 9174910</a>

          <a href="mailto:luki078@gmail.com">Mail: luki078@hotmail.com</a>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Social Media</h1>
          <br className="hidden md:block"></br>
          <br></br>
          <div className="flex gap-6">
            <a href="https://wa.me/491624319768">
              <i class="fa-brands fa-whatsapp fa-2xl"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61558969792060">
              <i class="fa-brands fa-facebook fa-2xl"></i>
            </a>

            <a href="https://www.instagram.com/zekaj_maler_gipser/">
              <i class="fa-brands fa-instagram fa-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="absolute bottom-2 left-0 right-0 text-center font-baumans font-bold">
        Copyright © 2024 Zekaj Maler & Gipser{" "}
      </p>
    </div>
  );
}

export default Footer;
