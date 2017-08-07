var classnames = require('classnames');
var Swiper = React.createClass({
    getDefaultProps: function () {
        return {
            dots: true,
            arrows: true,
            autoPlay: false,
            autoPlaySpeed: 3000,
            defaultValue: 0
        };
    },
    getInitialState: function () {
        return {
            translateX: 0,
            pointStart: 0,
            pointEnd: 0,
            value: this.props.defaultValue
        };
    },
    componentDidMount: function () {
        this.onValueChange(this.state.value, 0);
        if(this.props.autoPlay){
            this.playHandler();
        }
    },
    playHandler: function () {
        var _this = this;
        var items = _this.refs.swiper.children;
        var maxIndex = Math.abs(items.length - 1);
        var index;
        _this.timer = setInterval(function () {

            if (_this.state.value < maxIndex) {
                index = _this.state.value + 1;
            } else {
                index = 0;
            }

            _this._onMoveTo(index, 300);


            _this.setState({
                value: index
            });
        }, _this.props.autoPlaySpeed);
    },
    // 选中指定值
    onValueChange: function (value, speed) {
        var index = value;
        this._onMoveTo(index, speed);
    },
    // 移动到指定编号
    _onMoveTo: function (index, speed) {
        var itemWidth = this._getItemWidth();
        if (itemWidth === 0) {
            return;
        }

        var offset = -index * itemWidth;

        this._doTransition(offset, speed);
        this.setState({
            translateX: offset
        });
    },
    // 执行过渡动画
    _doTransition: function (offset, duration) {
        var style = this.refs.swiper.style;
        style.webkitTransitionDuration = duration + 'ms';
        style.mozTransitionDuration = duration + 'ms';
        style.oTransitionDuration = duration + 'ms';
        style.transitionDuration = duration + 'ms';
        style.webkitTransform = 'translate3d(' + offset + 'px, 0, 0)';
        style.mozTransform = 'translate3d(' + offset + 'px, 0, 0)';
        style.oTransform = 'translate3d(' + offset + 'px, 0, 0)';
        style.transform = 'translate3d(' + offset + 'px, 0, 0)';
    },
    _onTouchStart: function (event) {
        var pointX = this._getPoint(event).x;
        this.setState({
            pointStart: pointX,
            pointEnd: pointX
        });
    },
    _onTouchMove: function (event) {
        event.preventDefault();
        var pointX = this._getPoint(event).x;
        var offset = this.state.translateX + (pointX - this.state.pointStart);

        this._doTransition(offset, 0);
        this.setState({
            pointEnd: pointX
        });
    },
    _onTouchEnd: function (event) {
        var items = this.refs.swiper.children;
        var maxIndex = Math.abs(items.length - 1);

        var index;

        if ((this.state.pointEnd - this.state.pointStart) > 50 && this.state.value > 0) {
            index = this.state.value - 1;
        } else if ((this.state.pointEnd - this.state.pointStart) < -50 && this.state.value < maxIndex) {
            index = this.state.value + 1;
        } else {
            index = this.state.value;
        }

        this._onMoveTo(index, 300);

        var onChange = this.props.onChange;

        this.setState({
            value: index
        });
        onChange && onChange(index);
    },
    _getItemWidth: function () {
        var items = this.refs.swiper.children;

        if (!items || items.length === 0) {
            return 0;
        }
        return items[0].offsetWidth;
    },
    // 获取触摸点的当前坐标
    _getPoint: function (event) {
        var touch = event.touches[0];
        return {
            x: touch.pageX,
            y: touch.pageY
        };
    },
    _prevHandler: function (e) {
        e.stopPropagation();
        var items = this.refs.swiper.children;
        var maxIndex = Math.abs(items.length - 1);
        var index;

        if (this.state.value > 0) {
            index = this.state.value - 1;
        } else {
            index = maxIndex;
        }

        this._onMoveTo(index, 300);

        var onChange = this.props.onChange;

        this.setState({
            value: index
        });
        onChange && onChange(index);
    },
    _nextHandler: function (e) {
        e.stopPropagation();
        var items = this.refs.swiper.children;
        var maxIndex = Math.abs(items.length - 1);
        var index;

        if (this.state.value < maxIndex) {
            index = this.state.value + 1;
        } else {
            index = 0;
        }

        this._onMoveTo(index, 300);

        var onChange = this.props.onChange;

        this.setState({
            value: index
        });
        onChange && onChange(index);
    },
    _dotsHandler: function (index, e) {
        e.stopPropagation();
        this._onMoveTo(index, 300);

        var onChange = this.props.onChange;

        this.setState({
            value: index
        });
        onChange && onChange(index);
    },
    render: function () {
        var _this = this;
        return (
            <div className="ucs-swiper"
                onTouchStart={_this._onTouchStart}
                onTouchMove={_this._onTouchMove}
                onTouchEnd={_this._onTouchEnd}
            >
                <div className="swiper-container" ref="swiper">
                    {_this.props.children}
                </div>
                {
                    _this.props.dots ? (
                        <div className="swiper-pagination swiper-pagination-white swiper-pagination-clickable swiper-pagination-bullets">
                            {
                                _this.props.children.map(function (item, index) {
                                    var cls = classnames({'swiper-pagination-bullet': true, 'swiper-pagination-bullet-active': (index === _this.state.value)});
                                    return (
                                        <span key={index} className={cls} onTouchEnd={_this._dotsHandler.bind(_this, index)}></span>
                                    );
                                })
                            }
                        </div>
                    ) : ''
                }
                {
                    _this.props.arrows ? (<div className="swiper-button-prev" onTouchEnd={this._prevHandler}></div>) : ''
                }
                {
                    _this.props.arrows ? (<div className="swiper-button-next" onTouchEnd={this._nextHandler}></div>) : ''
                }
            </div>
        );
    }
});
module.exports = Swiper;
Swiper.Item = React.createClass({
    render: function () {
        return (
            <div className="swiper-item">
                {this.props.children}
            </div>
        );
    }
});
