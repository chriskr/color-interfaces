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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toTwoHex = exports.getTestSpan = exports.parseInt10 = exports.hueToRgb = exports.toPercent = exports.mixRgbColors = exports.clamp = void 0;
var consts_1 = __webpack_require__(1);
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
exports.toTwoHex = function (n) {
    var hex = n.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RE_HEX_8 = exports.RE_HEX_4 = exports.RE_HEX_3 = exports.RE_HEX_6 = exports.GREY = exports.WHITE = exports.BLACK = exports.DEFAULT_COLOR = exports.ColorType = void 0;
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
exports.RE_HEX_6 = new RegExp('^[0-9a-fA-F]{6}$');
exports.RE_HEX_3 = new RegExp('^[0-9a-fA-F]{3}$');
exports.RE_HEX_4 = new RegExp('^[0-9a-fA-F]{4}$');
exports.RE_HEX_8 = new RegExp('^[0-9a-fA-F]{8}$');


/***/ }),
/* 2 */
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
var BaseRGBInterface_1 = __importDefault(__webpack_require__(3));
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
/* 3 */
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
/* 4 */
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
var BaseRGBInterface_1 = __importDefault(__webpack_require__(3));
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
var utils_1 = __webpack_require__(0);
var BaseHSLInterface_1 = __importDefault(__webpack_require__(6));
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
/* 6 */
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
/* 7 */
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
var BaseHSLInterface_1 = __importDefault(__webpack_require__(6));
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
var BaseHSVInterface_1 = __importDefault(__webpack_require__(9));
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
/* 9 */
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
/* 10 */
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
var BaseHSVInterface_1 = __importDefault(__webpack_require__(9));
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
/* 11 */
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
        if (!(consts_1.RE_HEX_3.test(hex) || consts_1.RE_HEX_6.test(hex))) {
            throw Error('Not valid hex color');
        }
        if (consts_1.RE_HEX_3.test(hex)) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        var temp = Number.parseInt(hex, 16);
        this.color.rgb.set([temp >> 16, (temp >> 8) & 0xff, temp & 0xff]);
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __importDefault(__webpack_require__(14));
exports.default = Color_1.default;
var RGBInterface_1 = __webpack_require__(2);
Object.defineProperty(exports, "RGBInterface", { enumerable: true, get: function () { return RGBInterface_1.default; } });
var RGBAInterface_1 = __webpack_require__(4);
Object.defineProperty(exports, "RGBAInterface", { enumerable: true, get: function () { return RGBAInterface_1.default; } });
var HSLInterface_1 = __webpack_require__(5);
Object.defineProperty(exports, "HSLInterface", { enumerable: true, get: function () { return HSLInterface_1.default; } });
var HSLAInterface_1 = __webpack_require__(7);
Object.defineProperty(exports, "HSLAInterface", { enumerable: true, get: function () { return HSLAInterface_1.default; } });
var HSVInterface_1 = __webpack_require__(8);
Object.defineProperty(exports, "HSVInterface", { enumerable: true, get: function () { return HSVInterface_1.default; } });
var HSVAInterface_1 = __webpack_require__(10);
Object.defineProperty(exports, "HSVAInterface", { enumerable: true, get: function () { return HSVAInterface_1.default; } });
var HexInterface_1 = __webpack_require__(11);
Object.defineProperty(exports, "HexInterface", { enumerable: true, get: function () { return HexInterface_1.default; } });
var HexAInterface_1 = __webpack_require__(12);
Object.defineProperty(exports, "HexAInterface", { enumerable: true, get: function () { return HexAInterface_1.default; } });
var consts_1 = __webpack_require__(1);
Object.defineProperty(exports, "ColorType", { enumerable: true, get: function () { return consts_1.ColorType; } });


/***/ }),
/* 14 */
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
var RGBInterface_1 = __importDefault(__webpack_require__(2));
var RGBAInterface_1 = __importDefault(__webpack_require__(4));
var HSLInterface_1 = __importDefault(__webpack_require__(5));
var HSLAInterface_1 = __importDefault(__webpack_require__(7));
var HSVInterface_1 = __importDefault(__webpack_require__(8));
var HSVAInterface_1 = __importDefault(__webpack_require__(10));
var HexInterface_1 = __importDefault(__webpack_require__(11));
var HexAInterface_1 = __importDefault(__webpack_require__(12));
var consts_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(0);
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
    return Color;
}());
exports.default = Color;


/***/ })
/******/ ]);