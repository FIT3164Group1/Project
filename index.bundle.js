/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Alerts/FileUploadError.js":
/*!**************************************************!*\
  !*** ./src/components/Alerts/FileUploadError.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FileUploadError\": () => (/* binding */ FileUploadError)\n/* harmony export */ });\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\nvar FileUploadError = function FileUploadError(_ref) {\n  var isOpen = _ref.isOpen,\n      closeDialog = _ref.closeDialog;\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    className: \"alert alert-error \".concat(isOpen ? \"\" : \"hidden\"),\n    onClick: closeDialog,\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n      className: \"flex-1\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"svg\", {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        fill: \"none\",\n        viewBox: \"0 0 24 24\",\n        className: \"w-6 h-6 mx-2 stroke-current\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"path\", {\n          strokeLinecap: \"round\",\n          strokeLinejoin: \"round\",\n          strokeWidth: \"2\",\n          d: \"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636\"\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"label\", {\n        children: \"Lorem ipsum dolor sit amet, consectetur adip!\"\n      })]\n    })\n  });\n};\nFileUploadError.propTypes = {\n  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool.isRequired),\n  closeDialog: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func)\n};\n\n//# sourceURL=webpack://fit3164-group1-website/./src/components/Alerts/FileUploadError.js?");

/***/ }),

/***/ "./src/components/Carousel/Carousel.js":
/*!*********************************************!*\
  !*** ./src/components/Carousel/Carousel.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\nvar Carousel = function Carousel(props) {\n  var images = props.images,\n      imageClickHandler = props.imageClickHandler,\n      selectedImage = props.selectedImage;\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    className: \"gap-2 p-5 carousel carousel-center rounded-box\",\n    children: images.map(function (image, index) {\n      var path = image.path,\n          type = image.type;\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n        className: \"carousel-item\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n          className: \" indicator\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n            className: \"mb-6 indicator-item indicator-bottom indicator-center badge text-black shadow-lg \".concat(type == \"MSI\" ? \"bg-warning\" : \"badge-accent border-black\"),\n            children: type\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"img\", {\n            className: \"rounded-lg shadow-lg \".concat((selectedImage === null || selectedImage === void 0 ? void 0 : selectedImage.index) != index ? \"\" : type == \"MSI\" ? \"border-2 border-warning\" : \"border-2 border-accent\"),\n            src: path,\n            onClick: imageClickHandler({\n              index: index,\n              image: image\n            }),\n            id: index,\n            \"data-label\": type\n          })]\n        })\n      }, index);\n    })\n  });\n};\n\nCarousel.propTypes = {\n  images: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array.isRequired),\n  imageClickHandler: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func.isRequired),\n  selectedImage: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);\n\n//# sourceURL=webpack://fit3164-group1-website/./src/components/Carousel/Carousel.js?");

/***/ }),

/***/ "./src/components/ClassificationDIalog/ClassificationDialog.js":
/*!*********************************************************************!*\
  !*** ./src/components/ClassificationDIalog/ClassificationDialog.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/components/dialog/dialog.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ClassificationHistoryProvider_ClassificationHistoryProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ClassificationHistoryProvider/ClassificationHistoryProvider */ \"./src/components/ClassificationHistoryProvider/ClassificationHistoryProvider.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\n\nvar ClassificationDialog = function ClassificationDialog(_ref) {\n  var isOpen = _ref.isOpen,\n      closeDialog = _ref.closeDialog;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ClassificationHistoryProvider_ClassificationHistoryProvider__WEBPACK_IMPORTED_MODULE_1__.ClassificationHistoryContext),\n      lastClassification = _useContext.classificationHistory.lastClassification; // Get last classification results from ClassificationHistory context\n\n\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {\n      appear: true,\n      show: isOpen,\n      as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Dialog, {\n        as: \"div\",\n        className: \"fixed inset-0 z-10 overflow-y-auto\",\n        onClose: closeDialog,\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"div\", {\n          className: \"min-h-screen px-4 text-center\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {\n            as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,\n            enter: \"ease-out duration-300\",\n            enterFrom: \"opacity-0\",\n            enterTo: \"opacity-100\",\n            leave: \"ease-in duration-200\",\n            leaveFrom: \"opacity-100\",\n            leaveTo: \"opacity-0\",\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Dialog.Overlay, {\n              className: \"fixed inset-0\"\n            })\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"span\", {\n            className: \"inline-block h-screen align-middle\",\n            \"aria-hidden\": \"true\",\n            children: \"\\u200B\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {\n            as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,\n            enter: \"ease-out duration-300\",\n            enterFrom: \"opacity-0 scale-95\",\n            enterTo: \"opacity-100 scale-100\",\n            leave: \"ease-in duration-200\",\n            leaveFrom: \"opacity-100 scale-100\",\n            leaveTo: \"opacity-0 scale-95\",\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"div\", {\n              className: \"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Dialog.Title, {\n                as: \"h3\",\n                className: \"text-lg font-medium leading-6 text-gray-900\",\n                children: \"Classification results\"\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n                className: \"flex justify-center mt-4\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n                  className: \"overflow-y-scroll\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"table\", {\n                    className: \"table w-full table-fixed\",\n                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"thead\", {\n                      className: \"\",\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"tr\", {\n                        className: \"\",\n                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"th\", {\n                          className: \"w-1/12\"\n                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"th\", {\n                          className: \"w-2/6\",\n                          children: \"File\"\n                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"th\", {\n                          className: \"w-1/6\",\n                          children: \"Score\"\n                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"th\", {\n                          className: \"w-2/6\",\n                          children: \"Classification\"\n                        })]\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"tbody\", {\n                      children: lastClassification === null || lastClassification === void 0 ? void 0 : lastClassification.map(function (classification, index) {\n                        var filename = classification.filename,\n                            score = classification.score;\n                        var predicted_label = score > 0.5 ? \"MSS\" : \"MSI\";\n                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"tr\", {\n                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"th\", {\n                            children: index\n                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"td\", {\n                            className: \"truncate\",\n                            children: filename\n                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"td\", {\n                            children: Math.round((score + Number.EPSILON) * 100) / // Round score to nearest 2 decimal places\n                            100\n                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"td\", {\n                            className: \"flex justify-evenly\",\n                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"span\", {\n                              className: \"badge \".concat(predicted_label == \"MSI\" ? \"badge-warning\" : \"badge-accent\"),\n                              children: predicted_label\n                            }), classification.label && (classification.label == predicted_label ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"span\", {\n                              className: \"ml-2 badge badge-success\",\n                              children: \"Correct\"\n                            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"span\", {\n                              className: \"ml-2 badge badge-error\",\n                              children: \"Incorrect\"\n                            }))]\n                          })]\n                        }, index);\n                      })\n                    })]\n                  })\n                })\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n                className: \"flex justify-center mt-4\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"button\", {\n                  type: \"button\",\n                  className: \"btn btn-outline btn-primary\",\n                  onClick: closeDialog,\n                  children: \"Got it, thanks!\"\n                })\n              })]\n            })\n          })]\n        })\n      })\n    })\n  });\n};\n\nClassificationDialog.propTypes = {\n  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),\n  closeDialog: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassificationDialog);\n\n//# sourceURL=webpack://fit3164-group1-website/./src/components/ClassificationDIalog/ClassificationDialog.js?");

