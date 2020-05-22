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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RE_HEX_3 = exports.RE_HEX_6 = exports.GREY = exports.WHITE = exports.BLACK = exports.DEFAULT_COLOR = exports.ColorType = void 0;
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
exports.DEFAULT_COLOR = "black";
exports.BLACK = [0, 0, 0];
exports.WHITE = [255, 255, 255];
exports.GREY = [127.5, 127.5, 127.5];
exports.RE_HEX_6 = new RegExp("^[0-9a-fA-F]{6}$");
exports.RE_HEX_3 = new RegExp("^[0-9a-fA-F]{3}$");


/***/ }),
/* 1 */
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
var RGBInterface = /** @class */ (function () {
    function RGBInterface(color) {
        this.color = color;
    }
    Object.defineProperty(RGBInterface.prototype, "r", {
        get: function () {
            return this.color.getRed();
        },
        set: function (r) {
            this.color.setRed(r);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RGBInterface.prototype, "g", {
        get: function () {
            return this.color.getGreen();
        },
        set: function (g) {
            this.color.setGreen(g);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RGBInterface.prototype, "b", {
        get: function () {
            return this.color.getBlue();
        },
        set: function (b) {
            this.color.setBlue(b);
        },
        enumerable: false,
        configurable: true
    });
    RGBInterface.prototype.get = function () {
        return [this.r, this.g, this.b];
    };
    RGBInterface.prototype.set = function (rgb) {
        var _a;
        _a = __read(rgb, 3), this.r = _a[0], this.g = _a[1], this.b = _a[2];
    };
    RGBInterface.prototype.toCss = function () {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    };
    return RGBInterface;
}());
exports.default = RGBInterface;


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
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(3);
var HSLInterface = /** @class */ (function () {
    function HSLInterface(color) {
        this.color = color;
    }
    Object.defineProperty(HSLInterface.prototype, "h", {
        get: function () {
            return this.color.getHue();
        },
        set: function (h) {
            this.color.setHue(h);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HSLInterface.prototype, "s", {
        get: function () {
            return this.color.getSaturation();
        },
        set: function (s) {
            this.color.setSaturation(s);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HSLInterface.prototype, "l", {
        get: function () {
            return this.color.getLightness();
        },
        set: function (l) {
            this.color.setLightness(l);
        },
        enumerable: false,
        configurable: true
    });
    HSLInterface.prototype.get = function () {
        return [this.h, this.s, this.l];
    };
    HSLInterface.prototype.set = function (hsl) {
        var _a;
        _a = __read(hsl, 3), this.h = _a[0], this.s = _a[1], this.l = _a[2];
    };
    HSLInterface.prototype.toCss = function () {
        var s = utils_1.toPercent(this.s);
        var l = utils_1.toPercent(this.l);
        return "hsl(" + this.h + ", " + s + ", " + l + ")";
    };
    return HSLInterface;
}());
exports.default = HSLInterface;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestSpan = exports.parseInt10 = exports.hueToRgb = exports.toPercent = exports.mixRgbColors = exports.clamp = void 0;
var consts_1 = __webpack_require__(0);
exports.clamp = function (val, min, max) {
    return Math.min(Math.max(val, min), max);
};
exports.mixRgbColors = function (rgb1, rgb2, m) { return [
    rgb1[0] + m * (rgb2[0] - rgb1[0]),
    rgb1[1] + m * (rgb2[1] - rgb1[1]),
    rgb1[2] + m * (rgb2[2] - rgb1[2]),
]; };
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
exports.getTestSpan = function () {
    var span = testSpan;
    if (!span || !span.parentNode) {
        span = testSpan = document.createElement('span');
        span.style.display = 'none';
        document.body.appendChild(span);
    }
    span.style.setProperty('color', consts_1.DEFAULT_COLOR, 'important');
    return span;
};
var testSpan = null;


/***/ }),
/* 4 */
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
var HSVInterface = /** @class */ (function () {
    function HSVInterface(color) {
        this.color = color;
    }
    Object.defineProperty(HSVInterface.prototype, "h", {
        get: function () {
            return this.color.getHue();
        },
        set: function (h) {
            this.color.setHue(h);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HSVInterface.prototype, "s", {
        get: function () {
            return this.color.getSaturationV();
        },
        set: function (s) {
            this.color.setSaturationV(s);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HSVInterface.prototype, "v", {
        get: function () {
            return this.color.getValue();
        },
        set: function (v) {
            this.color.setValue(v);
        },
        enumerable: false,
        configurable: true
    });
    HSVInterface.prototype.get = function () {
        return [this.h, this.s, this.v];
    };
    HSVInterface.prototype.set = function (hsv) {
        var _a;
        _a = __read(hsv, 3), this.h = _a[0], this.s = _a[1], this.v = _a[2];
    };
    HSVInterface.prototype.toCss = function () {
        return this.color.hsl.toCss();
    };
    return HSVInterface;
}());
exports.default = HSVInterface;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = __webpack_require__(0);
var HexInterface = /** @class */ (function () {
    function HexInterface(color) {
        this.color = color;
    }
    HexInterface.prototype.set = function (hex) {
        if (!(consts_1.RE_HEX_3.test(hex) || consts_1.RE_HEX_6.test(hex))) {
            throw Error('Not valid hex color');
        }
        if (consts_1.RE_HEX_3.test(hex)) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        var temp = Number.parseInt(hex, 16);
        this.color.rgb.set([temp >> 16, (temp >> 8) & 0xff, temp & 0xff]);
    };
    HexInterface.prototype.get = function () {
        var rgb = this.color.rgb;
        var hex = ((rgb.r << 16) | (rgb.g << 8) | rgb.b).toString(16);
        return "" + '0'.repeat(6 - hex.length) + hex;
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __importDefault(__webpack_require__(7));
exports.default = Color_1.default;
var RGBInterface_1 = __webpack_require__(1);
Object.defineProperty(exports, "RGBInterface", { enumerable: true, get: function () { return RGBInterface_1.default; } });
var HSLInterface_1 = __webpack_require__(2);
Object.defineProperty(exports, "HSLInterface", { enumerable: true, get: function () { return HSLInterface_1.default; } });
var HSVInterface_1 = __webpack_require__(4);
Object.defineProperty(exports, "HSVInterface", { enumerable: true, get: function () { return HSVInterface_1.default; } });
var HexInterface_1 = __webpack_require__(5);
Object.defineProperty(exports, "HexInterface", { enumerable: true, get: function () { return HexInterface_1.default; } });


/***/ }),
/* 7 */
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
var RGBInterface_1 = __importDefault(__webpack_require__(1));
var HSLInterface_1 = __importDefault(__webpack_require__(2));
var HSVInterface_1 = __importDefault(__webpack_require__(4));
var HexInterface_1 = __importDefault(__webpack_require__(5));
var consts_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(3);
/**
 * @constructor
 *
 *
 * @class
 * Represent a color. Allows for setting and getting color components based
 * on RGB, HSV and HSL color spaces.
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
        this._hsl = null;
        this._hsv = null;
        this._hex = null;
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
    Color.prototype.parseCSSColor = function (input) {
        var span = utils_1.getTestSpan();
        span.style.setProperty('color', input, 'important');
        var raw = window.getComputedStyle(span).color;
        var rawArray = raw.split(/rgba?\(|,s*|\)$/).filter(Boolean);
        if (rawArray.length === 4) {
            this.alpha = parseFloat(rawArray.pop());
        }
        this.rgb.set(rawArray.map(utils_1.parseInt10));
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
    Object.defineProperty(Color.prototype, "alpha", {
        get: function () {
            return Math.round(utils_1.clamp(this._alpha, 0, 1));
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
    return Color;
}());
exports.default = Color;


/***/ })
/******/ ]);