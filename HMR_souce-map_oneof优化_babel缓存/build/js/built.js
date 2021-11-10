/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Document</title>\r\n</head>\r\n\r\n<body>\r\n  <div class=\"item\"></div>\r\n  <p>111</p>\r\n  <p>111</p>\r\n  <p>111</p>\r\n  <p>111</p>\r\n</body>\r\n\r\n</html>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nError: Cannot find module '@babel/preset/env'\nRequire stack:\n- D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\@babel\\core\\lib\\config\\files\\plugins.js\n- D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\@babel\\core\\lib\\config\\files\\index.js\n- D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\@babel\\core\\lib\\index.js\n- D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\babel-loader\\lib\\index.js\n- D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\loader-runner\\lib\\loadLoader.js\n- D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\loader-runner\\lib\\LoaderRunner.js\n- D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\webpack\\lib\\NormalModule.js\n- D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\webpack\\lib\\NormalModuleFactory.js\n- D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\webpack\\lib\\Compiler.js\n- D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\webpack\\lib\\webpack.js\n- D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\webpack-cli\\bin\\utils\\validate-options.js\n- D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\webpack-cli\\bin\\utils\\convert-argv.js\n- D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\webpack-cli\\bin\\cli.js\n- D:\\my\\my_node\\node_global\\node_modules\\webpack-cli\\node_modules\\import-local\\index.js\n- D:\\my\\my_node\\node_global\\node_modules\\webpack-cli\\bin\\cli.js\n- D:\\my\\my_node\\node_global\\node_modules\\webpack\\bin\\webpack.js\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\n    at resolve (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\v8-compile-cache\\v8-compile-cache.js:164:23)\n    at resolveStandardizedName (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\@babel\\core\\lib\\config\\files\\plugins.js:111:7)\n    at resolvePreset (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\@babel\\core\\lib\\config\\files\\plugins.js:59:10)\n    at loadPreset (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\@babel\\core\\lib\\config\\files\\plugins.js:78:20)\n    at loadPreset.next (<anonymous>)\n    at createDescriptor (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:187:16)\n    at createDescriptor.next (<anonymous>)\n    at step (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\gensync\\index.js:261:32)\n    at evaluateAsync (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\gensync\\index.js:291:5)\n    at D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\gensync\\index.js:44:11\n    at Array.forEach (<anonymous>)\n    at Function.async (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\gensync\\index.js:43:15)\n    at Function.all (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\gensync\\index.js:216:13)\n    at Generator.next (<anonymous>)\n    at createDescriptors (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:142:41)\n    at createDescriptors.next (<anonymous>)\n    at createPresetDescriptors (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:134:17)\n    at createPresetDescriptors.next (<anonymous>)\n    at D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:86:32\n    at Generator.next (<anonymous>)\n    at Function.<anonymous> (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\@babel\\core\\lib\\gensync-utils\\async.js:24:3)\n    at Generator.next (<anonymous>)\n    at step (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\gensync\\index.js:269:25)\n    at evaluateAsync (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\gensync\\index.js:291:5)\n    at Function.errback (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\gensync\\index.js:113:7)\n    at errback (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\@babel\\core\\lib\\gensync-utils\\async.js:71:18)\n    at async (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\gensync\\index.js:188:31)\n    at onFirstPause (D:\\my\\my_vs_pro\\wbpack_test\\node_modules\\gensync\\index.js:216:13)\n    at Generator.next (<anonymous>)");

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./src/js/index.js ./src/index.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/index.html */"./src/index.html");


/***/ })

/******/ });
//# sourceMappingURL=built.js.map