/***/ }),

/***/ "./src/components/ClassificationHistory/ClassificationHistory.js":
/*!***********************************************************************!*\
  !*** ./src/components/ClassificationHistory/ClassificationHistory.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ClassificationHistoryProvider_ClassificationHistoryProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ClassificationHistoryProvider/ClassificationHistoryProvider */ \"./src/components/ClassificationHistoryProvider/ClassificationHistoryProvider.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n // import { setLocalStorage } from \"../../utils/utils\";\n\n\n\n\nvar ClassificationHistory = function ClassificationHistory() {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ClassificationHistoryProvider_ClassificationHistoryProvider__WEBPACK_IMPORTED_MODULE_1__.ClassificationHistoryContext),\n      classifications = _useContext.classificationHistory.classifications,\n      setClassificationHistory = _useContext.setClassificationHistory;\n\n  var buttonHandler = function buttonHandler() {\n    setClassificationHistory({\n      classifications: [],\n      lastClassification: [],\n      overwrite: true\n    });\n    return;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n    className: classifications != null && classifications.length > 0 ? \"\" : \"hidden\",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n      className: \"px-6\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"hr\", {\n        className: \"border-base-100\"\n      })\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n      className: \"card\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n        className: \"card-body\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n          className: \"text-2xl card-title\",\n          children: \"Classification history\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n          className: \"p-4 overflow-y-scroll bg-black border rounded-lg max-h-50-vh border-base-100 backdrop-filter backdrop-blur-3xl bg-opacity-10 \",\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"table\", {\n            className: \"w-full overflow-y-scroll table-fixed h-1/3\",\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"thead\", {\n              className: \"\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"tr\", {\n                className: \"\",\n                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"th\", {\n                  className: \"w-1/12 pb-2 border-b border-base-100\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"button\", {\n                    className: \"bg-opacity-100 btn btn-circle btn-xs btn-error\",\n                    onClick: buttonHandler,\n                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"svg\", {\n                      xmlns: \"http://www.w3.org/2000/svg\",\n                      fill: \"none\",\n                      viewBox: \"0 0 24 24\",\n                      className: \"inline-block w-4 h-4 stroke-current md:w-6 md:h-6\",\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"path\", {\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        strokeWidth: \"2\",\n                        d: \"M6 18L18 6M6 6l12 12\"\n                      })\n                    })\n                  })\n                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"th\", {\n                  className: \"w-2/6 pb-2 border-b border-base-100\",\n                  children: \"File\"\n                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"th\", {\n                  className: \"w-1/6 pb-2 border-b border-base-100\",\n                  children: \"Score\"\n                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"th\", {\n                  className: \"w-2/6 pb-2 border-b border-base-100\",\n                  children: \"Classification\"\n                })]\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"tbody\", {\n              className: \"\",\n              children: classifications === null || classifications === void 0 ? void 0 : classifications.map(function (classification, index) {\n                var filename = classification.filename,\n                    score = classification.score;\n                var lastIndex = classifications.length - 1;\n                var predicted_label = score > 0.5 ? \"MSS\" : \"MSI\";\n                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"tr\", {\n                  className: \"\",\n                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"th\", {\n                    className: \"text-center \".concat(lastIndex != index ? \"py-4 border-b border-base-100\" : \"pt-4\"),\n                    children: index\n                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"td\", {\n                    className: \"text-center truncate \".concat(lastIndex != index ? \"py-4 border-b border-base-100\" : \"pt-4\"),\n                    children: filename\n                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"td\", {\n                    className: \"text-center \".concat(lastIndex != index ? \"py-4 border-b border-base-100\" : \"pt-4\"),\n                    children: Math.round((score + Number.EPSILON) * 100) / // Round score to nearest 2 decimal places\n                    100\n                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"td\", {\n                    className: \"text-center \".concat(lastIndex != index ? \"py-4 border-b border-base-100\" : \"pt-4\"),\n                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n                      className: \"flex content-center justify-center\",\n                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"span\", {\n                        className: \"badge \".concat(predicted_label == \"MSI\" ? \"badge-warning bg-opacity-100  text-base-100\" : \"badge-accent\"),\n                        children: predicted_label\n                      }), classification.label && (classification.label == predicted_label ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"span\", {\n                        className: \"ml-2 bg-opacity-100 badge badge-success text-base-100\",\n                        children: \"Correct\"\n                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"span\", {\n                        className: \"ml-2 bg-opacity-100 badge badge-error text-base-100\",\n                        children: \"Incorrect\"\n                      }))]\n                    })\n                  })]\n                }, index);\n              })\n            })]\n          })\n        })]\n      })\n    })]\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassificationHistory);\n\n//# sourceURL=webpack://fit3164-group1-website/./src/components/ClassificationHistory/ClassificationHistory.js?");

/***/ }),

