import { getLocalStorage, setLocalStorage } from "../../utils/utils";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const initialState = {
  classifications: null,
};

const ClassificationHistoryContext = React.createContext(initialState);

const ClassificationHistoryProvider = ({ children }) => {
  const [classificationHistory, setClassificationHistory] = useState(() =>
    getLocalStorage("classifications", initialState)
  );

  useEffect(() => {
    setLocalStorage("classifications", classificationHistory);
  }, [classificationHistory]);

  return (
    <ClassificationHistoryContext.Provider
      value={{
        classifications: classificationHistory.classifications,
        setClassifications: (new_classification_history) => {
          console.log(new_classification_history);
          setClassificationHistory({
            classifications: [
              ...(classificationHistory.classifications || []),
              ...new_classification_history,
            ],
          });
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
