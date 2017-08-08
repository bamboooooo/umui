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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 136);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 创建人：DuHuiling
 * 创建时间：2017/8/4
 * 说明：SegmentedControl组件
 *      将容器平均分成若干等份
 */
var classnames = __webpack_require__(0);
var SegmentedControl = React.createClass({
    displayName: 'SegmentedControl',

    getDefaultProps: function getDefaultProps() {
        return {
            id: null,
            displayIcon: true,
            overflowNum: 5,
            selectedIndex: 1,
            values: [],
            onClick: null
        };
    },
    getInitialState: function getInitialState() {
        return {
            active: this.props.selectedIndex - 1,
            itemWrapWidth: 0,
            itemWidth: 0
        };
    },
    _handlerClick: function _handlerClick(index) {
        this.setState({
            active: index
        });
        this.props.onClick && this.props.onClick(index);
    },
    getValue: function getValue() {
        return this.state.active;
    },
    setValue: function setValue(v) {
        this.setState({
            active: v
        });
    },
    componentDidMount: function componentDidMount() {
        var _minWidth,
            _itemWidth,
            len = this.props.values.length;
        if (len <= this.props.overflowNum) {
            _minWidth = len;
            _itemWidth = document.body.offsetWidth / len;
        } else {
            _minWidth = this.props.overflowNum;
            _itemWidth = document.body.offsetWidth / this.props.overflowNum;
        }
        this.setState({
            itemWrapWidth: 100 / _minWidth * len,
            itemWidth: _itemWidth
        });
    },
    render: function render() {
        var _this = this;
        var _class = classnames('ucs-segmented-control', this.props.className);
        return React.createElement(
            'div',
            { className: _class, id: this.props.id },
            this.props.values.length > 0 ? React.createElement(
                'div',
                { className: 'ucs-segmented-item-wrap', ref: 'segmentedWrap', style: { 'width': _this.state.itemWrapWidth + '%' } },
                this.props.values.map(function (val, index) {
                    return React.createElement(
                        'a',
                        { href: 'javascript: void (0)', key: index,
                            className: index === _this.state.active ? 'active' : '',
                            style: { 'width': _this.state.itemWidth + 'px' },
                            onClick: _this._handlerClick.bind(_this, index) },
                        _this.props.displayIcon ? React.createElement('i', { className: 'iconfont icon-' + val.icon }) : '',
                        val.text
                    );
                })
            ) : ''
        );
    }
});
module.exports = SegmentedControl;

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/17
 * 说明：
 */
var SegmentedControl = __webpack_require__(101);
var values = [{ 'icon': 'icon1', 'text': '分段一', 'value': '1' }, { 'icon': 'icon2', 'text': '分段二', 'value': '2' }, { 'icon': 'icon3', 'text': '分段三', 'value': '3' }, { 'icon': 'icon3', 'text': '分段三', 'value': '3' }, { 'icon': 'icon3', 'text': '分段三', 'value': '3' }, { 'icon': 'icon3', 'text': '分段三', 'value': '3' }];
var Root = React.createClass({
    displayName: 'Root',

    handlerClick: function handlerClick(index) {
        console.log(index);
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(SegmentedControl, { values: values, displayIcon: false, onClick: this.handlerClick })
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });