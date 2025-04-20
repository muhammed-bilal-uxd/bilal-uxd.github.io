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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n// declare module \"*.css\";\nvar YearDifferenceCalculator = /** @class */ (function () {\n    function YearDifferenceCalculator(elementId) {\n        var el = document.getElementById(elementId);\n        if (!el) {\n            throw new Error(\"Element with id \\\"\".concat(elementId, \"\\\" not found\"));\n        }\n        this.element = el;\n    }\n    // Private method to calculate the year and month difference\n    YearDifferenceCalculator.prototype.getYearMonthDifference = function (startDate, endDate) {\n        // Calculate the total number of months difference\n        var totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 +\n            (endDate.getMonth() - startDate.getMonth());\n        // If the end day is less than the start day, subtract one month\n        if (endDate.getDate() < startDate.getDate()) {\n            totalMonths--;\n        }\n        // Convert total months into years and remaining months\n        var years = Math.floor(totalMonths / 12);\n        var months = totalMonths % 12;\n        return { years: years, months: months };\n    };\n    // Public method to update the element's content with the difference\n    YearDifferenceCalculator.prototype.updateYearsDifference = function () {\n        // Retrieve the date string from the data-date attribute\n        var dateString = this.element.getAttribute(\"data-date\");\n        if (!dateString)\n            return;\n        // Convert the string to a Date object\n        var previousDate = new Date(dateString);\n        // Use the current date for calculation\n        var today = new Date();\n        // Calculate the difference\n        var difference = this.getYearMonthDifference(previousDate, today);\n        // Update the element's innerHTML with the result\n        this.element.innerHTML = \"\".concat(difference.years, \" years and \").concat(difference.months, \" months.\");\n    };\n    return YearDifferenceCalculator;\n}());\n// Create an instance of the class with the target element id\nvar calculator = new YearDifferenceCalculator(\"years\");\n// Update the element\ncalculator.updateYearsDifference();\n\n\n//# sourceURL=webpack://bilal-uxd.github.io/./src/index.ts?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bilal-uxd.github.io/./src/style.css?");

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
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;