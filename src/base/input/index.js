var classnames = require('classnames');
var Input = React.createClass({
    getInitialState: function () {
        return {
            className: classnames('ucs-input', this.props.className, this.props.disabled ? 'disabled' : ''),
            value: this.props.value !== '' ? this.props.value : this.props.defaultValue,
            readOnly: this.props.readOnly || false,
            disabled: this.props.disabled || false,
            isShowClear: this.props.isShowClear || false
        };
    },
    componentDidMount: function () {
        if (this.props.type === 'tel') {
            this.setState({
                value: this.state.value.replace(/\D/g, '')
            });
        }
        this._showCloseHandler(this.state.value);
    },
    getDefaultProps: function () {
        return {
            type: 'text',
            className: '',
            readOnly: false,
            disabled: false,
            placeHolder: '',
            id: null,
            name: null,
            value: '',
            defaultValue: '',
            isShowClear: false,
            maxLength: '',
            onChange: null,
            onFocus: null,
            onBlur: null,
            afterValidation: null
        };
    },
    // Input的value改变时执行的事件
    _onChange: function (e) {
        if (this.props.type === 'tel') {
            this.setState({
                value: e.target.value.replace(/\D/g, '')
            });
        } else {
            this.setState({value: e.target.value});
        }
        this._showCloseHandler(this.state.value);
        this.props.onChange && this.props.onChange(e);
    },
    // Input获取焦点时执行的事件
    _onFocus: function (e) {
        this.props.onFocus && this.props.onFocus(e);
    },
    // Input失去焦点时执行的事件
    _onBlur: function (e) {
        // 对type==='tel'时进行校验
        if (this.props.type === 'tel') {
            this._formatTelCheck(e);
        }
        this.props.onBlur && this.props.onBlur(e);
    },
    // showClose的显示与隐藏 @param value
    _showCloseHandler: function (value) {
        if (value !== '' && !this.state.disabled && !this.state.readOnly) {
            this.setState({
                isShowClear: true
            });
        } else {
            this.setState({
                isShowClear: false
            });
        }
        // if (value === '') {
        //     console.log('123');
        // } else {
        //     console.log('456');
        // }
    },
    // 点击showClose
    _showCloseClick: function () {
        this.clear();
        this.setState({isShowClear: false});
    },
    // 设定type="tel"输入校验
    _formatTelCheck: function (e) {
        var inputValue = this.state.value;
        var pattern = /^1[3|4|5|7|8][0-9]{9}$/;
        var result = pattern.test(inputValue);
        this.props.afterValidation && this.props.afterValidation(e, result);
    },
    // 设置Input的value @param {string} v
    setValue: function (v) {
        this.setState({value: v});
    },
    // 获取Input的value @return {string}
    getValue: function () {
        return this.state.value;
    },
    // 设置Input是否只读 @param {boolean} v
    setReadOnly: function (v) {
        if (v) {
            this.setState({
                readOnly: v,
                isShowClear: false
            });
        } else {
            this.setState({
                readOnly: false,
                isShowClear: true
            });
        }
    },
    // 设置Input是否可用 @param {boolean} v
    setDisabled: function (v) {
        if (v) {
            this.setState({
                disabled: v,
                isShowClear: false,
                className: classnames('ucs-input', this.props.className, 'disabled')
            });
        } else {
            this.setState({
                disabled: false,
                isShowClear: true,
                className: classnames('ucs-input', this.props.className)
            });
        }
    },
    // 清空Input的值
    clear: function () {
        this.setState({value: ''});
    },
    // 重置Input的值
    reset: function () {
        if (this.props.defaultValue) {
            this.setState({value: this.props.defaultValue});
        } else {
            this.clear();
        }
    },
    // focus 事件 @param e
    onFocus: function () {
        this.refs.inputEle.focus();
    },
    render: function () {
        // 清除标签
        var spanShowClose = {
            display: this.state.isShowClear ? 'block' : 'none'
        };
        var showClear = (<a href="javascript:;" onClick={this._showCloseClick}><span className="ucs-showClose" style={spanShowClose}>×</span></a>);
        return (
            <div className="ucs-input-control">
                <input
                    ref="inputEle"
                    type={this.props.type}
                    className={this.state.className}
                    readOnly={this.state.readOnly}
                    disabled={this.state.disabled}
                    placeholder={this.props.placeHolder}
                    id={this.props.id}
                    name={this.props.name}
                    value={this.state.value}
                    maxLength={this.props.type === 'tel' ? '11' : this.props.maxLength}
                    onChange={this._onChange}
                    onFocus={this._onFocus}
                    onBlur={this._onBlur}
                />
                {showClear}
            </div>
        );
    }
});
module.exports = Input;
