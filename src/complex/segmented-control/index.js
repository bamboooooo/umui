/**
 * 创建人：DuHuiling
 * 创建时间：2017/8/4
 * 说明：SegmentedControl组件
 *      将容器平均分成若干等份
 */
var classnames = require('classnames');
var SegmentedControl = React.createClass({
    getDefaultProps: function () {
        return {
            id: null,
            displayIcon: true,
            overflowNum: 5,
            selectedIndex: 1,
            values: [],
            onClick: null
        };
    },
    getInitialState: function () {
        return {
            active: this.props.selectedIndex - 1,
            itemWrapWidth: 0,
            itemWidth: 0
        };
    },
    _handlerClick: function (index) {
        this.setState({
            active: index
        });
        this.props.onClick && this.props.onClick(index);
    },
    getValue: function () {
        return this.state.active;
    },
    setValue: function (v) {
        this.setState({
            active: v
        });
    },
    componentDidMount: function () {
        var _minWidth, _itemWidth, len = this.props.values.length;
        if (len <= this.props.overflowNum) {
            _minWidth = len;
            _itemWidth = document.body.offsetWidth / len;
        } else {
            _minWidth = this.props.overflowNum;
            _itemWidth = document.body.offsetWidth / this.props.overflowNum;
        }
        this.setState({
            itemWrapWidth: 100 / _minWidth * len,
            itemWidth: _itemWidth
        });
    },
    render: function () {
        var _this = this;
        var _class = classnames('ucs-segmented-control', this.props.className);
        return (
            <div className={_class} id={this.props.id}>
                {this.props.values.length > 0
                    ? (
                        <div className='ucs-segmented-item-wrap' ref='segmentedWrap' style={{'width': _this.state.itemWrapWidth + '%'}}>
                            {this.props.values.map(function (val, index) {
                                return (
                                    <a href='javascript: void (0)' key={index}
                                        className={index === _this.state.active ? 'active' : ''}
                                        style={{'width': _this.state.itemWidth + 'px'}}
                                        onClick={_this._handlerClick.bind(_this, index)}>
                                        {_this.props.displayIcon
                                            ? <i className={'iconfont icon-' + val.icon}></i> : ''
                                        }
                                        {val.text}
                                    </a>
                                );
                            })
                            }
                        </div>
                    ) : ''
                }
            </div>
        );
    }
});
module.exports = SegmentedControl;
