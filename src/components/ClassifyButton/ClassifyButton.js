import PropTypes from "prop-types";
import React from "react";

const ClassifyButton = (props) => {
  const { activeState, buttonHandler } = props;

  return (
    <button
      className={`w-32 btn btn-med ${
        activeState == "active"
          ? "btn-secondary"
          : activeState == "disabled"
          ? "btn-disabled"
          : activeState == "hidden"
          ? "hidden"
          : ""
      }`}
      id="classifyButton"
      onClick={buttonHandler}
    >
      Classify
    </button>
  );
};

ClassifyButton.propTypes = {
  activeState: PropTypes.string,
  buttonHandler: PropTypes.func,
};

export default ClassifyButton;
