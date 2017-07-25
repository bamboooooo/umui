var classnames = require('classnames');
var moment = require('moment');
var ColumnGroup = require('./ColumnGroup');
var defaultLocale = require('./locale/zh_CN');

function getFormatter (type) {
    var formatter;
    if (type === 'year') {
        formatter = ('YYYY[年]');
    } else if (type === 'month') {
        formatter = ('YYYY-MM');
    } else if (type === 'time') {
        formatter = ('HH:mm');
    } else if (type === 'datetime') {
        formatter = ('YYYY-MM-DD HH:mm');
    } else {
        formatter = ('YYYY-MM-DD');
    }
    return formatter;
}

function formatFn (instance, value) {
    var { format } = instance.props;
    var type = typeof format;

    if (type === 'string') {
        return value.format(format);
    }

    if (type === 'function') {
        return format(value);
    }

    return value.format(getFormatter(instance.props.mode));
}

var DATETIME = 'datetime';
var DATE = 'date';
var TIME = 'time';
var MONTH = 'month';
var YEAR = 'year';

// 获取当月天数
function getDaysInMonth (now) {
    return now.clone().endOf('month').date();
}

// 补齐格式
function pad (n) {
    return n < 10 ? `0${n}` : `${n}`;
}

// 阻止选择器区域的默认事件
function stopClick (e) {
    e.stopPropagation();
}

