import React, { useContext } from "react";
import { ClassificationHistoryContext } from "../ClassificationHistoryProvider/ClassificationHistoryProvider";
// import { setLocalStorage } from "../../utils/utils";

const ClassificationHistory = () => {
  const {
    classificationHistory: { classifications },
    setClassificationHistory,
  } = useContext(ClassificationHistoryContext);

  const buttonHandler = () => {
    setClassificationHistory({
      classifications: [],
      lastClassification: [],
      overwrite: true,
    });
    return;
  };

  return (
    <div
      className={
        classifications != null && classifications.length > 0 ? "" : "hidden"
      }
    >
      <div className="px-6">
        <hr className="border-base-100" />
      </div>
      <div className="card">
        <div className="card-body">
          <div className="text-2xl card-title">Classification history</div>
          <div className="p-4 overflow-y-scroll bg-black border rounded-lg max-h-50-vh border-base-100 backdrop-filter backdrop-blur-3xl bg-opacity-10 ">
            <table className="w-full overflow-y-scroll table-fixed h-1/3">
              <thead className="">
                <tr className="">
                  <th className="w-1/12 pb-2 border-b border-base-100">
                    <button
                      className="bg-opacity-100 btn btn-circle btn-xs btn-error"
                      onClick={buttonHandler}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-4 h-4 stroke-current md:w-6 md:h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </th>
                  <th className="w-2/6 pb-2 border-b border-base-100">File</th>
                  <th className="w-1/6 pb-2 border-b border-base-100">Score</th>
                  <th className="w-2/6 pb-2 border-b border-base-100">
                    Classification
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {classifications?.map((classification, index) => {
                  const { filename, score } = classification;
                  const lastIndex = classifications.length - 1;
                  const predicted_label = score > 0.5 ? "MSS" : "MSI";
                  return (
                    <tr key={index} className="">
                      <th
                        className={`text-center ${
                          lastIndex != index
                            ? "py-4 border-b border-base-100"
                            : "pt-4"
                        }`}
                      >
                        {index}
                      </th>
                      <td
                        className={`text-center truncate ${
                          lastIndex != index
                            ? "py-4 border-b border-base-100"
                            : "pt-4"
                        }`}
                      >
                        {filename}
                      </td>
                      <td
                        className={`text-center ${
                          lastIndex != index
                            ? "py-4 border-b border-base-100"
                            : "pt-4"
                        }`}
                      >
                        {Math.round((score + Number.EPSILON) * 100) / // Round score to nearest 2 decimal places
                          100}
                      </td>
                      <td
                        className={`text-center ${
                          lastIndex != index
                            ? "py-4 border-b border-base-100"
                            : "pt-4"
                        }`}
                      >
                        <div className="flex content-center justify-center">
                          <span
                            className={`badge ${
                              predicted_label == "MSI"
                                ? "badge-warning bg-opacity-100  text-base-100"
                                : "badge-accent"
                            }`}
                          >
                            {predicted_label}
                          </span>
                          {classification.label &&
                            (classification.label == predicted_label ? (
                              <span className="ml-2 bg-opacity-100 badge badge-success text-base-100">
                                Correct
                              </span>
                            ) : (
                              <span className="ml-2 bg-opacity-100 badge badge-error text-base-100">
                                Incorrect
                              </span>
                            ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassificationHistory;
