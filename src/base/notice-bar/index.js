var classnames = require('classnames');
var NoticeBar = React.createClass({
    getInitialState: function () {
        return {
            className: classnames('ucs-noticeBar', this.props.className),
            displayCloseBtn: this.props.displayCloseBtn,
            showNoticeBar: true,
            value: this.props.value
        };
    },
    getDefaultProps: function () {
        return {
            className: '',
            displayCloseBtn: true,
            id: null,
            scroll: false,
            scrollSpeed: 50,
            value: '这是一条通告信息',
            onClick: null,
            onClose: null
        };
    },
    componentDidUpdate: function () {
        var _wrap = this.refs.ucsSeamlessScroll;
        var _wrapIn = this.refs.ucsSeamlessScrollIn;
        var _block1 = this.refs.seamlessScrollList1;
        var _block2 = this.refs.seamlessScrollList2;
        _block2.innerHTML = '';
        var _scrollBlock = _block1.getElementsByTagName('p')[0];
        var _scrollBlockWidth = _scrollBlock.offsetWidth;
        if (_scrollBlock.offsetWidth < _wrap.offsetWidth) {
            return;
        } else {
            _block2.innerHTML = _block1.innerHTML;
            _block2.getElementsByTagName('p')[0].style.width = _scrollBlockWidth + 'px';
            _wrapIn.style.width = _scrollBlockWidth * _wrapIn.getElementsByTagName('p').length + 'px';
        }
    },
    componentDidMount: function () {
        var _wrap = this.refs.ucsSeamlessScroll;
        var _wrapIn = this.refs.ucsSeamlessScrollIn;
        var _block1 = this.refs.seamlessScrollList1;
        var _block2 = this.refs.seamlessScrollList2;
        var _scrollBlock = _block1.getElementsByTagName('p')[0];
        var _speed = this.props.scrollSpeed;

        var _scrollBlockWidth = _scrollBlock.offsetWidth;
        if (_scrollBlock.offsetWidth < _wrap.offsetWidth) {
            return;
        } else {
            _block2.innerHTML = _block1.innerHTML;
            _block2.getElementsByTagName('p')[0].style.width = _scrollBlockWidth + 'px';
            _wrapIn.style.width = _scrollBlockWidth * _wrapIn.getElementsByTagName('p').length + 'px';
        }

        /**
         * @description 无缝滚动函数
         * @return {undefined}
         * */
        function seamlessScroll () {
            if (_block2.offsetWidth <= _wrap.scrollLeft) {
                _wrap.scrollLeft -= _block1.offsetWidth;
            } else {
                _wrap.scrollLeft++;
            }
        }
        // 启动定时器
        if (this.props.scroll) {
            var timer = setInterval(seamlessScroll, _speed);
        }
        // 触摸点击控制滚动
        _wrap.addEventListener('click', function () {
            if (this.props.scroll) {
                if (timer) {
                    clearInterval(timer);
                    timer = null;
                } else {
                    timer = setInterval(seamlessScroll, _speed);
                }
            }
        }.bind(this), false);
    },
    // 获取一个特定元素(elem)的样式属性(name)
    _getStyle: function (elem, name) {
        // 如果该属性存在于 style[]中，则它最近被设置过(且就是当前的)
        if (elem.style[name]) {
            return elem.style[name];
        } else if (elem.currentStyle) { // 否则，尝试 IE 的方式
            return elem.currentStyle[name];
        } else if (document.defaultView && document.defaultView.getComputedStyle) { // 或者 W3C 的方法，如果存在的话
            // 它使用传统的"text-Align"风格的规则书写方式，而不是"textAlign"
            name = name.replace(/([A-Z])/g, '-$1');
            name = name.toLowerCase();
            // 获取 style 对象并取得属性的值(如果存在的话)
            var s = document.defaultView.getComputedStyle(elem, '');
            return s && s.getPropertyValue(name);
            // 否则，就是在使用其它的浏览器
        } else {
            return null;
        }
    },
    _showCloseClick: function () {
        this.setState({
            showNoticeBar: false,
            displayCloseBtn: false
        });
        this.props.onClose && this.props.onClose();
    },
    _clickHandler: function () {
        this.props.onClick && this.props.onClick();
    },

    /**
     * @description 设置通告信息内容
     * @param {String} v 设置通告信息内容
     * @return {undefined} void
     * */
    setValue: function (v) {
        this.setState({value: v});
    },
    show: function () {
        this.setState({showNoticeBar: true});
    },
    hide: function () {
        this.setState({showNoticeBar: false});
    },
    render: function () {
        // 是否显示关闭按钮
        var spanShowClose = {
            display: this.state.displayCloseBtn ? 'block' : 'none'
        };
        // 是否显示消息滚动条
        var showNoticeBar = {
            display: this.state.showNoticeBar ? 'block' : 'none'
        };
        // 关闭按钮
        var showClose = (<a href="javascript:;" onClick={this._showCloseClick} className="ucs-showClose" style={spanShowClose}><span>×</span></a>);

        return (
            <div className={this.state.className} style={showNoticeBar} onClick={this._clickHandler}>
                <div className="ucs-seamless-scroll" ref="ucsSeamlessScroll">
                    <div className="ucs-seamless-scroll-in" ref="ucsSeamlessScrollIn">
                        <div className="ucs-seamless-scroll-list" ref="seamlessScrollList1">
                            <p>{this.state.value}</p>
                        </div>
                        <div className="ucs-seamless-scroll-list" ref="seamlessScrollList2">
                        </div>
                    </div>
                    {showClose}
                </div>
            </div>

        );
    }
});
module.exports = NoticeBar;
