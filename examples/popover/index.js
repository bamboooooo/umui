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
/******/ 	return __webpack_require__(__webpack_require__.s = 128);
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

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Popover = __webpack_require__(95);
var Item = Popover.Item;
var Root = React.createClass({
    displayName: 'Root',

    onSelect: function onSelect(v) {
        console.log('选中值：', v);
    },
    onVisibleChange: function onVisibleChange() {
        console.log('onVisibleChange');
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { style: { marginLeft: '30px', marginTop: '30px' } },
                React.createElement(
                    Popover,
                    {
                        mask: true,
                        onVisibleChange: this.onVisibleChange,
                        overlayClassName: 'fortest',
                        overlayStyle: { left: '30px', top: '60px' },
                        visible: false,
                        placement: 'bottomLeft',
                        overlay: [React.createElement(
                            Item,
                            { key: '4', value: 'scan', icon: React.createElement('img', { src: '../images/1.png' }) },
                            '\u626B\u4E00\u626B'
                        ), React.createElement(
                            Item,
                            { key: '5', value: 'special', icon: React.createElement('img', { src: '../images/1.png' }), style: { whiteSpace: 'nowrap' } },
                            '\u6211\u7684\u4E8C\u7EF4\u7801'
                        ), React.createElement(
                            Item,
                            { key: '6', value: 'button ct', icon: React.createElement('img', { src: '../images/1.png' }), disabled: true },
                            React.createElement(
                                'span',
                                { style: { marginRight: 5 } },
                                '\u5E2E\u52A9'
                            )
                        )]
                    },
                    React.createElement(
                        'div',
                        null,
                        '\u66F4\u591A\uFF08\u4E0B\u5DE6\uFF09'
                    )
                )
            ),
            React.createElement(
                'div',
                { style: { position: 'absolute', right: '30px', top: '100px' } },
                React.createElement(
                    Popover,
                    {
                        mask: false,
                        overlayClassName: 'fortest',
                        overlayStyle: { right: '30px', top: '130px' },
                        visible: false,
                        placement: 'bottomRight',
                        overlay: [React.createElement(
                            Item,
                            { key: '4', value: 'scan', icon: React.createElement('img', { src: '../images/1.png' }) },
                            '\u626B\u4E00\u626B'
                        ), React.createElement(
                            Item,
                            { key: '5', value: 'special', icon: React.createElement('img', { src: '../images/1.png' }), style: { whiteSpace: 'nowrap' } },
                            '\u6211\u7684\u4E8C\u7EF4\u7801'
                        ), React.createElement(
                            Item,
                            { key: '6', value: 'button ct', icon: React.createElement('img', { src: '../images/1.png' }) },
                            React.createElement(
                                'span',
                                { style: { marginRight: 5 } },
                                '\u5E2E\u52A9'
                            )
                        )],
                        onSelect: this.onSelect
                    },
                    React.createElement(
                        'div',
                        null,
                        '\u66F4\u591A\uFF08\u4E0B\u53F3\uFF09'
                    )
                )
            ),
            React.createElement(
                'div',
                { style: { position: 'absolute', left: '150px', top: '200px' } },
                React.createElement(
                    Popover,
                    {
                        mask: true,
                        overlayClassName: 'fortest',
                        overlayStyle: { left: '95px', top: '70px' },
                        visible: false,
                        placement: 'top',
                        overlay: [React.createElement(
                            Item,
                            { key: '4', value: 'scan', icon: React.createElement('img', { src: '../images/1.png' }) },
                            '\u626B\u4E00\u626B'
                        ), React.createElement(
                            Item,
                            { key: '5', value: 'special', icon: React.createElement('img', { src: '../images/1.png' }), style: { whiteSpace: 'nowrap' } },
                            '\u6211\u7684\u4E8C\u7EF4\u7801'
                        ), React.createElement(
                            Item,
                            { key: '6', value: 'button ct', icon: React.createElement('img', { src: '../images/1.png' }) },
                            React.createElement(
                                'span',
                                { style: { marginRight: 5 } },
                                '\u5E2E\u52A9'
                            )
                        )]
                    },
                    React.createElement(
                        'div',
                        null,
                        '\u66F4\u591A\uFF08\u4E0A\uFF09'
                    )
                )
            ),
            React.createElement(
                'div',
                { style: { position: 'absolute', left: '30px', top: '300px' } },
                React.createElement(
                    Popover,
                    {
                        mask: true,
                        overlayClassName: 'fortest',
                        overlayStyle: { left: '105px', top: '245px' },
                        visible: false,
                        placement: 'right',
                        overlay: [React.createElement(
                            Item,
                            { key: '4', value: 'scan', icon: React.createElement('img', { src: '../images/1.png' }) },
                            '\u626B\u4E00\u626B'
                        ), React.createElement(
                            Item,
                            { key: '5', value: 'special', icon: React.createElement('img', { src: '../images/1.png' }), style: { whiteSpace: 'nowrap' } },
                            '\u6211\u7684\u4E8C\u7EF4\u7801'
                        ), React.createElement(
                            Item,
                            { key: '6', value: 'button ct', icon: React.createElement('img', { src: '../images/1.png' }) },
                            React.createElement(
                                'span',
                                { style: { marginRight: 5 } },
                                '\u5E2E\u52A9'
                            )
                        )]
                    },
                    React.createElement(
                        'div',
                        null,
                        '\u66F4\u591A\uFF08\u53F3\uFF09'
                    )
                )
            ),
            React.createElement(
                'div',
                { style: { position: 'absolute', right: '30px', top: '300px' } },
                React.createElement(
                    Popover,
                    {
                        mask: true,
                        overlayClassName: 'fortest',
                        overlayStyle: { right: '110px', top: '245px' },
                        visible: false,
                        placement: 'left',
                        overlay: [React.createElement(
                            Item,
                            { key: '4', value: 'scan', icon: React.createElement('img', { src: '../images/1.png' }) },
                            '\u626B\u4E00\u626B'
                        ), React.createElement(
                            Item,
                            { key: '5', value: 'special', icon: React.createElement('img', { src: '../images/1.png' }), style: { whiteSpace: 'nowrap' } },
                            '\u6211\u7684\u4E8C\u7EF4\u7801'
                        ), React.createElement(
                            Item,
                            { key: '6', value: 'button ct', icon: React.createElement('img', { src: '../images/1.png' }) },
                            React.createElement(
                                'span',
                                { style: { marginRight: 5 } },
                                '\u5E2E\u52A9'
                            )
                        )]
                    },
                    React.createElement(
                        'div',
                        null,
                        '\u66F4\u591A\uFF08\u5DE6\uFF09'
                    )
                )
            )
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var classnames = __webpack_require__(0);
var Popover = React.createClass({
    displayName: 'Popover',

    getDefaultProps: function getDefaultProps() {
        return {
            visible: false,
            mask: true,
            onVisibleChange: null,
            overlayClassName: '',
            overlayStyle: '',
            placement: 'bottomLeft',
            overlay: [],
            onSelect: null
        };
    },
    getInitialState: function getInitialState() {
        return {
            visible: this.props.visible
        };
    },
    componentDidMount: function componentDidMount() {
        this._layer = document.createElement('div');
        document.body.appendChild(this._layer);
        this._renderLayer();
    },
    componentDidUpdate: function componentDidUpdate() {
        this._renderLayer();
    },
    _renderLayer: function _renderLayer() {
        var layerElement = this.renderLayer();

        if (layerElement === null) {
            ReactDOM.render(React.createElement('noscript', null), this._layer);
        } else {
            ReactDOM.render(layerElement, this._layer);
        }
    },
    renderLayer: function renderLayer() {
        var _classnames;

        var _this = this;

        var maskCls = classnames({
            'ucs-popover-mask': true,
            'ucs-popover-mask-hidden': !_this.props.mask || _this.props.mask && !_this.state.visible
        });
        var popoverCls = classnames((_classnames = {
            'ucs-popover': true,
            'ucs-popover-hidden': !_this.state.visible
        }, _defineProperty(_classnames, 'ucs-popover-placement-' + _this.props.placement, !!_this.props.placement), _defineProperty(_classnames, _this.props.overlayClassName, !!_this.props.overlayClassName), _classnames));

        return React.createElement(
            'div',
            null,
            React.createElement('div', { className: maskCls, onClick: _this.clickHandler }),
            React.createElement(
                'div',
                { className: popoverCls, style: _this.props.overlayStyle, onClick: _this.clickHandler },
                React.createElement(
                    'div',
                    { className: 'ucs-popover-content' },
                    React.createElement('div', { className: 'ucs-popover-arrow' }),
                    React.createElement(
                        'div',
                        { className: 'ucs-popover-inner' },
                        _this.props.overlay.map(function (item, index) {
                            return React.createElement(
                                'div',
                                { key: index, className: 'ucs-popover-item', value: item.props.value, onClick: _this.onSelect.bind(_this, item.props.value) },
                                item
                            );
                        })
                    )
                )
            )
        );
    },
    clickHandler: function clickHandler() {
        this.props.onVisibleChange && this.props.onVisibleChange();
        this.setState({
            visible: !this.state.visible
        });
    },
    onSelect: function onSelect(v) {
        this.props.onSelect && this.props.onSelect(v);
    },
    render: function render() {
        return React.createElement(
            'div',
            { ref: 'popover', onClick: this.clickHandler },
            this.props.children
        );
    }
});
module.exports = Popover;

Popover.Item = React.createClass({
    displayName: 'Item',

    getDefaultProps: function getDefaultProps() {
        return {
            disabled: false
        };
    },
    clickHandler: function clickHandler(e) {
        if (this.props.disabled) {
            e.stopPropagation();
            return;
        }
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'ucs-popover-item-container', onClick: this.clickHandler },
            React.createElement(
                'span',
                { className: 'ucs-popover-item-icon', 'aria-hidden': 'true' },
                this.props.icon
            ),
            React.createElement(
                'span',
                { className: 'ucs-popover-item-content' },
                this.props.children
            )
        );
    }
});

/***/ })

/******/ });