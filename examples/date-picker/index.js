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


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DatePicker = __webpack_require__(72);
var Root = React.createClass({
    displayName: 'Root',

    getInitialState: function getInitialState() {
        return {
            date: '2008-08-08',
            defaultDate: '',
            disabled: false,
            minDate: '2000',
            maxDate: '2020'
        };
    },
    componentDidMount: function componentDidMount() {
        this.isDisabled = false;
    },
    setToday: function setToday() {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        this.refs.datePicker1.setValue(year + '-' + month + '-' + day);
    },
    getTime: function getTime() {
        var result = this.refs.datePicker2.getValue();
        console.log('获取值' + result);
    },
    setDisabled: function setDisabled() {
        if (!this.isDisabled) {
            this.refs.datePicker2.setDisabled(true);
            this.isDisabled = true;
        } else {
            this.refs.datePicker2.setDisabled(false);
            this.isDisabled = false;
        }
    },
    clear: function clear() {
        this.refs.datePicker3.clear();
    },
    reset: function reset() {
        this.refs.datePicker3.reset();
    },
    render: function render() {
        var config1 = {
            className: 'customClassName',
            id: 'customId',
            disabled: false,
            placeholder: '请选择日期',
            title: '选择日期',
            mode: 'date',
            value: '2008-08-08',
            defaultValue: '2009-09-09',
            format: 'YYYY年MM月DD日',
            okText: '点我确定',
            cancelText: '点我取消',
            onOk: function onOk(value) {
                console.log('外部ok value ->', value);
            },
            onCancel: function onCancel() {
                return null;
            },
            onMaskClick: function onMaskClick() {
                console.log('点击了蒙层');
            },
            onChange: function onChange(value) {
                console.log('外部change value ->', value);
            }
        };
        var config2 = {
            className: 'customClassName2',
            id: 'customId2',
            disabled: false,
            placeholder: '请选择时间',
            title: '选择时间',
            mode: 'time',
            value: '14:29',
            defaultValue: '00:00',
            minDate: '05:10',
            maxDate: '19:50',
            format: 'hh时mm分',
            okText: '确定',
            cancelText: '取消',
            onOk: function onOk(value) {
                console.log('外部ok value ->', value);
            },
            onCancel: function onCancel() {
                return null;
            },
            onMaskClick: function onMaskClick() {
                console.log('点击了蒙层');
            },
            onChange: function onChange(value) {
                console.log('外部change value ->', value);
            }
        };
        var config3 = {
            className: 'customClassName3',
            id: 'customId3',
            disabled: false,
            placeholder: '请选择时间',
            title: '选择时间',
            mode: 'datetime',
            value: '2017-07-24 14:33',
            defaultValue: '2017-01-01 01:01',
            minDate: '2010-01-01 09:00',
            maxDate: '2020-12-31 18:00',
            okText: '确定',
            cancelText: '取消',
            onOk: function onOk(value) {
                console.log('外部ok value ->', value);
            },
            onCancel: function onCancel() {
                return null;
            },
            onMaskClick: function onMaskClick() {
                console.log('点击了蒙层');
            },
            onChange: function onChange(value) {
                console.log('外部change value ->', value);
            }
        };
        var config4 = {
            className: 'customClassName4',
            id: 'customId4',
            disabled: false,
            placeholder: '请选择年份',
            title: '选择年份',
            mode: 'year',
            value: '1997',
            defaultValue: '2017',
            minDate: '1990',
            maxDate: '2020',
            okText: '确定',
            cancelText: '取消',
            onOk: function onOk(value) {
                console.log('外部ok value ->', value);
            },
            onCancel: function onCancel() {
                return null;
            },
            onMaskClick: function onMaskClick() {
                console.log('点击了蒙层');
            },
            onChange: function onChange(value) {
                console.log('外部change value ->', value);
            }
        };
        var config5 = {
            className: 'customClassName4',
            id: 'customId4',
            disabled: false,
            placeholder: '请选择月份',
            title: '选择月份',
            mode: 'month',
            value: '5',
            defaultValue: '4',
            minDate: '3',
            maxDate: '9',
            okText: '确定',
            cancelText: '取消',
            onOk: function onOk(value) {
                console.log('外部ok value ->', value);
            },
            onCancel: function onCancel() {
                return null;
            },
            onMaskClick: function onMaskClick() {
                console.log('点击了蒙层');
            },
            onChange: function onChange(value) {
                console.log('外部change value ->', value);
            }
        };
        return React.createElement(
            'div',
            null,
            React.createElement(
                'ul',
                { className: 'list' },
                React.createElement(
                    'li',
                    { className: 'list-item' },
                    React.createElement(
                        'label',
                        { className: 'label' },
                        '\u9009\u62E9\u65E5\u671F\uFF1A'
                    ),
                    React.createElement(DatePicker, _extends({ ref: 'datePicker1' }, config1))
                ),
                React.createElement(
                    'li',
                    { className: 'list-item' },
                    React.createElement(
                        'label',
                        { className: 'label' },
                        '\u9009\u62E9\u65F6\u95F4\uFF1A'
                    ),
                    React.createElement(DatePicker, _extends({ ref: 'datePicker2' }, config2))
                ),
                React.createElement(
                    'li',
                    { className: 'list-item' },
                    React.createElement(
                        'label',
                        { className: 'label' },
                        '\u9009\u62E9\u5177\u4F53\u65F6\u95F4\uFF1A'
                    ),
                    React.createElement(DatePicker, _extends({ ref: 'datePicker3' }, config3))
                ),
                React.createElement(
                    'li',
                    { className: 'list-item' },
                    React.createElement(
                        'label',
                        { className: 'label' },
                        '\u9009\u62E9\u5E74\u4EFD\uFF1A'
                    ),
                    React.createElement(DatePicker, _extends({ ref: 'datePicker4' }, config4))
                ),
                React.createElement(
                    'li',
                    { className: 'list-item' },
                    React.createElement(
                        'label',
                        { className: 'label' },
                        '\u9009\u62E9\u6708\u4EFD\uFF1A'
                    ),
                    React.createElement(DatePicker, _extends({ ref: 'datePicker5' }, config5))
                ),
                React.createElement(
                    'li',
                    { className: 'list-item' },
                    React.createElement(
                        'label',
                        { className: 'label' },
                        '\u9009\u62E9\u65E5\u671Fbase\uFF1A'
                    ),
                    React.createElement(DatePicker, { ref: 'datePicker' })
                )
            ),
            React.createElement(
                'button',
                { onClick: this.setToday },
                '\u8BBE\u7B2C\u4E00\u4E2A\u4E3A\u4ECA\u5929'
            ),
            '\uFF1A',
            React.createElement(
                'button',
                { onClick: this.getTime },
                '\u83B7\u53D6\u7B2C\u4E8C\u4E2A\u503C'
            ),
            '\uFF1A',
            React.createElement(
                'button',
                { onClick: this.setDisabled },
                '\u7981\u7528/\u542F\u7528\u7B2C\u4E8C\u4E2A'
            ),
            '\uFF1A',
            React.createElement(
                'button',
                { onClick: this.clear },
                '\u6E05\u7A7A\u7B2C\u4E09\u4E2A'
            ),
            '\uFF1A',
            React.createElement(
                'button',
                { onClick: this.reset },
                '\u91CD\u7F6E\u7B2C\u4E09\u4E2A'
            ),
            '\uFF1A'
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isEmptyArray(a) {
    return !a || !a.length;
}

function isChildrenEqual(c1, c2, pure) {
    if (isEmptyArray(c1) && isEmptyArray(c2)) {
        return true;
    }
    if (pure) {
        return c1 === c2;
    }
    if (c1.length !== c2.length) {
        return false;
    }
    var len = c1.length;
    for (var i = 0; i < len; i += 1) {
        if (c1[i].value !== c2[i].value || c1[i].label !== c2[i].label) {
            return false;
        }
    }
    return true;
}

var Column = React.createClass({
    displayName: 'Column',


    getDefaultProps: function getDefaultProps() {
        return {
            pure: true,
            onValueChange: function onValueChange() {
                return null;
            }
        };
    },

    getInitialState: function getInitialState() {
        var selectedValueState;
        var selectedValue = this.props.selectedValue;
        var defaultSelectedValue = this.props.defaultSelectedValue;
        var children = this.props.children;

        if (selectedValue !== undefined) {
            selectedValueState = selectedValue;
        } else if (defaultSelectedValue !== undefined) {
            selectedValueState = defaultSelectedValue;
        } else if (children && children.length) {
            selectedValueState = children[0].value;
        }
        return {
            selectedValue: selectedValueState,
            translateY: 0,
            pointStart: 0,
            pointEnd: 0
        };
    },

    componentDidMount: function componentDidMount() {
        this.itemHeight = this.indicator.offsetHeight;
        this.content.style.padding = this.itemHeight * 3 + 'px 0';
        this._select(this.state.selectedValue);
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if ('selectedValue' in nextProps) {
            this.setState({
                selectedValue: nextProps.selectedValue
            });
        }
    },

    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
        return this.state.selectedValue !== nextState.selectedValue || !isChildrenEqual(this.props.children, nextProps.children, this.props.pure);
    },

    componentDidUpdate: function componentDidUpdate(next1) {
        this._select(this.state.selectedValue);
    },

    _select: function _select(value) {
        var children = this.props.children;
        for (var i = 0, len = children.length; i < len; i += 1) {
            if (children[i].value === value) {
                this._selectByIndex(i);
                return;
            }
        }
        this._selectByIndex(0);
    },

    _selectByIndex: function _selectByIndex(index) {
        if (index < 0 || index >= this.props.children.length || !this.itemHeight) {
            return;
        }
        this._onMoveTo(index, 300);
    },

    _doScrollingComplete: function _doScrollingComplete(top) {
        var index = top / this.itemHeight;
        var floor = Math.floor(index);
        if (index - floor > 0.5) {
            index = floor + 1;
        } else {
            index = floor;
        }

        var children = this.props.children;

        index = Math.min(index, children.length - 1);
        var child = children[index];
        if (child) {
            if (child.value !== this.state.selectedValue) {
                this.props.onValueChange(child.value);
            }
        } else if (console.warn) {
            console.warn('child not found', children, index);
        }
    },

    // 获取触摸点的当前坐标
    _getPoint: function _getPoint(event) {
        var touch = event.touches[0];
        return {
            x: touch.pageX,
            y: touch.pageY
        };
    },

    // 执行过渡动画
    _doTransition: function _doTransition(offset, duration) {
        var style = this.content.style;
        style.webkitTransitionDuration = duration + 'ms';
        style.mozTransitionDuration = duration + 'ms';
        style.oTransitionDuration = duration + 'ms';
        style.transitionDuration = duration + 'ms';
        style.webkitTransform = 'translate3d(0, ' + offset + 'px, 0)';
        style.mozTransform = 'translate3d(0, ' + offset + 'px, 0)';
        style.oTransform = 'translate3d(0, ' + offset + 'px, 0)';
        style.transform = 'translate3d(0, ' + offset + 'px, 0)';
    },

    // 移动到指定编号
    _onMoveTo: function _onMoveTo(index, speed) {
        var itemHeight = this._getItemHeight();
        if (itemHeight === 0) {
            return;
        }

        var offset = -index * itemHeight;

        this._doTransition(offset, speed);
        this.setState({
            translateY: offset
        });
    },

    _getItemHeight: function _getItemHeight() {
        var items = this.content.children;

        if (!items || items.length === 0) {
            return 0;
        }
        return items[0].offsetHeight;
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
    },

    _onTouchEnd: function _onTouchEnd(event) {
        var offset = this.state.pointEnd !== 0 ? this.state.translateY + (this.state.pointEnd - this.state.pointStart) : 0;
        var items = this.content.children;
        var itemHeight = items[0] && items[0].offsetHeight;
        var maxIndex = Math.abs(items.length - 1);
        var index = Math.round(offset / itemHeight);

        if (index > 0) {
            index = 0;
        } else {
            index = Math.abs(offset) >= maxIndex * itemHeight ? maxIndex : Math.abs(index);
        }

        this._onMoveTo(index, 300);
        this._doScrollingComplete(index * itemHeight);
    },

    render: function render() {
        var _this = this;
        var children = this.props.children;
        var selectedValue = this.state.selectedValue;
        var items = children.map(function (item) {
            return React.createElement(
                'div',
                {
                    className: selectedValue === item.value ? 'ucs-datepicker-cascaderpicker-item ucs-datepicker-cascaderpicker-item-selected' : 'ucs-datepicker-cascaderpicker-item',
                    key: item.value },
                item.label
            );
        });
        return React.createElement(
            'div',
            {
                className: 'ucs-datepicker-cascaderpicker',
                onTouchStart: this._onTouchStart,
                onTouchMove: this._onTouchMove,
                onTouchEnd: this._onTouchEnd },
            React.createElement('div', { className: 'ucs-datepicker-cascaderpicker-indicator', ref: function ref(indicator) {
                    _this.indicator = indicator;
                } }),
            React.createElement(
                'div',
                { className: 'ucs-datepicker-cascaderpicker-content', ref: function ref(content) {
                        _this.content = content;
                    } },
                items
            )
        );
    }

});

module.exports = Column;

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Column = __webpack_require__(138);

var ColumnGroup = React.createClass({
    displayName: "ColumnGroup",


    getDefaultProps: function getDefaultProps() {
        return {
            onValueChange: function onValueChange() {
                return null;
            },
            disabled: true
        };
    },

    _onValueChange: function _onValueChange(v, i) {
        var value = this._getValue().concat();
        value[i] = v;
        this.props.onValueChange(value, i);
    },

    _getValue: function _getValue() {
        var children = this.props.children;
        var selectedValue = this.props.selectedValue;

        if (selectedValue && selectedValue.length) {
            return selectedValue;
        }
        if (!children) {
            return [];
        }
        return children.map(function (c) {
            var cc = c.props.children;
            return cc && cc[0] && cc[0].value;
        });
    },
    render: function render() {
        var _this = this;
        var children = this.props.children;
        var selectedValue = this._getValue();
        var colElements = children.map(function (col, i) {
            return React.createElement(
                "div",
                { key: col.key || i, className: "ucs-datepicker-column-group-item" },
                React.createElement(
                    Column,
                    {
                        selectedValue: selectedValue[i],
                        onValueChange: function onValueChange(value) {
                            _this._onValueChange(value, i);
                        } },
                    col.props.children
                )
            );
        });
        return React.createElement(
            "div",
            { className: "ucs-datepicker-column-group" },
            colElements
        );
    }
});

module.exports = ColumnGroup;

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var classnames = __webpack_require__(0);
var ColumnGroup = __webpack_require__(139);

var DATETIME = 'datetime';
var DATE = 'date';
var TIME = 'time';
var MONTH = 'month';
var YEAR = 'year';

// 格式化
function formatDate(fmt, date) {
    var o = {
        'M+': date.getMonth() + 1,
        'D+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    if (/(y+)/i.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
    }
    return fmt;
}

// 获取使用哪个格式化
function getFormatter(type) {
    var formatter;
    if (type === YEAR) {
        formatter = 'YYYY';
    } else if (type === MONTH) {
        formatter = 'MM';
    } else if (type === TIME) {
        formatter = 'hh:mm';
    } else if (type === DATETIME) {
        formatter = 'YYYY-MM-DD hh:mm';
    } else {
        formatter = 'YYYY-MM-DD';
    }
    return formatter;
}

// 格式化入口函数
function formatFn(instance, value) {
    var format = instance.props.format;
    var mode = instance.props.mode;
    var date = new Date(value);
    if (format === null) {
        return formatDate(getFormatter(mode), date);
    } else {
        return formatDate(format, date);
    }
}

// 获取月份的天数
function getDaysInMonth(now) {
    var month = new Date(now).getMonth() + 1;
    var newYear = new Date(now).getFullYear();
    var newMonth = month++;
    if (month > 12) {
        newMonth -= 12;
        newYear++;
    }
    var newDate = new Date(newYear, newMonth, 1);
    return new Date(newDate.getTime() - 1000 * 60 * 60 * 24).getDate();
}

// 补齐格式
function pad(n) {
    return n < 10 ? '0' + n : n;
}

// 阻止选择器区域的默认事件
function stopClick(e) {
    e.stopPropagation();
}

var DatePicker = React.createClass({
    displayName: 'DatePicker',

    getDefaultProps: function getDefaultProps() {
        return {
            id: null,
            className: null,
            visible: false,
            placeholder: '请选择日期',
            title: '请选择日期',
            cancelText: '取消',
            okText: '确定',
            mode: DATE,
            format: null,
            disabled: false,
            value: '',
            defaultValue: '',
            onChange: function onChange() {
                return null;
            },
            onOk: function onOk() {
                return null;
            },
            onCancel: function onCancel() {
                return null;
            },
            onMaskClick: function onMaskClick() {
                return null;
            },
            minuteStep: 1
        };
    },

    getInitialState: function getInitialState() {
        var date = this.props.value && this._isExtendMoment(this.props.value);
        var defaultDate = this.props.defaultValue && this._isExtendMoment(this.props.defaultValue);
        return {
            visible: this.props.visible || false,
            date: date || defaultDate,
            disabled: this.props.disabled
        };
    },

    componentDidMount: function componentDidMount() {
        if (this.props.value) {
            this.initDate = this._isExtendMoment(this.props.value);
        } else if (this.props.defaultValue) {
            this.initDate = this._isExtendMoment(this.props.defaultValue);
        } else {
            this.initDate = '';
        }
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var date = nextProps.value && this._isExtendMoment(nextProps.value);
        var defaultDate = nextProps.defaultValue && this._isExtendMoment(nextProps.defaultValue);
        this.setState({
            date: date || defaultDate
        });
    },

    // 点击遮罩层
    _onMaskClick: function _onMaskClick() {
        var onMaskClick = this.props.onMaskClick;
        this._onCancel();
        onMaskClick && onMaskClick();
    },

    // 点击取消
    _onCancel: function _onCancel() {
        var onCancel = this.props.onCancel;
        this._toggle();
        this.setState({
            date: this.initDate
        });
        onCancel && onCancel();
    },

    // 点击确定
    _onOk: function _onOk() {
        var onOk = this.props.onOk;
        var value = this._getDate();
        this.initDate = value;
        this._toggle();
        if (this.state.date === '') {
            this.setState({
                date: value
            });
        }
        onOk && onOk(formatFn(this, value));
    },

    _onValueChange: function _onValueChange(values, index) {
        var value = parseInt(values[index], 10);
        var props = this.props;
        var mode = props.mode;
        var newValue = this._getDate();
        var _year = newValue.getFullYear();
        var _month = newValue.getMonth();
        var _date = newValue.getDate();
        var _minute = newValue.getMinutes();
        var _hour = newValue.getHours();
        if (mode === DATETIME || mode === DATE || mode === YEAR) {
            switch (index) {
                case 0:
                    _year = value;
                    break;
                case 1:
                    _month = value;
                    break;
                case 2:
                    _date = value;
                    break;
                case 3:
                    _hour = value;
                    break;
                case 4:
                    _minute = value;
                    break;
                default:
                    break;
            }
        } else if (mode === MONTH) {
            _month = value;
        } else {
            switch (index) {
                case 0:
                    _hour = value;
                    break;
                case 1:
                    _minute = value;
                    break;
                default:
                    break;
            }
        }
        newValue = new Date(_year, _month, _date, _hour, _minute);
        newValue = this._clipDate(newValue);
        this.setState({
            date: newValue
        });
        props.onChange(formatFn(this, newValue));
    },

    _getDefaultMinDate: function _getDefaultMinDate() {
        if (!this.defaultMinDate) {
            this.defaultMinDate = new Date(1990, 0, 1, 0, 0, 0);
        }
        return this.defaultMinDate;
    },

    _getDefaultMaxDate: function _getDefaultMaxDate() {
        if (!this.defaultMaxDate) {
            this.defaultMaxDate = new Date(2020, 11, 31, 23, 59, 0);
        }
        return this.defaultMaxDate;
    },

    _getDate: function _getDate() {
        return this.state.date || this._getMinDate() || new Date();
    },

    _getMinYear: function _getMinYear() {
        return this._getMinDate().getFullYear();
    },

    _getMaxYear: function _getMaxYear() {
        return this._getMaxDate().getFullYear();
    },

    _getMinMonth: function _getMinMonth() {
        return this._getMinDate().getMonth();
    },

    _getMaxMonth: function _getMaxMonth() {
        return this._getMaxDate().getMonth();
    },

    _getMinDay: function _getMinDay() {
        return this._getMinDate().getDate();
    },

    _getMaxDay: function _getMaxDay() {
        return this._getMaxDate().getDate();
    },

    _getMinHour: function _getMinHour() {
        return this._getMinDate().getHours();
    },

    _getMaxHour: function _getMaxHour() {
        return this._getMaxDate().getHours();
    },

    _getMinMinute: function _getMinMinute() {
        return this._getMinDate().getMinutes();
    },

    _getMaxMinute: function _getMaxMinute() {
        return this._getMaxDate().getMinutes();
    },

    _getMinDate: function _getMinDate() {
        var minDate = this._isExtendMoment(this.props.minDate);
        return minDate || this._getDefaultMinDate();
    },

    _getMaxDate: function _getMaxDate() {
        var maxDate = this._isExtendMoment(this.props.maxDate);
        return maxDate || this._getDefaultMaxDate();
    },

    _getDateData: function _getDateData() {
        var mode = this.props.mode;
        var date = this._getDate();
        var selYear = date.getFullYear();
        var selMonth = date.getMonth();
        var minDateYear = this._getMinYear();
        var maxDateYear = this._getMaxYear();
        var minDateMonth = this._getMinMonth();
        var maxDateMonth = this._getMaxMonth();
        var minDateDay = this._getMinDay();
        var maxDateDay = this._getMaxDay();
        var years = [];

        for (var i = minDateYear; i <= maxDateYear; i += 1) {
            years.push({
                value: '' + i,
                label: i + '年'
            });
        }

        var yearCol = { key: 'year', props: { children: years } };
        if (mode === YEAR) {
            return [yearCol];
        }

        var months = [];
        var minMonth = 0;
        var maxMonth = 11;

        if (minDateYear === selYear) {
            minMonth = minDateMonth;
        }
        if (maxDateYear === selYear) {
            maxMonth = maxDateMonth;
        }
        for (var i = minMonth; i <= maxMonth; i += 1) {
            months.push({
                value: '' + i,
                label: pad(i + 1) + '月'
            });
        }

        var monthCol = { key: 'month', props: { children: months } };
        if (mode === MONTH) {
            return [monthCol];
        }

        var days = [];
        var minDay = 1;
        var maxDay = getDaysInMonth(date);

        if (minDateYear === selYear && minDateMonth === selMonth) {
            minDay = minDateDay;
        }
        if (maxDateYear === selYear && maxDateMonth === selMonth) {
            maxDay = maxDateDay;
        }

        for (var i = minDay; i <= maxDay; i += 1) {
            days.push({
                value: '' + i,
                label: pad(i) + '日'
            });
        }
        return [yearCol, monthCol, { key: 'day', props: { children: days } }];
    },

    _getTimeData: function _getTimeData() {
        var minHour = 0;
        var maxHour = 23;
        var minMinute = 0;
        var maxMinute = 59;
        var mode = this.props.mode;
        var minuteStep = this.props.minuteStep;
        var date = this._getDate();

        var minDateMinute = this._getMinMinute();
        var maxDateMinute = this._getMaxMinute();
        var minDateHour = this._getMinHour();
        var maxDateHour = this._getMaxHour();
        var hour = date.getHours();

        if (mode === DATETIME) {
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();

            var minDateYear = this._getMinYear();
            var maxDateYear = this._getMaxYear();
            var minDateMonth = this._getMinMonth();
            var maxDateMonth = this._getMaxMonth();
            var minDateDay = this._getMinDay();
            var maxDateDay = this._getMaxDay();

            if (minDateYear === year && minDateMonth === month && minDateDay === day) {
                minHour = minDateHour;
                if (minDateHour === hour) {
                    minMinute = minDateMinute;
                }
            }
            if (maxDateYear === year && maxDateMonth === month && maxDateDay === day) {
                maxHour = maxDateHour;
                if (maxDateHour === hour) {
                    maxMinute = maxDateMinute;
                }
            }
        } else {
            minHour = minDateHour;
            if (minDateHour === hour) {
                minMinute = minDateMinute;
            }
            maxHour = maxDateHour;
            if (maxDateHour === hour) {
                maxMinute = maxDateMinute;
            }
        }

        var hours = [];
        for (var i = minHour; i <= maxHour; i += 1) {
            hours.push({
                value: '' + i,
                label: pad(i) + '时'
            });
        }

        var minutes = [];

        for (var i = minMinute; i <= maxMinute; i += minuteStep) {
            minutes.push({
                value: '' + i,
                label: pad(i) + '分'
            });
        }
        return [{ key: 'hours', props: { children: hours } }, { key: 'minutes', props: { children: minutes } }];
    },

    // 获取
    _getValueCols: function _getValueCols() {
        var mode = this.props.mode;
        var date = this._getDate();

        var cols = [];
        var value = [];

        if (mode === YEAR) {
            return {
                cols: this._getDateData(),
                value: ['' + date.getFullYear()]
            };
        }

        if (mode === MONTH) {
            return {
                cols: this._getDateData(),
                value: ['' + date.getMonth()]
            };
        }

        if (mode === DATETIME || mode === DATE) {
            cols = this._getDateData();
            value = ['' + date.getFullYear(), '' + date.getMonth(), '' + date.getDate()];
        }

        if (mode === DATETIME || mode === TIME) {
            cols = cols.concat(this._getTimeData());
            value = value.concat(['' + date.getHours(), '' + date.getMinutes()]);
        }
        return {
            value: value,
            cols: cols
        };
    },

    _clipDate: function _clipDate(date) {
        var mode = this.props.mode;
        var minDate = this._getMinDate();
        var maxDate = this._getMaxDate();
        if (mode === DATETIME) {
            if (date.getTime() < minDate.getTime()) {
                return minDate;
            }
            if (date.getTime() > maxDate.getTime()) {
                return maxDate;
            }
        } else if (mode === DATE) {
            if (date.getTime() < minDate.getTime()) {
                return minDate;
            }
            if (date.getTime() > maxDate.getTime()) {
                return maxDate;
            }
        } else {
            var maxHour = maxDate.getHours();
            var maxMinutes = maxDate.getMinutes();
            var minHour = minDate.getHours();
            var minMinutes = minDate.getMinutes();
            var hour = date.getHours();
            var minutes = date.getMinutes();
            if (hour < minHour || hour === minHour && minutes < minMinutes) {
                return minDate;
            }
            if (hour > maxHour || hour === maxHour && minutes > maxMinutes) {
                return maxDate;
            }
        }
        return date;
    },

    _isExtendMoment: function _isExtendMoment(date) {
        var mode = this.props.mode;

        if (!date) {
            return '';
        }

        if (mode === MONTH) {
            var _temp = '1970-' + date + '-01';
            return new Date(_temp);
        }

        if (mode === TIME) {
            var _temp = '1970-01-01 ' + date;
            return new Date(_temp);
        }
        return new Date(date);
    },

    // 切换显示状态
    _toggle: function _toggle() {
        this.setState({
            visible: !this.state.visible
        });
    },

    _handleClick: function _handleClick() {
        !this.state.disabled && this._toggle();
    },

    setValue: function setValue(v) {
        var date = v && this._isExtendMoment(v);
        this.setState({
            date: date
        });
        this.initDate = date;
    },

    getValue: function getValue() {
        if (this.state.date === '') {
            return '';
        }
        var result = formatFn(this, this.state.date);
        return result;
    },

    setDisabled: function setDisabled(v) {
        this.setState({
            disabled: v
        });
    },

    clear: function clear() {
        this.setState({
            date: ''
        });
        this.initDate = '';
    },

    reset: function reset() {
        var defaultValue = this.props.defaultValue;
        if (defaultValue) {
            var date = defaultValue && this._isExtendMoment(defaultValue);
            this.setState({
                date: date
            });
            this.initDate = date;
        } else {
            this.clear();
        }
    },
    render: function render() {
        var _this = this;
        var value = this._getValueCols().value;
        var cols = this._getValueCols().cols;
        var propsObj = this.props;
        var id = propsObj.id;
        var className = propsObj.className;
        var cancelText = propsObj.cancelText;
        var okText = propsObj.okText;
        var title = propsObj.title;
        var placeholder = propsObj.placeholder;
        var disabled = this.state.disabled;
        var wrapperClasses = classnames(_defineProperty({
            'ucs-datepicker': true
        }, className, !!className));

        var inputCls = classnames({
            'ucs-datepicker-text': true,
            'ucs-datepicker-placeholder': !this.state.date,
            'ucs-datepicker-disabled': !!disabled
        });

        var classes = classnames({
            'ucs-datepicker-container': true,
            'ucs-datepicker-hidden': !this.state.visible
        });

        return React.createElement(
            'div',
            {
                id: id,
                className: wrapperClasses,
                onTouchStart: function onTouchStart() {
                    _this._handleClick();
                } },
            React.createElement(
                'div',
                { className: inputCls },
                this.state.date ? formatFn(this, this.state.date) : placeholder
            ),
            React.createElement(
                'div',
                { className: classes, onTouchStart: function onTouchStart(e) {
                        stopClick(e);
                    } },
                React.createElement('div', { className: 'ucs-datepicker-mask', onTouchStart: function onTouchStart() {
                        _this._onMaskClick();
                    } }),
                React.createElement(
                    'div',
                    { className: 'ucs-datepicker-inner' },
                    React.createElement(
                        'div',
                        { className: 'ucs-datepicker-header' },
                        React.createElement(
                            'div',
                            { className: 'ucs-datepicker-cancel', onTouchStart: function onTouchStart() {
                                    _this._onCancel();
                                } },
                            cancelText
                        ),
                        React.createElement(
                            'div',
                            { className: 'ucs-datepicker-title' },
                            title
                        ),
                        React.createElement(
                            'div',
                            { className: 'ucs-datepicker-submit', onTouchStart: function onTouchStart() {
                                    _this._onOk();
                                } },
                            okText
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'ucs-datepicker-mask-top' },
                        React.createElement(
                            'div',
                            { className: 'ucs-datepicker-mask-bottom' },
                            React.createElement(
                                ColumnGroup,
                                {
                                    disabled: disabled,
                                    selectedValue: value,
                                    onValueChange: function onValueChange(values, index) {
                                        _this._onValueChange(values, index);
                                    } },
                                cols
                            )
                        )
                    )
                )
            )
        );
    }
});

module.exports = DatePicker;

/***/ })

/******/ });