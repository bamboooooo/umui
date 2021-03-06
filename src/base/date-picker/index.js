var classnames = require('classnames');
var ColumnGroup = require('./ColumnGroup');

var DATETIME = 'datetime';
var DATE = 'date';
var TIME = 'time';
var MONTH = 'month';
var YEAR = 'year';

// 格式化
function formatDate (fmt, date) {
    var o = {
        'M+': date.getMonth() + 1,
        'D+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    if (/(y+)/i.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return fmt;
}

// 获取使用哪个格式化
function getFormatter (type) {
    var formatter;
    if (type === YEAR) {
        formatter = 'YYYY';
    } else if (type === MONTH) {
        formatter = 'MM';
    } else if (type === TIME) {
        formatter = 'hh:mm';
    } else if (type === DATETIME) {
        formatter = 'YYYY-MM-DD hh:mm';
    } else {
        formatter = 'YYYY-MM-DD';
    }
    return formatter;
}

// 格式化入口函数
function formatFn (instance, value) {
    var format = instance.props.format;
    var mode = instance.props.mode;
    var date = new Date(value);
    if (format === null) {
        return formatDate(getFormatter(mode), date);
    } else {
        return formatDate(format, date);
    }
}

// 获取月份的天数
function getDaysInMonth (now) {
    var month = new Date(now).getMonth() + 1;
    var newYear = new Date(now).getFullYear();
    var newMonth = month++;
    if (month > 12) {
        newMonth -= 12;
        newYear++;
    }
    var newDate = new Date(newYear, newMonth, 1);
    return (new Date(newDate.getTime() - 1000 * 60 * 60 * 24)).getDate();
}

// 补齐格式
function pad (n) {
    return n < 10 ? '0' + n : n;
}

// 阻止选择器区域的默认事件
function stopClick (e) {
    e.stopPropagation();
}

var DatePicker = React.createClass({
    getDefaultProps: function () {
        return {
            id: null,
            className: null,
            visible: false,
            placeholder: '请选择日期',
            title: '请选择日期',
            cancelText: '取消',
            okText: '确定',
            mode: DATE,
            format: null,
            disabled: false,
            value: '',
            defaultValue: '',
            onChange: function () {return null;},
            onOk: function () {return null;},
            onCancel: function () {return null;},
            onMaskClick: function () {return null;},
            minuteStep: 1
        };
    },

    getInitialState: function () {
        var date = this.props.value && this._isExtendMoment(this.props.value);
        var defaultDate = this.props.defaultValue && this._isExtendMoment(this.props.defaultValue);
        return {
            visible: this.props.visible || false,
            date: date || defaultDate,
            disabled: this.props.disabled
        };
    },

    componentDidMount: function () {
        if (this.props.value) {
            this.initDate = this._isExtendMoment(this.props.value);
        } else if (this.props.defaultValue) {
            this.initDate = this._isExtendMoment(this.props.defaultValue);
        } else {
            this.initDate = '';
        }
    },

    componentWillReceiveProps: function (nextProps) {
        var date = nextProps.value && this._isExtendMoment(nextProps.value);
        var defaultDate = nextProps.defaultValue && this._isExtendMoment(nextProps.defaultValue);
        this.setState({
            date: date || defaultDate
        });
    },

    // 点击遮罩层
    _onMaskClick: function () {
        var onMaskClick = this.props.onMaskClick;
        this._onCancel();
        onMaskClick && onMaskClick();
    },

    // 点击取消
    _onCancel: function () {
        var onCancel = this.props.onCancel;
        this._toggle();
        this.setState({
            date: this.initDate
        });
        onCancel && onCancel();
    },

    // 点击确定
    _onOk: function () {
        var onOk = this.props.onOk;
        var value = this._getDate();
        this.initDate = value;
        this._toggle();
        if (this.state.date === '') {
            this.setState({
                date: value
            });
        }
        onOk && onOk(formatFn(this, value));
    },

    _onValueChange: function (values, index) {
        var value = parseInt(values[index], 10);
        var props = this.props;
        var mode = props.mode;
        var newValue = this._getDate();
        var _year = newValue.getFullYear();
        var _month = newValue.getMonth();
        var _date = newValue.getDate();
        var _minute = newValue.getMinutes();
        var _hour = newValue.getHours();
        if (mode === DATETIME || mode === DATE || mode === YEAR) {
            switch (index) {
                case 0:
                    _year = value;
                    break;
                case 1:
                    _month = value;
                    break;
                case 2:
                    _date = value;
                    break;
                case 3:
                    _hour = value;
                    break;
                case 4:
                    _minute = value;
                    break;
                default:
                    break;
            }
        } else if (mode === MONTH) {
            _month = value;
        } else {
            switch (index) {
                case 0:
                    _hour = value;
                    break;
                case 1:
                    _minute = value;
                    break;
                default:
                    break;
            }
        }
        newValue = new Date(_year, _month, _date, _hour, _minute);
        newValue = this._clipDate(newValue);
        this.setState({
            date: newValue
        });
        props.onChange(formatFn(this, newValue));
    },

    _getDefaultMinDate: function () {
        if (!this.defaultMinDate) {
            this.defaultMinDate = new Date(1990, 0, 1, 0, 0, 0);
        }
        return this.defaultMinDate;
    },

    _getDefaultMaxDate: function () {
        if (!this.defaultMaxDate) {
            this.defaultMaxDate = new Date(2020, 11, 31, 23, 59, 0);
        }
        return this.defaultMaxDate;
    },

    _getDate: function () {
        return this.state.date || this._getMinDate() || new Date();
    },

    _getMinYear: function () {
        return this._getMinDate().getFullYear();
    },

    _getMaxYear: function () {
        return this._getMaxDate().getFullYear();
    },

    _getMinMonth: function () {
        return this._getMinDate().getMonth();
    },

    _getMaxMonth: function () {
        return this._getMaxDate().getMonth();
    },

    _getMinDay: function () {
        return this._getMinDate().getDate();
    },

    _getMaxDay: function () {
        return this._getMaxDate().getDate();
    },

    _getMinHour: function () {
        return this._getMinDate().getHours();
    },

    _getMaxHour: function () {
        return this._getMaxDate().getHours();
    },

    _getMinMinute: function () {
        return this._getMinDate().getMinutes();
    },

    _getMaxMinute: function () {
        return this._getMaxDate().getMinutes();
    },

    _getMinDate: function () {
        var minDate = this._isExtendMoment(this.props.minDate);
        return minDate || this._getDefaultMinDate();
    },

    _getMaxDate: function () {
        var maxDate = this._isExtendMoment(this.props.maxDate);
        return maxDate || this._getDefaultMaxDate();
    },

    _getDateData: function () {
        var mode = this.props.mode;
        var date = this._getDate();
        var selYear = date.getFullYear();
        var selMonth = date.getMonth();
        var minDateYear = this._getMinYear();
        var maxDateYear = this._getMaxYear();
        var minDateMonth = this._getMinMonth();
        var maxDateMonth = this._getMaxMonth();
        var minDateDay = this._getMinDay();
        var maxDateDay = this._getMaxDay();
        var years = [];

        for (var i = minDateYear; i <= maxDateYear; i += 1) {
            years.push({
                value: '' + i,
                label: i + '年'
            });
        }

        var yearCol = { key: 'year', props: { children: years } };
        if (mode === YEAR) {
            return [yearCol];
        }

        var months = [];
        var minMonth = 0;
        var maxMonth = 11;

        if (minDateYear === selYear) {
            minMonth = minDateMonth;
        }
        if (maxDateYear === selYear) {
            maxMonth = maxDateMonth;
        }
        for (var i = minMonth; i <= maxMonth; i += 1) {
            months.push({
                value: '' + i,
                label: pad(i + 1) + '月'
            });
        }

        var monthCol = { key: 'month', props: { children: months } };
        if (mode === MONTH) {
            return [monthCol];
        }

        var days = [];
        var minDay = 1;
        var maxDay = getDaysInMonth(date);

        if (minDateYear === selYear && minDateMonth === selMonth) {
            minDay = minDateDay;
        }
        if (maxDateYear === selYear && maxDateMonth === selMonth) {
            maxDay = maxDateDay;
        }

        for (var i = minDay; i <= maxDay; i += 1) {
            days.push({
                value: '' + i,
                label: pad(i) + '日'
            });
        }
        return [
            yearCol,
            monthCol,
            { key: 'day', props: { children: days } }
        ];
    },

    _getTimeData: function () {
        var minHour = 0;
        var maxHour = 23;
        var minMinute = 0;
        var maxMinute = 59;
        var mode = this.props.mode;
        var minuteStep = this.props.minuteStep;
        var date = this._getDate();

        var minDateMinute = this._getMinMinute();
        var maxDateMinute = this._getMaxMinute();
        var minDateHour = this._getMinHour();
        var maxDateHour = this._getMaxHour();
        var hour = date.getHours();

        if (mode === DATETIME) {
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();

            var minDateYear = this._getMinYear();
            var maxDateYear = this._getMaxYear();
            var minDateMonth = this._getMinMonth();
            var maxDateMonth = this._getMaxMonth();
            var minDateDay = this._getMinDay();
            var maxDateDay = this._getMaxDay();

            if (minDateYear === year && minDateMonth === month && minDateDay === day) {
                minHour = minDateHour;
                if (minDateHour === hour) {
                    minMinute = minDateMinute;
                }
            }
            if (maxDateYear === year && maxDateMonth === month && maxDateDay === day) {
                maxHour = maxDateHour;
                if (maxDateHour === hour) {
                    maxMinute = maxDateMinute;
                }
            }
        } else {
            minHour = minDateHour;
            if (minDateHour === hour) {
                minMinute = minDateMinute;
            }
            maxHour = maxDateHour;
            if (maxDateHour === hour) {
                maxMinute = maxDateMinute;
            }
        }

        var hours = [];
        for (var i = minHour; i <= maxHour; i += 1) {
            hours.push({
                value: '' + i,
                label: pad(i) + '时'
            });
        }

        var minutes = [];

        for (var i = minMinute; i <= maxMinute; i += minuteStep) {
            minutes.push({
                value: '' + i,
                label: pad(i) + '分'
            });
        }
        return [
            { key: 'hours', props: { children: hours } },
            { key: 'minutes', props: { children: minutes } }
        ];
    },

    // 获取
    _getValueCols: function () {
        var mode = this.props.mode;
        var date = this._getDate();

        var cols = [];
        var value = [];

        if (mode === YEAR) {
            return {
                cols: this._getDateData(),
                value: ['' + date.getFullYear()]
            };
        }

        if (mode === MONTH) {
            return {
                cols: this._getDateData(),
                value: ['' + date.getMonth()]
            };
        }

        if (mode === DATETIME || mode === DATE) {
            cols = this._getDateData();
            value = ['' + date.getFullYear(), '' + date.getMonth(), '' + date.getDate()];
        }

        if (mode === DATETIME || mode === TIME) {
            cols = cols.concat(this._getTimeData());
            value = value.concat(['' + date.getHours(), '' + date.getMinutes()]);
        }
        return {
            value,
            cols
        };
    },

    _clipDate: function (date) {
        var mode = this.props.mode;
        var minDate = this._getMinDate();
        var maxDate = this._getMaxDate();
        if (mode === DATETIME) {
            if (date.getTime() < minDate.getTime()) {
                return minDate;
            }
            if (date.getTime() > maxDate.getTime()) {
                return maxDate;
            }
        } else if (mode === DATE) {
            if (date.getTime() < minDate.getTime()) {
                return minDate;
            }
            if (date.getTime() > maxDate.getTime()) {
                return maxDate;
            }
        } else {
            var maxHour = maxDate.getHours();
            var maxMinutes = maxDate.getMinutes();
            var minHour = minDate.getHours();
            var minMinutes = minDate.getMinutes();
            var hour = date.getHours();
            var minutes = date.getMinutes();
            if (hour < minHour || (hour === minHour && minutes < minMinutes)) {
                return minDate;
            }
            if (hour > maxHour || (hour === maxHour && minutes > maxMinutes)) {
                return maxDate;
            }
        }
        return date;
    },

    _isExtendMoment: function (date) {
        var mode = this.props.mode;

        if (!date) {
            return '';
        }

        if (mode === MONTH) {
            var _temp = '1970-' + date + '-01';
            return new Date(_temp);
        }

        if (mode === TIME) {
            var _temp = '1970-01-01 ' + date;
            return new Date(_temp);
        }
        return new Date(date);
    },

    // 切换显示状态
    _toggle: function () {
        this.setState({
            visible: !this.state.visible
        });
    },

    _handleClick: function () {
        !this.state.disabled && this._toggle();
    },

    setValue: function (v) {
        var date = v && this._isExtendMoment(v);
        this.setState({
            date: date
        });
        this.initDate = date;
    },

    getValue: function () {
        if (this.state.date === '') {
            return '';
        }
        var result = formatFn(this, this.state.date);
        return result;
    },

    setDisabled: function (v) {
        this.setState({
            disabled: v
        });
    },

    clear: function () {
        this.setState({
            date: ''
        });
        this.initDate = '';
    },

    reset: function () {
        var defaultValue = this.props.defaultValue;
        if (defaultValue) {
            var date = defaultValue && this._isExtendMoment(defaultValue);
            this.setState({
                date: date
            });
            this.initDate = date;
        } else {
            this.clear();
        }
    },
    render: function () {
        var _this = this;
        var value = this._getValueCols().value;
        var cols = this._getValueCols().cols;
        var propsObj = this.props;
        var id = propsObj.id;
        var className = propsObj.className;
        var cancelText = propsObj.cancelText;
        var okText = propsObj.okText;
        var title = propsObj.title;
        var placeholder = propsObj.placeholder;
        var disabled = this.state.disabled;
        var wrapperClasses = classnames({
            'ucs-datepicker': true,
            [className]: !!className
        });

        var inputCls = classnames({
            'ucs-datepicker-text': true,
            'ucs-datepicker-placeholder': !this.state.date,
            'ucs-datepicker-disabled': !!disabled
        });

        var classes = classnames({
            'ucs-datepicker-container': true,
            'ucs-datepicker-hidden': !this.state.visible
        });

        return (
            <div
                id={id}
                className={wrapperClasses}
                onTouchStart={function () {_this._handleClick();}}>
                <div className={inputCls}>
                    {this.state.date ? formatFn(this, this.state.date) : placeholder}
                </div>
                <div className={classes} onTouchStart={function (e) {stopClick(e);}}>
                    <div className="ucs-datepicker-mask" onTouchStart={function () {_this._onMaskClick();}} />
                    <div className="ucs-datepicker-inner">
                        <div className="ucs-datepicker-header">
                            <div className="ucs-datepicker-cancel" onTouchStart={function () {_this._onCancel();}}>{cancelText}</div>
                            <div className="ucs-datepicker-title">{title}</div>
                            <div className="ucs-datepicker-submit" onTouchStart={function () {_this._onOk();}}>{okText}</div>
                        </div>
                        <div className="ucs-datepicker-mask-top">
                            <div className="ucs-datepicker-mask-bottom">
                                <ColumnGroup
                                    disabled={disabled}
                                    selectedValue={value}
                                    onValueChange={function (values, index) {_this._onValueChange(values, index);}}>
                                    {cols}
                                </ColumnGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


module.exports = DatePicker;
