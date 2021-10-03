import PropTypes from "prop-types";
import React from "react";

const ClassifyButton = (props) => {
  const { activeState, buttonHandler } = props;

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
  buttonHandler: PropTypes.func,
};

export default ClassifyButton;
