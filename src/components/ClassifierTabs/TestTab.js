import React, { useContext, useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import ClassificationDialog from "../ClassificationDIalog/ClassificationDialog";
import { ClassificationHistoryContext } from "../ClassificationHistoryProvider/ClassificationHistoryProvider";
import ClassifyButton from "../ClassifyButton/ClassifyButton";
import { classifyImageFiles } from "../../utils/classifyUtils";
import { getFilenameFromURL } from "../../utils/utils";

const TestTab = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null); // {file: File([blob]), classification}
  const [classifyState, setClassifyState] = useState(null); // 'complete', 'pending', 'null'

  const handleImageClick = (params) => async (event) => {
    const { index } = params;
    event.preventDefault(); // Prevent default event
    setSelectedImage(params); // Set selected image state according to index
    const imagePath = event.target.src; // Get selected image path
    const label = event.target.getAttribute("data-label");
    const imageName = getFilenameFromURL(imagePath);
    let imageBlob = await fetch(imagePath).then((r) => r.blob()); // Load image blob
    const imageFile = new File([imageBlob], `${imageName}`); // Construct File object from image blob

    setSelectedImageFile({ file: imageFile, label: label }); // Store File object in State

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
  const { setClassificationHistory } = useContext(ClassificationHistoryContext); // Get ClassificationHistory context to add classifications results

  const buttonHandler = async (event) => {
    event.preventDefault(); // Prevent default event
    const classifications = await classifyImageFiles([selectedImageFile]); // Get classification results for selected image
    setClassificationHistory({
      classifications: classifications,
      lastClassification: classifications,
    }); // Add classifications to ClassificationHistory context
    setSelectedImage(null); // Clear image selection
    setClassifyState("complete");
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
        <div className="p-4 mx-auto mb-6 border shadow-lg rounded-xl">
          <p className="text-lg">
            You may test the classification model by first selecting a sample
            image, then clicking
            <span className="mx-2 badge badge-secondary">Classify</span>
            below.
          </p>
        </div>
        <Carousel
          {...props}
          selectedImage={selectedImage}
          imageClickHandler={handleImageClick}
        ></Carousel>
        <div className="justify-center card-actions">
          <ClassifyButton
            activeState={selectedImage == null ? "disabled" : "active"}
            buttonHandler={buttonHandler}
          ></ClassifyButton>
          <ClassificationDialog
            isOpen={classifyState == "complete" ? true : false} // Show when classifyState is completed
            closeDialog={() => setClassifyState(null)} // Purge classifyState to close Dialog
            className="z-40"
          ></ClassificationDialog>
        </div>
      </div>
    </div>
  );
};
export default TestTab;