/***/ "./src/components/ClassificationHistoryProvider/ClassificationHistoryProvider.js":
/*!***************************************************************************************!*\
  !*** ./src/components/ClassificationHistoryProvider/ClassificationHistoryProvider.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"ClassificationHistoryContext\": () => (/* binding */ ClassificationHistoryContext)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\nvar initialState = {\n  classifications: [],\n  lastClassification: []\n};\nvar ClassificationHistoryContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createContext(initialState);\n\nvar ClassificationHistoryProvider = function ClassificationHistoryProvider(_ref) {\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(function () {\n    return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getLocalStorage)(\"classifications\", initialState);\n  } // Get localStorage state or return initalState if not found\n  ),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n      classificationHistory = _useState2[0],\n      _setClassificationHistory = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.setLocalStorage)(\"classifications\", classificationHistory); // Set localStorage\n  }, [classificationHistory]);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ClassificationHistoryContext.Provider, {\n    value: {\n      classificationHistory: classificationHistory,\n      setClassificationHistory: function setClassificationHistory(_ref2) {\n        var classifications = _ref2.classifications,\n            lastClassification = _ref2.lastClassification,\n            _ref2$overwrite = _ref2.overwrite,\n            overwrite = _ref2$overwrite === void 0 ? false : _ref2$overwrite;\n\n        if (overwrite) {\n          _setClassificationHistory({\n            classifications: classifications,\n            lastClassification: lastClassification\n          });\n        } else {\n          _setClassificationHistory({\n            classifications: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(classificationHistory.classifications), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(classifications)),\n            lastClassification: (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lastClassification)\n          });\n        }\n      }\n    },\n    children: children\n  });\n};\n\nClassificationHistoryProvider.propTypes = {\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassificationHistoryProvider);\n\n\n//# sourceURL=webpack://fit3164-group1-website/./src/components/ClassificationHistoryProvider/ClassificationHistoryProvider.js?");

/***/ }),

/***/ "./src/components/ClassifierTabs/ClassifierTabs.js":
/*!*********************************************************!*\
  !*** ./src/components/ClassifierTabs/ClassifierTabs.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _TestTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestTab */ \"./src/components/ClassifierTabs/TestTab.js\");\n/* harmony import */ var _UploadTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UploadTab */ \"./src/components/ClassifierTabs/UploadTab.js\");\n/* harmony import */ var _ValidationTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ValidationTab */ \"./src/components/ClassifierTabs/ValidationTab.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\n\n\nvar ClassifierTabs = function ClassifierTabs(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"test\"),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n      tabState = _useState2[0],\n      setTabState = _useState2[1];\n\n  var renderTabs = function renderTabs(tab, props) {\n    switch (tab) {\n      case \"upload\":\n        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_UploadTab__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {});\n\n      case \"test\":\n        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_TestTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props));\n\n      case \"validate\":\n        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ValidationTab__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {});\n\n      default:\n        break;\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n    className: \"mt-5\",\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(\"div\", {\n      className: \"flex flex-col items-center space-y-2\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(\"div\", {\n        className: \"items-center bg-transparent tabs tabs-boxed\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n          className: \"z-0 p-2 bg-white shadow-2xl md:pr-5 rounded-xl\",\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"a\", {\n            className: \"tab \".concat(tabState == \"upload\" ? \"tab-active shadow-lg\" : \"\"),\n            onClick: function onClick() {\n              setTabState(\"upload\");\n            },\n            children: \"Upload image\"\n          })\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n          className: \"z-10 justify-center p-2 -m-2 bg-white shadow rounded-xl\",\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"a\", {\n            className: \"tab tab-lg \".concat(tabState == \"test\" ? \"tab-active shadow-lg\" : \"\"),\n            onClick: function onClick() {\n              setTabState(\"test\");\n            },\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"span\", {\n              className: \"font-bold\",\n              children: \"Try Me!\"\n            })\n          })\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n          className: \"z-0 p-2 bg-white shadow-2xl md:pl-5 rounded-xl\",\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"a\", {\n            className: \"tab \".concat(tabState == \"validate\" ? \"tab-active shadow-lg\" : \"\"),\n            onClick: function onClick() {\n              setTabState(\"validate\");\n            },\n            children: \"Validate accuracy\"\n          })\n        })]\n      }), renderTabs(tabState, props)]\n    })\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassifierTabs);\n\n//# sourceURL=webpack://fit3164-group1-website/./src/components/ClassifierTabs/ClassifierTabs.js?");

/***/ }),

