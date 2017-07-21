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
/******/ 	return __webpack_require__(__webpack_require__.s = 93);
/******/ })
/************************************************************************/
/******/ ({

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
            radius: 100,
            border: 10,
            color: ['#ccc', '#f00', '#000'],
            value: 0
        };
    },
    getInitialState: function getInitialState() {
        return {};
    },
    componentDidMount: function componentDidMount() {
        var _this = this;
        var rd = _this.props.radius;
        var bd = _this.props.border;
        var bgc = _this.props.color[0];
        var bdc = _this.props.color[1];
        var fnc = _this.props.color[2];
        var _wrap = _this.refs.progress;
        var _circle = _wrap.querySelector('.circle');
        var _percent = _circle.querySelectorAll('.percent');
        var _left = _percent[0];
        var _right = _percent[1];
        var _num = _wrap.querySelector('.num');

        _wrap.style.width = rd + 'px';
        _wrap.style.height = rd + 'px';

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

        _num.style.width = rd - 2 * bd + 'px';
        _num.style.height = rd - 2 * bd + 'px';
        _num.style.lineHeight = rd - 2 * bd + 'px';
        _num.style.top = bd + 'px';
        _num.style.left = bd + 'px';
        _num.style.fontSize = rd / 5 + 'px';
        _num.style.color = fnc;

        var percent = 0;
        var _value = _this.props.value;
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
        }, 10);
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'wrap', ref: 'progress' },
            React.createElement(
                'div',
                { className: 'circle' },
                React.createElement('div', { className: 'percent left' }),
                React.createElement('div', { className: 'percent right wth0' })
            ),
            React.createElement(
                'div',
                { className: 'num' },
                React.createElement(
                    'span',
                    null,
                    '0'
                ),
                '%'
            )
        );
    }
});
module.exports = Progress;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Progress = __webpack_require__(76);
var Root = React.createClass({
    displayName: 'Root',

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Progress, { radius: 50, border: 4, color: ['#ccc', '#f00', '#000'], value: 50 }),
            React.createElement(Progress, { radius: 100, border: 6, color: ['#ccc', '#0f0', '#000'], value: 80 }),
            React.createElement(Progress, { radius: 200, color: ['#ccc', '#00f', '#00f'], value: 100 })
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });