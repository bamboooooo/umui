var classnames = require('classnames');
// 查询样式是否存在
function hasClass (elem, cls) {
    elem = elem || {};
    return new RegExp('\\b' + cls + '\\b').test(elem.className);
}
// 添加样式
function addClass (elem, cls) {
    elem = elem || {};
    hasClass(elem, cls) || (elem.className += ' ' + cls);
    elem.className = elem.className.replace(/^\s|\s$/g, '').replace(/\s+/g, ' ');
    return this;
}
// 删除样式
function removeClass (elem, cls) {
    elem = elem || {};
    if (hasClass(elem, cls)) {
        elem.className = elem.className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)'), '');
    }
    return this;
}
var Progress = React.createClass({
    getDefaultProps: function () {
        return {
            type: 'ring',
            radius: 100,
            border: 10,
            color: ['#ccc', '#f00', '#000'],
            value: 0,
            animate: true,
            speed: 10,
            className: ''
        };
    },
    getInitialState: function () {
        return {
            value: this.props.value
        };
    },
    componentDidMount: function () {
        if (this.props.type === 'ring') {
            this.ringHandler();
        } else {
            this.lineHandler();
        }
    },
    componentDidUpdate: function () {
        if (this.props.type === 'ring') {
            this.ringHandler();
        } else {
            this.lineHandler();
        }
    },
    setValue: function (v) {
        this.setState({
            value: v
        });
    },
    lineHandler: function () {
        var _this = this;
        var _value = _this.state.value;
        var _animate = _this.props.animate;
        var _speed = _this.props.speed;
        var bd = _this.props.border;
        var bgc = _this.props.color[0];
        var bdc = _this.props.color[1];
        var fnc = _this.props.color[2];
        var _wrap = _this.refs.line;
        var _lineBg = _wrap.querySelector('.line-bg');
        var _lineInner = _wrap.querySelector('.line-inner');
        var _info = _wrap.querySelector('.line-info');
        var _num = _info.querySelector('.num-info');

        _lineBg.style.height = bd + 'px';
        _lineBg.style.borderRadius = bd + 'px';
        _lineBg.style.backgroundColor = bgc;

        _lineInner.style.height = bd + 'px';
        _lineInner.style.borderRadius = bd + 'px';
        _lineInner.style.backgroundColor = bdc;

        _info.style.height = bd + 'px';
        _info.style.lineHeight = bd + 'px';
        _info.style.top = -bd + 'px';
        _info.style.color = fnc;

        if (_animate) {
            var range = 0;
            var loading = setInterval(function () {
                if (range === _value) {
                    clearInterval(loading);
                }
                _lineInner.style.width = range + '%';
                _num.childNodes[0].innerHTML = range;
                _info.style.left = range + '%';
                range++;
            }, _speed);
        } else {
            _lineInner.style.width = _value + '%';
            _num.childNodes[0].innerHTML = _value;
            _info.style.left = _value + '%';
        }
    },
    ringHandler: function () {
        var _this = this;
        var _value = _this.state.value;
        var _animate = _this.props.animate;
        var _speed = _this.props.speed;
        var rd = _this.props.radius;
        var bd = _this.props.border;
        var bgc = _this.props.color[0];
        var bdc = _this.props.color[1];
        var fnc = _this.props.color[2];
        var _wrap = _this.refs.ring;
        var _circle = _wrap.querySelector('.ring-circle');
        var _percent = _circle.querySelectorAll('.ring-percent');
        var _left = _percent[0];
        var _right = _percent[1];
        var _info = _wrap.querySelector('.ring-info');
        var _num = _info.querySelector('.num-info');

        _wrap.style.width = rd + 'px';
        _wrap.style.height = rd + 'px';
        _wrap.style.backgroundColor = bgc;

        _circle.style.width = rd + 'px';
        _circle.style.height = rd + 'px';
        _circle.style.border = bd + 'px solid ' + bgc;
        _circle.style.clip = 'rect(0,' + rd + 'px,' + rd + 'px,' + rd / 2 + 'px)';

        _left.style.width = rd + 'px';
        _left.style.height = rd + 'px';
        _left.style.top = -bd + 'px';
        _left.style.left = -bd + 'px';

        _left.style.border = bd + 'px solid ' + bdc;
        _left.style.clip = 'rect(0,' + rd / 2 + 'px,' + rd + 'px,0)';

        _right.style.border = bd + 'px solid ' + bdc;
        _right.style.clip = 'rect(0,' + rd + 'px,' + rd + 'px,' + rd / 2 + 'px)';
        _right.style.width = 0;

        _info.style.width = rd - 2 * bd + 'px';
        _info.style.height = rd - 2 * bd + 'px';
        _info.style.lineHeight = rd - 2 * bd + 'px';
        _info.style.top = bd + 'px';
        _info.style.left = bd + 'px';
        _info.style.fontSize = rd / 5 + 'px';
        _info.style.color = fnc;

        if (_animate) {
            var percent = 0;
            var loading = setInterval(function () {
                if (percent === _value) {
                    clearInterval(loading);
                } else if (percent > 50) {
                    addClass(_circle, 'clip-auto');
                    removeClass(_right, 'wth0');
                    _circle.style.clip = 'rect(auto, auto, auto, auto)';
                    _right.style.width = rd + 'px';
                    _right.style.height = rd + 'px';
                    _right.style.top = -bd + 'px';
                    _right.style.left = -bd + 'px';
                }
                _left.style.webkitTransform = 'rotate(' + (18 / 5) * percent + 'deg)';
                _num.childNodes[0].innerHTML = percent;
                percent++;
            }, _speed);
        } else {
            if (_value > 50) {
                addClass(_circle, 'clip-auto');
                removeClass(_right, 'wth0');
                _circle.style.clip = 'rect(auto, auto, auto, auto)';
                _right.style.width = rd + 'px';
                _right.style.height = rd + 'px';
                _right.style.top = -bd + 'px';
                _right.style.left = -bd + 'px';
            }
            _left.style.webkitTransform = 'rotate(' + (18 / 5) * _value + 'deg)';
            _num.childNodes[0].innerHTML = _value;
        }
    },
    render: function () {
        var classes = classnames({
            'ucs-progress': true,
            [this.props.className]: !!this.props.className
        });
        return (
            <div className={classes}>
                {
                    this.props.type === 'ring' ? (
                        <div className="ring-wrap" ref="ring">
                            <div className="ring-circle">
                                <div className="ring-percent left"></div>
                                <div className="ring-percent right wth0"></div>
                            </div>
                            <div className="ring-info">
                                <span className="num-info"><i>0</i>%</span>
                                {
                                    this.props.children
                                }
                            </div>
                        </div>
                    ) : (
                        <div className="line-wrap" ref="line">
                            <div className="line-bg">
                                <div className="line-inner"></div>
                                <div className="line-info">
                                    <span className="num-info"><i>0</i>%</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
});
module.exports = Progress;
