/**
 * 创建人：DuHuiling
 * 创建时间：2017/8/3
 * 说明：List组件
 */
var classnames = require('classnames');
var Button = require('../../base/button');
var List = React.createClass({
    getDefaultProps: function () {
        return {
            id: null,
            className: null
        };
    },
    render: function () {
        var _class = classnames('ucs-list', this.props.className);
        return (
            <div id={this.props.id} className={_class}>
                <p className="ucs-list-header">{this.props.header}</p>
                <ul>
                    {this.props.children}
                </ul>
                <p className="ucs-list-footer">{this.props.footer}</p>
            </div>
        );
    }
});
List.Item = React.createClass({
    getDefaultProps: function () {
        return {
            className: null,
            thumb: null, // 左边缩略图 src
            extra: null, // 右侧内容文字
            arrow: 'right', // 箭头方向
            align: 'middle', // 内容文字垂直对齐
            activeClassName: null,
            touchExtra: '',
            onClick: null,
            touchMove: null
        };
    },
    getInitialState: function () {
        return {
            startX: 0,
            startY: 0,
            moveArrow: null
        };
    },
    _animation: function (position, callback) {
        var _style = this.refs.float_btn.style;
        var tagWidth = this.state.tagSize.width;
        var tagHeight = this.state.tagSize.height;
        _style.left = (position.x - tagWidth / 2) + 'px';
        _style.top = (position.y - tagHeight / 2) + 'px';
    },
    _onTouchStart: function (e) {
        if (!this.props.touchExtra) {
            return;
        }
        var _touch = e.touches[0];
        this.state.startX = _touch.clientX;
        this.state.startY = _touch.clientY;
    },
    _onTouchMove: function (e) {
        if (!this.props.touchExtra) {
            return;
        }
        var _touch = e.touches[0];
        var _setLeft = this.refs.listBackLayer.offsetWidth;
        var _left = this.refs.listFrontLayer.style.left;
        _left = Number(_left.slice(0, -2));
        if (_touch.clientX < this.state.startX) {
            var _start = _left < 0 ? _touch.clientX - this.state.startX - _setLeft : _touch.clientX - this.state.startX;
            this.refs.listFrontLayer.style.left = _start + 'px';
            this.state.moveArrow = 'left';
        } else {
            this.refs.listFrontLayer.style.left = (_touch.clientX - this.state.startX) + 'px';
            this.state.moveArrow = 'right';
        }
        this.props.touchMove && this.props.touchMove(e, this.state.moveArrow);
    },
    _onTouchEnd: function (e) {
        if (!this.props.touchExtra) {
            return;
        }

        var _setLeft = this.refs.listBackLayer.offsetWidth;
        if (this.state.moveArrow === 'left') {
            this.refs.listFrontLayer.style.left = -_setLeft + 'px';
        } else {
            this.refs.listFrontLayer.style.left = '0px';
        }
    },
    _handleClick: function (e) {
        this.props.onClick && this.props.onClick(e);
    },
    render: function () {
        var _itemClass = classnames('ucs-list-item', this.props.activeClassName, this.props.className);
        var _arrowClass = classnames('iconfont', 'icon-arrow', 'arrow-' + this.props.arrow);
        var _extraClass = classnames('list-extra', 'extra-align-' + this.props.align);
        return (
            <li className={_itemClass}>
                <div className="list-front-layer" ref="listFrontLayer" onClick={this._handleClick} onTouchStart={this._onTouchStart} onTouchMove={this._onTouchMove} onTouchEnd={this._onTouchEnd}>
                    {this.props.thumb
                        ? <div className="list-thumb"><img src={this.props.thumb} alt=""/></div> : ''
                    }
                    <div className="list-left-content">
                        {this.props.children}
                    </div>
                    {this.props.extra
                        ? <div className={_extraClass}>{this.props.extra}</div> : ''
                    }
                    {this.props.arrow !== 'empty'
                        ? <i className={_arrowClass}></i> : ''
                    }
                </div>
                {this.props.touchExtra
                    ? <div className="list-back-layer" ref="listBackLayer">
                        {this.props.touchExtra.map(function (val, index) {
                            if (index < 3) {
                                return <Button value={val.text} onClick={val.onClick} key={index}/>;
                            } else {
                                return ;
                            }
                        })}
                    </div> : ''
                }
            </li>
        );
    }
});
module.exports = List;