/***/ "./src/components/ClassifierTabs/TestTab.js":
/*!**************************************************!*\
  !*** ./src/components/ClassifierTabs/TestTab.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Carousel_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Carousel/Carousel */ \"./src/components/Carousel/Carousel.js\");\n/* harmony import */ var _ClassificationDIalog_ClassificationDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ClassificationDIalog/ClassificationDialog */ \"./src/components/ClassificationDIalog/ClassificationDialog.js\");\n/* harmony import */ var _ClassificationHistoryProvider_ClassificationHistoryProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ClassificationHistoryProvider/ClassificationHistoryProvider */ \"./src/components/ClassificationHistoryProvider/ClassificationHistoryProvider.js\");\n/* harmony import */ var _ClassifyButton_ClassifyButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ClassifyButton/ClassifyButton */ \"./src/components/ClassifyButton/ClassifyButton.js\");\n/* harmony import */ var _utils_classifyUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/classifyUtils */ \"./src/utils/classifyUtils.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar TestTab = function TestTab(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState, 2),\n      selectedImage = _useState2[0],\n      setSelectedImage = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState3, 2),\n      selectedImageFile = _useState4[0],\n      setSelectedImageFile = _useState4[1]; // {file: File([blob]), classification}\n\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useState5, 2),\n      classifyState = _useState6[0],\n      setClassifyState = _useState6[1]; // 'complete', 'pending', 'null'\n\n\n  var handleImageClick = function handleImageClick(params) {\n    return /*#__PURE__*/function () {\n      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(event) {\n        var index, imagePath, label, imageName, imageBlob, imageFile;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                index = params.index;\n                event.preventDefault(); // Prevent default event\n\n                setSelectedImage(params); // Set selected image state according to index\n\n                imagePath = event.target.src; // Get selected image path\n\n                label = event.target.getAttribute(\"data-label\");\n                imageName = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.getFilenameFromURL)(imagePath);\n                _context.next = 8;\n                return fetch(imagePath).then(function (r) {\n                  return r.blob();\n                });\n\n              case 8:\n                imageBlob = _context.sent;\n                // Load image blob\n                imageFile = new File([imageBlob], \"\".concat(imageName)); // Construct File object from image blob\n\n                setSelectedImageFile({\n                  file: imageFile,\n                  label: label\n                }); // Store File object in State\n                // Scroll selected image into view\n\n                document.getElementById(\"\".concat(index)).scrollIntoView({\n                  behavior: \"smooth\"\n                });\n                return _context.abrupt(\"return\");\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }();\n  };\n\n  var handleClick = function handleClick(event) {\n    event.target.tagName != \"BUTTON\" && event.target.tagName != \"IMG\" // If user clicks on page\n    ? setSelectedImage(null) // Deselect image\n    : \"\";\n  };\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_ClassificationHistoryProvider_ClassificationHistoryProvider__WEBPACK_IMPORTED_MODULE_7__.ClassificationHistoryContext),\n      setClassificationHistory = _useContext.setClassificationHistory; // Get ClassificationHistory context to add classifications results\n\n\n  var buttonHandler = /*#__PURE__*/function () {\n    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(event) {\n      var classifications;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              event.preventDefault(); // Prevent default event\n\n              _context2.next = 3;\n              return (0,_utils_classifyUtils__WEBPACK_IMPORTED_MODULE_9__.classifyImageFiles)([selectedImageFile]);\n\n            case 3:\n              classifications = _context2.sent;\n              // Get classification results for selected image\n              setClassificationHistory({\n                classifications: classifications,\n                lastClassification: classifications\n              }); // Add classifications to ClassificationHistory context\n\n              setSelectedImage(null); // Clear image selection\n\n              setClassifyState(\"complete\");\n\n            case 7:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function buttonHandler(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    document.addEventListener(\"mousedown\", handleClick, false); // Check for user click on page\n\n    return function () {\n      document.removeEventListener(\"mousedown\", handleClick, false); // Remove EventListener on clean up\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(\"div\", {\n    className: \"card text-base-content\",\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(\"div\", {\n      className: \"card-body\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(\"div\", {\n        className: \"p-4 mx-auto mb-6 border shadow-lg rounded-xl\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(\"p\", {\n          className: \"text-lg\",\n          children: [\"You may test the classification model by first selecting a sample image, then clicking\", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(\"span\", {\n            className: \"mx-2 badge badge-secondary\",\n            children: \"Classify\"\n          }), \"below.\"]\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], (0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props), {}, {\n        selectedImage: selectedImage,\n        imageClickHandler: handleImageClick\n      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(\"div\", {\n        className: \"justify-center card-actions\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ClassifyButton_ClassifyButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          activeState: selectedImage == null ? \"disabled\" : \"active\",\n          buttonHandler: buttonHandler\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ClassificationDIalog_ClassificationDialog__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          isOpen: classifyState == \"complete\" ? true : false // Show when classifyState is completed\n          ,\n          closeDialog: function closeDialog() {\n            return setClassifyState(null);\n          } // Purge classifyState to close Dialog\n          ,\n          className: \"z-40\"\n        })]\n      })]\n    })\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestTab);\n\n//# sourceURL=webpack://fit3164-group1-website/./src/components/ClassifierTabs/TestTab.js?");

/***/ }),

