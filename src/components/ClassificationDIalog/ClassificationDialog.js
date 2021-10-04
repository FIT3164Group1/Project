import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useContext } from "react";
import { ClassificationHistoryContext } from "../ClassificationHistoryProvider/ClassificationHistoryProvider";
import PropTypes from "prop-types";

const ClassificationDialog = ({ isOpen, closeDialog }) => {
  const {
    classificationHistory: { lastClassification },
  } = useContext(ClassificationHistoryContext); // Get last classification results from ClassificationHistory context

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeDialog}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Classification results
                </Dialog.Title>
                <div className="flex justify-center mt-4">
                  <div className="overflow-y-scroll">
                    <table className="table w-full table-fixed">
                      <thead className="">
                        <tr className="">
                          <th className="w-1/12"></th>
                          <th className="w-2/6">File</th>
                          <th className="w-1/6">Score</th>
                          <th className="w-2/6">Classification</th>
                        </tr>
                      </thead>
                      <tbody>
                        {lastClassification?.map((classification, index) => {
                          const { filename, score } = classification;
                          const predicted_label = score > 0.5 ? "MSS" : "MSI";
                          return (
                            <tr key={index}>
                              <th>{index}</th>
                              <td className="truncate">{filename}</td>
                              <td>
                                {Math.round((score + Number.EPSILON) * 100) / // Round score to nearest 2 decimal places
                                  100}
                              </td>
                              <td className="flex justify-evenly">
                                <span
                                  className={`badge ${
                                    predicted_label == "MSI"
                                      ? "badge-warning"
                                      : "badge-accent"
                                  }`}
                                >
                                  {predicted_label}
                                </span>
                                {classification.label &&
                                  (classification.label == predicted_label ? (
                                    <span className="ml-2 badge badge-success">
                                      Correct
                                    </span>
                                  ) : (
                                    <span className="ml-2 badge badge-error">
                                      Incorrect
                                    </span>
                                  ))}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    type="button"
                    className="btn btn-outline btn-primary"
                    onClick={closeDialog}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

ClassificationDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
};

export default ClassificationDialog;
