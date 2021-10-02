import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";

const TestTab = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (params) => (event) => {
    const { index } = params;
    event.preventDefault();
    setSelectedImage(params);
    document.getElementById(`${index}`).scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleClick = (event) => {
    event.target.tagName != "BUTTON" && event.target.tagName != "IMG"
      ? setSelectedImage(null)
      : "";
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false);
  }, [handleClick]);

  return (
    <div className="card text-base-content">
      <div className="card-body">
        <div className="card-title">Classify</div>
        <Carousel
          {...props}
          selectedImage={selectedImage}
          imageClickHandler={handleImageClick}
        ></Carousel>
        <div className="justify-center card-actions">
          <button
            className={`w-32 btn btn-med ${
              selectedImage == null ? "btn-disabled" : ""
            }`}
            id="classifyButton"
          >
            Classify
          </button>
        </div>
      </div>
    </div>
  );
};
export default TestTab;
