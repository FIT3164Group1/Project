import React, { useState } from "react";
import TestTab from "./TestTab";
import UploadTab from "./UploadTab";

const ClassifierTabs = (props) => {
  const [tabState, setTabState] = useState("test");

  const renderTabs = (tab, props) => {
    switch (tab) {
      case "upload":
        return <UploadTab></UploadTab>;
      case "test":
        return <TestTab {...props}></TestTab>;
      case "validate":
        break;
      default:
        break;
    }
  };

  return (
    <div className="mt-5">
      <div className="flex flex-col items-center space-y-2">
        <div className="tabs tabs-boxed">
          <a
            className={`tab ${tabState == "upload" ? "tab-active" : ""}`}
            onClick={() => {
              setTabState("upload");
            }}
          >
            Upload image
          </a>
          <a
            className={`tab ${tabState == "test" ? "tab-active" : ""}`}
            onClick={() => {
              setTabState("test");
            }}
          >
            Try Me!
          </a>
          <a
            className={`tab ${tabState == "validate" ? "tab-active" : ""}`}
            onClick={() => {
              setTabState("validate");
            }}
          >
            Validate accuracy
          </a>
        </div>
        {renderTabs(tabState, props)}
      </div>
    </div>
  );
};

export default ClassifierTabs;