/***/ "./src/components/ClassifierTabs/UploadTab.js":
/*!****************************************************!*\
  !*** ./src/components/ClassifierTabs/UploadTab.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_imageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/imageUtils */ \"./src/utils/imageUtils.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ClassificationDIalog_ClassificationDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ClassificationDIalog/ClassificationDialog */ \"./src/components/ClassificationDIalog/ClassificationDialog.js\");\n/* harmony import */ var _ClassificationHistoryProvider_ClassificationHistoryProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ClassificationHistoryProvider/ClassificationHistoryProvider */ \"./src/components/ClassificationHistoryProvider/ClassificationHistoryProvider.js\");\n/* harmony import */ var _ClassifyButton_ClassifyButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ClassifyButton/ClassifyButton */ \"./src/components/ClassifyButton/ClassifyButton.js\");\n/* harmony import */ var _utils_classifyUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/classifyUtils */ \"./src/utils/classifyUtils.js\");\n/* harmony import */ var _Alerts_FileUploadError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Alerts/FileUploadError */ \"./src/components/Alerts/FileUploadError.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar UploadTab = function UploadTab() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n      uploadState = _useState2[0],\n      setUploadState = _useState2[1]; // 'active', 'null', 'complete'\n\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState3, 2),\n      uploadFiles = _useState4[0],\n      setUploadFiles = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState5, 2),\n      uploadError = _useState6[0],\n      setUploadError = _useState6[1]; // Number of invalid files\n\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_ClassificationHistoryProvider_ClassificationHistoryProvider__WEBPACK_IMPORTED_MODULE_6__.ClassificationHistoryContext),\n      setClassificationHistory = _useContext.setClassificationHistory; // Get ClassificationHistory context to add classifications results\n\n\n  var uploadHandler = /*#__PURE__*/function () {\n    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(event) {\n      var fileList, validImageFiles, invalidFiles;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault(); // Prevent default event\n\n              fileList = Array.from(event.target.files); // Get array from FileList object\n\n              _context.next = 4;\n              return (0,_utils_imageUtils__WEBPACK_IMPORTED_MODULE_3__.filterValidImages)(fileList);\n\n            case 4:\n              validImageFiles = _context.sent;\n              // Get valid images from fileList array\n              invalidFiles = fileList.length - validImageFiles.length;\n              validImageFiles.length > 0 ? setUploadState(\"active\") // Active upload state\n              : setUploadState(null);\n              validImageFiles.length > 0 ? setUploadFiles(validImageFiles) // Store valid image files in state\n              : setUploadFiles(null);\n              invalidFiles > 0 ? setUploadError(invalidFiles) : \"\"; // Set upload error\n\n              event.target.value = null; // Clear upload field\n\n              return _context.abrupt(\"return\");\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function uploadHandler(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var buttonHandler = /*#__PURE__*/function () {\n    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(event) {\n      var fileObjectList, classifications;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              event.preventDefault(); // Prevent default event\n\n              fileObjectList = uploadFiles.map(function (file) {\n                return {\n                  file: file\n                };\n              });\n              _context2.next = 4;\n              return (0,_utils_classifyUtils__WEBPACK_IMPORTED_MODULE_8__.classifyImageFiles)(fileObjectList);\n\n            case 4:\n              classifications = _context2.sent;\n              // Get classification results for uploaded files\n              setClassificationHistory({\n                classifications: classifications,\n                lastClassification: classifications\n              }); // Add classifications to ClassificationHistory context\n\n              setUploadState(\"complete\"); // Set upload state to complete\n\n              setUploadFiles(null); // Clear uploaded files\n\n            case 8:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function buttonHandler(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"div\", {\n    className: \"card text-base-content\",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"div\", {\n      className: \"card-body\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n        className: \"p-4 mb-6 border shadow-lg rounded-xl\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"p\", {\n          className: \"text-lg\",\n          children: [\"You may classify your own images by first uploading your image files, then clicking\", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"span\", {\n            className: \"mx-2 badge badge-secondary\",\n            children: \"Classify\"\n          }), \"below. Image dimensions are required to be\", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"span\", {\n            className: \"italic\",\n            children: \" 224 x 224px\"\n          }), \" and the file must be in either JPEG or PNG format.\"]\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"label\", {\n          className: \"flex flex-col items-center w-64 px-4 py-6 tracking-wide uppercase bg-transparent border rounded-lg shadow-lg cursor-pointer border-primary text-base-content hover:bg-primary hover:text-base-100\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"svg\", {\n            className: \"w-8 h-8\",\n            fill: \"currentColor\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            viewBox: \"0 0 20 20\",\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"path\", {\n              d: \"M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z\"\n            })\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"span\", {\n            className: \"mt-2 text-base leading-normal\",\n            children: \"Upload your image\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"input\", {\n            multiple: true,\n            type: \"file\",\n            className: \"hidden\",\n            onChange: uploadHandler\n          })]\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"div\", {\n        className: \"justify-center card-actions\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ClassifyButton_ClassifyButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          activeState: uploadState == null ? \"hidden\" : uploadState == \"active\" ? \"active\" : uploadState == \"complete\" ? \"disabled\" : \"hidden\",\n          buttonHandler: buttonHandler\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ClassificationDIalog_ClassificationDialog__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          isOpen: uploadState == \"complete\" ? true : false // Show when uploadState is completed\n          ,\n          closeDialog: function closeDialog() {\n            return setUploadState(null);\n          } // Purge uploadState to close Dialog\n          ,\n          className: \"z-40\"\n        })]\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Alerts_FileUploadError__WEBPACK_IMPORTED_MODULE_9__.FileUploadError, {\n      isOpen: uploadError,\n      closeDialog: function closeDialog() {\n        return setUploadError(null);\n      }\n    })]\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadTab);\n\n//# sourceURL=webpack://fit3164-group1-website/./src/components/ClassifierTabs/UploadTab.js?");

/***/ }),

/***/ "./src/components/ClassifierTabs/ValidationTab.js":
/*!********************************************************!*\
  !*** ./src/components/ClassifierTabs/ValidationTab.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\nvar ValidationTab = function ValidationTab() {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n    className: \"card text-base-content\",\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n      className: \"card-body\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: \"p-4 mx-auto mb-6 border shadow-lg rounded-xl\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n          className: \"text-lg\",\n          children: [\"You may validate the classification model's accuracy by clicking\", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n            className: \"mx-2 badge badge-secondary\",\n            children: \"Validate\"\n          }), \"below.\"]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n          className: \"font-bold\",\n          children: \"TBC\"\n        })]\n      })\n    })\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationTab);\n\n//# sourceURL=webpack://fit3164-group1-website/./src/components/ClassifierTabs/ValidationTab.js?");

/***/ }),

