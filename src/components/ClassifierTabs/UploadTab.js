import React, { useContext, useEffect, useState } from "react";
import { ClassificationHistoryContext } from "../ClassificationHistoryProvider/ClassificationHistoryProvider";
import ClassifyButton from "../ClassifyButton/ClassifyButton";
import { classifyImageFiles } from "../../utils/classifyUtils";
import { filterValidImages } from "../../utils/imageUtils";

const UploadTab = () => {
  const [uploadState, setUploadState] = useState(null);
  const [uploadFiles, setUploadFiles] = useState(null);

  const uploadHandler = async (event) => {
    event.preventDefault(); // Prevent default event

    const fileList = Array.from(event.target.files); // Get array from FileList object
    const validImageFiles = await filterValidImages(fileList); // Get valid images from fileList array

    validImageFiles.length > 0 ? setUploadState(true) : setUploadState(false);
    validImageFiles.length > 0
      ? setUploadFiles(validImageFiles)
      : setUploadState(null);

    return;
  };

  const Context = useContext(ClassificationHistoryContext);

  const buttonHandler = async (event) => {
    event.preventDefault(); // Prevent default event
    const classifications = await classifyImageFiles(uploadFiles);
    Context.setClassifications(classifications);
  };

  return (
    <div className="card text-base-content">
      <div className="card-body">
        <div className="form-control">
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
          <div className="justify-center card-actions">
            <ClassifyButton
              activeState={uploadState}
              buttonHandler={buttonHandler}
            ></ClassifyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadTab;
