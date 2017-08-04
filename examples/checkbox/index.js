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
/******/ 	return __webpack_require__(__webpack_require__.s = 114);
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

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Checkbox = __webpack_require__(78);
var Root = React.createClass({
    displayName: "Root",

    getInitialState: function getInitialState() {
        return {};
    },
    getDefaultProps: function getDefaultProps() {
        return {};
    },
    onChange: function onChange(v) {
        console.log(v);
    },
    getChecked: function getChecked() {
        console.log(this.refs.checkbox1.getChecked());
    },
    setChecked: function setChecked() {
        this.refs.checkbox1.setChecked(true);
    },
    setDisabled: function setDisabled() {
        this.refs.checkbox1.setDisabled(true);
    },
    setAbled: function setAbled() {
        this.refs.checkbox1.setDisabled(false);
    },
    reset: function reset() {
        this.refs.checkbox1.reset();
    },
    clear: function clear() {
        this.refs.checkbox1.clear();
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(Checkbox, {
                ref: "checkbox1",
                text: "\u590D\u9009\u6846",
                id: "ucs-checkbox1",
                className: "my-checkbox",
                defaultChecked: true,
                onChange: this.onChange
            }),
            React.createElement(Checkbox, {
                text: "\u4E0D\u53EF\u7F16\u8F91\u72B6\u6001",
                id: "ucs-checkbox2",
                className: "my-checkbox",
                defaultChecked: false,
                disabled: true
            }),
            React.createElement(
                "ul",
                null,
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "button",
                        { onClick: this.getChecked },
                        "\u83B7\u53D6\u590D\u9009\u6846\u7684\u503C"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "button",
                        { onClick: this.setChecked },
                        "\u8BBE\u7F6E\u590D\u9009\u6846\u4E3A\u52FE\u9009\u72B6\u6001"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "button",
                        { onClick: this.setDisabled },
                        "\u8BBE\u7F6E\u590D\u9009\u6846\u4E3A\u4E0D\u53EF\u7F16\u8F91\u72B6\u6001"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "button",
                        { onClick: this.setAbled },
                        "\u8BBE\u7F6E\u590D\u9009\u6846\u4E3A\u53EF\u7F16\u8F91\u72B6\u6001"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "button",
                        { onClick: this.reset },
                        "\u91CD\u7F6E\u590D\u9009\u6846"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "button",
                        { onClick: this.clear },
                        "\u6E05\u7A7A\u590D\u9009\u6846"
                    )
                )
            )
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
* checkbox组件
* @param {string} id 组件id
* @param {string} className 组件class
* @param {string} text 关联的文案 
* @param {boolean} defaultChecked 初始化是否选中 
* @param {boolean} disabled 是否禁用 
* @param {function} onChange 监控change事件 
* @description
*   多选框
* @example
  <Checkbox
    text="复选框"
    id="ucs-nav-bar"
    className="my-nav-bar"
    defaultChecked={true}
    onChange={this.onChange}
  />
* @author wall
* @createTime 2017-08-04
*/
var classnames = __webpack_require__(0);
var PropTypes = React.PropTypes;

var Checkbox = React.createClass({
    displayName: 'Checkbox',

    propTypes: {
        id: PropTypes.string,
        className: PropTypes.string,
        text: PropTypes.string,
        defaultChecked: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func
    },
    getDefaultProps: function getDefaultProps() {
        return {
            id: null,
            className: null,
            text: '',
            defaultChecked: false,
            disabled: false,
            onChange: function onChange() {
                return null;
            }
        };
    },
    getInitialState: function getInitialState() {
        return {
            checked: this.props.defaultChecked,
            disabled: this.props.disabled
        };
    },
    _onClick: function _onClick() {
        if (this.state.disabled) {
            return;
        }

        var nowChecked = !this.state.checked;
        this.setState({
            checked: nowChecked
        });

        this.props.onChange(nowChecked);
    },
    setChecked: function setChecked(v) {
        this.setState({
            checked: v
        });
    },
    getChecked: function getChecked() {
        return this.state.checked;
    },
    setDisabled: function setDisabled(v) {
        this.setState({
            disabled: v
        });
    },
    clear: function clear() {
        this.setState({
            checked: false
        });
    },
    reset: function reset() {
        this.setState({
            checked: this.props.defaultChecked
        });
    },
    render: function render() {
        var className = classnames('ucs-checkbox', this.props.className, this.props.disabled ? 'ucs-checkbox-disabled' : '');
        var id = this.props.id;
        var checked = this.state.checked;
        var iconClass = classnames('iconfont', checked ? 'icon-check-square-o' : 'icon-check-square');
        var text = this.props.text;

        return React.createElement(
            'div',
            { id: id, className: className, onClick: this._onClick },
            React.createElement('i', { className: iconClass }),
            React.createElement(
                'label',
                { className: 'ucs-checkbox-text' },
                text
            )
        );
    }
});

module.exports = Checkbox;

/***/ })

/******/ });