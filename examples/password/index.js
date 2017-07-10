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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classnames = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"classnames\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var sha1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"sha1\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var md5 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"js-md5\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var sha256 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"sha256\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var Password = React.createClass({
    displayName: 'Password',

    getInitialState: function getInitialState() {
        return {
            className: classnames('ucs-password', this.props.className),
            readOnly: false,
            disabled: false,
            isShowClear: false,
            encryptKey: '',
            encryptType: '',
            onChange: '',
            onBlur: '',
            onFocus: ''
        };
    },
    getDefaultProps: function getDefaultProps() {
        return {
            placeHolder: '',
            id: '',
            name: '',
            displayChar: '',
            maxLength: ''
        };
    },
    getValue: function getValue() {
        var encryptType = this.state.encryptType;
        var encryptPassword = '';
        var formalPassword = this.refs.password.value;
        switch (encryptType) {
            case 'md5':
                encryptPassword = md5(this.state.encryptKey + formalPassword);
                break;
            case 'sha1':
                encryptPassword = sha1(this.state.encryptKey + formalPassword);
                break;
            case 'sha256':
                encryptPassword = sha256(this.state.encryptKey + formalPassword);
                break;
            default:
                encryptPassword = formalPassword;
        }
        return encryptPassword;
    },
    setReadOnly: function setReadOnly(v) {
        if (v) {
            this.setState({
                readOnly: true
            });
        } else {
            this.setState({
                readOnly: false
            });
        }
    },
    setDisabled: function setDisabled(v) {
        if (v) {
            this.setState({
                className: classnames(this.state.className, 'disabled'),
                disabled: true
            });
        } else {
            this.setState({
                className: classnames('ucs-password', this.props.className),
                disabled: false
            });
        }
    },
    clear: function clear() {
        this.refs.password.value = '';
    },
    setEncryptKey: function setEncryptKey(v) {
        this.setState({
            encryptKey: v
        });
    },

    /*显示清除的标签*/
    _isShowClear: function _isShowClear() {
        if (!this.state.disabled && !this.state.readOnly) {
            if (this.state.isShowClear) {
                this.refs.clear.style = "block";
            } else {
                this.refs.clear.style = "none";
            }
        } else {
            this.refs.clear.style = "none";
        }
    },
    _keyUpHandle: function _keyUpHandle(e) {
        var passwordVal = this.refs.password.value;
        this.refs.password.value = passwordVal.replace(/./g, this.props.displayChar);
    },
    onChange: function onChange(e) {
        this.props.onChange ? this.props.onChange(e) : '';
    },
    onBlur: function onBlur(e) {
        this.props.onBlur ? this.props.onBlur(e) : '';
    },
    onFocus: function onFocus(e) {
        this.props.onFocus ? this.props.onFocus(e) : '';
    },
    componentDidMount: function componentDidMount() {
        this._isShowClear();
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'ucs-password' },
            React.createElement('input', _extends({ type: 'text', ref: 'password' }, this.props, { className: this.state.className, disabled: this.state.disabled, readOnly: this.state.readOnly, onKeyUp: this._keyUpHandle })),
            React.createElement(
                'i',
                { className: 'icon-clear', onClick: this.clear },
                'X'
            )
        );
    }
});
moudle.exports = Password;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Password = __webpack_require__(0);
ReactDOM.render(React.createElement(Password, null), document.getElementById('merry'));

/***/ })
/******/ ]);