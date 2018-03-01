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
/******/ 	return __webpack_require__(__webpack_require__.s = 135);
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

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by chenzefang on 2017/7/19.
 */

var Tabbar = __webpack_require__(99);
var Root = React.createClass({
    displayName: "Root",

    onClick: function onClick(index) {
        console.log(index);
    },
    componentDidMount: function componentDidMount() {
        this.refs.tabbar.setSelected(2);
    },
    render: function render() {
        return React.createElement(
            Tabbar,
            { ref: "tabbar", onClick: this.onClick },
            React.createElement(
                Tabbar.Item,
                null,
                React.createElement(
                    "a",
                    { href: "#" },
                    React.createElement("span", { className: "ucs-icon icon-home-fill" }),
                    React.createElement(
                        "span",
                        { className: "ucs-tabbar-label" },
                        "\u9996\u9875"
                    )
                )
            ),
            React.createElement(
                Tabbar.Item,
                null,
                React.createElement(
                    "a",
                    { href: "#" },
                    React.createElement("span", { className: "ucs-icon icon-about" }),
                    React.createElement(
                        "span",
                        { className: "ucs-tabbar-label" },
                        "\u6D88\u606F"
                    )
                )
            ),
            React.createElement(
                Tabbar.Item,
                null,
                React.createElement(
                    "a",
                    { href: "#" },
                    React.createElement("span", { className: "ucs-icon icon-mpack" }),
                    React.createElement(
                        "span",
                        { className: "ucs-tabbar-label" },
                        "\u8D44\u4EA7"
                    )
                )
            ),
            React.createElement(
                Tabbar.Item,
                null,
                React.createElement(
                    "a",
                    { href: "#" },
                    React.createElement("span", { className: "ucs-icon icon-people-2-fill" }),
                    React.createElement(
                        "span",
                        { className: "ucs-tabbar-label" },
                        "\u6211\u7684"
                    )
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by chenzefang on 2017/7/19.
 */
var classnames = __webpack_require__(0);
var Tabbar = React.createClass({
    displayName: 'Tabbar',

    getDefaultProps: function getDefaultProps() {
        return {
            className: null,
            id: null,
            selected: 0,
            onClick: null
        };
    },
    getInitialState: function getInitialState() {
        return {
            className: classnames('ucs-tabbar', this.props.className),
            selected: this.props.selected
        };
    },
    _onClick: function _onClick(index) {
        this.setState({
            selected: index
        });
        this.props.onClick && this.props.onClick(index);
    },

    /*
    * 设置选中项
    * */
    setSelected: function setSelected(v) {
        this.setState({
            selected: v
        });
    },

    /*
    * 返回选中项
    * */
    getSelected: function getSelected() {
        return this.state.selected;
    },

    /*
    * 显示组件
    * */
    show: function show() {
        this.setState({
            className: classnames('ucs-tabbar', this.props.className, { 'ucs-hide': false })
        });
    },

    /*
    * 隐藏组件
    * */
    hide: function hide() {
        this.setState({
            className: classnames('ucs-tabbar', this.props.className, { 'ucs-hide': true })
        });
    },
    render: function render() {
        var self = this;
        return React.createElement(
            'div',
            { className: self.state.className, id: this.props.id },
            React.createElement(
                'ul',
                { className: 'ucs-tabbar-nav' },
                this.props.children.map(function (item, index) {
                    var active = self.state.selected === index ? 'active' : '';
                    return React.createElement(
                        'li',
                        { className: active, key: index, onClick: self._onClick.bind(self, index) },
                        item.props.children
                    );
                })
            )
        );
    }
});

Tabbar.Item = React.createClass({
    displayName: 'Item',

    render: function render() {
        return this.props.children;
    }
});
module.exports = Tabbar;

/***/ })

/******/ });