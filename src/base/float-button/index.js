/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/17
 * 说明：漂浮按钮组件
 */
var classnames = require('classnames');
var FloatButton = React.createClass({
    getDefaultProps: function () {
        return {
            move: false
        };
    },
    getInitialState: function () {
        return {
            hide: false,
            xSpace: 10,
            ySpace: 20,
            tagSize: {}
        };
    },
    show: function () {
        this.setState({
            hide: false
        });
    },
    hide: function () {
        this.setState({
            hide: true
        });
    },
    _animation: function (position, callback) {
        var _style = this.refs.float_btn.style;
        var tagWidth = this.state.tagSize.width;
        var tagHeight = this.state.tagSize.height;
        _style.left = (position.x - tagWidth / 2) + 'px';
        _style.top = (position.y - tagHeight / 2) + 'px';
    },
    _onTouchStart: function (e) {
        this.props.onTouchStart && this.props.onTouchStart(e);
    },
    _onTouchMove: function (e) {
        if (!this.props.move) {
            return;
        }
        var _touch = e.touches[0];
        var _move = {
            x: _touch.clientX,
            y: _touch.clientY
        };
        this._animation(_move);
    },
    _onTouchEnd: function (e) {
        if (!this.props.move) {
            return;
        }
        var _touch = e.changedTouches[0];
        var _docWidth = document.documentElement.clientWidth ;
        var _docHeight = document.documentElement.clientHeight;
        var tagWidth = this.state.tagSize.width;
        var tagHeight = this.state.tagSize.height;
        var _x = 0, _y = 0;
        if (_touch.clientX >= (_docWidth / 2)) {
            _x = _docWidth - tagWidth / 2 - this.state.xSpace;
        } else {
            _x = tagWidth / 2 + this.state.xSpace;
        }
        if (_touch.clientY >= _docHeight) {
            _y = _docHeight - tagHeight / 2 - this.state.ySpace;
        } else if (_touch.clientY < (tagHeight / 2 + this.state.ySpace)) {
            _y = tagHeight / 2 + this.state.ySpace;
        } else {
            _y = _touch.clientY;
        }
        this._animation({
            x: _x,
            y: _y
        });
    },
    componentDidMount: function () {
        this.state.tagSize = {
            width: this.refs.float_btn.offsetWidth,
            height: this.refs.float_btn.offsetHeight
        };
    },
    render: function () {
        var _classname = classnames('ucs-float-button', this.props.className, {'ucs-hide': this.state.hide});
        var _textClass = classnames('ucs-float-button-text', {'ucs-float-only-text': !this.props.img});
        var _imgClass = classnames('ucs-float-button-img', {'ucs-float-only-img': !this.props.text});
        return (
            <div ref="float_btn" className={_classname} id={this.props.id} onClick = {this.props.onClick}
                onTouchStart={this._onTouchStart} onTouchMove={this._onTouchMove} onTouchEnd={this._onTouchEnd}>
                {this.props.img
                    ? <p className={_imgClass}><img src={this.props.img}/></p> : ''
                }
                {this.props.text
                    ? <p className={_textClass}>{this.props.text}</p> : ''
                }
            </div>
        );
    }
});
module.exports = FloatButton;
