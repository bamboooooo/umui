var classnames = require('classnames');
var PullRefresh = React.createClass({
    getDefaultProps: function () {
        return {
            id: null,
            className: null,
            distance: '100',
            direction: 'down',
            onRefresh: null
        };
    },
    getInitialState: function () {
        return {
            translateY: 0,
            pointStart: 0,
            pointEnd: 0,
            pullTopState: 'pull',
            pullBottomState: 'pull'
        };
    },
    componentDidMount: function () {
        var _topHeight = this.refs.pullrefreshTop && this.refs.pullrefreshTop.getBoundingClientRect().height;
        this._top = Math.ceil(_topHeight);
        var _bottomHeight = this.refs.pullrefreshBottom && this.refs.pullrefreshBottom.getBoundingClientRect().height;
        this._bottom = Math.ceil(_bottomHeight);
    },
    _getPoint: function (event) {
        var touch = event.touches[0];
        return {
            y: touch.pageY
        };
    },
    _doTransition: function (offset, duration) {
        var style = this.pullRefreshSrcollerRef.style;
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
        if (this.props.direction === 'down' || this.props.direction === 'both') {
            if (offset > Number(this.props.distance)) {
                this.setState({
                    pullTopState: 'release'
                });
            } else {
                this.setState({
                    pullTopState: 'pull'
                });
            }
        }
        if (this.props.direction === 'up' || this.props.direction === 'both') {
            if (-offset > Number(this.props.distance)) {
                this.setState({
                    pullBottomState: 'release'
                });
            } else {
                this.setState({
                    pullBottomState: 'pull'
                });
            }
        }
    },
    _onTouchEnd: function (event) {
        var offset = this.state.translateY + (this.state.pointEnd - this.state.pointStart);
        if (this.props.direction === 'down') {
            if (offset > Number(this.props.distance)) {
                this._doTransition(this._top, 300);
                this.setState({
                    pullTopState: 'loading'
                });
                this.onRefresh();
            } else {
                this._doTransition(0, 300);
            }
        }
        if (this.props.direction === 'up') {
            if (-offset > Number(this.props.distance)) {
                this._doTransition(-this._bottom, 300);
                this.setState({
                    pullBottomState: 'loading'
                });
                this.onRefresh();
            } else {
                this._doTransition(0, 300);
            }
        }
    },
    onRefresh: function () {
        this.props.onRefresh && this.props.onRefresh(this.onRefreshCallback);
    },
    onRefreshCallback: function () {
        this._doTransition(0, 300);
    },
    render: function () {
        var _this = this;
        var pullrefreshPullTopStyle,
            pullrefreshReleaseTopStyle,
            pullrefreshLoadingTopStyle,
            pullrefreshPullBottomStyle,
            pullrefreshReleaseBottomStyle,
            pullrefreshLoadingBottomStyle;
        if (this.state.pullTopState === 'pull') {
            pullrefreshPullTopStyle = {
                display: 'block'
            };
            pullrefreshReleaseTopStyle = {
                display: 'none'
            };
            pullrefreshLoadingTopStyle = {
                display: 'none'
            };
        } else if (this.state.pullTopState === 'loading') {
            pullrefreshPullTopStyle = {
                display: 'none'
            };
            pullrefreshReleaseTopStyle = {
                display: 'none'
            };
            pullrefreshLoadingTopStyle = {
                display: 'block'
            };

        } else if (this.state.pullTopState === 'release') {
            pullrefreshPullTopStyle = {
                display: 'none'
            };
            pullrefreshReleaseTopStyle = {
                display: 'block'
            };
            pullrefreshLoadingTopStyle = {
                display: 'none'
            };
        }
        if (this.state.pullBottomState === 'pull') {
            pullrefreshPullBottomStyle = {
                display: 'block'
            };
            pullrefreshReleaseBottomStyle = {
                display: 'none'
            };
            pullrefreshLoadingBottomStyle = {
                display: 'none'
            };
        } else if (this.state.pullBottomState === 'loading') {
            pullrefreshPullBottomStyle = {
                display: 'none'
            };
            pullrefreshReleaseBottomStyle = {
                display: 'none'
            };
            pullrefreshLoadingBottomStyle = {
                display: 'block'
            };

        } else if (this.state.pullBottomState === 'release') {
            pullrefreshPullBottomStyle = {
                display: 'none'
            };
            pullrefreshReleaseBottomStyle = {
                display: 'block'
            };
            pullrefreshLoadingBottomStyle = {
                display: 'none'
            };
        }
        return (
            <div ref="pullRefreshRef" id={this.props.id} className={classnames('ucs-pullrefresh', this.props.className)}>
                <div className="ucs-pullrefresh-scroller"
                    ref={function (pullRefreshSrcollerRef) {_this.pullRefreshSrcollerRef = pullRefreshSrcollerRef;}}
                    onTouchStart={this._onTouchStart}
                    onTouchMove={this._onTouchMove}
                    onTouchEnd={this._onTouchEnd}>
                    { (this.props.direction === 'down' || this.props.direction === 'both') && <div className="ucs-pullrefresh-control-top" ref="pullrefreshTop">
                        <div className="ucs-pullrefresh-control-top-icon">
                            <div className="ucs-pullrefresh-control-pull" style={pullrefreshPullTopStyle}>
                                <span>下拉可以刷新</span>
                            </div>
                            <div className="ucs-pullrefresh-control-release" style={pullrefreshReleaseTopStyle}>
                                <span>松开立即刷新</span>
                            </div>
                        </div>
                        <div className="ucs-pullrefresh-control-top-loading" style={pullrefreshLoadingTopStyle}>
                            <span>加载中...</span>
                        </div>
                    </div>}
                    <div className="ucs-pullrefresh-list">
                        {this.props.children}
                    </div>
                    { (this.props.direction === 'up' || this.props.direction === 'both') && <div className="ucs-pullrefresh-control-bottom" ref="pullrefreshBottom">
                        <div className="ucs-pullrefresh-control-bottom-icon">
                            <div className="ucs-pullrefresh-control-pull" style={pullrefreshPullBottomStyle}>
                                <span>上拉可以刷新</span>
                            </div>
                            <div className="ucs-pullrefresh-control-release" style={pullrefreshReleaseBottomStyle}>
                                <span>松开立即刷新</span>
                            </div>
                        </div>
                        <div className="ucs-pullrefresh-control-bottom-loading" style={pullrefreshLoadingBottomStyle}>
                            <span>加载中...</span>
                        </div>
                    </div>}
                </div>
            </div>
        );
    }
});
module.exports = PullRefresh;
