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
/******/ 	return __webpack_require__(__webpack_require__.s = 122);
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

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by chenzefang on 2017/7/24.
 */

var Grid = __webpack_require__(95);
var datasource = [{
    icon: 'http://cdn.youxiputao.com/attach/news/2014/03/25/cee281e371788349.jpg',
    text: '标题一'
}, {
    icon: 'http://img.zcool.cn/community/0122e655f8f3e06ac7251df8686c5f.png',
    text: '标题二'
}, {
    icon: 'http://img.zcool.cn/community/010831568f787532f87574be2da5e1.jpg@900w_1l_2o_100sh.jpg',
    text: '标题三'
}, {
    icon: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=f4bf47b3c1ef7609280691dc46b4c9b9/4a36acaf2edda3cc8492fb0e0be93901213f92ae.jpg',
    text: '标题四'
}, {
    icon: 'http://img.zcool.cn/community/0122e655f8f3e06ac7251df8686c5f.png',
    text: '标题五'
}, {
    icon: 'http://img.zcool.cn/community/01b97f5684bf1232f8759f043eb2cd.gif',
    text: '标题六'
}];
var Root = React.createClass({
    displayName: 'Root',

    onClick: function onClick(index) {
        console.log(index);
    },
    _renderItem: function _renderItem(item) {
        return React.createElement(
            'div',
            null,
            item.text
        );
    },
    render: function render() {
        return React.createElement(Grid, { data: datasource, onClick: this.onClick, hasLine: true });
    }
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by chenzefang on 2017/7/24.
 */
var classnames = __webpack_require__(0);
var Grid = React.createClass({
    displayName: 'Grid',

    getDefaultProps: function getDefaultProps() {
        return {
            className: null,
            id: null,
            hasLine: true,
            data: null,
            onClick: null
        };
    },
    getInitialState: function getInitialState() {
        return {
            className: classnames('ucs-grid', this.props.className, this.props.hasLine ? 'ucs-grid-line' : null)
        };
    },
    _onClick: function _onClick(index) {
        this.props.onClick && this.props.onClick(index);
    },
    render: function render() {
        var _self = this;
        var len = _self.props.data.length;
        var curIndex = 1;
        var liDom = [];
        var realDom = [];
        var columnNum = 3;
        var width = 100 / columnNum;
        this.props.data.map(function (item, index) {
            var content = [];
            if (_self.props.renderItem) {
                content.push(_self.props.renderItem(item));
            } else {
                content.push(React.createElement(
                    'div',
                    null,
                    React.createElement('img', { className: 'grid-icon', src: item.icon }),
                    React.createElement(
                        'div',
                        { className: 'grid-title' },
                        item.text
                    )
                ));
            }
            liDom.push(React.createElement(
                'li',
                { className: '', key: index, style: { width: width + '%' }, onClick: _self._onClick.bind(_self, index) },
                React.createElement(
                    'div',
                    { className: 'ucs-grid-content' },
                    content
                )
            ));
            if (columnNum * curIndex - 1 === index && len >= index) {
                realDom.push(React.createElement(
                    'ul',
                    { className: 'ucs-grid-nav' },
                    liDom
                ));
                liDom = [];
                curIndex++;
            } else if (index === len - 1) {
                realDom.push(React.createElement(
                    'ul',
                    { className: 'ucs-grid-nav' },
                    liDom
                ));
            }
        });
        return React.createElement(
            'div',
            { className: _self.state.className, id: this.props.id },
            realDom
        );
    }
});

module.exports = Grid;

/***/ })

/******/ });