/***/ "./src/components/ClassifyButton/ClassifyButton.js":
/*!*********************************************************!*\
  !*** ./src/components/ClassifyButton/ClassifyButton.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\nvar ClassifyButton = function ClassifyButton(props) {\n  var activeState = props.activeState,\n      buttonHandler = props.buttonHandler;\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"button\", {\n    className: \"w-32 btn btn-med \".concat(activeState == \"active\" ? \"btn-secondary\" : activeState == \"disabled\" ? \"btn-disabled\" : activeState == \"hidden\" ? \"hidden\" : \"\"),\n    id: \"classifyButton\",\n    onClick: buttonHandler,\n    children: \"Classify\"\n  });\n};\n\nClassifyButton.propTypes = {\n  activeState: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),\n  buttonHandler: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassifyButton);\n\n//# sourceURL=webpack://fit3164-group1-website/./src/components/ClassifyButton/ClassifyButton.js?");

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var theme_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-change */ \"./node_modules/theme-change/index.js\");\n/* harmony import */ var theme_change__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(theme_change__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\n\nfunction Footer(props) {\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    (0,theme_change__WEBPACK_IMPORTED_MODULE_3__.themeChange)(false); // 👆 false parameter is required for react project\n  });\n  var home = props.home,\n      about = props.about,\n      contact = props.contact;\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"div\", {\n      className: \"px-6 pt-10 pb-6\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"hr\", {\n        className: \"border-base-100\"\n      })\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"footer\", {\n      className: \"px-10 pb-5 footer footer-center text-base-100 gap-y-2\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"div\", {\n        className: \"grid grid-flow-col gap-4 text-center \",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"a\", {\n          className: \"link link-hover\",\n          href: home,\n          children: \"Home\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"a\", {\n          className: \"link link-hover\",\n          href: about,\n          children: \"About the Project\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"a\", {\n          className: \"link link-hover\",\n          href: contact,\n          children: \"Contact\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"a\", {\n          className: \"link link-hover\",\n          target: \"_blank\",\n          href: \"https://github.com/FIT3164Group1/Project\",\n          rel: \"noreferrer\",\n          children: \"Project Repository\"\n        })]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"div\", {\n        className: \"m-4 dropdown\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"div\", {\n          tabIndex: \"0\",\n          className: \"m-1 btn btn-ghost\",\n          children: \"CHANGE THEME\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"div\", {\n          className: \"h-32 mt-16 overflow-y-auto shadow-2xl top-px dropdown-content w-52 rounded-b-box text-base-content\",\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"ul\", {\n            className: \"p-4 menu compact bg-base-100\",\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"li\", {\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"a\", {\n                tabIndex: \"0\",\n                \"data-set-theme\": \"light\",\n                \"data-act-class\": \"active\",\n                children: \"\\uD83C\\uDF1D light\"\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"li\", {\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"a\", {\n                tabIndex: \"0\",\n                \"data-set-theme\": \"dark\",\n                \"data-act-class\": \"active\",\n                children: \"\\uD83C\\uDF1A dark\"\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"li\", {\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"a\", {\n                tabIndex: \"0\",\n                \"data-set-theme\": \"black\",\n                \"data-act-class\": \"active\",\n                children: \"\\uD83C\\uDFF4 black\"\n              })\n            })]\n          })\n        })]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"p\", {\n          children: \"Copyright \\xA9 2021 - All rights reserved by the development team.\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"a\", {\n          className: \"text-center link link-hover\",\n          href: \"https://coopercorbett.com\",\n          target: \"_blank\",\n          rel: \"noreferrer\",\n          children: \"Cooper Corbett\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"p\", {\n          className: \"text-center\",\n          children: \"Qile Wan\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"p\", {\n          className: \"text-center\",\n          children: \"Andrew Cao\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"p\", {\n          className: \"text-center\",\n          children: \"Lewis Ha\"\n        })]\n      })]\n    })]\n  });\n}\n\nFooter.propTypes = {\n  home: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),\n  about: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),\n  contact: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://fit3164-group1-website/./src/components/Footer/Footer.js?");

/***/ }),

/***/ "./src/components/Navbar/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/Navbar/Navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createSuper */ \"./node_modules/@babel/runtime/helpers/esm/createSuper.js\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\n\n\n\nvar Navbar = /*#__PURE__*/function (_Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Navbar, _Component);\n\n  var _super = (0,_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Navbar);\n\n  function Navbar() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Navbar);\n\n    return _super.apply(this, arguments);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Navbar, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          home = _this$props.home,\n          about = _this$props.about,\n          contact = _this$props.contact;\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n        className: \"p-3\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n          className: \"flex justify-between shadow-lg navbar bg-neutral text-neutral-content rounded-box \",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n            className: \"hidden pl-2 md:inline\",\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"a\", {\n              className: \"text-lg font-bold\",\n              href: home,\n              children: \"Gastro-intestinal Cancer Classifier\"\n            })\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n            className: \"flex-grow px-1 mx-1 justify-evenly md:px-2 md:mx-2\",\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"a\", {\n              className: \"px-1 btn btn-ghost btn-md rounded-btn md:px-3\",\n              href: home,\n              children: \"Home\"\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"a\", {\n              className: \"px-1 md:px-3 btn btn-ghost btn-md rounded-btn\",\n              href: about,\n              children: \"About the Project\"\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"a\", {\n              className: \"px-1 md:px-3 btn btn-ghost btn-md rounded-btn\",\n              href: contact,\n              children: \"Contact\"\n            })]\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n            tabIndex: \"0\",\n            className: \"justify-end px-1 mx-1\",\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"button\", {\n              className: \"fill-current btn btn-square btn-ghost text-neutral-content\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"a\", {\n                href: \"https://github.com/FIT3164Group1/Project\",\n                target: \"_blank\",\n                rel: \"noreferrer\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"svg\", {\n                  xmlns: \"http://www.w3.org/2000/svg\",\n                  width: \"24\",\n                  height: \"24\",\n                  viewBox: \"0 0 24 24\",\n                  className: \"fill-current text-neutral-content\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"path\", {\n                    d: \"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z\"\n                  })\n                })\n              })\n            })\n          })]\n        })\n      });\n    }\n  }]);\n\n  return Navbar;\n}(react__WEBPACK_IMPORTED_MODULE_5__.Component);\n\nNavbar.propTypes = {\n  home: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired),\n  about: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired),\n  contact: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n\n//# sourceURL=webpack://fit3164-group1-website/./src/components/Navbar/Navbar.js?");

/***/ }),

