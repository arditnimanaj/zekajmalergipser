import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
  Bodenverlegung,
  Fassadenarbeiten,
  Trockenbau,
  Malerarbeiten,
  Gipserarbeiten,
  Lackierarbeiten,
} from "../images/Portfolio/imagesList.js";
import Services from "../components/Services.jsx";

function Galerie({ serviceType }) {
  const [index, setIndex] = useState(-1);

  // Select the appropriate array of images based on serviceType
  let photos = [];
  switch (serviceType) {
    case "Bodenverlegung":
      photos = Bodenverlegung;
      break;
    case "Fassadenarbeiten":
      photos = Fassadenarbeiten;
      break;
    case "Trockenbau":
      photos = Trockenbau;
      break;
    case "Malerarbeiten":
      photos = Malerarbeiten;
      break;
    case "Gipserarbeiten":
      photos = Gipserarbeiten;
      break;
    case "Lackierarbeiten":
      photos = Lackierarbeiten;
      break;
    default:
      break;
  }
  if (serviceType === "Galerie") {
    return <Services />;
  }
  return (
    <div className="px-10">
      <p className="flex justify-center text-2xl font-kanit py-6 text-rose-400">
        {serviceType}
      </p>
      <PhotoAlbum
        padding={6}
        layout="columns"
        photos={photos}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        thumbnails
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
  );
}

export default Galerie;
