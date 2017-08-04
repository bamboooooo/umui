/**
 * Created by chenzefang on 2017/8/4.
 */
var classnames = require('classnames');
var Button = require('../../base/button');
var CheckCode = React.createClass({
    getDefaultProps: function () {
        return {
            className: null,
            id: null,
            disabled: false,
            count: 10,
            temp: '秒后获取',
            text: '获取验证码',
            onClick: null
        };
    },
    getInitialState: function () {
        return {
            className: classnames('ucs-checkcode', this.props.className),
            disabled: this.props.disabled,
            text: this.props.text
        };
    },
    /*
     * 设置不可用
     * */
    setDisabled: function (v) {
        var _this = this;
        if (_this.time !== 'undefined') {
            clearInterval(_this.time);
            _this.setState({
                text: _this.props.text
            });
        }
        this.setState({
            className: classnames('ucs-checkcode', this.props.className, {'disabled': v}),
            disabled: v
        });
    },
    /*
    * 开始倒计时
    * */
    start: function () {
        var _this = this;
        var count = _this.props.count;
        var className = this.state.className;
        _this.setState({
            className: classnames('ucs-checkcode', this.props.className, 'disabled'),
            text: count + _this.props.temp,
            disabled: true
        });
        _this.time = setInterval(function () {
            if (count > 0) {
                count--;
                _this.setState({
                    text: count + _this.props.temp
                });
            } else {
                clearInterval(_this.time);
                _this.setState({
                    className: className,
                    text: _this.props.text,
                    disabled: false
                });
            }
        }, 1000);
    },
    /*
    *
    * */
    reset: function () {
        this.setState({
            className: classnames('ucs-checkcode', this.props.className, {'disabled': false}),
            text: this.props.text,
            disabled: this.props.disabled
        });
        clearInterval(this.time);
    },
    render: function () {
        return (
            <Button id={this.props.id} className={this.state.className} value={this.state.text} disabled={this.state.disabled} onClick={this.props.onClick} />
        );
    }
});

module.exports = CheckCode;
