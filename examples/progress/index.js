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
/******/ 	return __webpack_require__(__webpack_require__.s = 110);
/******/ })
/************************************************************************/
/******/ ({

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Progress = __webpack_require__(80);
var Root = React.createClass({
    displayName: 'Root',

    setValue: function setValue() {
        this.refs.myProgress.setValue(60);
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Progress, { radius: 50, border: 4, color: ['orange', '#f00', '#000'], value: 30 }),
            React.createElement(Progress, { radius: 100, border: 6, color: ['#ccc', '#0f0', '#000'], value: 80 }),
            React.createElement(
                Progress,
                { radius: 200, color: ['#ccc', '#00f', '#999'], value: 100, ref: 'myProgress', className: 'myProgress' },
                React.createElement(
                    'div',
                    { className: 'full', style: { width: '100%', height: '30px', lineHeight: '30px', position: 'absolute', left: '0', bottom: '45px', fontSize: '30px', color: '#999' } },
                    '\u6EE1\u6807'
                )
            ),
            React.createElement(
                'button',
                { onClick: this.setValue },
                '\u8BBE\u503C60%'
            ),
            React.createElement(Progress, { type: 'line', color: ['#ccc', 'orange', 'orange'], value: 80 })
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 2:
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

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var classnames = __webpack_require__(2);
// 查询样式是否存在
function hasClass(elem, cls) {
    elem = elem || {};
    return new RegExp('\\b' + cls + '\\b').test(elem.className);
}
// 添加样式
function addClass(elem, cls) {
    elem = elem || {};
    hasClass(elem, cls) || (elem.className += ' ' + cls);
    elem.className = elem.className.replace(/^\s|\s$/g, '').replace(/\s+/g, ' ');
    return this;
}
// 删除样式
function removeClass(elem, cls) {
    elem = elem || {};
    if (hasClass(elem, cls)) {
        elem.className = elem.className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)'), '');
    }
    return this;
}
var Progress = React.createClass({
    displayName: 'Progress',

    getDefaultProps: function getDefaultProps() {
        return {
            type: 'ring',
            radius: 100,
            border: 10,
            color: ['#ccc', '#f00', '#000'],
            value: 0,
            animate: true,
            speed: 10,
            className: ''
        };
    },
    getInitialState: function getInitialState() {
        return {
            value: this.props.value
        };
    },
    componentDidMount: function componentDidMount() {
        if (this.props.type === 'ring') {
            this.ringHandler();
        } else {
            this.lineHandler();
        }
    },
    componentDidUpdate: function componentDidUpdate() {
        if (this.props.type === 'ring') {
            this.ringHandler();
        } else {
            this.lineHandler();
        }
    },
    setValue: function setValue(v) {
        this.setState({
            value: v
        });
    },
    lineHandler: function lineHandler() {
        var _this = this;
        var _value = _this.state.value;
        var _animate = _this.props.animate;
        var _speed = _this.props.speed;
        var bd = _this.props.border;
        var bgc = _this.props.color[0];
        var bdc = _this.props.color[1];
        var fnc = _this.props.color[2];
        var _wrap = _this.refs.line;
        var _lineBg = _wrap.querySelector('.line-bg');
        var _lineInner = _wrap.querySelector('.line-inner');
        var _info = _wrap.querySelector('.line-info');
        var _num = _info.querySelector('.num-info');

        _lineBg.style.height = bd + 'px';
        _lineBg.style.borderRadius = bd + 'px';
        _lineBg.style.backgroundColor = bgc;

        _lineInner.style.height = bd + 'px';
        _lineInner.style.borderRadius = bd + 'px';
        _lineInner.style.backgroundColor = bdc;

        _info.style.height = bd + 'px';
        _info.style.lineHeight = bd + 'px';
        _info.style.top = -bd + 'px';
        _info.style.color = fnc;

        if (_animate) {
            var range = 0;
            var loading = setInterval(function () {
                if (range === _value) {
                    clearInterval(loading);
                }
                _lineInner.style.width = range + '%';
                _num.childNodes[0].innerHTML = range;
                _info.style.left = range + '%';
                range++;
            }, _speed);
        } else {
            _lineInner.style.width = _value + '%';
            _num.childNodes[0].innerHTML = _value;
            _info.style.left = _value + '%';
        }
    },
    ringHandler: function ringHandler() {
        var _this = this;
        var _value = _this.state.value;
        var _animate = _this.props.animate;
        var _speed = _this.props.speed;
        var rd = _this.props.radius;
        var bd = _this.props.border;
        var bgc = _this.props.color[0];
        var bdc = _this.props.color[1];
        var fnc = _this.props.color[2];
        var _wrap = _this.refs.ring;
        var _circle = _wrap.querySelector('.ring-circle');
        var _percent = _circle.querySelectorAll('.ring-percent');
        var _left = _percent[0];
        var _right = _percent[1];
        var _info = _wrap.querySelector('.ring-info');
        var _num = _info.querySelector('.num-info');

        _wrap.style.width = rd + 'px';
        _wrap.style.height = rd + 'px';
        _wrap.style.backgroundColor = bgc;

        _circle.style.width = rd + 'px';
        _circle.style.height = rd + 'px';
        _circle.style.border = bd + 'px solid ' + bgc;
        _circle.style.clip = 'rect(0,' + rd + 'px,' + rd + 'px,' + rd / 2 + 'px)';

        _left.style.width = rd + 'px';
        _left.style.height = rd + 'px';
        _left.style.top = -bd + 'px';
        _left.style.left = -bd + 'px';

        _left.style.border = bd + 'px solid ' + bdc;
        _left.style.clip = 'rect(0,' + rd / 2 + 'px,' + rd + 'px,0)';

        _right.style.border = bd + 'px solid ' + bdc;
        _right.style.clip = 'rect(0,' + rd + 'px,' + rd + 'px,' + rd / 2 + 'px)';
        _right.style.width = 0;

        _info.style.width = rd - 2 * bd + 'px';
        _info.style.height = rd - 2 * bd + 'px';
        _info.style.lineHeight = rd - 2 * bd + 'px';
        _info.style.top = bd + 'px';
        _info.style.left = bd + 'px';
        _info.style.fontSize = rd / 5 + 'px';
        _info.style.color = fnc;

        if (_animate) {
            var percent = 0;
            var loading = setInterval(function () {
                if (percent === _value) {
                    clearInterval(loading);
                } else if (percent > 50) {
                    addClass(_circle, 'clip-auto');
                    removeClass(_right, 'wth0');
                    _circle.style.clip = 'rect(auto, auto, auto, auto)';
                    _right.style.width = rd + 'px';
                    _right.style.height = rd + 'px';
                    _right.style.top = -bd + 'px';
                    _right.style.left = -bd + 'px';
                }
                _left.style.webkitTransform = 'rotate(' + 18 / 5 * percent + 'deg)';
                _num.childNodes[0].innerHTML = percent;
                percent++;
            }, _speed);
        } else {
            if (_value > 50) {
                addClass(_circle, 'clip-auto');
                removeClass(_right, 'wth0');
                _circle.style.clip = 'rect(auto, auto, auto, auto)';
                _right.style.width = rd + 'px';
                _right.style.height = rd + 'px';
                _right.style.top = -bd + 'px';
                _right.style.left = -bd + 'px';
            }
            _left.style.webkitTransform = 'rotate(' + 18 / 5 * _value + 'deg)';
            _num.childNodes[0].innerHTML = _value;
        }
    },
    render: function render() {
        var classes = classnames(_defineProperty({
            'ucs-progress': true
        }, this.props.className, !!this.props.className));
        return React.createElement(
            'div',
            { className: classes },
            this.props.type === 'ring' ? React.createElement(
                'div',
                { className: 'ring-wrap', ref: 'ring' },
                React.createElement(
                    'div',
                    { className: 'ring-circle' },
                    React.createElement('div', { className: 'ring-percent left' }),
                    React.createElement('div', { className: 'ring-percent right wth0' })
                ),
                React.createElement(
                    'div',
                    { className: 'ring-info' },
                    React.createElement(
                        'span',
                        { className: 'num-info' },
                        React.createElement(
                            'i',
                            null,
                            '0'
                        ),
                        '%'
                    ),
                    this.props.children
                )
            ) : React.createElement(
                'div',
                { className: 'line-wrap', ref: 'line' },
                React.createElement(
                    'div',
                    { className: 'line-bg' },
                    React.createElement('div', { className: 'line-inner' }),
                    React.createElement(
                        'div',
                        { className: 'line-info' },
                        React.createElement(
                            'span',
                            { className: 'num-info' },
                            React.createElement(
                                'i',
                                null,
                                '0'
                            ),
                            '%'
                        )
                    )
                )
            )
        );
    }
});
module.exports = Progress;

/***/ })

/******/ });