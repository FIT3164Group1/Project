import PropTypes from "prop-types";
import React from "react";

const Carousel = (props) => {
  const { images, imageClickHandler, selectedImage } = props;

  return (
    <div className="gap-2 p-5 carousel carousel-center rounded-box">
      {images.map((image, index) => {
        const { path, type } = image;
        return (
          <div key={index} className="carousel-item">
            <div className=" indicator">
              <div
                className={`mb-6 indicator-item indicator-bottom indicator-center badge text-black shadow-lg ${
                  type == "MSI" ? "bg-warning" : "badge-accent border-black"
                }`}
              >
                {type}
              </div>
              <img
                className={`rounded-lg shadow-lg ${
                  selectedImage?.index != index
                    ? ""
                    : type == "MSI"
                    ? "border-2 border-warning"
                    : "border-2 border-accent"
                }`}
                src={path}
                onClick={imageClickHandler({ index, image })}
                id={index}
                data-label={type}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  imageClickHandler: PropTypes.func.isRequired,
  selectedImage: PropTypes.object,
};

export default Carousel;
