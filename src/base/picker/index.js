/**
 * Created by Administrator on 2017/6/27.
 */
var classnames = require('classnames');
var Picker = React.createClass({
    getDefaultProps: function () {
        return {
            visible: false,
            placeholder: '请选择',
            title: '请选择',
            cancelText: '取消',
            okText: '确定',
            format: '',
            disabled: false,
            dataSource: [],
            cols: 3,
            value: [],
            onClick: function () {
                console.log(123);
            },
            onChange: function () {
                console.log(123);
            },
            onOk: function () {
                console.log(123);
            },
            onCancel: function () {
                console.log(123);
            },
            onMaskClick: function () {
                console.log(123);
            },
            prefixCls: 'ui-picker-column-group',
            pickerPrefixCls: 'ui-cascaderpicker',
            displayMember: 'label',
            valueMember: 'value'
        };
    },
    getInitialState: function () {
        return {
            visible: this.props.visible || false,
            translateY: 0,
            pointStart: 0,
            pointEnd: 0,
            value: this.props.value || this.props.defaultValue,
            data: this.props.dataSource,
            cascade: Object.prototype.toString.call(this.props.dataSource[0]) !== '[object Array]'
        };
    },
    componentDidMount: function () {
        this.tempValue = this.props.value;
    },
    onCancel: function () {
        var onCancel = this.props.onCancel;
        this.toggle();
        this.setState({
            value: this.tempValue
        });
        onCancel && onCancel();
    },
    onOk: function () {
        var onOk = this.props.onOk;
        var value = this.getInitValue();
        this.tempValue = value;
        this.toggle();
        onOk && onOk(value);
    },
    // 切换显示状态
    toggle: function () {
        if (this.props.disabled) {
            return;
        }
        this.setState({
            visible: !this.state.visible
        });
    },
    handleClick: function () {
        this.props.onClick();
        !this.props.disabled && this.toggle();
    },
    onContainerClick: function (e) {
        e.stopPropagation();
    },
    onMaskClick: function () {
        alert(123);
        var onMaskClick = this.props.onMaskClick;
        this.onCancel();
        onMaskClick && onMaskClick();
    },
    getInitValue () {
        var data = this.state.data;
        var displayMember = this.props.displayMember;
        var value = this.state.value;
        if (!value || !value.length) {
            // 判断数据是否为级联，简单判断数据第一个元素是否为数组
            if (this.state.cascade) {
                for (var i = 0; i < this.props.cols; i += 1) {
                    if (data && data.length) {
                        value[i] = data[0][displayMember];
                        data = data[0].children;
                    }
                }
            } else {
                data.forEach(function (d) {
                    value.push(d[0][displayMember]);
                });
            }
        }
        return value;
    },
    render: function () {
        var className = this.props.className;
        var disabled = this.props.disabled;
        var format = this.props.format;
        var placeholder = this.props.placeholder;
        var cancelText = this.props.cancelText;
        var okText = this.props.okText;
        var title = this.props.title;
        var value = this.state.value;
        var classes = classnames({
            'ucs-picker-container': true,
            'am-picker-popup-mask-hidden': !this.state.visible,
            [className]: !!className
        });
        var inputCls = classnames({
            'ui-picker-placeholder': !value.join(format),
            'ui-picker-disabled': !!disabled
        });
        var display = function () {
            return value.join(format) || placeholder;
        };
        return (
            <div className="ucs-picker" onClick={this.handleClick}>
                <div className={inputCls}>
                    {display()}
                </div>
                <div className={classes} onClick={this.onContainerClick}>
                    <div className="am-picker-popup-mask" onClick={this.onMaskClick}></div>
                    <div tabIndex="-1" className="am-picker-popup-wrap " role="dialog">
                        <div role="document" className="am-picker-popup forss">
                            <div className="am-picker-popup-content">
                                <div className="am-picker-popup-body">
                                    <div>
                                        <div className="am-picker-popup-header">
                                            <div className="am-picker-popup-item am-picker-popup-header-left">{cancelText}</div>
                                            <div className="am-picker-popup-item am-picker-popup-title">{title}</div>
                                            <div className="am-picker-popup-item am-picker-popup-header-right">{okText}</div>
                                        </div>
                                        <div className="am-picker">
                                            <div className="am-picker-item">
                                                <div className="am-picker-col">
                                                    <div className="am-picker-col-mask"></div>
                                                    <div className="am-picker-col-indicator"></div>
                                                    <div className="am-picker-col-content" style={{transformOrigin: 'left top 0px', transform: 'translate3d(0px, -34px, 0px) scale(1)'}}>
                                                        <div className="am-picker-col-item">安徽省</div>
                                                        <div className="am-picker-col-item am-picker-col-item-selected">澳门特别行政区</div>
                                                        <div className="am-picker-col-item">北京</div>
                                                        <div className="am-picker-col-item">广西壮族自治区</div>
                                                        <div className="am-picker-col-item">香港特别行政区</div>
                                                        <div className="am-picker-col-item">浙江省</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div tabIndex="0" style={{width: '0px', height: '0px', overflow: 'hidden'}}>sentinel</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Picker;
