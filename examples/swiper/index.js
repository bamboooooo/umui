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
/******/ 	return __webpack_require__(__webpack_require__.s = 133);
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

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Swiper = __webpack_require__(98);
var Root = React.createClass({
    displayName: 'Root',

    render: function render() {
        return React.createElement(
            Swiper,
            { defaultValue: 1, dots: true, arrows: true, autoPlay: true },
            React.createElement(
                Swiper.Item,
                null,
                '1'
            ),
            React.createElement(
                Swiper.Item,
                null,
                '2'
            ),
            React.createElement(
                Swiper.Item,
                null,
                '3'
            )
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classnames = __webpack_require__(0);
var Swiper = React.createClass({
    displayName: 'Swiper',

    getDefaultProps: function getDefaultProps() {
        return {
            dots: true,
            arrows: true,
            autoPlay: false,
            autoPlaySpeed: 3000,
            defaultValue: 0
        };
    },
    getInitialState: function getInitialState() {
        return {
            translateX: 0,
            pointStart: 0,
            pointEnd: 0,
            value: this.props.defaultValue
        };
    },
    componentDidMount: function componentDidMount() {
        this.onValueChange(this.state.value, 0);
        if (this.props.autoPlay) {
            this.playHandler();
        }
    },
    playHandler: function playHandler() {
        var _this = this;
        var items = _this.refs.swiper.children;
        var maxIndex = Math.abs(items.length - 1);
        var index;
        _this.timer = setInterval(function () {

            if (_this.state.value < maxIndex) {
                index = _this.state.value + 1;
            } else {
                index = 0;
            }

            _this._onMoveTo(index, 300);

            _this.setState({
                value: index
            });
        }, _this.props.autoPlaySpeed);
    },
    // 选中指定值
    onValueChange: function onValueChange(value, speed) {
        var index = value;
        this._onMoveTo(index, speed);
    },
    // 移动到指定编号
    _onMoveTo: function _onMoveTo(index, speed) {
        var itemWidth = this._getItemWidth();
        if (itemWidth === 0) {
            return;
        }

        var offset = -index * itemWidth;

        this._doTransition(offset, speed);
        this.setState({
            translateX: offset
        });
    },
    // 执行过渡动画
    _doTransition: function _doTransition(offset, duration) {
        var style = this.refs.swiper.style;
        style.webkitTransitionDuration = duration + 'ms';
        style.mozTransitionDuration = duration + 'ms';
        style.oTransitionDuration = duration + 'ms';
        style.transitionDuration = duration + 'ms';
        style.webkitTransform = 'translate3d(' + offset + 'px, 0, 0)';
        style.mozTransform = 'translate3d(' + offset + 'px, 0, 0)';
        style.oTransform = 'translate3d(' + offset + 'px, 0, 0)';
        style.transform = 'translate3d(' + offset + 'px, 0, 0)';
    },
    _onTouchStart: function _onTouchStart(event) {
        var pointX = this._getPoint(event).x;
        this.setState({
            pointStart: pointX,
            pointEnd: pointX
        });
    },
    _onTouchMove: function _onTouchMove(event) {
        event.preventDefault();
        var pointX = this._getPoint(event).x;
        var offset = this.state.translateX + (pointX - this.state.pointStart);

        this._doTransition(offset, 0);
        this.setState({
            pointEnd: pointX
        });
    },
    _onTouchEnd: function _onTouchEnd(event) {
        var items = this.refs.swiper.children;
        var maxIndex = Math.abs(items.length - 1);

        var index;

        if (this.state.pointEnd - this.state.pointStart > 50 && this.state.value > 0) {
            index = this.state.value - 1;
        } else if (this.state.pointEnd - this.state.pointStart < -50 && this.state.value < maxIndex) {
            index = this.state.value + 1;
        } else {
            index = this.state.value;
        }

        this._onMoveTo(index, 300);

        var onChange = this.props.onChange;

        this.setState({
            value: index
        });
        onChange && onChange(index);
    },
    _getItemWidth: function _getItemWidth() {
        var items = this.refs.swiper.children;

        if (!items || items.length === 0) {
            return 0;
        }
        return items[0].offsetWidth;
    },
    // 获取触摸点的当前坐标
    _getPoint: function _getPoint(event) {
        var touch = event.touches[0];
        return {
            x: touch.pageX,
            y: touch.pageY
        };
    },
    _prevHandler: function _prevHandler(e) {
        e.stopPropagation();
        var items = this.refs.swiper.children;
        var maxIndex = Math.abs(items.length - 1);
        var index;

        if (this.state.value > 0) {
            index = this.state.value - 1;
        } else {
            index = maxIndex;
        }

        this._onMoveTo(index, 300);

        var onChange = this.props.onChange;

        this.setState({
            value: index
        });
        onChange && onChange(index);
    },
    _nextHandler: function _nextHandler(e) {
        e.stopPropagation();
        var items = this.refs.swiper.children;
        var maxIndex = Math.abs(items.length - 1);
        var index;

        if (this.state.value < maxIndex) {
            index = this.state.value + 1;
        } else {
            index = 0;
        }

        this._onMoveTo(index, 300);

        var onChange = this.props.onChange;

        this.setState({
            value: index
        });
        onChange && onChange(index);
    },
    _dotsHandler: function _dotsHandler(index, e) {
        e.stopPropagation();
        this._onMoveTo(index, 300);

        var onChange = this.props.onChange;

        this.setState({
            value: index
        });
        onChange && onChange(index);
    },
    render: function render() {
        var _this = this;
        return React.createElement(
            'div',
            { className: 'ucs-swiper',
                onTouchStart: _this._onTouchStart,
                onTouchMove: _this._onTouchMove,
                onTouchEnd: _this._onTouchEnd
            },
            React.createElement(
                'div',
                { className: 'swiper-container', ref: 'swiper' },
                _this.props.children
            ),
            _this.props.dots ? React.createElement(
                'div',
                { className: 'swiper-pagination swiper-pagination-white swiper-pagination-clickable swiper-pagination-bullets' },
                _this.props.children.map(function (item, index) {
                    var cls = classnames({ 'swiper-pagination-bullet': true, 'swiper-pagination-bullet-active': index === _this.state.value });
                    return React.createElement('span', { key: index, className: cls, onTouchEnd: _this._dotsHandler.bind(_this, index) });
                })
            ) : '',
            _this.props.arrows ? React.createElement('div', { className: 'swiper-button-prev', onTouchEnd: this._prevHandler }) : '',
            _this.props.arrows ? React.createElement('div', { className: 'swiper-button-next', onTouchEnd: this._nextHandler }) : ''
        );
    }
});
module.exports = Swiper;
Swiper.Item = React.createClass({
    displayName: 'Item',

    render: function render() {
        return React.createElement(
            'div',
            { className: 'swiper-item' },
            this.props.children
        );
    }
});

/***/ })

/******/ });