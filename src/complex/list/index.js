/**
 * 创建人：DuHuiling
 * 创建时间：2017/8/3
 * 说明：List组件
 */
var classnames = require('classnames');
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
            thumb: null,//左边缩略图 src
            extra: null,//右侧内容文字
            arrow: 'right',//箭头方向
            align: 'middle',//内容文字垂直对齐
            activeClass: null,
            touchExtra: '',
            onClick: null,
            touchMove: null
        };
    },
    _onTouchStart: function (e) {
        if(!this.props.touchExtra){
            return;
        }
        // this.props.onTouchStart && this.props.onTouchStart(e);
    },
    _onTouchMove: function (e) {
        if(!this.props.touchExtra){
            return;
        }
        // var _touch = e.touches[0];
        // var _move = {
        //     x: _touch.clientX,
        //     y: _touch.clientY
        // };
        // this._animation(_move);
    },
    _onTouchEnd: function (e) {
        if(!this.props.touchExtra){
            return;
        }
        // var _touch = e.changedTouches[0];
        // var _docWidth = document.documentElement.clientWidth ;
        // var _docHeight = document.documentElement.clientHeight;
        // var tagWidth = this.state.tagSize.width;
        // var tagHeight = this.state.tagSize.height;
        // var _x = 0, _y = 0;
        // if (_touch.clientX >= (_docWidth / 2)) {
        //     _x = _docWidth - tagWidth / 2 - this.state.xSpace;
        // } else {
        //     _x = tagWidth / 2 + this.state.xSpace;
        // }
        // if (_touch.clientY >= _docHeight) {
        //     _y = _docHeight - tagHeight / 2 - this.state.ySpace;
        // } else if (_touch.clientY < (tagHeight / 2 + this.state.ySpace)) {
        //     _y = tagHeight / 2 + this.state.ySpace;
        // } else {
        //     _y = _touch.clientY;
        // }
        // this._animation({
        //     x: _x,
        //     y: _y
        // });
    },
    render: function () {
        var _itemClass = classnames('ucs-list-item', this.props.activeClass, this.props.className);
        var _arrowClass = classnames('iconfont', 'icon-arrow', 'arrow-' + this.props.arrow);
        var _extraClass = classnames('list-extra', 'extra-align-' + this.props.align);
        return (
            <li className={_itemClass} onClick={this.props.onClick}>
                <div className="list-front-layer" onTouchStart={this._onTouchStart} onTouchMove={this._onTouchMove} onTouchEnd={this._onTouchEnd}>
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
                    ? <div className="list-back-layer">{this.props.touchExtra}</div> : ''
                }

            </li>
        );
    }
});
module.exports = List;
