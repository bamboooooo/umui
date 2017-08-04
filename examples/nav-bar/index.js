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
/******/ 	return __webpack_require__(__webpack_require__.s = 113);
/******/ })
/************************************************************************/
/******/ ({

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var NavBar = __webpack_require__(94);
var Root = React.createClass({
    displayName: "Root",

    getInitialState: function getInitialState() {
        return {};
    },
    getDefaultProps: function getDefaultProps() {
        return {};
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                NavBar,
                {
                    id: "ucs-nav-bar",
                    className: "my-nav-bar",
                    leftItem: [React.createElement(
                        "span",
                        { key: "0" },
                        React.createElement("i", { className: "iconfont icon-arrow" })
                    ), React.createElement(
                        "span",
                        { key: "1" },
                        "\u8FD4\u56DE"
                    )],
                    rightItem: [React.createElement(
                        "span",
                        { key: "0" },
                        React.createElement("i", { className: "iconfont icon-more-2" })
                    )]
                },
                React.createElement(
                    "h1",
                    null,
                    "\u6211\u7684\u6807\u9898"
                )
            )
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

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
* navBar 组件
* @description
*   位于 app 内容区的上方，系统状态栏的下方，并且提供在一系列页面中的导航能力
* @example
    <NavBar
      id="ucs-nav-bar"
      className="my-nav-bar"
      leftItem={[
        <span key="0"><i className="iconfont icon-arrow"></i></span>,
        <span key="1">返回</span>
      ]}
      rightItem={[
        <span key="0"><i className="iconfont icon-more-2"></i></span>
      ]}
    >
      <h1>我的标题</h1>
    </NavBar>
* @author wall
* @createTime 2017-08-03
*/

var classnames = __webpack_require__(2);
var PropTypes = React.PropTypes;

/**
* @param {string} id 组件id
* @param {string} className 组件class
* @param {string/Array[html]} leftItem 组件左边区域 
* @param {string/Array[html]} leftItem 组件右边区域 
*/
var NavBar = React.createClass({
    displayName: 'NavBar',

    propTypes: {
        id: PropTypes.string,
        className: PropTypes.string,
        leftItem: PropTypes.node,
        rightItem: PropTypes.node
    },
    getDefaultProps: function getDefaultProps() {
        return {
            id: null,
            className: null,
            leftItem: null,
            rightItem: null
        };
    },
    render: function render() {
        // var props = this.props;
        var className = classnames('ucs-nav-bar', this.props.className);
        var id = this.props.id;
        var leftItem = this.props.leftItem;
        var rightItem = this.props.rightItem;

        return React.createElement(
            'div',
            { id: id, className: className },
            React.createElement(
                'div',
                { className: 'ucs-nav-bar-left' },
                leftItem
            ),
            React.createElement(
                'div',
                { className: 'ucs-nav-bar-title' },
                this.props.children
            ),
            React.createElement(
                'div',
                { className: 'ucs-nav-bar-right' },
                rightItem
            )
        );
    }
});
module.exports = NavBar;

/***/ })

/******/ });