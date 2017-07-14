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
            dataSource: [],
            cols: 3,
            value: [],
            onClick: function (v) {
                console.log(v);
            },
            onChange: function (v) {
                console.log(v);
            },
            onOk: function (v) {
                console.log(v);
            },
            onCancel: function (v) {
                console.log(v);
            },
            onMaskClick: function (v) {
                console.log(v);
            },
            displayMember: 'label',
            valueMember: 'value'
        };
    },
    getInitialState: function () {
        return {
            visible: this.props.visible || false,
            value: this.props.value,
            data: this.props.dataSource,
            cascade: Object.prototype.toString.call(this.props.dataSource[0]) !== '[object Array]'// 判断数据是否为级联，简单判断数据第一个元素是否为数组
        };
    },
    componentDidMount: function () {
        this.tempValue = this.props.value;
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            visible: nextProps.visible,
            value: nextProps.value.concat()
        });
    },
    // 阻止选择器区域的默认事件
    onContainerClick: function (e) {
        e.stopPropagation();
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
    onMaskClick: function () {
        var onMaskClick = this.props.onMaskClick;
        this.onCancel();
        onMaskClick && onMaskClick();
    },
    // 获取选择器组
    getOptions: function (dataSource, level) {
        var _this = this;
        var valueMember = this.props.valueMember;
        var displayMember = this.props.displayMember;
        var cols = this.props.cols;
        var pickers = this.pickers || [];

        if (this.state.cascade) {
            var selected = dataSource.filter(function (item) {return item[displayMember] === _this.state.value[level];})[0] || dataSource[0] || {};

            if (level < cols - 1) {
                if (selected.children && selected.children.length > 0) {
                    pickers = this.getOptions(selected.children, level + 1);
                } else {
                    pickers = this.getOptions([], level + 1);
                }
            }

            pickers.unshift(<Picker key={level} valueMember={valueMember} displayMember={displayMember} dataSource={dataSource} value={selected[displayMember]} onChange={function (value) {
                _this.onpickerChange(dataSource, level, value);
            }} />);
        } else {
            var selected = this.state.value[level];
            if (level < dataSource.length - 1) {
                pickers = this.getOptions(dataSource, level + 1);
            }

            pickers.unshift(<Picker key={level} valueMember={valueMember} displayMember={displayMember} dataSource={dataSource[level]} value={selected} onChange={function (value) {
                _this.onpickerChange(dataSource, level, value);
            }} />);
        }

        // console.log('pickers', pickers, ' pickers.length', pickers.length);
        return pickers;
    },
    // 选择器选值
    onpickerChange: function (dataSource, level, value) {
        var _this = this;
        var displayMember = this.props.displayMember;
        var onChange = this.props.onChange;

        var values = this.state.value.concat();

        if (!values || !values.length) {
            var data = this.props.dataSource;
            if (this.state.cascade) {
                for (var i = 0; i < this.props.cols; i += 1) {
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
            var children = Util.arrayTreeFilter(_this.props.dataSource, function (item, lv) {
                return lv <= level && item[displayMember] === values[lv];
            });
            var data = children[level];
            var ii;
            for (ii = level + 1; data && data.children && data.children.length && ii < this.props.cols; ii += 1) {
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
    getInitValue: function () {
        var data = this.state.data;
        var displayMember = this.props.displayMember;

        var value = this.state.value;

        if (!value || !value.length) {
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
    // 取消
    onCancel: function () {
        var onCancel = this.props.onCancel;
        this.toggle();
        this.setState({
            value: this.tempValue
        });
        onCancel && onCancel(this.tempValue);
    },
    // 确定
    onOk: function () {
        var onOk = this.props.onOk;
        var value = this.getInitValue();
        this.tempValue = value;
        this.toggle();
        onOk && onOk(value);
    },
    render: function () {
        var dataSource = this.props.dataSource;
        var value = this.state.value;
        var format = this.props.format;
        var placeholder = this.props.placeholder;
        var className = this.props.className;
        var title = this.props.title;
        var cancelText = this.props.cancelText;
        var okText = this.props.okText;
        var pickers = this.getOptions(dataSource, 0);
        var classes = classnames({
            'ucs-picker-container': true,
            'ucs-picker-popup-mask-hidden': !this.state.visible,
            [className]: !!className
        });

        var inputCls = classnames({
            'ucs-picker-placeholder': !value.join(format)
        });

        return (
            <div className="ucs-picker" onClick={this.toggle}>
                <div className={inputCls}>
                    {value.join(format) || placeholder}
                </div>
                <div className={classes} onClick={this.onContainerClick}>
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
