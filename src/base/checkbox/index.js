/**
* checkbox组件
* @param {string} id 组件id
* @param {string} className 组件class
* @param {string} text 关联的文案 
* @param {boolean} defaultChecked 初始化是否选中 
* @param {boolean} disabled 是否禁用 
* @param {function} onChange 监控change事件 
* @description
*   多选框
* @example
  <Checkbox
    text="复选框"
    id="ucs-nav-bar"
    className="my-nav-bar"
    defaultChecked={true}
    onChange={this.onChange}
  />
* @author wall
* @createTime 2017-08-04
*/
var classnames = require('classnames');
var PropTypes = React.PropTypes;

var Checkbox = React.createClass({
    propTypes: {
        id: PropTypes.string,
        className: PropTypes.string,
        text: PropTypes.string,
        defaultChecked: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func
    },
    getDefaultProps: function () {
        return {
            id: null,
            className: null,
            text: '',
            defaultChecked: false,
            disabled: false,
            onChange: function () {return null;}
        };
    },
    getInitialState: function () {
        return {
            checked: this.props.defaultChecked,
            disabled: this.props.disabled
        };
    },
    _onClick: function () {
        if (this.state.disabled) {
            return;
        }

        var nowChecked = !this.state.checked;
        this.setState({
            checked: nowChecked
        });

        this.props.onChange(nowChecked);
    },
    setChecked: function (v) {
        this.setState({
            checked: v
        });
    },
    getChecked: function () {
        return this.state.checked;
    },
    setDisabled: function (v) {
        this.setState({
            disabled: v
        });
    },
    clear: function () {
        this.setState({
            checked: false
        });
    },
    reset: function () {
        this.setState({
            checked: this.props.defaultChecked
        });
    },
    render: function () {
        var className = classnames('ucs-checkbox',
            this.props.className,
            this.props.disabled ? 'ucs-checkbox-disabled' : '');
        var id = this.props.id;
        var checked = this.state.checked;
        var iconClass = classnames('iconfont', checked ? 'icon-check-square-o' : 'icon-check-square');
        var text = this.props.text;

        return (
            <div id={id} className={className} onClick={this._onClick}>
                <i className={iconClass}></i>
                <label className="ucs-checkbox-text">{text}</label>
            </div>
        );
    }
});

module.exports = Checkbox;
