/**
 * Created by Administrator on 2017/7/11.
 */
var classnames = require('classnames');
var Util = require('./Utils');
var Picker = require('./Picker');
var PickerGroup = React.createClass({
    getDefaultProps: function () {
        return {
            visible: false,
            placeholder: '请选择',
            title: '请选择',
            cancelText: '取消',
            okText: '确定',
            format: '-',
            disabled: false,
            data: [],
            maxCols: 2,
            defaultValue: [],
            onClick: null,
            onChange: null,
            onOk: null,
            onCancel: null,
            onMaskClick: null,
            displayMember: 'label',
            valueMember: 'value'
        };
    },
    getInitialState: function () {
        return {
            visible: this.props.visible || false,
            value: this.props.defaultValue,
            data: this.props.data,
            cascade: Object.prototype.toString.call(this.props.data[0]) !== '[object Array]', // 判断数据是否为级联，简单判断数据第一个元素是否为数组
            disabled: this.props.disabled
        };
    },
    componentDidMount: function () {
        this.tempValue = this.props.defaultValue;
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            visible: nextProps.visible,
            value: nextProps.defaultValue.concat()
        });
    },
    // 阻止选择器区域的默认事件
    _onContainerClick: function (e) {
        e.stopPropagation();
    },
    // 切换显示状态
    _toggle: function () {
        if (this.state.disabled) {
            return;
        }
        this.setState({
            visible: !this.state.visible
        });
    },
    _handleClick: function () {
        var onClick = this.props.onClick;
        onClick && onClick(this.tempValue);
        !this.state.disabled && this._toggle();
    },
    onMaskClick: function () {
        var onMaskClick = this.props.onMaskClick;
        this._toggle();
        this.setState({
            value: this.tempValue
        });
        onMaskClick && onMaskClick(this.tempValue);
    },
    // 取消
    onCancel: function () {
        var onCancel = this.props.onCancel;
        this._toggle();
        this.setState({
            value: this.tempValue
        });
        onCancel && onCancel(this.tempValue);
    },
    // 确定
    onOk: function () {
        var onOk = this.props.onOk;
        var value = this._getInitValue();
        this.tempValue = value;
        this._toggle();
        onOk && onOk(value);
    },
    // 获取选择器组
    _getOptions: function (dataSource, level) {
        var _this = this;
        var valueMember = this.props.valueMember;
        var displayMember = this.props.displayMember;
        var maxCols = this.props.maxCols;
        var pickers = this.pickers || [];

        if (this.state.cascade) {
            var selected = dataSource.filter(function (item) {return item[displayMember] === _this.state.value[level];})[0] || dataSource[0] || {};

            if (level < maxCols - 1) {
                if (selected.children && selected.children.length > 0) {
                    pickers = this._getOptions(selected.children, level + 1);
                } else {
                    pickers = this._getOptions([], level + 1);
                }
            }

            pickers.unshift(<Picker key={level} valueMember={valueMember} displayMember={displayMember} dataSource={dataSource} value={selected[displayMember]} onChange={function (value) {
                _this._onpickerChange(dataSource, level, value);
            }} />);
        } else {
            var selected = this.state.value[level];
            if (level < dataSource.length - 1) {
                pickers = this._getOptions(dataSource, level + 1);
            }

            pickers.unshift(<Picker key={level} valueMember={valueMember} displayMember={displayMember} dataSource={dataSource[level]} value={selected} onChange={function (value) {
                _this._onpickerChange(dataSource, level, value);
            }} />);
        }

        // console.log('pickers', pickers, ' pickers.length', pickers.length);
        return pickers;
    },
    // 选择器选值
    _onpickerChange: function (dataSource, level, value) {
        var _this = this;
        var displayMember = this.props.displayMember;
        var onChange = this.props.onChange;

        var values = this.state.value.concat();

        if (!values || !values.length) {
            var data = this.props.data;
            if (this.state.cascade) {
                for (var i = 0; i < this.props.maxCols; i += 1) {
                    if (data && data.length) {
                        values[i] = data[0][displayMember];
                        data = data[0].children;
                    }
                }
            } else {
                data.forEach(function (d) {
                    values.push(d[0][displayMember]);
                });
            }
        }

        var item = null;
        if (this.state.cascade) {
            for (var i = level; i < values.length; i++) {
                item = dataSource.filter(function (item) {return item[displayMember] === value;})[0];
                values[i] = item && item[displayMember];

                dataSource = item
                    ? item.children
                    : [];
                value = dataSource[0]
                    ? dataSource[0][displayMember]
                    : undefined;
            }
            var children = Util.arrayTreeFilter(_this.props.data, function (item, lv) {
                return lv <= level && item[displayMember] === values[lv];
            });
            var data = children[level];
            var ii;
            for (ii = level + 1; data && data.children && data.children.length && ii < this.props.maxCols; ii += 1) {
                data = data.children[0];
                values[ii] = data[displayMember];
            }
            values.length = ii;
        } else {
            values[level] = value;
        }

        this.setState({
            value: values
        });
        onChange && onChange(values);
    },
    _getInitValue: function () {
        var data = this.state.data;
        var displayMember = this.props.displayMember;

        var value = this.state.value;

        if (!value || !value.length) {
            if (this.state.cascade) {
                for (var i = 0; i < this.props.maxCols; i += 1) {
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
    // 设置值
    setValue: function (v) {
        this.tempValue = v;
        this.setState({
            value: v
        });
    },
    // 获取值
    getValue: function () {
        return this.state.value || [];
    },
    // 设置是否禁用
    setDisabled: function (v) {
        this.setState({
            disabled: v
        });
    },
    // 清空组件值
    clear: function () {
        this.tempValue = [];
        this.setState({
            value: []
        });
    },
    // 重置组件值
    reset: function () {
        this.tempValue = this.props.defaultValue;
        this.setState({
            value: this.props.defaultValue
        });
    },
    render: function () {
        var dataSource = this.props.data;
        var value = this.state.value;
        var format = this.props.format;
        var placeholder = this.props.placeholder;
        var className = this.props.className;
        var title = this.props.title;
        var cancelText = this.props.cancelText;
        var okText = this.props.okText;
        var pickers = this._getOptions(dataSource, 0);
        var classes = classnames({
            'ucs-picker-container': true,
            'ucs-picker-popup-mask-hidden': !this.state.visible,
            [className]: !!className
        });

        var inputCls = classnames({
            'ucs-picker-text': true,
            'ucs-picker-placeholder': !value.join(format)
        });

        return (
            <div className="ucs-picker-box" onClick={this._handleClick}>
                <div className={inputCls}>
                    {value.join(format) || placeholder}
                </div>
                <div className={classes} onClick={this._onContainerClick}>
                    <div tabIndex="-1" className="ucs-picker-popup-wrap" role="dialog">
                        <div className="ucs-picker-popup-mask" onClick={this.onMaskClick}></div>
                        <div role="document" className="ucs-picker-popup forss">
                            <div className="ucs-picker-popup-content">
                                <div className="ucs-picker-popup-body">
                                    <div>
                                        <div className="ucs-picker-popup-header">
                                            <div className="ucs-picker-popup-item ucs-picker-popup-header-left" onClick={this.onCancel}>{cancelText}</div>
                                            <div className="ucs-picker-popup-item ucs-picker-popup-title">{title}</div>
                                            <div className="ucs-picker-popup-item ucs-picker-popup-header-right" onClick={this.onOk}>{okText}</div>
                                        </div>
                                        <div className="ucs-picker">
                                            {pickers}
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
module.exports = PickerGroup;
