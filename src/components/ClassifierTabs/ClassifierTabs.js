import React, { useState } from "react";
import TestTab from "./TestTab";
import UploadTab from "./UploadTab";
import ValidationTab from "./ValidationTab";

const ClassifierTabs = (props) => {
  const [tabState, setTabState] = useState("test");

  const renderTabs = (tab, props) => {
    switch (tab) {
      case "upload":
        return <UploadTab></UploadTab>;
      case "test":
        return <TestTab {...props}></TestTab>;
      case "validate":
        return <ValidationTab></ValidationTab>;
      default:
        break;
    }
  };

  return (
    <div className="mt-5">
      <div className="flex flex-col items-center space-y-2">
        <div className="items-center bg-transparent tabs tabs-boxed">
          <div className="z-0 p-2 bg-white shadow-2xl md:pr-5 rounded-xl">
            <a
              className={`tab ${
                tabState == "upload" ? "tab-active shadow-lg" : ""
              }`}
              onClick={() => {
                setTabState("upload");
              }}
            >
              Upload image
            </a>
          </div>
          <div className="z-10 justify-center p-2 -m-2 bg-white shadow rounded-xl">
            <a
              className={`tab tab-lg ${
                tabState == "test" ? "tab-active shadow-lg" : ""
              }`}
              onClick={() => {
                setTabState("test");
              }}
            >
              <span className="font-bold">Try Me!</span>
            </a>
          </div>
          <div className="z-0 p-2 bg-white shadow-2xl md:pl-5 rounded-xl">
            <a
              className={`tab ${
                tabState == "validate" ? "tab-active shadow-lg" : ""
              }`}
              onClick={() => {
                setTabState("validate");
              }}
            >
              Validate accuracy
            </a>
          </div>
        </div>
        {renderTabs(tabState, props)}
      </div>
    </div>
  );
};

export default ClassifierTabs;