/***/ "./src/pages/index/App.js":
/*!********************************!*\
  !*** ./src/pages/index/App.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var _components_ClassificationHistory_ClassificationHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ClassificationHistory/ClassificationHistory */ \"./src/components/ClassificationHistory/ClassificationHistory.js\");\n/* harmony import */ var _components_ClassificationHistoryProvider_ClassificationHistoryProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ClassificationHistoryProvider/ClassificationHistoryProvider */ \"./src/components/ClassificationHistoryProvider/ClassificationHistoryProvider.js\");\n/* harmony import */ var _components_ClassifierTabs_ClassifierTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ClassifierTabs/ClassifierTabs */ \"./src/components/ClassifierTabs/ClassifierTabs.js\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer/Footer */ \"./src/components/Footer/Footer.js\");\n/* harmony import */ var _img_samples_msi1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/samples/msi1.png */ \"./src/img/samples/msi1.png\");\n/* harmony import */ var _img_samples_msi2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/samples/msi2.png */ \"./src/img/samples/msi2.png\");\n/* harmony import */ var _img_samples_msi3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/samples/msi3.png */ \"./src/img/samples/msi3.png\");\n/* harmony import */ var _img_samples_mss1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/samples/mss1.png */ \"./src/img/samples/mss1.png\");\n/* harmony import */ var _img_samples_mss2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/samples/mss2.png */ \"./src/img/samples/mss2.png\");\n/* harmony import */ var _img_samples_mss3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/samples/mss3.png */ \"./src/img/samples/mss3.png\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Navbar/Navbar */ \"./src/components/Navbar/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! smoothscroll-polyfill */ \"./node_modules/smoothscroll-polyfill/dist/smoothscroll.js\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n // kick off the polyfill!\n\n\n\n\nsmoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_13___default().polyfill();\nvar props = {\n  home: \"#\",\n  about: \"about.html\",\n  contact: \"contact.html\",\n  images: [{\n    path: _img_samples_msi1_png__WEBPACK_IMPORTED_MODULE_5__,\n    type: \"MSI\"\n  }, {\n    path: _img_samples_mss1_png__WEBPACK_IMPORTED_MODULE_8__,\n    type: \"MSS\"\n  }, {\n    path: _img_samples_msi2_png__WEBPACK_IMPORTED_MODULE_6__,\n    type: \"MSI\"\n  }, {\n    path: _img_samples_mss2_png__WEBPACK_IMPORTED_MODULE_9__,\n    type: \"MSS\"\n  }, {\n    path: _img_samples_msi3_png__WEBPACK_IMPORTED_MODULE_7__,\n    type: \"MSI\"\n  }, {\n    path: _img_samples_mss3_png__WEBPACK_IMPORTED_MODULE_10__,\n    type: \"MSS\"\n  }]\n};\n\nfunction App() {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_components_ClassificationHistoryProvider_ClassificationHistoryProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_11__[\"default\"], (0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(\"div\", {\n        className: \"flex flex-col items-center \",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(\"div\", {\n          className: \"md:w-4/5\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(\"div\", {\n            className: \"card text-base-content\",\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(\"div\", {\n              className: \"card-body\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(\"div\", {\n                className: \"mb-16 text-5xl text-center card-title\",\n                children: \"Gastro-intestinal Cancer Classification\"\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(\"div\", {\n                className: \"flex flex-col gap-3 md:flex-row\",\n                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(\"div\", {\n                  className: \"w-full md:w-1/2\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(\"div\", {\n                    className: \"shadow-2xl card bordered\",\n                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(\"div\", {\n                      className: \"card-body\",\n                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(\"div\", {\n                        className: \"text-center card-title\",\n                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(\"div\", {\n                          className: \"p-5 text-2xl badge badge-primary\",\n                          children: \"Goal\"\n                        })\n                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(\"p\", {\n                        children: \"Utilise our cancer prediction model with your own histological image.\"\n                      })]\n                    })\n                  })\n                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(\"div\", {\n                  className: \"w-full md:w-1/2\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(\"div\", {\n                    className: \"shadow-2xl card bordered\",\n                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(\"div\", {\n                      className: \"card-body\",\n                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(\"div\", {\n                        className: \"text-center card-title\",\n                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(\"div\", {\n                          className: \"p-5 text-2xl badge badge-secondary\",\n                          children: \"Strategy\"\n                        })\n                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(\"p\", {\n                        children: \"We create a classfication model to identify between the the two possible categories MSS and MSIMUS (MSI) of cancer.\"\n                      })]\n                    })\n                  })\n                })]\n              })]\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(\"div\", {\n              className: \"px-6\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(\"hr\", {\n                className: \"border-base-100\"\n              })\n            })]\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_ClassifierTabs_ClassifierTabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_ClassificationHistory_ClassificationHistory__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props))]\n        })\n      })]\n    })\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://fit3164-group1-website/./src/pages/index/App.js?");

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/pages/index/App.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\nvar container = document.getElementById(\"root\");\nreact_dom__WEBPACK_IMPORTED_MODULE_2__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}), container);\n\n//# sourceURL=webpack://fit3164-group1-website/./src/pages/index/index.js?");

/***/ }),

/***/ "./src/utils/classifyUtils.js":
/*!************************************!*\
  !*** ./src/utils/classifyUtils.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"classifyImageFiles\": () => (/* binding */ classifyImageFiles)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var url_safe_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-safe-base64 */ \"./node_modules/url-safe-base64/lib/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar generateBase64Encoding = /*#__PURE__*/function () {\n  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(file) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            return _context2.abrupt(\"return\", new Promise(function (resolve, reject) {\n              var reader = new FileReader();\n              reader.onload = /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n                var string, urlSafeEncoding;\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        try {\n                          // Resolve the promise with the response value\n                          string = reader.result.split(\",\")[1];\n                          urlSafeEncoding = (0,url_safe_base64__WEBPACK_IMPORTED_MODULE_3__.trim)((0,url_safe_base64__WEBPACK_IMPORTED_MODULE_3__.encode)(string));\n                          resolve(urlSafeEncoding);\n                        } catch (err) {\n                          reject(err);\n                        }\n\n                      case 1:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              reader.onerror = function (error) {\n                reject(error);\n              };\n\n              reader.readAsDataURL(file);\n            }));\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function generateBase64Encoding(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar classifyImageFiles = /*#__PURE__*/function () {\n  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(fileObjectList) {\n    var imageArray, imageData, config, response, scores, classifications;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return Promise.all(fileObjectList.map(function (_ref4) {\n              var file = _ref4.file;\n              return generateBase64Encoding(file);\n            }) // Generate Base64 encoding for image files\n            );\n\n          case 3:\n            imageArray = _context3.sent;\n            imageData = {\n              instances: imageArray.map(function (base64) {\n                return [base64];\n              }) // JSON format for TF Model endpoint\n\n            };\n            config = {\n              url: \"https://grx408sfch.execute-api.ap-southeast-2.amazonaws.com/prod/make-classification\",\n              // AWS Endpoint\n              method: \"post\",\n              data: imageData,\n              headers: {\n                Accept: \"application/json\"\n              }\n            };\n            _context3.next = 8;\n            return axios__WEBPACK_IMPORTED_MODULE_4___default()(config);\n\n          case 8:\n            response = _context3.sent;\n            _context3.prev = 9;\n            scores = response.data.predictions;\n            classifications = fileObjectList.map(function (fileObject, index) {\n              var filename = fileObject.file.name;\n              return (0,_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n                filename: filename,\n                score: scores[index][0]\n              }, fileObject.label && {\n                label: fileObject.label\n              });\n            });\n            return _context3.abrupt(\"return\", classifications);\n\n          case 15:\n            _context3.prev = 15;\n            _context3.t0 = _context3[\"catch\"](9);\n            console.error(_context3.t0);\n\n          case 18:\n            _context3.next = 23;\n            break;\n\n          case 20:\n            _context3.prev = 20;\n            _context3.t1 = _context3[\"catch\"](0);\n            console.error();\n\n          case 23:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 20], [9, 15]]);\n  }));\n\n  return function classifyImageFiles(_x2) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack://fit3164-group1-website/./src/utils/classifyUtils.js?");