// 转成moment格式
function getGregorianCalendar (arg) {
    return moment(arg);
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
            disabled: false,
            value: '',
            defaultValue: '',
            onClick: function () {return null;},
            onChange: function () {return null;},
            onOk: function () {return null;},
            onCancel: function () {return null;},
            onMaskClick: function () {return null;},
            locale: defaultLocale,
            minuteStep: 1,
            prefixCls: 'ucs-datepicker-column-group',
            pickerPrefixCls: 'ucs-datepicker-cascaderpicker',
            displayMember: 'value',
            valueMember: 'value'
        };
    },

    getInitialState: function () {
        var date = this.props.value && this._isExtendMoment(this.props.value);
        var defaultDate = this.props.defaultValue && this._isExtendMoment(this.props.defaultValue);
        this.initDate = this.props.value && this._isExtendMoment(this.props.value);
        return {
            visible: this.props.visible || false,
            date: date || defaultDate,
            disabled: this.props.disabled
        };
    },

    componentWillReceiveProps: function (nextProps) {
        var date = nextProps.value && this._isExtendMoment(nextProps.value);
        var defaultDate = nextProps.defaultValue && this._isExtendMoment(nextProps.defaultValue);
        this.setState({
            date: date || defaultDate,
        });
    },

    // 点击遮罩层
    _onMaskClick: function () {
        var { onMaskClick } = this.props;
        this._onCancel();
        onMaskClick && onMaskClick();
    },

    // 点击取消
    _onCancel: function () {
        var { onCancel } = this.props;
        this._toggle();
        this.setState({
            date: this.initDate
        });
        onCancel && onCancel();
    },

    // 点击确定
    _onOk: function () {
        var { onOk } = this.props;
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
        var { mode } = props;
        var newValue = this._getDate().clone();
        if (mode === DATETIME || mode === DATE || mode === YEAR) {
            switch (index) {
                case 0:
                    newValue.year(value);
                    break;
                case 1:
                    newValue.month(value);
                    break;
                case 2:
                    newValue.date(value);
                    break;
                case 3:
                    newValue.hour(value);
                    break;
                case 4:
                    newValue.minute(value);
                    break;
                default:
                    break;
            }
        } else if (mode === MONTH) {
            newValue.month(value);
        } else {
            switch (index) {
                case 0:
                    newValue.hour(value);
                    break;
                case 1:
                    newValue.minute(value);
                    break;
                default:
                    break;
            }
        }
        newValue = this._clipDate(newValue);
        if (!('date' in props)) {
            this.setState({
                date: newValue
            });
        }
        props.onChange(formatFn(this, newValue));
    },

    _getDefaultMinDate: function () {
        if (!this.defaultMinDate) {
            this.defaultMinDate = getGregorianCalendar([1950, 0, 1, 0, 0, 0]);
        }
        return this.defaultMinDate;
    },

    _getDefaultMaxDate: function () {
        if (!this.defaultMaxDate) {
            this.defaultMaxDate = getGregorianCalendar([2030, 11, 31, 23, 59, 59]);
        }
        return this.defaultMaxDate;
    },

    _getDate: function () {
        return this.state.date || this._getMinDate() || moment(new Date());
    },

    _getMinYear: function () {
        return this._getMinDate().year();
    },

    _getMaxYear: function () {
        return this._getMaxDate().year();
    },

    _getMinMonth: function () {
        return this._getMinDate().month();
    },

    _getMaxMonth: function () {
        return this._getMaxDate().month();
    },

    _getMinDay: function () {
        return this._getMinDate().date();
    },

    _getMaxDay: function () {
        return this._getMaxDate().date();
    },

    _getMinHour: function () {
        return this._getMinDate().hour();
    },

    _getMaxHour: function () {
        return this._getMaxDate().hour();
    },

    _getMinMinute: function () {
        return this._getMinDate().minute();
    },

    _getMaxMinute: function () {
        return this._getMaxDate().minute();
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
        var { locale, mode } = this.props;
        var date = this._getDate();
        var selYear = date.year();
        var selMonth = date.month();
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
                label: i + locale.year
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
                label: i + 1 + locale.month
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
                label: i + locale.day
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
        var { mode, locale, minuteStep } = this.props;
        var date = this._getDate();

        var minDateMinute = this._getMinMinute();
        var maxDateMinute = this._getMaxMinute();
        var minDateHour = this._getMinHour();
        var maxDateHour = this._getMaxHour();
        var hour = date.hour();

        if (mode === DATETIME) {
            var year = date.year();
            var month = date.month();
            var day = date.date();

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
                label: locale.hour ? i + locale.hour : pad(i)
            });
        }

        var minutes = [];

        for (var i = minMinute; i <= maxMinute; i += minuteStep) {
            minutes.push({
                value: '' + i,
                label: locale.minute ? i + locale.minute : pad(i)
            });
        }

        return [
            { key: 'hours', props: { children: hours } },
            { key: 'minutes', props: { children: minutes } }
        ];
    },

    // 获取
    _getValueCols: function () {
        var { mode } = this.props;
        var date = this._getDate();

        var cols = [];
        var value = [];

        if (mode === YEAR) {
            return {
                cols: this._getDateData(),
                value: ['' + date.year()]
            };
        }

        if (mode === MONTH) {
            return {
                cols: this._getDateData(),
                value: ['' + date.month()]
            };
        }

        if (mode === DATETIME || mode === DATE) {
            cols = this._getDateData();
            value = ['' + date.year(), '' + date.month(), '' + date.date()];
        }

        if (mode === DATETIME || mode === TIME) {
            cols = cols.concat(this._getTimeData());
            value = value.concat(['' + date.hour(), '' + date.minute()]);
        }
        return {
            value,
            cols,
        };
    },

    _clipDate: function (date) {
        var { mode } = this.props;
        var minDate = this._getMinDate();
        var maxDate = this._getMaxDate();
        if (mode === DATETIME) {
            if (date.isBefore(minDate)) {
                return minDate.clone();
            }
            if (date.isAfter(maxDate)) {
                return maxDate.clone();
            }
        } else if (mode === DATE) {
            if (date.isBefore(minDate, 'day')) {
                return minDate.clone();
            }
            if (date.isAfter(maxDate, 'day')) {
                return maxDate.clone();
            }
        } else {
            var maxHour = maxDate.hour();
            var maxMinutes = maxDate.minute();
            var minHour = minDate.hour();
            var minMinutes = minDate.minute();
            var hour = date.hour();
            var minutes = date.minute();
            if (hour < minHour || (hour === minHour && minutes < minMinutes)) {
                return minDate.clone();
            }
            if (hour > maxHour || (hour === maxHour && minutes > maxMinutes)) {
                return maxDate.clone();
            }
        }
        return date;
    },

    _isExtendMoment: function (date) {
        var { mode } = this.props;
        if (date instanceof moment) {
            return date;
        }

        if (!date) {
            return '';
        }

        if (mode === MONTH) {
            return moment('1990-' + date, 'YYYY-MM');
        }

        if (mode === TIME) {
            // 如果传递参数不合法，默认转换为时：分
            return moment(date).isValid() ? moment(date, 'YYYY-MM-DD HH:mm') : moment(date, 'HH:mm');
        }
        return moment(date, 'YYYY-MM-DD HH:mm');
    },

    // 切换显示状态
    _toggle: function () {
        this.setState({
            visible: !this.state.visible,
        });
    },

    _handleClick: function () {
        this.props.onClick();
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
        var mode = this.props.mode;
        var result;
        switch (mode) {
            case 'date':
                result = moment(this.state.date).format('YYYY-MM-DD');
                break;
            case 'time':
                result = moment(this.state.date).format('HH:mm');
                break;
            case 'datetime':
                result = moment(this.state.date).format('YYYY-MM-DD HH:mm');
                break;
            case 'year':
                result = moment(this.state.date).format('YYYY');
                break;
            case 'month':
                result = moment(this.state.date).format('MM');
                break;
            default:
                break;
        }
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
        var { value, cols } = this._getValueCols();
        var { id, prefixCls, pickerPrefixCls, className, cancelText, okText, title, placeholder, displayMember, valueMember } = this.props;
        var {disabled} = this.state;
        var wrapperClasses = classnames({
            'ucs-datepicker': true,
            [className]: !!className
        });

        var inputCls = classnames({
            'ucs-picker-text': true,
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
                onClick={function () {_this._handleClick();}}>
                <div className={inputCls}>
                    {this.state.date ? formatFn(this, this.state.date) : placeholder}
                </div>
                <div className={classes} onClick={function (e) {stopClick(e);}}>
                    <div className="ucs-datepicker-mask" onClick={function () {_this._onMaskClick();}} />
                    <div className="ucs-datepicker-inner">
                        <div className="ucs-datepicker-header">
                            <div className="ucs-datepicker-cancel" onClick={function () {_this._onCancel();}}>{cancelText}</div>
                            <div className="ucs-datepicker-title">{title}</div>
                            <div className="ucs-datepicker-submit" onClick={function () {_this._onOk();}}>{okText}</div>
                        </div>
                        <div className="ucs-datepicker-mask-top">
                            <div className="ucs-datepicker-mask-bottom">
                                <ColumnGroup
                                    prefixCls={prefixCls}
                                    pickerPrefixCls={pickerPrefixCls}
                                    disabled={disabled}
                                    displayMember={displayMember}
                                    valueMember={valueMember}
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
