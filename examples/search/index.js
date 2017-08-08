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
/******/ 	return __webpack_require__(__webpack_require__.s = 138);
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

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Search = __webpack_require__(88);
var Root = React.createClass({
    displayName: 'Root',

    setValue: function setValue() {
        this.refs.search.setValue('吃饭');
    },
    getValue: function getValue() {
        var inputValue = this.refs.search.getValue();
        console.log(inputValue);
    },
    setDisabled: function setDisabled(v) {
        this.refs.search.setDisabled(v);
    },
    clear: function clear() {
        this.refs.search.clear();
    },
    reset: function reset() {
        this.refs.search.reset();
    },
    _onChange: function _onChange(e) {
        console.log('onChange');
        // console.log(e.target.name);
    },
    _onFocus: function _onFocus() {
        this.refs.inputEle.onFocus();
    },
    _onBlur: function _onBlur() {
        // console.log('onBlur');
    },
    render: function render() {
        var config1 = {
            id: 'search-id',
            className: 'custom-className',
            defaultValue: '基金',
            value: '股票',
            name: 'search-name',
            placeholder: '搜一下',
            onChange: function onChange(e) {
                console.log('onChange');
                console.log(e.target.value);
            },
            onFocus: function onFocus(e) {
                console.log('onFocus');
                console.log(e.target.value);
            },
            onBlur: function onBlur(e) {
                console.log('onBlur');
                console.log(e.target.value);
            },
            onSubmit: function onSubmit(e) {
                console.log('onSubmit');
                console.log(e);
            },
            onClick: function onClick(e) {
                console.log('onclick');
                console.log(e);
            }
        };
        return React.createElement(
            'div',
            { className: 'ucs-search-example' },
            '\u57FA\u7840:',
            React.createElement(Search, { ref: 'searchbase' }),
            '\u64CD\u4F5C\uFF1A',
            React.createElement(Search, _extends({ ref: 'search' }, config1)),
            React.createElement(
                'ul',
                null,
                React.createElement(
                    'li',
                    { style: { lineHeight: '50px' } },
                    React.createElement(
                        'button',
                        { onClick: this.setValue },
                        '\u8BBE\u7F6E\u641C\u7D22\u5185\u5BB9\u4E3A\u201C\u5403\u996D\u201D'
                    )
                ),
                React.createElement(
                    'li',
                    { style: { lineHeight: '50px' } },
                    React.createElement(
                        'button',
                        { onClick: this.getValue },
                        '\u83B7\u53D6\u641C\u7D22\u5185\u5BB9'
                    )
                ),
                React.createElement(
                    'li',
                    { style: { lineHeight: '50px' } },
                    React.createElement(
                        'button',
                        { onClick: this.setDisabled.bind(this, true) },
                        '\u8BBE\u7F6E\u641C\u7D22\u5185\u5BB9Disabled=true'
                    )
                ),
                React.createElement(
                    'li',
                    { style: { lineHeight: '50px' } },
                    React.createElement(
                        'button',
                        { onClick: this.setDisabled.bind(this, false) },
                        '\u8BBE\u7F6E\u641C\u7D22\u5185\u5BB9Disabled=false'
                    )
                ),
                React.createElement(
                    'li',
                    { style: { lineHeight: '50px' } },
                    React.createElement(
                        'button',
                        { onClick: this.clear },
                        '\u6E05\u7A7A\u641C\u7D22\u5185\u5BB9'
                    )
                ),
                React.createElement(
                    'li',
                    { style: { lineHeight: '50px' } },
                    React.createElement(
                        'button',
                        { onClick: this.reset },
                        '\u91CD\u7F6E\u641C\u7D22\u5185\u5BB9'
                    )
                )
            )
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classnames = __webpack_require__(0);

var Search = React.createClass({
    displayName: 'Search',

    getDefaultProps: function getDefaultProps() {
        return {
            className: '',
            id: null,
            defaultValue: '',
            value: '',
            disabled: false,
            name: null,
            placeholder: '搜索',
            onChange: null,
            onFocus: null,
            onBlur: null,
            onSubmit: null,
            onClick: null
        };
    },

    getInitialState: function getInitialState() {
        return {
            className: classnames('ucs-search-value', this.props.className),
            value: this.props.value !== '' ? this.props.value : this.props.defaultValue,
            isShowClear: this.props.value !== '' && !this.props.disabled || false,
            disabled: this.props.disabled || false,
            focus: false
        };
    },

    componentDidMount: function componentDidMount() {
        if (this.state.value !== '') {
            this.setState({
                focus: true
            });
            !this.state.disabled && this.setState({
                isShowClear: true
            });
        }
    },

    componentDidUpdate: function componentDidUpdate() {
        var realWidth = this.refs.searchCoverContainerRef.getBoundingClientRect().width;
        if (this.state.focus) {
            this.refs.searchCoverRef.style.width = Math.ceil(realWidth) + 'px';
        } else {
            this.refs.searchCoverRef.style.width = '100%';
        }
    },

    _onChange: function _onChange(e) {
        this.setState({
            value: e.target.value
        });
        this._showCloseHandler(this.refs.searchRef.value);
        this.props.onChange && this.props.onChange(e);
    },

    _onFocus: function _onFocus(e) {
        this.setState({
            focus: true
        });
        this.props.onFocus && this.props.onFocus(e);
    },

    _onBlur: function _onBlur(e) {
        if (this.state.value === '') {
            this.setState({
                focus: false
            });
        }
        this.props.onBlur && this.props.onBlur(e);
    },

    _onSubmit: function _onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit && this.props.onSubmit(this.state.value);
    },

    _onClick: function _onClick() {
        this.props.onClick && this.props.onClick(this.state.value);
    },

    _showCloseHandler: function _showCloseHandler(value) {
        if (value !== '') {
            this.setState({
                isShowClear: true
            });
        } else {
            this.setState({
                isShowClear: false
            });
        }
    },

    _clearClick: function _clearClick(e) {
        this.clear();
        this.setState({ isShowClear: false });
        this.refs.searchRef.focus();
    },

    _onCancel: function _onCancel() {
        this.clear();
        this.setState({
            focus: false,
            isShowClear: false
        });
    },

    setValue: function setValue(v) {
        !this.state.disabled && this.setState({
            value: v,
            focus: true,
            isShowClear: true
        });
    },

    getValue: function getValue() {
        return this.state.value;
    },

    setDisabled: function setDisabled(v) {
        if (v) {
            this.setState({
                disabled: true,
                isShowClear: false
            });
        } else {
            this.setState({
                disabled: false
            });
            if (this.state.value === '') {
                this.setState({
                    isShowClear: false
                });
            } else {
                this.setState({
                    isShowClear: true
                });
            }
        }
    },

    clear: function clear() {
        if (!this.state.disabled) {
            this.setState({
                value: '',
                isShowClear: false
            });
        }
    },

    reset: function reset() {
        if (!this.state.disabled) {
            if (this.props.defaultValue) {
                this.setState({ value: this.props.defaultValue });
            } else {
                this.clear();
            }
        }
    },

    render: function render() {
        var wrapCls = classnames({
            'ucs-search': true,
            'ucs-search-focus': this.state.focus
        });
        var spanShowClose = {
            display: this.state.isShowClear && !this.state.disabled ? 'block' : 'none'
        };
        var coverPlaceholderStyle = {
            visibility: this.state.value !== '' ? 'hidden' : 'visible'
        };
        return React.createElement(
            'form',
            { onSubmit: this._onSubmit, action: '#', className: wrapCls },
            React.createElement(
                'div',
                { className: 'ucs-search-input', onClick: this._onClick },
                React.createElement(
                    'div',
                    { className: 'ucs-search-cover', ref: 'searchCoverRef' },
                    React.createElement(
                        'span',
                        { ref: 'searchCoverContainerRef' },
                        React.createElement('i', { className: 'ucs-search-cover-icon' }),
                        React.createElement(
                            'span',
                            { className: 'ucs-search-cover-placeholder', style: coverPlaceholderStyle },
                            this.props.placeholder
                        )
                    )
                ),
                React.createElement('input', {
                    ref: 'searchRef',
                    type: 'search',
                    className: this.state.className,
                    id: this.props.id,
                    name: this.props.name,
                    disabled: this.state.disabled,
                    value: this.state.value,
                    onChange: this._onChange,
                    onFocus: this._onFocus,
                    onBlur: this._onBlur
                }),
                React.createElement(
                    'a',
                    { href: 'javascript:;', onClick: this._clearClick },
                    React.createElement('span', { className: 'ucs-search-showClose', style: spanShowClose })
                )
            ),
            React.createElement(
                'div',
                { className: 'ucs-search-cancel ucs-search-cancel-anim', onClick: this._onCancel },
                '\u53D6\u6D88'
            )
        );
    }
});

module.exports = Search;

/***/ })

/******/ });