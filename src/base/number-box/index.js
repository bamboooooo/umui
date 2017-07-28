var classnames = require('classnames');
var Numberbox = React.createClass({
    getDefaultProps: function () {
        return {
            id: '',
            name: '',
            max: null,
            min: 0,
            step: 1,
            formatter: null,
            onChange: '',
            defaultValue: ''
        };
    },
    getInitialState: function () {
        return {
            value: 0,
            className: classnames('ucs-number-box', this.props.className),
            disabled: this.props.disabled ? this.props.disabled : false,
            formalValue: 0,
            formatterValue: ''
        };
    },
    setValue: function (v) {
        this.setState({
            value: v
        });
    },

    getValue: function () {
        return this.setState.value;
    },
    setDisabled: function (v) {
        if (v) {
            this.setState({
                className: classnames(this.state.className, 'disabled'),
                disabled: true
            });
        } else {
            this.setState({
                className: classnames('ucs-number-box', this.props.className),
                disabled: false
            });
        }
    },
    clear: function () {
        this.setValue('');
    },
    reset: function () {
        console.log('reset');
        if (this.props.defaultValue) {
            this.setValue(this.props.defaultValue);
            this._setformalValue(this.props.defaultValue);
            this._setFormatValue(this.props.defaultValue);
        } else {
            this.clear();
        }
    },
    changeHandle: function (e) {
        this.props.onChange ? this.props.onChange() : '';
        var c = e.target.value;
        if (/[^\d]/.test(c)) {// 替换非数字字符
            c = c.replace(/[^\d]/g, '');
        }
        if (parseInt(c, 10) > this.props.max) {
            if (this.props.max !== null) {
                return;
            }
        }
        if (c === '') {
            this._setFormatValue('0');
        }
        this.setValue(c);
        this._setformalValue(c);
    },
    _setFormatValue: function (v) {
        if (v === 0 && v === '') {
            this.setState({
                formatterValue: '0'
            });
        } else {
            var formatterVal = this.props.formatter(v);
            this.setState({
                formatterValue: formatterVal
            });
        }

    },
    getformalValue: function (v) {
        return this.state.formatterValue;
    },
    _setformalValue: function (v) {
        this.setState({
            formalValue: v
        });
    },
    _blurHandle: function () {
        if (this.state.formatterValue === '') {
            this.setValue('0');
        } else {
            this.setValue(this.state.formatterValue);
        }
    },
    _focusHandle: function () {
        this.setValue(this.state.formalValue);
        this.props.onFocus && this.props.onFocus();
    },
    _plusHandle: function () {
        if(this.state.disabled){
            return false;
        }
        this.refs.numberbox.focus();
        var step = this.props.step;
        var val = this.refs.numberbox.value;
        var newVal = parseInt(val, 10) + parseInt(step, 10);
        if (this.props.max === null) {
            this.setValue(newVal.toString());
            this._setformalValue(newVal.toString());
            this._setFormatValue(newVal.toString());
        } else {
            if (newVal <= parseInt(this.props.max, 10)) {
                this.setValue(newVal.toString());
                this._setformalValue(newVal.toString());
                this._setFormatValue(newVal.toString());
            } else {
                return false;
            }
        }
    },
    _reduceHandle: function () {
        if(this.state.disabled){
            return false;
        }
        this.refs.numberbox.focus();
        var step = this.props.step;
        var val = this.refs.numberbox.value;
        var newVal = parseInt(val, 10) - parseInt(step, 10);
        if (newVal >= parseInt(this.props.min, 10)) {
            this.setValue(newVal.toString());
            this._setformalValue(newVal.toString());
            this._setFormatValue(newVal.toString());
        } else {
            return false;
        }
    },
    render: function () {
        return (
            <div className="ucs-numberbox-box">
                <i className="icon icon-reduce" onClick={this._reduceHandle}>-</i>
                <input type="text" ref="numberbox" value={this.state.value}
                    className={this.state.className}
                    name={this.props.name} id={this.props.id}
                    disabled={this.state.disabled}
                    onChange={this.changeHandle}
                    onBlur={this._blurHandle}
                    onFocus={this._focusHandle}/>
                <i className="icon icon-plus" ref="plus" onClick={this._plusHandle}>+</i>
            </div>
        );
    }
});
module.exports = Numberbox;
