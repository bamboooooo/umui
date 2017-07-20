/**
 * Created by Administrator on 2017/6/27.
 */
var classnames = require('classnames');
var Option = require('./Option');
var Picker = React.createClass({
    getDefaultProps: function () {
        return {
            onChange: function () {
                console.log(123);
            },
            dataSource: [],
            valueMember: 'value',
            displayMember: 'label'
        };
    },
    getInitialState: function () {
        return {
            translateY: 0,
            pointStart: 0,
            pointEnd: 0,
            value: this.props.value || this.props.defaultValue
        };
    },
    componentDidMount: function () {
        this.onValueChange(this.state.value, 0);
    },
    componentWillReceiveProps: function (nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value
            });
            this.onValueChange(nextProps.value, 300);
        }
    },
    // 选中指定值
    onValueChange: function (value, speed) {
        var dataSource = this.props.dataSource;
        var displayMember = this.props.displayMember;
        var index = 0;
        for (var i = 0; i < dataSource.length; i++) {
            if (dataSource[i][displayMember] === value) {
                index = i;
                break;
            }
        }
        this._onMoveTo(index, speed);
    },
    // 移动到指定编号
    _onMoveTo: function (index, speed) {
        var itemHeight = this._getItemHeight();
        if (itemHeight === 0) {
            return;
        }

        var offset = -index * itemHeight;

        this._doTransition(offset, speed);
        this.setState({
            translateY: offset
        });
    },
    // 执行过渡动画
    _doTransition: function (offset, duration) {
        var style = this.refs.picker.style;
        style.webkitTransitionDuration = duration + 'ms';
        style.mozTransitionDuration = duration + 'ms';
        style.oTransitionDuration = duration + 'ms';
        style.transitionDuration = duration + 'ms';
        style.webkitTransform = 'translate3d(0, ' + offset + 'px, 0)';
        style.mozTransform = 'translate3d(0, ' + offset + 'px, 0)';
        style.oTransform = 'translate3d(0, ' + offset + 'px, 0)';
        style.transform = 'translate3d(0, ' + offset + 'px, 0)';
    },
    _onTouchStart: function (event) {
        var pointY = this._getPoint(event).y;
        this.setState({
            pointStart: pointY
        });
    },
    _onTouchMove: function (event) {
        event.preventDefault();
        var pointY = this._getPoint(event).y;
        var offset = this.state.translateY + (pointY - this.state.pointStart);

        this._doTransition(offset, 0);
        this.setState({
            pointEnd: pointY
        });
    },
    _onTouchEnd: function (event) {
        var offset = (this.state.pointEnd !== 0)
            ? this.state.translateY + (this.state.pointEnd - this.state.pointStart)
            : 0;
        var items = this.refs.picker.children;
        var itemHeight = items[0] && items[0].offsetHeight;
        var maxIndex = Math.abs(items.length - 1);
        var index = Math.round(offset / itemHeight);

        if (index > 0) {
            index = 0;
        } else {
            index = (Math.abs(offset) >= maxIndex * itemHeight)
                ? maxIndex
                : Math.abs(index);
        }

        this._onMoveTo(index, 300);
        var dataSource = this.props.dataSource;
        var displayMember = this.props.displayMember;
        var onChange = this.props.onChange;
        var value = dataSource[index][displayMember];

        this.setState({
            value: value
        });
        onChange && onChange(value);
    },
    _getItemHeight: function () {
        var items = this.refs.picker.children;

        if (!items || items.length === 0) {
            return 0;
        }
        return items[0].offsetHeight;
    },
    // 获取触摸点的当前坐标
    _getPoint: function (event) {
        var touch = event.touches[0];
        return {
            x: touch.pageX,
            y: touch.pageY
        };
    },
    render: function () {
        var height = this.props.height;
        var isDisabled = this.props.isDisabled;
        var valueMember = this.props.valueMember;
        var displayMember = this.props.displayMember;
        var dataSource = this.props.dataSource;
        var curValue = this.state.value;

        var options = dataSource.map(function (item, index) {
            var className = classnames({
                'ucs-picker-col-item': true,
                'ucs-picker-col-item-selected': item[displayMember] === curValue
            });
            return <Option key={index} value={item[valueMember]} className={className}>{item[displayMember]}</Option>;
        });

        var cls = classnames({
            'ucs-picker-item': true,
            'disabled': 'disabled' in this.props || isDisabled
        });

        return (
            <div className={cls}
                style={{height: height}}
                onTouchStart={this._onTouchStart}
                onTouchMove={this._onTouchMove}
                onTouchEnd={this._onTouchEnd}>
                <div className="ucs-picker-col">
                    <div className="ucs-picker-col-mask"></div>
                    <div className="ucs-picker-col-indicator"></div>
                    <div className="ucs-picker-col-content" ref="picker">
                        {options}
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Picker;
