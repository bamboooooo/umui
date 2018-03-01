var classnames = require('classnames');
var sha1 = require('sha1');
var md5 = require('js-md5');
var sha256 = require('sha256');
var Password = React.createClass({
    getDefaultProps: function () {
        return {
            isShowClear: false,
            placeHolder: '',
            id: '',
            name: '',
            displayChar: '.',
            maxLength: '',
            encryptType: ''
        };
    },
    getInitialState: function () {
        return {
            className: classnames('ucs-password', this.props.className),
            readOnly: this.props.readOnly ? this.props.readOnly : false,
            disabled: this.props.disabled ? this.props.disabled : false,
            encryptKey: this.props.encryptKey ? this.props.encryptKey : '',
            formalPasswd: ''
        };
    },
    getValue: function () {
        var encryptType = this.props.encryptType;
        var encryptPassword = '';
        var formalPassword = this.state.formalPasswd;
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
    setReadOnly: function (v) {
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
    setDisabled: function (v) {
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
    clear: function () {
        this.refs.password.value = '';
        this.setState({
            formalPasswd: ''
        });
    },
    setEncryptKey: function (v) {
        this.setState({
            encryptKey: v
        });
    },

    /* 显示清除的标签*/
    _isShowClear: function () {
        if (!this.state.disabled && !this.state.readOnly) {
            if (this.props.isShowClear) {
                this.refs.clear.style.display = 'block';
            } else {
                this.refs.clear.style.display = 'none';
            }

        } else {
            this.refs.clear.style.display = 'none';
        }
    },
    _keyUpHandle: function (e) {
        var passwordVal = this.refs.password.value;
        var displayChar = this.props.displayChar;
        var str = new RegExp('[^' + displayChar + ']', 'g');
        this.refs.password.value = passwordVal.replace(str, this.props.displayChar);
    },
    _keyPressHandle: function (e) {
        var keynum;
        var keychar;
        keynum = window.event ? e.charCode : e.which;
        keychar = String.fromCharCode(keynum);
        this.setState({
            formalPasswd: this.state.formalPasswd + keychar
        });
    },
    _changeHandle: function (e) {
        this.props.onChange ? this.props.onChange(e) : '';
    },
    _blurHandle: function (e) {
        this.props.onBlur ? this.props.onBlur(e) : '';
    },
    _focusHandle: function (e) {
        this.props.onFocus ? this.props.onFocus(e) : '';
    },
    componentDidUpdate: function () {
        this._isShowClear();
    },
    componentDidMount: function () {
        this._isShowClear();
    },
    render: function () {
        return (
            <div className="ucs-password-box">
                <input type="text" ref="password" className={this.state.className} placeholder={this.props.placeHolder} maxLength={this.props.maxLength} name={this.props.name} id={this.props.id} disabled={this.state.disabled} readOnly={this.state.readOnly} onKeyPress={this._keyPressHandle} onKeyUp={this._keyUpHandle} onBlur={this._blurHandle} onFocus={this._focusHandle} onChange={this._changeHandle}/>
                <i className="icon-clear" ref='clear' onClick={this.clear}>X</i>
            </div>
        );
    }
});
module.exports = Password;