/***/ }),

/***/ "./src/utils/imageUtils.js":
/*!*********************************!*\
  !*** ./src/utils/imageUtils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterValidImages\": () => (/* binding */ filterValidImages),\n/* harmony export */   \"isValidImage\": () => (/* binding */ isValidImage)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var image_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! image-validator */ \"./node_modules/image-validator/index.js\");\n\n\n\n\nvar getUploadedFileDimensions = function getUploadedFileDimensions(file) {\n  return new Promise(function (resolve, reject) {\n    try {\n      var img = new Image();\n\n      img.onload = function () {\n        var width = img.naturalWidth,\n            height = img.naturalHeight;\n        window.URL.revokeObjectURL(img.src);\n        return resolve({\n          width: width,\n          height: height\n        });\n      };\n\n      img.src = window.URL.createObjectURL(file);\n    } catch (exception) {\n      return reject(exception);\n    }\n  });\n};\n\nvar filterValidImages = /*#__PURE__*/function () {\n  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(fileList) {\n    var results;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Promise.all(fileList.map(isValidImage));\n\n          case 2:\n            results = _context.sent;\n            return _context.abrupt(\"return\", results.filter(function (file) {\n              return file != false;\n            }));\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function filterValidImages(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar isValidImage = /*#__PURE__*/function () {\n  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(file) {\n    var _yield$getUploadedFil, width, height;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return (0,image_validator__WEBPACK_IMPORTED_MODULE_2__.validateImage)(file);\n\n          case 2:\n            if (!_context2.sent) {\n              _context2.next = 16;\n              break;\n            }\n\n            _context2.next = 5;\n            return getUploadedFileDimensions(file);\n\n          case 5:\n            _yield$getUploadedFil = _context2.sent;\n            width = _yield$getUploadedFil.width;\n            height = _yield$getUploadedFil.height;\n\n            if (!(width == 224 && height == 224)) {\n              _context2.next = 12;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", file);\n\n          case 12:\n            console.log(\"FILE: \".concat(file.name, \" \\nImage file has incorrect dimensions. Please ensure your image dimensions are 224px x 224px.\"));\n            return _context2.abrupt(\"return\", false);\n\n          case 14:\n            _context2.next = 18;\n            break;\n\n          case 16:\n            console.log(\"FILE: \".concat(file.name, \" \\nUploaded file is not a valid image file.\"));\n            return _context2.abrupt(\"return\", false);\n\n          case 18:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function isValidImage(_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack://fit3164-group1-website/./src/utils/imageUtils.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFilenameFromURL\": () => (/* binding */ getFilenameFromURL),\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage),\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage)\n/* harmony export */ });\nvar getFilenameFromURL = function getFilenameFromURL(url) {\n  try {\n    return new URL(url).pathname.split(\"/\").pop();\n  } catch (e) {\n    console.error(e);\n  }\n};\nfunction getLocalStorage(key, initialValue) {\n  try {\n    var value = window.localStorage.getItem(key);\n    return value ? JSON.parse(value) : initialValue;\n  } catch (e) {\n    // if error, return initial value\n    return initialValue;\n  }\n}\nfunction setLocalStorage(key, value) {\n  try {\n    window.localStorage.setItem(key, JSON.stringify(value));\n  } catch (e) {// catch possible errors:\n    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API\n  }\n}\n\n//# sourceURL=webpack://fit3164-group1-website/./src/utils/utils.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1633581847861\n      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://fit3164-group1-website/./src/css/styles.css?");

/***/ }),

/***/ "./src/img/samples/msi1.png":
/*!**********************************!*\
  !*** ./src/img/samples/msi1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/msi1.png\";\n\n//# sourceURL=webpack://fit3164-group1-website/./src/img/samples/msi1.png?");

/***/ }),

/***/ "./src/img/samples/msi2.png":
/*!**********************************!*\
  !*** ./src/img/samples/msi2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/msi2.png\";\n\n//# sourceURL=webpack://fit3164-group1-website/./src/img/samples/msi2.png?");

/***/ }),

/***/ "./src/img/samples/msi3.png":
/*!**********************************!*\
  !*** ./src/img/samples/msi3.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/msi3.png\";\n\n//# sourceURL=webpack://fit3164-group1-website/./src/img/samples/msi3.png?");

/***/ }),

/***/ "./src/img/samples/mss1.png":
/*!**********************************!*\
  !*** ./src/img/samples/mss1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/mss1.png\";\n\n//# sourceURL=webpack://fit3164-group1-website/./src/img/samples/mss1.png?");

/***/ }),

/***/ "./src/img/samples/mss2.png":
/*!**********************************!*\
  !*** ./src/img/samples/mss2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/mss2.png\";\n\n//# sourceURL=webpack://fit3164-group1-website/./src/img/samples/mss2.png?");

/***/ }),

/***/ "./src/img/samples/mss3.png":
/*!**********************************!*\
  !*** ./src/img/samples/mss3.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/mss3.png\";\n\n//# sourceURL=webpack://fit3164-group1-website/./src/img/samples/mss3.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "styles.css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("index." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("d6b2a47cedfc3072512f")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "fit3164-group1-website:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatefit3164_group1_website"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfit3164_group1_website"] = self["webpackChunkfit3164_group1_website"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/pages/index/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;