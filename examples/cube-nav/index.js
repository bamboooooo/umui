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
/******/ 	return __webpack_require__(__webpack_require__.s = 119);
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

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CubeNav = __webpack_require__(94);
var datasource = [{
    icon: 'http://cdn.youxiputao.com/attach/news/2014/03/25/cee281e371788349.jpg',
    title: '标题一很长很长很长很长很长很长很长很长很长很长很长很长',
    href: 'http://www.baidu.com'
}, {
    icon: 'http://img.zcool.cn/community/0122e655f8f3e06ac7251df8686c5f.png',
    title: '标题二',
    href: 'http://www.baidu.com'
}, {
    icon: 'http://img.zcool.cn/community/010831568f787532f87574be2da5e1.jpg@900w_1l_2o_100sh.jpg',
    title: '标题三',
    href: 'http://www.baidu.com'
}, {
    icon: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=f4bf47b3c1ef7609280691dc46b4c9b9/4a36acaf2edda3cc8492fb0e0be93901213f92ae.jpg',
    title: '标题四',
    href: 'http://www.baidu.com'
}, {
    icon: 'http://img.zcool.cn/community/0122e655f8f3e06ac7251df8686c5f.png',
    title: '标题五',
    href: 'http://www.baidu.com'
}, {
    icon: 'http://img.zcool.cn/community/01b97f5684bf1232f8759f043eb2cd.gif',
    title: '标题六',
    href: 'http://www.baidu.com'
}, {
    icon: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=f4bf47b3c1ef7609280691dc46b4c9b9/4a36acaf2edda3cc8492fb0e0be93901213f92ae.jpg',
    title: '标题七',
    href: 'http://www.baidu.com'
}, {
    icon: 'http://img.zcool.cn/community/0122e655f8f3e06ac7251df8686c5f.png',
    title: '标题八',
    href: 'http://www.baidu.com'
}];
var Root = React.createClass({
    displayName: 'Root',

    onClick: function onClick(index) {
        console.log(index);
    },
    render: function render() {
        return React.createElement(CubeNav, { id: 'cubenav-id', className: 'custom-cubenav', data: datasource, num: '4' });
    }
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classnames = __webpack_require__(0);
var CubeNav = React.createClass({
    displayName: 'CubeNav',

    getDefaultProps: function getDefaultProps() {
        return {
            className: null,
            id: null,
            data: [],
            num: 4
        };
    },
    render: function render() {
        var _self = this;
        var len = _self.props.data.length;
        var num = _self.props.num;
        var errorMsg = '';
        var list = '';
        if (Number(num) === 4 || Number(num) === 5) {
            if (Number(num) === 4 && Number(len) > 8) {
                errorMsg = 'cube-nav:当前配置一行显示' + num + '个，展示数据不能超过8个';
                console.error(errorMsg);
            } else if (Number(num) === 5 && Number(len) > 10) {
                errorMsg = 'cube-nav:当前配置一行显示' + num + '个，展示数据不能超过10个';
                console.error(errorMsg);
            } else {
                list = this.props.data.map(function (item, index) {
                    return React.createElement(
                        'li',
                        { className: classnames({ 'cubenav-num4': Number(num) === 4 }, { 'cubenav-num5': Number(num) === 5 }), key: index },
                        React.createElement(
                            'div',
                            { className: 'ucs-cubenav-content' },
                            React.createElement(
                                'a',
                                { href: item.href },
                                React.createElement('img', { className: 'cubenav-icon', src: item.icon }),
                                React.createElement(
                                    'div',
                                    { className: 'cubenav-title' },
                                    item.title
                                )
                            )
                        )
                    );
                });
            }
        } else {
            errorMsg = 'cube-nav:请设置一行显示4个或5个';
            console.error(errorMsg);
        }
        return React.createElement(
            'div',
            { className: classnames('ucs-cubenav', this.props.className), id: this.props.id },
            React.createElement(
                'ul',
                { className: 'ucs-cubenav-nav' },
                list
            )
        );
    }
});

module.exports = CubeNav;

/***/ })

/******/ });