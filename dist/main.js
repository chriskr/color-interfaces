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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// -*- Mode: js; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*-
/**
 *    Copyright 2006 - 2015 Opera Software ASA
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 *
 **/

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @fileoverview
 * Color class
 */
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
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        this.hue = 0;
        this.saturation = 0;
        this.lightness = 0;
        this.saturationV = 0;
        this.value = 0;
        this.alpha = 1;
        this.rgb_ = null;
        this.hsl_ = null;
        this.hsv_ = null;
        this.hex_ = null;
        if (typeof value === 'string') {
            this.parseCSSColor(value);
        }
        if (Array.isArray(value)) {
            switch (type) {
                case undefined:
                case Color.RGB:
                    this.rgb.set(value);
                    break;
                case Color.HSL:
                    this.hsl.set(value);
                    break;
                case Color.HSV:
                    this.hsv.set(value);
                    break;
            }
        }
    }
    Color.prototype.parseCSSColor = function (input) {
        var span = Color.getTestSpan();
        span.style.setProperty('color', input, 'important');
        var raw = window.getComputedStyle(span).color;
        var rawArray = raw.split(/rgba?\(|,s*|\)$/).filter(Boolean);
        if (rawArray.length === 4) {
            this.alpha = parseFloat(rawArray.pop());
        }
        this.rgb.set(rawArray.map(Color.parseInt10));
    };
    Object.defineProperty(Color.prototype, "rgb", {
        get: function () {
            if (!this.rgb_) {
                this.rgb_ = new RGBInterface(this);
            }
            return this.rgb_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "hsl", {
        get: function () {
            if (!this.hsl_) {
                this.hsl_ = new HSLInterface(this);
            }
            return this.hsl_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "hsv", {
        get: function () {
            if (!this.hsv_) {
                this.hsv_ = new HSVInterface(this);
            }
            return this.hsv_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "hex", {
        get: function () {
            if (!this.hex_) {
                this.hex_ = new HexInterface(this);
            }
            return this.hex_;
        },
        enumerable: false,
        configurable: true
    });
    Color.prototype.setRed = function (red) {
        this.red = Color.clamp(red, 0, 255);
        this.updateHslFromRgb();
        this.updateHsvFromHsl();
    };
    Color.prototype.getRed = function () {
        return Math.round(Color.clamp(this.red, 0, 255));
    };
    Color.prototype.setGreen = function (green) {
        this.green = Color.clamp(green, 0, 255);
        this.updateHslFromRgb();
        this.updateHsvFromHsl();
    };
    Color.prototype.getGreen = function () {
        return Math.round(Color.clamp(this.green, 0, 255));
    };
    Color.prototype.setBlue = function (blue) {
        this.blue = Color.clamp(blue, 0, 255);
        this.updateHslFromRgb();
        this.updateHsvFromHsl();
    };
    Color.prototype.getBlue = function () {
        return Math.round(Color.clamp(this.blue, 0, 255));
    };
    Color.prototype.setHue = function (hue) {
        this.hue = Color.clamp(hue, 0, 360);
        this.updateRgbFromHsl();
    };
    Color.prototype.getHue = function () {
        return Math.round(Color.clamp(this.hue, 0, 360));
    };
    Color.prototype.setSaturation = function (saturation) {
        this.saturation = Color.clamp(saturation, 0, 1);
        this.updateRgbFromHsl();
        this.updateHsvFromHsl();
    };
    Color.prototype.getSaturation = function () {
        return Color.clamp(this.saturation, 0, 1);
    };
    Color.prototype.setSaturationV = function (saturationV) {
        this.saturationV = Color.clamp(saturationV, 0, 1);
        this.updateHslFromHsv();
        this.updateRgbFromHsl();
    };
    Color.prototype.getSaturationV = function () {
        return Color.clamp(this.saturationV, 0, 1);
    };
    Color.prototype.setLightness = function (lightness) {
        this.lightness = Color.clamp(lightness, 0, 1);
        this.updateRgbFromHsl();
        this.updateHsvFromHsl();
    };
    Color.prototype.getLightness = function () {
        return Color.clamp(this.lightness, 0, 1);
    };
    Color.prototype.setValue = function (value) {
        this.value = Color.clamp(value, 0, 1);
        this.updateHslFromHsv();
        this.updateRgbFromHsl();
    };
    Color.prototype.getValue = function () {
        return Color.clamp(this.value, 0, 1);
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
            delta = 60 / delta;
            switch (maxColor) {
                case red:
                    this.hue = (360 + (green - blue) * delta) % 360;
                    break;
                case green:
                    this.hue = 120 + (blue - red) * delta;
                    break;
                case blue:
                    this.hue = 240 + (red - green) * delta;
                    break;
            }
        }
    };
    Color.prototype.updateRgbFromHsl = function () {
        var rgb1 = Color.hueToRgb(this.hue);
        var rgb2 = Color.mixRgbColors(rgb1, Color.GREY, 1 - this.saturation);
        var rgb3 = this.lightness <= 0.5 ? Color.BLACK : Color.WHITE;
        var mix = 1 - Math.abs(2 * this.lightness - 1);
        var rgb4 = Color.mixRgbColors(rgb3, rgb2, mix);
        this.red = rgb4[0];
        this.green = rgb4[1];
        this.blue = rgb4[2];
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
    Color.clamp = function (val, min, max) {
        return Math.min(Math.max(val, min), max);
    };
    Color.mixRgbColors = function (c1Rgb, c2Rgb, m) {
        var rgb = [];
        for (var i = 0; i < 3; i++) {
            rgb[i] = c1Rgb[i] + m * (c2Rgb[i] - c1Rgb[i]);
        }
        return rgb;
    };
    Color.toPercent = function (value) {
        return Math.round(value * 100) + '%';
    };
    Color.hueToRgb = function (hue) {
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
    Color.parseInt10 = function (i) {
        return Number.parseInt(i, 10);
    };
    Color.getTestSpan = function () {
        var span = Color.testSpan;
        if (!span || !span.parentNode) {
            span = Color.testSpan = document.createElement('span');
            span.style.display = 'none';
            document.body.appendChild(span);
        }
        span.style.setProperty('color', Color.DEFAULT_COLOR, 'important');
        return span;
    };
    Color.DEFAULT_COLOR = 'black';
    Color.KEYWORD = 1;
    Color.HEX = 2;
    Color.RGB = 3;
    Color.RGBA = 4;
    Color.HSL = 5;
    Color.HSLA = 6;
    Color.HSV = 7;
    Color.BLACK = [0, 0, 0];
    Color.WHITE = [255, 255, 255];
    Color.GREY = [127.5, 127.5, 127.5];
    Color.RE_HEX_6 = new RegExp('^[0-9a-fA-F]{6}$');
    Color.RE_HEX_3 = new RegExp('^[0-9a-fA-F]{3}$');
    Color.testSpan = null;
    return Color;
}());
exports.default = Color;


/***/ })
/******/ ]);