var classnames = require('classnames');
var sha1 = require('sha1');
var md5 = require('js-md5');
var sha256 = require('sha256');
var Password = React.createClass({
    getInitialState: function () {
        return {
            className: classnames('ucs-password', this.props.className),
            readOnly: false,
            disabled: false,
            encryptKey: '',
            encryptType: ''
        };
    },
    getDefaultProps: function () {
        return {
            isShowClear: false,
            placeHolder: '',
            id: 'passsword',
            name: 'passsword',
            displayChar: '.',
            maxLength: ''
        };
    },
    getValue: function () {
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
        this.refs.password.value = passwordVal.replace(/./g, this.props.displayChar);
    },
    onChange: function (e) {
        this.props.onChange ? this.props.onChange(e) : '';
    },
    onBlur: function (e) {
        this.props.onBlur ? this.props.onBlur(e) : '';
    },
    onFocus: function (e) {
        this.props.onFocus ? this.props.onFocus(e) : '';
    },
    componentDidMount: function () {
        this._isShowClear();
    },
    render: function () {
        return (
            <div className="ucs-password-box">
                <input type="text" ref="password" {...this.props} className={this.state.className} disabled={this.state.disabled} palceholder={this.props.placeHolder} readOnly={this.state.readOnly} onKeyUp={this._keyUpHandle} onBlur={this.onBlur} onFocus={this.onFocus}></input>
                <i className="icon-clear" ref='clear' onClick={this.clear}>X</i>
            </div>
        );
    }
});
module.exports = Password;
