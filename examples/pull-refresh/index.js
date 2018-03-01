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
/******/ 	return __webpack_require__(__webpack_require__.s = 130);
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

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PullRefresh = __webpack_require__(95);
var Root = React.createClass({
    displayName: 'Root',

    getInitialState: function getInitialState() {
        return {
            data: [{
                text: '内容1'
            }, {
                text: '内容2'
            }, {
                text: '内容3'
            }, {
                text: '内容4'
            }, {
                text: '内容5'
            }, {
                text: '内容6'
            }, {
                text: '内容7'
            }, {
                text: '内容8'
            }, {
                text: '内容9'
            }, {
                text: '内容10'
            }]
        };
    },
    onRefresh: function onRefresh(callback) {
        var newData;
        var _this = this;
        // 模拟3秒后获取到新数据
        setTimeout(function () {
            newData = [{
                text: '新内容1' + Math.random()
            }, {
                text: '新内容2' + Math.random()
            }, {
                text: '新内容3' + Math.random()
            }, {
                text: '新内容4' + Math.random()
            }, {
                text: '新内容5' + Math.random()
            }];
            if (false) {
                _this.setState({
                    data: newData
                });
                callback();
            } else {
                _this.refs.pullRefresh.setTips('加载失败');
            }
        }, 2000);
    },
    render: function render() {
        var _data = this.state.data.map(function (item, index) {
            return React.createElement(
                'li',
                { key: index },
                item.text
            );
        });
        return React.createElement(
            'div',
            null,
            React.createElement(
                PullRefresh,
                { onRefresh: this.onRefresh, ref: 'pullRefresh', direction: 'down' },
                React.createElement(
                    'ul',
                    null,
                    _data
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


var classnames = __webpack_require__(0);
var PullRefresh = React.createClass({
    displayName: 'PullRefresh',

    getDefaultProps: function getDefaultProps() {
        return {
            id: null,
            className: null,
            distance: '100',
            direction: 'down',
            onRefresh: null
        };
    },
    getInitialState: function getInitialState() {
        return {
            translateY: 0,
            pointStart: 0,
            pointEnd: 0,
            pullTopState: 'pull',
            pullBottomState: 'pull',
            loadText: '加载中...'
        };
    },
    componentDidMount: function componentDidMount() {
        var _topHeight = this.refs.pullrefreshTop && this.refs.pullrefreshTop.getBoundingClientRect().height;
        this._top = Math.ceil(_topHeight);
        var _bottomHeight = this.refs.pullrefreshBottom && this.refs.pullrefreshBottom.getBoundingClientRect().height;
        this._bottom = Math.ceil(_bottomHeight);
    },
    _getPoint: function _getPoint(event) {
        var touch = event.touches[0];
        return {
            y: touch.clientY
        };
    },
    _doTransition: function _doTransition(offset, duration) {
        var style = this.pullRefreshSrcollerRef.style;
        style.webkitTransitionDuration = duration + 'ms';
        style.mozTransitionDuration = duration + 'ms';
        style.oTransitionDuration = duration + 'ms';
        style.transitionDuration = duration + 'ms';
        style.webkitTransform = 'translate3d(0, ' + offset + 'px, 0)';
        style.mozTransform = 'translate3d(0, ' + offset + 'px, 0)';
        style.oTransform = 'translate3d(0, ' + offset + 'px, 0)';
        style.transform = 'translate3d(0, ' + offset + 'px, 0)';
    },
    _onTouchStart: function _onTouchStart(event) {
        var pointY = this._getPoint(event).y;
        this.setState({
            pointStart: pointY
        });
    },
    _onTouchMove: function _onTouchMove(event) {
        event.preventDefault();
        var pointY = this._getPoint(event).y;
        var offset = this.state.translateY + (pointY - this.state.pointStart);
        this._doTransition(offset, 0);
        this.setState({
            pointEnd: pointY
        });
        if (this.props.direction === 'down' || this.props.direction === 'both') {
            if (offset >= Number(this.props.distance)) {
                this.setState({
                    pullTopState: 'release'
                });
            } else {
                this.setState({
                    pullTopState: 'pull'
                });
            }
        }
        if (this.props.direction === 'up' || this.props.direction === 'both') {
            if (-offset >= Number(this.props.distance)) {
                this.setState({
                    pullBottomState: 'release'
                });
            } else {
                this.setState({
                    pullBottomState: 'pull'
                });
            }
        }
    },
    _onTouchEnd: function _onTouchEnd(event) {
        var offset = this.state.translateY + (this.state.pointEnd - this.state.pointStart);
        if (this.props.direction === 'down') {
            if (offset >= Number(this.props.distance)) {
                this._doTransition(this._top, 300);
                this.setState({
                    pullTopState: 'loading',
                    loadText: '加载中...'
                });
                this.onRefresh();
            } else {
                this._doTransition(0, 300);
            }
        }
        if (this.props.direction === 'up') {
            if (-offset >= Number(this.props.distance)) {
                this._doTransition(-this._bottom, 300);
                this.setState({
                    pullBottomState: 'loading',
                    loadText: '加载中...'
                });
                this.onRefresh();
            } else {
                this._doTransition(0, 300);
            }
        }
    },
    onRefresh: function onRefresh() {
        this.props.onRefresh && this.props.onRefresh(this._onRefreshCallback);
    },
    _onRefreshCallback: function _onRefreshCallback() {
        this._doTransition(0, 300);
    },
    setTips: function setTips(v) {
        this.setState({
            loadText: v
        });
    },
    render: function render() {
        var _this = this;
        var pullrefreshPullTopStyle, pullrefreshReleaseTopStyle, pullrefreshLoadingTopStyle, pullrefreshPullBottomStyle, pullrefreshReleaseBottomStyle, pullrefreshLoadingBottomStyle;
        if (this.state.pullTopState === 'pull') {
            pullrefreshPullTopStyle = {
                display: 'block'
            };
            pullrefreshReleaseTopStyle = pullrefreshLoadingTopStyle = {
                display: 'none'
            };
        } else if (this.state.pullTopState === 'loading') {
            pullrefreshPullTopStyle = pullrefreshReleaseTopStyle = {
                display: 'none'
            };
            pullrefreshLoadingTopStyle = {
                display: 'block'
            };
        } else if (this.state.pullTopState === 'release') {
            pullrefreshPullTopStyle = pullrefreshLoadingTopStyle = {
                display: 'none'
            };
            pullrefreshReleaseTopStyle = {
                display: 'block'
            };
        }
        if (this.state.pullBottomState === 'pull') {
            pullrefreshPullBottomStyle = {
                display: 'block'
            };
            pullrefreshReleaseBottomStyle = pullrefreshLoadingBottomStyle = {
                display: 'none'
            };
        } else if (this.state.pullBottomState === 'loading') {
            pullrefreshPullBottomStyle = pullrefreshReleaseBottomStyle = {
                display: 'none'
            };
            pullrefreshLoadingBottomStyle = {
                display: 'block'
            };
        } else if (this.state.pullBottomState === 'release') {
            pullrefreshPullBottomStyle = pullrefreshLoadingBottomStyle = {
                display: 'none'
            };
            pullrefreshReleaseBottomStyle = {
                display: 'block'
            };
        }
        return React.createElement(
            'div',
            { ref: 'pullRefreshRef', id: this.props.id, className: classnames('ucs-pullrefresh', this.props.className) },
            React.createElement(
                'div',
                { className: 'ucs-pullrefresh-scroller',
                    ref: function ref(pullRefreshSrcollerRef) {
                        _this.pullRefreshSrcollerRef = pullRefreshSrcollerRef;
                    },
                    onTouchStart: this._onTouchStart,
                    onTouchMove: this._onTouchMove,
                    onTouchEnd: this._onTouchEnd },
                this.props.direction === 'down' && React.createElement(
                    'div',
                    { className: 'ucs-pullrefresh-control-top', ref: 'pullrefreshTop' },
                    React.createElement(
                        'div',
                        { className: 'ucs-pullrefresh-control-top-icon' },
                        React.createElement(
                            'div',
                            { className: 'ucs-pullrefresh-control-pull', style: pullrefreshPullTopStyle },
                            React.createElement(
                                'span',
                                null,
                                '\u4E0B\u62C9\u53EF\u4EE5\u5237\u65B0'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'ucs-pullrefresh-control-release', style: pullrefreshReleaseTopStyle },
                            React.createElement(
                                'span',
                                null,
                                '\u677E\u5F00\u7ACB\u5373\u5237\u65B0'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'ucs-pullrefresh-control-top-loading', style: pullrefreshLoadingTopStyle },
                        React.createElement(
                            'span',
                            null,
                            this.state.loadText
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'ucs-pullrefresh-list' },
                    this.props.children
                ),
                this.props.direction === 'up' && React.createElement(
                    'div',
                    { className: 'ucs-pullrefresh-control-bottom', ref: 'pullrefreshBottom' },
                    React.createElement(
                        'div',
                        { className: 'ucs-pullrefresh-control-bottom-icon' },
                        React.createElement(
                            'div',
                            { className: 'ucs-pullrefresh-control-pull', style: pullrefreshPullBottomStyle },
                            React.createElement(
                                'span',
                                null,
                                '\u4E0A\u62C9\u53EF\u4EE5\u5237\u65B0'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'ucs-pullrefresh-control-release', style: pullrefreshReleaseBottomStyle },
                            React.createElement(
                                'span',
                                null,
                                '\u677E\u5F00\u7ACB\u5373\u5237\u65B0'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'ucs-pullrefresh-control-bottom-loading', style: pullrefreshLoadingBottomStyle },
                        React.createElement(
                            'span',
                            null,
                            this.state.loadText
                        )
                    )
                )
            )
        );
    }
});
module.exports = PullRefresh;

/***/ })

/******/ });