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
/******/ 	return __webpack_require__(__webpack_require__.s = 127);
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

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by maxuezhu on 2017/8/4.
 */
var Modal = __webpack_require__(98);
var Button = __webpack_require__(7);
var Root = React.createClass({
    displayName: 'Root',

    _clickHandle1: function _clickHandle1() {
        Modal.confirm({
            title: '提示1',
            content: '确认删除xxx嘛？',
            confirmBack: function confirmBack() {
                console.log('你选了确定');
            },
            cancelBack: function cancelBack() {
                console.log('你选了取消');
            }
        });
    },
    _clickHandle2: function _clickHandle2() {
        Modal.alert({
            title: '提示1',
            content: '确认删除xxx嘛？',
            confirmBack: function confirmBack() {
                console.log('你选了确定');
            }
        });
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Button, { value: 'confrim\u5F39\u7A97', ref: 'confirm', onClick: this._clickHandle1 }),
            React.createElement(Button, { value: 'alert\u5F39\u7A97', ref: 'alert', onClick: this._clickHandle2 })
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classnames = __webpack_require__(0);
var Button = React.createClass({
    displayName: 'Button',

    getDefaultProps: function getDefaultProps() {
        return {
            id: null,
            className: null,
            name: null,
            disabled: false,
            onClick: null
        };
    },
    getInitialState: function getInitialState() {
        return {
            className: classnames('ucs-button', this.props.className, this.props.disabled ? 'disabled' : ''),
            disabled: this.props.disabled ? this.props.disabled : false,
            value: this.props.value
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(newProps) {
        if (newProps !== this.props) {
            this.setState({
                value: newProps.value,
                className: classnames('ucs-button', newProps.className),
                disabled: newProps.disabled
            });
        }
    },
    _onClick: function _onClick() {
        this.props.onClick && this.props.onClick();
    },
    setValue: function setValue(v) {
        this.setState({
            value: v
        });
    },
    setDisabled: function setDisabled(v) {
        if (v) {
            this.setState({
                className: classnames(this.state.className, 'disabled'),
                disabled: true
            });
        } else {
            this.setState({
                className: classnames('ucs-button', this.props.className),
                disabled: false
            });
        }
    },
    render: function render() {
        return React.createElement(
            'button',
            { ref: 'button', id: this.props.id, name: this.props.name, className: this.state.className, disabled: this.state.disabled, onClick: this._onClick },
            this.state.value
        );
    }
});
module.exports = Button;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by maxuezhu on 2017/8/4.
 * 说明：提示对话框组件
 */
var Button = __webpack_require__(7);
var Modal = function () {
    var div = document.createElement('div');
    var ConfirmItem = React.createClass({
        displayName: 'ConfirmItem',

        getDefaultProps: function getDefaultProps() {
            return {
                title: '',
                content: '',
                confirmText: '确定',
                cancelText: '取消',
                confirmBack: null,
                cancelBack: null
            };
        },
        getInitialState: function getInitialState() {
            return {
                className: 'ucs-modal'
            };
        },
        _confirmBack: function _confirmBack() {
            document.body.removeChild(div);
            this.props.confirmBack ? this.props.confirmBack() : null;
        },
        _cancelBack: function _cancelBack() {
            document.body.removeChild(div);
            this.props.cancelBack ? this.props.cancelBack() : null;
        },
        render: function render() {
            document.body.appendChild(div);
            return React.createElement(
                'div',
                { className: this.state.className, ref: 'modal' },
                React.createElement('div', { className: 'ucs-modal-mask' }),
                React.createElement(
                    'div',
                    { className: 'ucs-modal-wrapper' },
                    React.createElement(
                        'div',
                        { className: 'ucs-modal-con' },
                        React.createElement(
                            'div',
                            { className: 'ucs-modal-title' },
                            this.props.title
                        ),
                        React.createElement(
                            'div',
                            { className: 'ucs-modal-content' },
                            this.props.content
                        ),
                        React.createElement(Button, { value: this.props.confirmText, ref: 'confirm', onClick: this._confirmBack }),
                        React.createElement(Button, { value: this.props.cancelText, ref: 'cancel', className: 'ucs-btn-cancel', onClick: this._cancelBack })
                    )
                )
            );
        }
    });
    var AlertItem = React.createClass({
        displayName: 'AlertItem',

        getDefaultProps: function getDefaultProps() {
            return {
                title: '',
                content: '',
                confirmText: '确定',
                confirmBack: null
            };
        },
        getInitialState: function getInitialState() {
            return {
                className: this.props.className ? this.props.className : 'ucs-modal'
            };
        },
        _confirmBack: function _confirmBack() {
            document.body.removeChild(div);
            this.props.confirmBack ? this.props.confirmBack() : null;
        },
        render: function render() {
            document.body.appendChild(div);
            return React.createElement(
                'div',
                { className: this.state.className },
                React.createElement('div', { className: 'ucs-modal-mask' }),
                React.createElement(
                    'div',
                    { className: 'ucs-modal-wrapper' },
                    React.createElement(
                        'div',
                        { className: 'ucs-modal-con' },
                        React.createElement(
                            'div',
                            { className: 'ucs-modal-title' },
                            this.props.title
                        ),
                        React.createElement(
                            'div',
                            { className: 'ucs-modal-content' },
                            this.props.content
                        ),
                        React.createElement(Button, { value: this.props.confirmText, ref: 'confirm', className: 'alert-btn', onClick: this._confirmBack })
                    )
                )
            );
        }
    });
    return {
        alert: function alert(v) {
            ReactDOM.render(React.createElement(AlertItem, v), div);
        },
        confirm: function confirm(v) {
            ReactDOM.render(React.createElement(ConfirmItem, v), div);
        }
    };
}();

module.exports = Modal;

/***/ })

/******/ });