import { filterValidImages, isValidImage } from "../../utils/imageUtils";
import React, { useContext, useState } from "react";
import ClassificationDialog from "../ClassificationDIalog/ClassificationDialog";
import { ClassificationHistoryContext } from "../ClassificationHistoryProvider/ClassificationHistoryProvider";
import ClassifyButton from "../ClassifyButton/ClassifyButton";
import { classifyImageFiles } from "../../utils/classifyUtils";
import { FileUploadError } from "../Alerts/FileUploadError";

const UploadTab = () => {
  const [uploadState, setUploadState] = useState(null); // 'active', 'null', 'complete'
  const [uploadFiles, setUploadFiles] = useState(null);
  const [uploadError, setUploadError] = useState(null); // Number of invalid files
  const { setClassificationHistory } = useContext(ClassificationHistoryContext); // Get ClassificationHistory context to add classifications results

  const uploadHandler = async (event) => {
    event.preventDefault(); // Prevent default event
    const fileList = Array.from(event.target.files); // Get array from FileList object
    const validImageFiles = await filterValidImages(fileList); // Get valid images from fileList array
    const invalidFiles = fileList.length - validImageFiles.length;

    validImageFiles.length > 0
      ? setUploadState("active") // Active upload state
      : setUploadState(null);
    validImageFiles.length > 0
      ? setUploadFiles(validImageFiles) // Store valid image files in state
      : setUploadFiles(null);
    invalidFiles > 0 ? setUploadError(invalidFiles) : ""; // Set upload error

    event.target.value = null; // Clear upload field
    return;
  };

  const buttonHandler = async (event) => {
    event.preventDefault(); // Prevent default event
    const fileObjectList = uploadFiles.map((file) => {
      return { file: file };
    });
    const classifications = await classifyImageFiles(fileObjectList); // Get classification results for uploaded files
    setClassificationHistory({
      classifications: classifications,
      lastClassification: classifications,
    }); // Add classifications to ClassificationHistory context
    setUploadState("complete"); // Set upload state to complete
    setUploadFiles(null); // Clear uploaded files
  };

  return (
    <div className="card text-base-content">
      <div className="card-body">
        <div className="p-4 mb-6 border shadow-lg rounded-xl">
          <p className="text-lg">
            You may classify your own images by first uploading your image
            files, then clicking
            <span className="mx-2 badge badge-secondary">Classify</span>
            below. Image dimensions are required to be
            <span className="italic"> 224 x 224px</span> and the file must be in
            either JPEG or PNG format.
          </p>
        </div>

        <div className="flex justify-center">
          <label className="flex flex-col items-center w-64 px-4 py-6 tracking-wide uppercase bg-transparent border rounded-lg shadow-lg cursor-pointer border-primary text-base-content hover:bg-primary hover:text-base-100">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2 text-base leading-normal">
              Upload your image
            </span>
            <input
              multiple={true}
              type="file"
              className="hidden"
              onChange={uploadHandler}
            />
          </label>
        </div>

        <div className="justify-center card-actions">
          <ClassifyButton
            activeState={
              uploadState == null
                ? "hidden"
                : uploadState == "active"
                ? "active"
                : uploadState == "complete"
                ? "disabled"
                : "hidden"
            }
            buttonHandler={buttonHandler}
          ></ClassifyButton>
          <ClassificationDialog
            isOpen={uploadState == "complete" ? true : false} // Show when uploadState is completed
            closeDialog={() => setUploadState(null)} // Purge uploadState to close Dialog
            className="z-40"
          ></ClassificationDialog>
        </div>
      </div>
      <FileUploadError
        isOpen={uploadError}
        closeDialog={() => setUploadError(null)}
      ></FileUploadError>
    </div>
  );
};

export default UploadTab;
