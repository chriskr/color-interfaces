module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTwoHex = exports.parseInt10 = exports.hueToRgb = exports.toPercent = exports.mixRgbColors = exports.clamp = exports.parseCSSColor = exports.cssParsers = void 0;
var consts_1 = __webpack_require__(1);
var Color_1 = __importDefault(__webpack_require__(2));
var hex6ToColor = function (match, color) {
    if (color === void 0) { color = new Color_1.default(); }
    var rgb = match.slice(1).map(function (hex) { return Number.parseInt(hex, 16); });
    color.rgb.set(rgb);
    return color;
};
var hex3ToColor = function (match, color) {
    if (color === void 0) { color = new Color_1.default(); }
    var rgb = match
        .slice(1)
        .map(function (hex) { return Number.parseInt(hex.repeat(2), 16); });
    color.rgb.set(rgb);
    return color;
};
var hex8ToColor = function (match, color) {
    if (color === void 0) { color = new Color_1.default(); }
    var alpha = Number.parseInt(match.pop(), 16);
    hex6ToColor(match, color);
    color.alpha = alpha === 0 ? alpha : alpha / 255;
    return color;
};
var hex4ToColor = function (match, color) {
    if (color === void 0) { color = new Color_1.default(); }
    var alpha = Number.parseInt(match.pop().repeat(2), 16);
    hex3ToColor(match, color);
    color.alpha = alpha === 0 ? alpha : alpha / 255;
    return color;
};
var rgbToColor = function (match) {
    var rgb = match.slice(1).map(function (digit) { return Number.parseInt(digit, 10); });
    return new Color_1.default(rgb, consts_1.ColorType.RGB);
};
var rgbaToColor = function (match) {
    var alpha = Number.parseFloat(match.pop());
    var color = rgbToColor(match);
    color.alpha = alpha;
    return color;
};
var hslToColor = function (match) {
    var _a = __read(match.slice(1).map(function (digit) { return Number.parseInt(digit, 10); }), 3), h = _a[0], s = _a[1], l = _a[2];
    return new Color_1.default([h % 360, s / 100, l / 100], consts_1.ColorType.HSL);
};
var hslaToColor = function (match) {
    var alpha = Number.parseFloat(match.pop());
    var color = hslToColor(match);
    color.alpha = alpha;
    return color;
};
var cssParserTuples = [
    [consts_1.RE_HEX_6, hex6ToColor],
    [consts_1.RE_HEX_3, hex3ToColor],
    [consts_1.RE_HEX_8, hex8ToColor],
    [consts_1.RE_HEX_4, hex4ToColor],
    [consts_1.RE_RGB, rgbToColor],
    [consts_1.RE_RGBA, rgbaToColor],
    [consts_1.RE_HSL, hslToColor],
    [consts_1.RE_HSLA, hslaToColor],
];
exports.cssParsers = new Map(cssParserTuples);
exports.parseCSSColor = function (input) {
    var tuple = cssParserTuples.find(function (_a) {
        var _b = __read(_a, 1), re = _b[0];
        return re.test(input);
    });
    if (tuple) {
        var _a = __read(tuple, 2), re = _a[0], parser = _a[1];
        return parser(input.match(re));
    }
    if (consts_1.colorKeywords.has(input.trim())) {
        return new Color_1.default(consts_1.colorKeywords.get(input.trim()), consts_1.ColorType.RGB);
    }
    return new Color_1.default([0, 0, 0]);
};
exports.clamp = function (val, min, max) {
    return Math.min(Math.max(val, min), max);
};
exports.mixRgbColors = function (rgb1, rgb2, m) {
    return [
        rgb1[0] + m * (rgb2[0] - rgb1[0]),
        rgb1[1] + m * (rgb2[1] - rgb1[1]),
        rgb1[2] + m * (rgb2[2] - rgb1[2]),
    ];
};
exports.toPercent = function (value) {
    return Math.round(value * 100) + "%";
};
exports.hueToRgb = function (hue) {
    hue %= 360;
    var delta = hue % 60;
    hue -= delta;
    delta = Math.round((255 / 60) * delta);
    switch (hue) {
        case 0:
            return [255, delta, 0];
        case 60:
            return [255 - delta, 255, 0];
        case 120:
            return [0, 255, delta];
        case 180:
            return [0, 255 - delta, 255];
        case 240:
            return [delta, 0, 255];
        case 300:
            return [255, 0, 255 - delta];
    }
    return [0, 0, 0];
};
exports.parseInt10 = function (i) {
    return Number.parseInt(i, 10);
};
exports.toTwoHex = function (n) {
    var hex = n.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorKeywords = exports.RE_HSLA = exports.RE_HSL = exports.RE_RGBA = exports.RE_RGB = exports.RE_HEX_4 = exports.RE_HEX_8 = exports.RE_HEX_3 = exports.RE_HEX_6 = exports.GREY = exports.WHITE = exports.BLACK = exports.DEFAULT_COLOR = exports.ColorType = void 0;
var r = String.raw;
var reH = r(templateObject_1 || (templateObject_1 = __makeTemplateObject(["([0-9a-fA-F])"], ["([0-9a-fA-F])"])));
var reHH = r(templateObject_2 || (templateObject_2 = __makeTemplateObject(["([0-9a-fA-F]{2})"], ["([0-9a-fA-F]{2})"])));
var reB = r(templateObject_3 || (templateObject_3 = __makeTemplateObject(["(d|[1-9]d|1d{2}|2[0-4]d|25[0-5])"], ["(\\d|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])"])));
var reF = r(templateObject_4 || (templateObject_4 = __makeTemplateObject(["(0|1|0?.d{1,20})"], ["(0|1|0?\\.\\d{1,20})"])));
var re100 = r(templateObject_5 || (templateObject_5 = __makeTemplateObject(["(d|[1-9]d|100)"], ["(\\d|[1-9]\\d|100)"])));
var reRgb = r(templateObject_6 || (templateObject_6 = __makeTemplateObject(["s*", "s*,s*", "s*,s*", "s*"], ["\\s*", "\\s*,\\s*", "\\s*,\\s*", "\\s*"])), reB, reB, reB);
var reHsl = r(templateObject_7 || (templateObject_7 = __makeTemplateObject(["s*(d{1,20})s*,s*", "%s*,s*", "%s*"], ["\\s*(\\d{1,20})\\s*,\\s*", "%\\s*,\\s*", "%\\s*"])), re100, re100);
var ColorType;
(function (ColorType) {
    ColorType[ColorType["KEYWORD"] = 1] = "KEYWORD";
    ColorType[ColorType["HEX"] = 2] = "HEX";
    ColorType[ColorType["RGB"] = 3] = "RGB";
    ColorType[ColorType["RGBA"] = 4] = "RGBA";
    ColorType[ColorType["HSL"] = 5] = "HSL";
    ColorType[ColorType["HSLA"] = 6] = "HSLA";
    ColorType[ColorType["HSV"] = 7] = "HSV";
})(ColorType = exports.ColorType || (exports.ColorType = {}));
exports.DEFAULT_COLOR = 'black';
exports.BLACK = [0, 0, 0];
exports.WHITE = [255, 255, 255];
exports.GREY = [127.5, 127.5, 127.5];
exports.RE_HEX_6 = new RegExp(r(templateObject_8 || (templateObject_8 = __makeTemplateObject(["^s*#?", "", "", "s*$"], ["^\\s*#?", "", "", "\\s*$"])), reHH, reHH, reHH));
exports.RE_HEX_3 = new RegExp(r(templateObject_9 || (templateObject_9 = __makeTemplateObject(["^s*#?", "", "", "s*$"], ["^\\s*#?", "", "", "\\s*$"])), reH, reH, reH));
exports.RE_HEX_8 = new RegExp(r(templateObject_10 || (templateObject_10 = __makeTemplateObject(["^s*#?", "", "", "", "s*$"], ["^\\s*#?", "", "", "", "\\s*$"])), reHH, reHH, reHH, reHH));
exports.RE_HEX_4 = new RegExp(r(templateObject_11 || (templateObject_11 = __makeTemplateObject(["^s*#?", "", "", "", "s*$"], ["^\\s*#?", "", "", "", "\\s*$"])), reH, reH, reH, reH));
exports.RE_RGB = new RegExp(r(templateObject_12 || (templateObject_12 = __makeTemplateObject(["^s*rgb(", ")s*$"], ["^\\s*rgb\\(", "\\)\\s*$"])), reRgb));
exports.RE_RGBA = new RegExp(r(templateObject_13 || (templateObject_13 = __makeTemplateObject(["^s*rgba(", ",s*", "s*)s*$"], ["^\\s*rgba\\(", ",\\s*", "\\s*\\)\\s*$"])), reRgb, reF));
exports.RE_HSL = new RegExp(r(templateObject_14 || (templateObject_14 = __makeTemplateObject(["^s*hsl(", ")s*$"], ["^\\s*hsl\\(", "\\)\\s*$"])), reHsl));
exports.RE_HSLA = new RegExp(r(templateObject_15 || (templateObject_15 = __makeTemplateObject(["^s*hsla(", ",s*", "s*)s*$"], ["^\\s*hsla\\(", ",\\s*", "\\s*\\)\\s*$"])), reHsl, reF));
exports.colorKeywords = new Map([
    Object.freeze(['aliceblue', Object.freeze([240, 248, 255])]),
    Object.freeze(['antiquewhite', Object.freeze([250, 235, 215])]),
    Object.freeze(['aqua', Object.freeze([0, 255, 255])]),
    Object.freeze(['aquamarine', Object.freeze([127, 255, 212])]),
    Object.freeze(['azure', Object.freeze([240, 255, 255])]),
    Object.freeze(['beige', Object.freeze([245, 245, 220])]),
    Object.freeze(['bisque', Object.freeze([255, 228, 196])]),
    Object.freeze(['black', Object.freeze([0, 0, 0])]),
    Object.freeze(['blanchedalmond', Object.freeze([255, 235, 205])]),
    Object.freeze(['blue', Object.freeze([0, 0, 255])]),
    Object.freeze(['blueviolet', Object.freeze([138, 43, 226])]),
    Object.freeze(['brown', Object.freeze([165, 42, 42])]),
    Object.freeze(['burlywood', Object.freeze([222, 184, 135])]),
    Object.freeze(['cadetblue', Object.freeze([95, 158, 160])]),
    Object.freeze(['chartreuse', Object.freeze([127, 255, 0])]),
    Object.freeze(['chocolate', Object.freeze([210, 105, 30])]),
    Object.freeze(['coral', Object.freeze([255, 127, 80])]),
    Object.freeze(['cornflowerblue', Object.freeze([100, 149, 237])]),
    Object.freeze(['cornsilk', Object.freeze([255, 248, 220])]),
    Object.freeze(['crimson', Object.freeze([220, 20, 60])]),
    Object.freeze(['cyan', Object.freeze([0, 255, 255])]),
    Object.freeze(['darkblue', Object.freeze([0, 0, 139])]),
    Object.freeze(['darkcyan', Object.freeze([0, 139, 139])]),
    Object.freeze(['darkgoldenrod', Object.freeze([184, 134, 11])]),
    Object.freeze(['darkgray', Object.freeze([169, 169, 169])]),
    Object.freeze(['darkgreen', Object.freeze([0, 100, 0])]),
    Object.freeze(['darkgrey', Object.freeze([169, 169, 169])]),
    Object.freeze(['darkkhaki', Object.freeze([189, 183, 107])]),
    Object.freeze(['darkmagenta', Object.freeze([139, 0, 139])]),
    Object.freeze(['darkolivegreen', Object.freeze([85, 107, 47])]),
    Object.freeze(['darkorange', Object.freeze([255, 140, 0])]),
    Object.freeze(['darkorchid', Object.freeze([153, 50, 204])]),
    Object.freeze(['darkred', Object.freeze([139, 0, 0])]),
    Object.freeze(['darksalmon', Object.freeze([233, 150, 122])]),
    Object.freeze(['darkseagreen', Object.freeze([143, 188, 143])]),
    Object.freeze(['darkslateblue', Object.freeze([72, 61, 139])]),
    Object.freeze(['darkslategray', Object.freeze([47, 79, 79])]),
    Object.freeze(['darkslategrey', Object.freeze([47, 79, 79])]),
    Object.freeze(['darkturquoise', Object.freeze([0, 206, 209])]),
    Object.freeze(['darkviolet', Object.freeze([148, 0, 211])]),
    Object.freeze(['deeppink', Object.freeze([255, 20, 147])]),
    Object.freeze(['deepskyblue', Object.freeze([0, 191, 255])]),
    Object.freeze(['dimgray', Object.freeze([105, 105, 105])]),
    Object.freeze(['dimgrey', Object.freeze([105, 105, 105])]),
    Object.freeze(['dodgerblue', Object.freeze([30, 144, 255])]),
    Object.freeze(['firebrick', Object.freeze([178, 34, 34])]),
    Object.freeze(['floralwhite', Object.freeze([255, 250, 240])]),
    Object.freeze(['forestgreen', Object.freeze([34, 139, 34])]),
    Object.freeze(['fuchsia', Object.freeze([255, 0, 255])]),
    Object.freeze(['gainsboro', Object.freeze([220, 220, 220])]),
    Object.freeze(['ghostwhite', Object.freeze([248, 248, 255])]),
    Object.freeze(['gold', Object.freeze([255, 215, 0])]),
    Object.freeze(['goldenrod', Object.freeze([218, 165, 32])]),
    Object.freeze(['gray', Object.freeze([128, 128, 128])]),
    Object.freeze(['green', Object.freeze([0, 128, 0])]),
    Object.freeze(['greenyellow', Object.freeze([173, 255, 47])]),
    Object.freeze(['grey', Object.freeze([128, 128, 128])]),
    Object.freeze(['honeydew', Object.freeze([240, 255, 240])]),
    Object.freeze(['hotpink', Object.freeze([255, 105, 180])]),
    Object.freeze(['indianred', Object.freeze([205, 92, 92])]),
    Object.freeze(['indigo', Object.freeze([75, 0, 130])]),
    Object.freeze(['ivory', Object.freeze([255, 255, 240])]),
    Object.freeze(['khaki', Object.freeze([240, 230, 140])]),
    Object.freeze(['lavender', Object.freeze([230, 230, 250])]),
    Object.freeze(['lavenderblush', Object.freeze([255, 240, 245])]),
    Object.freeze(['lawngreen', Object.freeze([124, 252, 0])]),
    Object.freeze(['lemonchiffon', Object.freeze([255, 250, 205])]),
    Object.freeze(['lightblue', Object.freeze([173, 216, 230])]),
    Object.freeze(['lightcoral', Object.freeze([240, 128, 128])]),
    Object.freeze(['lightcyan', Object.freeze([224, 255, 255])]),
    Object.freeze(['lightgoldenrodyellow', Object.freeze([250, 250, 210])]),
    Object.freeze(['lightgray', Object.freeze([211, 211, 211])]),
    Object.freeze(['lightgreen', Object.freeze([144, 238, 144])]),
    Object.freeze(['lightgrey', Object.freeze([211, 211, 211])]),
    Object.freeze(['lightpink', Object.freeze([255, 182, 193])]),
    Object.freeze(['lightsalmon', Object.freeze([255, 160, 122])]),
    Object.freeze(['lightseagreen', Object.freeze([32, 178, 170])]),
    Object.freeze(['lightskyblue', Object.freeze([135, 206, 250])]),
    Object.freeze(['lightslategray', Object.freeze([119, 136, 153])]),
    Object.freeze(['lightslategrey', Object.freeze([119, 136, 153])]),
    Object.freeze(['lightsteelblue', Object.freeze([176, 196, 222])]),
    Object.freeze(['lightyellow', Object.freeze([255, 255, 224])]),
    Object.freeze(['lime', Object.freeze([0, 255, 0])]),
    Object.freeze(['limegreen', Object.freeze([50, 205, 50])]),
    Object.freeze(['linen', Object.freeze([250, 240, 230])]),
    Object.freeze(['magenta', Object.freeze([255, 0, 255])]),
    Object.freeze(['maroon', Object.freeze([128, 0, 0])]),
    Object.freeze(['mediumaquamarine', Object.freeze([102, 205, 170])]),
    Object.freeze(['mediumblue', Object.freeze([0, 0, 205])]),
    Object.freeze(['mediumorchid', Object.freeze([186, 85, 211])]),
    Object.freeze(['mediumpurple', Object.freeze([147, 112, 219])]),
    Object.freeze(['mediumseagreen', Object.freeze([60, 179, 113])]),
    Object.freeze(['mediumslateblue', Object.freeze([123, 104, 238])]),
    Object.freeze(['mediumspringgreen', Object.freeze([0, 250, 154])]),
    Object.freeze(['mediumturquoise', Object.freeze([72, 209, 204])]),
    Object.freeze(['mediumvioletred', Object.freeze([199, 21, 133])]),
    Object.freeze(['midnightblue', Object.freeze([25, 25, 112])]),
    Object.freeze(['mintcream', Object.freeze([245, 255, 250])]),
    Object.freeze(['mistyrose', Object.freeze([255, 228, 225])]),
    Object.freeze(['moccasin', Object.freeze([255, 228, 181])]),
    Object.freeze(['navajowhite', Object.freeze([255, 222, 173])]),
    Object.freeze(['navy', Object.freeze([0, 0, 128])]),
    Object.freeze(['oldlace', Object.freeze([253, 245, 230])]),
    Object.freeze(['olive', Object.freeze([128, 128, 0])]),
    Object.freeze(['olivedrab', Object.freeze([107, 142, 35])]),
    Object.freeze(['orange', Object.freeze([255, 165, 0])]),
    Object.freeze(['orangered', Object.freeze([255, 69, 0])]),
    Object.freeze(['orchid', Object.freeze([218, 112, 214])]),
    Object.freeze(['palegoldenrod', Object.freeze([238, 232, 170])]),
    Object.freeze(['palegreen', Object.freeze([152, 251, 152])]),
    Object.freeze(['paleturquoise', Object.freeze([175, 238, 238])]),
    Object.freeze(['palevioletred', Object.freeze([219, 112, 147])]),
    Object.freeze(['papayawhip', Object.freeze([255, 239, 213])]),
    Object.freeze(['peachpuff', Object.freeze([255, 218, 185])]),
    Object.freeze(['peru', Object.freeze([205, 133, 63])]),
    Object.freeze(['pink', Object.freeze([255, 192, 203])]),
    Object.freeze(['plum', Object.freeze([221, 160, 221])]),
    Object.freeze(['powderblue', Object.freeze([176, 224, 230])]),
    Object.freeze(['purple', Object.freeze([128, 0, 128])]),
    Object.freeze(['red', Object.freeze([255, 0, 0])]),
    Object.freeze(['rosybrown', Object.freeze([188, 143, 143])]),
    Object.freeze(['royalblue', Object.freeze([65, 105, 225])]),
    Object.freeze(['saddlebrown', Object.freeze([139, 69, 19])]),
    Object.freeze(['salmon', Object.freeze([250, 128, 114])]),
    Object.freeze(['sandybrown', Object.freeze([244, 164, 96])]),
    Object.freeze(['seagreen', Object.freeze([46, 139, 87])]),
    Object.freeze(['seashell', Object.freeze([255, 245, 238])]),
    Object.freeze(['sienna', Object.freeze([160, 82, 45])]),
    Object.freeze(['silver', Object.freeze([192, 192, 192])]),
    Object.freeze(['skyblue', Object.freeze([135, 206, 235])]),
    Object.freeze(['slateblue', Object.freeze([106, 90, 205])]),
    Object.freeze(['slategray', Object.freeze([112, 128, 144])]),
    Object.freeze(['slategrey', Object.freeze([112, 128, 144])]),
    Object.freeze(['snow', Object.freeze([255, 250, 250])]),
    Object.freeze(['springgreen', Object.freeze([0, 255, 127])]),
    Object.freeze(['steelblue', Object.freeze([70, 130, 180])]),
    Object.freeze(['tan', Object.freeze([210, 180, 140])]),
    Object.freeze(['teal', Object.freeze([0, 128, 128])]),
    Object.freeze(['thistle', Object.freeze([216, 191, 216])]),
    Object.freeze(['tomato', Object.freeze([255, 99, 71])]),
    Object.freeze(['turquoise', Object.freeze([64, 224, 208])]),
    Object.freeze(['violet', Object.freeze([238, 130, 238])]),
    Object.freeze(['wheat', Object.freeze([245, 222, 179])]),
    Object.freeze(['white', Object.freeze([255, 255, 255])]),
    Object.freeze(['whitesmoke', Object.freeze([245, 245, 245])]),
    Object.freeze(['yellow', Object.freeze([255, 255, 0])]),
    Object.freeze(['yellowgreen', Object.freeze([154, 205, 50])]),
]);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var RGBInterface_1 = __importDefault(__webpack_require__(3));
var RGBAInterface_1 = __importDefault(__webpack_require__(5));
var HSLInterface_1 = __importDefault(__webpack_require__(6));
var HSLAInterface_1 = __importDefault(__webpack_require__(8));
var HSVInterface_1 = __importDefault(__webpack_require__(9));
var HSVAInterface_1 = __importDefault(__webpack_require__(11));
var HexInterface_1 = __importDefault(__webpack_require__(12));
var HexAInterface_1 = __importDefault(__webpack_require__(13));
var consts_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(0);
/**
 * @constructor
 *
 *
 * @class
 * Represent a color. Allows for setting and getting color components based
 * on RGB, RGBA, HSV, HSVA, HSL and HSLA color spaces.
 * See also http://en.wikipedia.org/Color_space
 */
var Color = /** @class */ (function () {
    function Color(value, type) {
        this._alpha = 1;
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        this.hue = 0;
        this.saturation = 0;
        this.lightness = 0;
        this.saturationV = 0;
        this.value = 0;
        this._rgb = null;
        this._rgba = null;
        this._hsl = null;
        this._hsla = null;
        this._hsv = null;
        this._hsva = null;
        this._hex = null;
        this._hexa = null;
        if (typeof value === 'string') {
            this.parseCSSColor(value);
        }
        if (Array.isArray(value)) {
            switch (type) {
                case undefined:
                case consts_1.ColorType.RGB:
                    this.rgb.set(value);
                    break;
                case consts_1.ColorType.HSL:
                    this.hsl.set(value);
                    break;
                case consts_1.ColorType.HSV:
                    this.hsv.set(value);
                    break;
            }
        }
    }
    Object.defineProperty(Color, "ColorType", {
        get: function () {
            return consts_1.ColorType;
        },
        enumerable: false,
        configurable: true
    });
    Color.prototype.parseCSSColor = function (input) {
        this.rgba.set(utils_1.parseCSSColor(input).rgba.get());
    };
    Object.defineProperty(Color.prototype, "rgb", {
        get: function () {
            if (this._rgb === null) {
                this._rgb = new RGBInterface_1.default(this);
            }
            return this._rgb;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "rgba", {
        get: function () {
            if (this._rgba === null) {
                this._rgba = new RGBAInterface_1.default(this);
            }
            return this._rgba;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "hsl", {
        get: function () {
            if (!this._hsl) {
                this._hsl = new HSLInterface_1.default(this);
            }
            return this._hsl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "hsla", {
        get: function () {
            if (!this._hsla) {
                this._hsla = new HSLAInterface_1.default(this);
            }
            return this._hsla;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "hsv", {
        get: function () {
            if (!this._hsv) {
                this._hsv = new HSVInterface_1.default(this);
            }
            return this._hsv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "hsva", {
        get: function () {
            if (!this._hsva) {
                this._hsva = new HSVAInterface_1.default(this);
            }
            return this._hsva;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "hex", {
        get: function () {
            if (!this._hex) {
                this._hex = new HexInterface_1.default(this);
            }
            return this._hex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "hexa", {
        get: function () {
            if (!this._hexa) {
                this._hexa = new HexAInterface_1.default(this);
            }
            return this._hexa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "alpha", {
        get: function () {
            return utils_1.clamp(this._alpha, 0, 1);
        },
        set: function (alpha) {
            this._alpha = alpha;
        },
        enumerable: false,
        configurable: true
    });
    Color.prototype.setRed = function (red) {
        this.red = utils_1.clamp(red, 0, 255);
        this.updateHslFromRgb();
        this.updateHsvFromHsl();
    };
    Color.prototype.getRed = function () {
        return Math.round(utils_1.clamp(this.red, 0, 255));
    };
    Color.prototype.setGreen = function (green) {
        this.green = utils_1.clamp(green, 0, 255);
        this.updateHslFromRgb();
        this.updateHsvFromHsl();
    };
    Color.prototype.getGreen = function () {
        return Math.round(utils_1.clamp(this.green, 0, 255));
    };
    Color.prototype.setBlue = function (blue) {
        this.blue = utils_1.clamp(blue, 0, 255);
        this.updateHslFromRgb();
        this.updateHsvFromHsl();
    };
    Color.prototype.getBlue = function () {
        return Math.round(utils_1.clamp(this.blue, 0, 255));
    };
    Color.prototype.setHue = function (hue) {
        this.hue = utils_1.clamp(hue, 0, 360);
        this.updateRgbFromHsl();
    };
    Color.prototype.getHue = function () {
        return Math.round(utils_1.clamp(this.hue, 0, 360));
    };
    Color.prototype.setSaturation = function (saturation) {
        this.saturation = utils_1.clamp(saturation, 0, 1);
        this.updateRgbFromHsl();
        this.updateHsvFromHsl();
    };
    Color.prototype.getSaturation = function () {
        return utils_1.clamp(this.saturation, 0, 1);
    };
    Color.prototype.setSaturationV = function (saturationV) {
        this.saturationV = utils_1.clamp(saturationV, 0, 1);
        this.updateHslFromHsv();
        this.updateRgbFromHsl();
    };
    Color.prototype.getSaturationV = function () {
        return utils_1.clamp(this.saturationV, 0, 1);
    };
    Color.prototype.setLightness = function (lightness) {
        this.lightness = utils_1.clamp(lightness, 0, 1);
        this.updateRgbFromHsl();
        this.updateHsvFromHsl();
    };
    Color.prototype.getLightness = function () {
        return utils_1.clamp(this.lightness, 0, 1);
    };
    Color.prototype.setValue = function (value) {
        this.value = utils_1.clamp(value, 0, 1);
        this.updateHslFromHsv();
        this.updateRgbFromHsl();
    };
    Color.prototype.getValue = function () {
        return utils_1.clamp(this.value, 0, 1);
    };
    Color.prototype.getGreyValue = function () {
        return 0.2126 * this.red + 0.7152 * this.green + 0.0722 * this.blue;
    };
    Color.prototype.invert = function () {
        this.setHue((this.hue + 180) % 360);
        return this;
    };
    // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    Color.prototype.getLuminance = function () {
        var RGB = this.rgb.get().map(function (c) {
            var cs = c / 255;
            return cs <= 0.03928 ? cs / 12.92 : Math.pow((cs + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * RGB[0] + 0.7152 * RGB[1] + 0.0722 * RGB[2];
    };
    // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
    Color.prototype.getContrastRatio = function (color2) {
        var l1 = this.getLuminance();
        var l2 = color2.getLuminance();
        return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
    };
    Color.prototype.copy = function () {
        var color = new Color();
        color.setRed(this.red);
        color.setGreen(this.green);
        color.setBlue(this.blue);
        color.alpha = this.alpha;
        return color;
    };
    Color.prototype.mixWithColor = function (color, percent) {
        this.rgb.set(utils_1.mixRgbColors(this.rgb.get(), color.rgb.get(), percent));
        return this;
    };
    Color.prototype.updateHslFromRgb = function () {
        var red = this.red / 255;
        var green = this.green / 255;
        var blue = this.blue / 255;
        var maxColor = Math.max(red, green, blue);
        var minColor = Math.min(red, green, blue);
        var sum = maxColor + minColor;
        var delta = maxColor - minColor;
        this.hue = 0;
        this.saturation = 0;
        this.lightness = sum / 2;
        if (delta !== 0) {
            this.saturation = delta / (1 - Math.abs(sum - 1));
            var d = 60 / delta;
            switch (maxColor) {
                case red:
                    this.hue = (360 + (green - blue) * d) % 360;
                    break;
                case green:
                    this.hue = 120 + (blue - red) * d;
                    break;
                case blue:
                    this.hue = 240 + (red - green) * d;
                    break;
            }
        }
    };
    Color.prototype.updateRgbFromHsl = function () {
        var _a;
        var rgb1 = utils_1.hueToRgb(this.hue);
        var rgb2 = utils_1.mixRgbColors(rgb1, consts_1.GREY, 1 - this.saturation);
        var rgb3 = this.lightness <= 0.5 ? consts_1.BLACK : consts_1.WHITE;
        var mix = 1 - Math.abs(2 * this.lightness - 1);
        _a = __read(utils_1.mixRgbColors(rgb3, rgb2, mix), 3), this.red = _a[0], this.green = _a[1], this.blue = _a[2];
    };
    // http://codeitdown.com/hsl-hsb-hsv-color/
    Color.prototype.updateHsvFromHsl = function () {
        var l = this.lightness;
        var v = (2 * l + this.saturation * (1 - Math.abs(2 * l - 1))) / 2;
        this.saturationV = (2 * (v - l)) / v || 0;
        this.value = v;
    };
    Color.prototype.updateHslFromHsv = function () {
        var v = this.value;
        var sv = this.saturationV;
        var l = 0.5 * v * (2 - sv);
        this.saturation = (sv * v) / (1 - Math.abs(2 * l - 1)) || 0;
        this.lightness = l;
    };
    Color.parseCSSColor = utils_1.parseCSSColor;
    return Color;
}());
exports.default = Color;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseRGBInterface_1 = __importDefault(__webpack_require__(4));
var RGBInterface = /** @class */ (function (_super) {
    __extends(RGBInterface, _super);
    function RGBInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RGBInterface.prototype.get = function () {
        return [this.r, this.g, this.b];
    };
    RGBInterface.prototype.set = function (rgb) {
        var _a;
        _a = __read(rgb, 3), this.r = _a[0], this.g = _a[1], this.b = _a[2];
        return this;
    };
    RGBInterface.prototype.toCss = function () {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    };
    return RGBInterface;
}(BaseRGBInterface_1.default));
exports.default = RGBInterface;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseRGBInterface = /** @class */ (function () {
    function BaseRGBInterface(color) {
        this.color = color;
    }
    Object.defineProperty(BaseRGBInterface.prototype, "r", {
        get: function () {
            return this.color.getRed();
        },
        set: function (r) {
            this.color.setRed(r);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseRGBInterface.prototype, "g", {
        get: function () {
            return this.color.getGreen();
        },
        set: function (g) {
            this.color.setGreen(g);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseRGBInterface.prototype, "b", {
        get: function () {
            return this.color.getBlue();
        },
        set: function (b) {
            this.color.setBlue(b);
        },
        enumerable: false,
        configurable: true
    });
    return BaseRGBInterface;
}());
exports.default = BaseRGBInterface;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseRGBInterface_1 = __importDefault(__webpack_require__(4));
var RGBAInterface = /** @class */ (function (_super) {
    __extends(RGBAInterface, _super);
    function RGBAInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RGBAInterface.prototype, "a", {
        get: function () {
            return this.color.alpha;
        },
        set: function (alpha) {
            this.color.alpha = alpha;
        },
        enumerable: false,
        configurable: true
    });
    RGBAInterface.prototype.get = function () {
        return [this.r, this.g, this.b, this.a];
    };
    RGBAInterface.prototype.set = function (rgba) {
        var _a;
        _a = __read(rgba, 4), this.r = _a[0], this.g = _a[1], this.b = _a[2], this.a = _a[3];
        return this;
    };
    RGBAInterface.prototype.toCss = function () {
        return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a.toFixed(2) + ")";
    };
    return RGBAInterface;
}(BaseRGBInterface_1.default));
exports.default = RGBAInterface;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
var BaseHSLInterface_1 = __importDefault(__webpack_require__(7));
var HSLInterface = /** @class */ (function (_super) {
    __extends(HSLInterface, _super);
    function HSLInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HSLInterface.prototype.get = function () {
        return [this.h, this.s, this.l];
    };
    HSLInterface.prototype.set = function (hsl) {
        var _a;
        _a = __read(hsl, 3), this.h = _a[0], this.s = _a[1], this.l = _a[2];
        return this;
    };
    HSLInterface.prototype.toCss = function () {
        var s = utils_1.toPercent(this.s);
        var l = utils_1.toPercent(this.l);
        return "hsl(" + this.h + ", " + s + ", " + l + ")";
    };
    return HSLInterface;
}(BaseHSLInterface_1.default));
exports.default = HSLInterface;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseHSLInterface = /** @class */ (function () {
    function BaseHSLInterface(color) {
        this.color = color;
    }
    Object.defineProperty(BaseHSLInterface.prototype, "h", {
        get: function () {
            return this.color.getHue();
        },
        set: function (h) {
            this.color.setHue(h);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseHSLInterface.prototype, "s", {
        get: function () {
            return this.color.getSaturation();
        },
        set: function (s) {
            this.color.setSaturation(s);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseHSLInterface.prototype, "l", {
        get: function () {
            return this.color.getLightness();
        },
        set: function (l) {
            this.color.setLightness(l);
        },
        enumerable: false,
        configurable: true
    });
    return BaseHSLInterface;
}());
exports.default = BaseHSLInterface;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
var BaseHSLInterface_1 = __importDefault(__webpack_require__(7));
var HSLAInterface = /** @class */ (function (_super) {
    __extends(HSLAInterface, _super);
    function HSLAInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HSLAInterface.prototype, "a", {
        get: function () {
            return this.color.alpha;
        },
        set: function (alpha) {
            this.color.alpha = alpha;
        },
        enumerable: false,
        configurable: true
    });
    HSLAInterface.prototype.get = function () {
        return [this.h, this.s, this.l, this.a];
    };
    HSLAInterface.prototype.set = function (hsla) {
        var _a;
        _a = __read(hsla, 4), this.h = _a[0], this.s = _a[1], this.l = _a[2], this.a = _a[3];
        return this;
    };
    HSLAInterface.prototype.toCss = function () {
        var s = utils_1.toPercent(this.s);
        var l = utils_1.toPercent(this.l);
        return "hsla(" + this.h + ", " + s + ", " + l + ", " + this.color.alpha.toFixed(2) + ")";
    };
    return HSLAInterface;
}(BaseHSLInterface_1.default));
exports.default = HSLAInterface;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseHSVInterface_1 = __importDefault(__webpack_require__(10));
var HSVInterface = /** @class */ (function (_super) {
    __extends(HSVInterface, _super);
    function HSVInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HSVInterface.prototype.get = function () {
        return [this.h, this.s, this.v];
    };
    HSVInterface.prototype.set = function (hsv) {
        var _a;
        _a = __read(hsv, 3), this.h = _a[0], this.s = _a[1], this.v = _a[2];
        return this;
    };
    HSVInterface.prototype.toCss = function () {
        return this.color.hsl.toCss();
    };
    return HSVInterface;
}(BaseHSVInterface_1.default));
exports.default = HSVInterface;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HSVAInterface = /** @class */ (function () {
    function HSVAInterface(color) {
        this.color = color;
    }
    Object.defineProperty(HSVAInterface.prototype, "h", {
        get: function () {
            return this.color.getHue();
        },
        set: function (h) {
            this.color.setHue(h);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HSVAInterface.prototype, "s", {
        get: function () {
            return this.color.getSaturationV();
        },
        set: function (s) {
            this.color.setSaturationV(s);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HSVAInterface.prototype, "v", {
        get: function () {
            return this.color.getValue();
        },
        set: function (v) {
            this.color.setValue(v);
        },
        enumerable: false,
        configurable: true
    });
    return HSVAInterface;
}());
exports.default = HSVAInterface;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseHSVInterface_1 = __importDefault(__webpack_require__(10));
var HSVAInterface = /** @class */ (function (_super) {
    __extends(HSVAInterface, _super);
    function HSVAInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HSVAInterface.prototype, "a", {
        get: function () {
            return this.color.alpha;
        },
        set: function (alpha) {
            this.color.alpha = alpha;
        },
        enumerable: false,
        configurable: true
    });
    HSVAInterface.prototype.get = function () {
        return [this.h, this.s, this.v, this.a];
    };
    HSVAInterface.prototype.set = function (hsva) {
        var _a;
        _a = __read(hsva, 4), this.h = _a[0], this.s = _a[1], this.v = _a[2], this.a = _a[3];
        return this;
    };
    HSVAInterface.prototype.toCss = function () {
        return this.color.hsla.toCss();
    };
    return HSVAInterface;
}(BaseHSVInterface_1.default));
exports.default = HSVAInterface;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(0);
var HexInterface = /** @class */ (function () {
    function HexInterface(color) {
        this.color = color;
    }
    HexInterface.prototype.set = function (hex) {
        var re = consts_1.RE_HEX_3.test(hex)
            ? consts_1.RE_HEX_3
            : consts_1.RE_HEX_6.test(hex)
                ? consts_1.RE_HEX_6
                : null;
        if (!re) {
            throw Error('Not valid hex color');
        }
        utils_1.cssParsers.get(re)(hex.match(re), this.color);
        return this;
    };
    HexInterface.prototype.get = function () {
        return this.color.rgb.get().map(utils_1.toTwoHex).join('');
    };
    HexInterface.prototype.toCss = function () {
        var hex = this.get();
        if (hex[0] === hex[1] && hex[2] === hex[3] && hex[4] === hex[5]) {
            hex = "" + hex[0] + hex[2] + hex[4];
        }
        return "#" + hex;
    };
    return HexInterface;
}());
exports.default = HexInterface;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(0);
var HexAInterface = /** @class */ (function () {
    function HexAInterface(color) {
        this.color = color;
    }
    Object.defineProperty(HexAInterface.prototype, "a", {
        get: function () {
            return this.color.alpha;
        },
        set: function (alpha) {
            this.color.alpha = alpha;
        },
        enumerable: false,
        configurable: true
    });
    HexAInterface.prototype.set = function (hexa) {
        if (!(consts_1.RE_HEX_4.test(hexa) || consts_1.RE_HEX_8.test(hexa))) {
            throw Error('Not valid hexa color');
        }
        if (consts_1.RE_HEX_4.test(hexa)) {
            hexa = Array.from(hexa)
                .flatMap(function (h) { return [h, h]; })
                .join('');
        }
        var _a = __read(hexa.match(/../g).map(function (h) { return Number.parseInt(h, 16); }), 4), r = _a[0], g = _a[1], b = _a[2], a = _a[3];
        this.color.rgb.set([r, g, b]);
        this.a = a === 0 ? 0 : a / 255;
        return this;
    };
    HexAInterface.prototype.get = function () {
        return this.color.rgba
            .get()
            .map(function (n, index) { return utils_1.toTwoHex(index === 3 ? Math.round(n * 255) : n); })
            .join('');
    };
    HexAInterface.prototype.toCss = function () {
        var hexa = this.get();
        if (hexa[0] === hexa[1] &&
            hexa[2] === hexa[3] &&
            hexa[4] === hexa[5] &&
            hexa[6] === hexa[7]) {
            hexa = "" + hexa[0] + hexa[2] + hexa[4] + hexa[6];
        }
        return "#" + hexa;
    };
    return HexAInterface;
}());
exports.default = HexAInterface;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __importDefault(__webpack_require__(2));
exports.default = Color_1.default;
var RGBInterface_1 = __webpack_require__(3);
Object.defineProperty(exports, "RGBInterface", { enumerable: true, get: function () { return RGBInterface_1.default; } });
var RGBAInterface_1 = __webpack_require__(5);
Object.defineProperty(exports, "RGBAInterface", { enumerable: true, get: function () { return RGBAInterface_1.default; } });
var HSLInterface_1 = __webpack_require__(6);
Object.defineProperty(exports, "HSLInterface", { enumerable: true, get: function () { return HSLInterface_1.default; } });
var HSLAInterface_1 = __webpack_require__(8);
Object.defineProperty(exports, "HSLAInterface", { enumerable: true, get: function () { return HSLAInterface_1.default; } });
var HSVInterface_1 = __webpack_require__(9);
Object.defineProperty(exports, "HSVInterface", { enumerable: true, get: function () { return HSVInterface_1.default; } });
var HSVAInterface_1 = __webpack_require__(11);
Object.defineProperty(exports, "HSVAInterface", { enumerable: true, get: function () { return HSVAInterface_1.default; } });
var HexInterface_1 = __webpack_require__(12);
Object.defineProperty(exports, "HexInterface", { enumerable: true, get: function () { return HexInterface_1.default; } });
var HexAInterface_1 = __webpack_require__(13);
Object.defineProperty(exports, "HexAInterface", { enumerable: true, get: function () { return HexAInterface_1.default; } });
var consts_1 = __webpack_require__(1);
Object.defineProperty(exports, "ColorType", { enumerable: true, get: function () { return consts_1.ColorType; } });
var utils_1 = __webpack_require__(0);
Object.defineProperty(exports, "parseCSSColor", { enumerable: true, get: function () { return utils_1.parseCSSColor; } });


/***/ })
/******/ ]);