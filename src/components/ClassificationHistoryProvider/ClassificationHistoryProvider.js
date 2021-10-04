import { getLocalStorage, setLocalStorage } from "../../utils/utils";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const initialState = {
  classifications: [],
  lastClassification: [],
};

const ClassificationHistoryContext = React.createContext(initialState);

const ClassificationHistoryProvider = ({ children }) => {
  const [classificationHistory, setClassificationHistory] = useState(
    () => getLocalStorage("classifications", initialState) // Get localStorage state or return initalState if not found
  );

  useEffect(() => {
    setLocalStorage("classifications", classificationHistory); // Set localStorage
  }, [classificationHistory]);

  return (
    <ClassificationHistoryContext.Provider
      value={{
        classificationHistory: classificationHistory,
        setClassificationHistory: ({
          classifications,
          lastClassification,
          overwrite = false,
        }) => {
          if (overwrite) {
            setClassificationHistory({
              classifications: classifications,
              lastClassification: lastClassification,
            });
          } else {
            setClassificationHistory({
              classifications: [
                ...classificationHistory.classifications,
                ...classifications,
              ],
              lastClassification: [...lastClassification],
            });
          }
        },
      }}
    >
      {children}
    </ClassificationHistoryContext.Provider>
  );
};

ClassificationHistoryProvider.propTypes = {
  children: PropTypes.any,
};

export default ClassificationHistoryProvider;
export { ClassificationHistoryContext };
