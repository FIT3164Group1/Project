import { classifyImageFiles } from "../../utils/classifyUtils";
import PropTypes from "prop-types";
import React from "react";

const ClassifyButton = (props) => {
  const { activeState, fileList } = props;

  const buttonHandler = async (event) => {
    event.preventDefault(); // Prevent default event
    await classifyImageFiles(fileList);
  };

  return (
    <button
      className={`w-32 btn btn-med ${
        activeState != true ? "btn-disabled" : "btn-secondary"
      }`}
      id="classifyButton"
      onClick={buttonHandler}
    >
      Classify
    </button>
  );
};

ClassifyButton.propTypes = {
  activeState: PropTypes.bool,
  fileList: PropTypes.array,
};

export default ClassifyButton;
