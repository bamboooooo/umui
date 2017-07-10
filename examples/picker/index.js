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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
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

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by Administrator on 2017/6/27.
 */
var classnames = __webpack_require__(27);
var Picker = React.createClass({
    displayName: 'Picker',

    getDefaultProps: function getDefaultProps() {
        return {
            visible: false,
            placeholder: '请选择',
            title: '请选择',
            cancelText: '取消',
            okText: '确定',
            format: '',
            disabled: false,
            dataSource: [],
            cols: 3,
            value: [],
            onClick: function onClick() {
                console.log(123);
            },
            onChange: function onChange() {
                console.log(123);
            },
            onOk: function onOk() {
                console.log(123);
            },
            onCancel: function onCancel() {
                console.log(123);
            },
            onMaskClick: function onMaskClick() {
                console.log(123);
            },
            prefixCls: 'ui-picker-column-group',
            pickerPrefixCls: 'ui-cascaderpicker',
            displayMember: 'label',
            valueMember: 'value'
        };
    },
    getInitialState: function getInitialState() {
        return {
            visible: this.props.visible || false,
            translateY: 0,
            pointStart: 0,
            pointEnd: 0,
            value: this.props.value || this.props.defaultValue,
            data: this.props.dataSource,
            cascade: Object.prototype.toString.call(this.props.dataSource[0]) !== '[object Array]'
        };
    },
    componentDidMount: function componentDidMount() {
        this.tempValue = this.props.value;
    },
    onCancel: function onCancel() {
        var onCancel = this.props.onCancel;
        this.toggle();
        this.setState({
            value: this.tempValue
        });
        onCancel && onCancel();
    },
    onOk: function onOk() {
        var onOk = this.props.onOk;
        var value = this.getInitValue();
        this.tempValue = value;
        this.toggle();
        onOk && onOk(value);
    },
    // 切换显示状态
    toggle: function toggle() {
        if (this.props.disabled) {
            return;
        }
        this.setState({
            visible: !this.state.visible
        });
    },
    handleClick: function handleClick() {
        this.props.onClick();
        !this.props.disabled && this.toggle();
    },
    onContainerClick: function onContainerClick(e) {
        e.stopPropagation();
    },
    onMaskClick: function onMaskClick() {
        alert(123);
        var onMaskClick = this.props.onMaskClick;
        this.onCancel();
        onMaskClick && onMaskClick();
    },
    getInitValue: function getInitValue() {
        var data = this.state.data;
        var displayMember = this.props.displayMember;
        var value = this.state.value;
        if (!value || !value.length) {
            // 判断数据是否为级联，简单判断数据第一个元素是否为数组
            if (this.state.cascade) {
                for (var i = 0; i < this.props.cols; i += 1) {
                    if (data && data.length) {
                        value[i] = data[0][displayMember];
                        data = data[0].children;
                    }
                }
            } else {
                data.forEach(function (d) {
                    value.push(d[0][displayMember]);
                });
            }
        }
        return value;
    },

    render: function render() {
        var className = this.props.className;
        var disabled = this.props.disabled;
        var format = this.props.format;
        var placeholder = this.props.placeholder;
        var cancelText = this.props.cancelText;
        var okText = this.props.okText;
        var title = this.props.title;
        var value = this.state.value;
        var classes = classnames(_defineProperty({
            'ucs-picker-container': true,
            'am-picker-popup-mask-hidden': !this.state.visible
        }, className, !!className));
        var inputCls = classnames({
            'ui-picker-placeholder': !value.join(format),
            'ui-picker-disabled': !!disabled
        });
        var display = function display() {
            return value.join(format) || placeholder;
        };
        return React.createElement(
            'div',
            { className: 'ucs-picker', onClick: this.handleClick },
            React.createElement(
                'div',
                { className: inputCls },
                display()
            ),
            React.createElement(
                'div',
                { className: classes, onClick: this.onContainerClick },
                React.createElement('div', { className: 'am-picker-popup-mask', onClick: this.onMaskClick }),
                React.createElement(
                    'div',
                    { tabIndex: '-1', className: 'am-picker-popup-wrap ', role: 'dialog' },
                    React.createElement(
                        'div',
                        { role: 'document', className: 'am-picker-popup forss' },
                        React.createElement(
                            'div',
                            { className: 'am-picker-popup-content' },
                            React.createElement(
                                'div',
                                { className: 'am-picker-popup-body' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'div',
                                        { className: 'am-picker-popup-header' },
                                        React.createElement(
                                            'div',
                                            { className: 'am-picker-popup-item am-picker-popup-header-left' },
                                            cancelText
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'am-picker-popup-item am-picker-popup-title' },
                                            title
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'am-picker-popup-item am-picker-popup-header-right' },
                                            okText
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'am-picker' },
                                        React.createElement(
                                            'div',
                                            { className: 'am-picker-item' },
                                            React.createElement(
                                                'div',
                                                { className: 'am-picker-col' },
                                                React.createElement('div', { className: 'am-picker-col-mask' }),
                                                React.createElement('div', { className: 'am-picker-col-indicator' }),
                                                React.createElement(
                                                    'div',
                                                    { className: 'am-picker-col-content', style: { transformOrigin: 'left top 0px', transform: 'translate3d(0px, -34px, 0px) scale(1)' } },
                                                    React.createElement(
                                                        'div',
                                                        { className: 'am-picker-col-item' },
                                                        '\u5B89\u5FBD\u7701'
                                                    ),
                                                    React.createElement(
                                                        'div',
                                                        { className: 'am-picker-col-item am-picker-col-item-selected' },
                                                        '\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A'
                                                    ),
                                                    React.createElement(
                                                        'div',
                                                        { className: 'am-picker-col-item' },
                                                        '\u5317\u4EAC'
                                                    ),
                                                    React.createElement(
                                                        'div',
                                                        { className: 'am-picker-col-item' },
                                                        '\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A'
                                                    ),
                                                    React.createElement(
                                                        'div',
                                                        { className: 'am-picker-col-item' },
                                                        '\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A'
                                                    ),
                                                    React.createElement(
                                                        'div',
                                                        { className: 'am-picker-col-item' },
                                                        '\u6D59\u6C5F\u7701'
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { tabIndex: '0', style: { width: '0px', height: '0px', overflow: 'hidden' } },
                            'sentinel'
                        )
                    )
                )
            )
        );
    }
});

module.exports = Picker;

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

var Picker = __webpack_require__(71);

var Root = React.createClass({
    displayName: 'Root',

    getInitialState: function getInitialState() {
        return {
            CascaderPicker: false,
            sValue: [],
            disabled: false
        };
    },
    render: function render() {
        var province = ['安徽省', '澳门特别行政区', '北京', '广西壮族自治区', '香港特别行政区', '浙江省'];
        return React.createElement(Picker, {
            visible: this.state.CascaderPicker,
            title: '\u8BF7\u9009\u62E9',
            placeholder: '\u8BF7\u9009\u62E9',
            format: '',
            disabled: this.state.disabled,
            dataSource: province,
            cols: 1,
            displayMember: 'label',
            valueMember: 'label',
            value: this.state.sValue,
            onChange: function onChange(value) {
                console.log('外部change value ->', value);
                this.setState({ sValue: value });
            },
            onOk: function onOk(value) {
                console.log(value);
            },
            onCancel: function onCancel() {
                console.log(123);
            }
        });
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });