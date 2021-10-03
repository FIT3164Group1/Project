import React, { useContext, useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import { ClassificationHistoryContext } from "../ClassificationHistoryProvider/ClassificationHistoryProvider";
import ClassifyButton from "../ClassifyButton/ClassifyButton";
import { classifyImageFiles } from "../../utils/classifyUtils";
import { getFilenameFromURL } from "../../utils/utils";

const TestTab = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const handleImageClick = (params) => async (event) => {
    const { index } = params;
    event.preventDefault(); // Prevent default event
    setSelectedImage(params); // Set selected image state according to index
    const imagePath = event.target.src; // Get selected image path
    const imageName = getFilenameFromURL(imagePath);
    let imageBlob = await fetch(imagePath).then((r) => r.blob()); // Load image blob
    const imageFile = new File([imageBlob], `${imageName}`); // Construct File object from image blob

    setSelectedImageFile([imageFile]); // Store File object in State

    // Scroll selected image into view
    document.getElementById(`${index}`).scrollIntoView({
      behavior: "smooth",
    });

    return;
  };

  const handleClick = (event) => {
    event.target.tagName != "BUTTON" && event.target.tagName != "IMG" // If user clicks on page
      ? setSelectedImage(null) // Deselect image
      : "";
  };
  const Context = useContext(ClassificationHistoryContext);

  const buttonHandler = async (event) => {
    event.preventDefault(); // Prevent default event
    const classifications = await classifyImageFiles(selectedImageFile);
    Context.setClassifications(classifications);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false); // Check for user click on page
    return () => {
      document.removeEventListener("mousedown", handleClick, false); // Remove EventListener on clean up
    };
  }, []);

  return (
    <div className="card text-base-content">
      <div className="card-body">
        <Carousel
          {...props}
          selectedImage={selectedImage}
          imageClickHandler={handleImageClick}
        ></Carousel>
        <div className="justify-center card-actions">
          <ClassifyButton
            activeState={selectedImage == null ? false : true}
            buttonHandler={buttonHandler}
          ></ClassifyButton>
        </div>
      </div>
    </div>
  );
};
export default TestTab;
