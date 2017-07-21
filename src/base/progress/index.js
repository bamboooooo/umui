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
            radius: 100,
            border: 10,
            color: ['#ccc', '#f00', '#000'],
            value: 0
        };
    },
    getInitialState: function () {
        return {

        };
    },
    componentDidMount: function () {
        var _this = this;
        var rd = _this.props.radius;
        var bd = _this.props.border;
        var bgc = _this.props.color[0];
        var bdc = _this.props.color[1];
        var fnc = _this.props.color[2];
        var _wrap = _this.refs.progress;
        var _circle = _wrap.querySelector('.circle');
        var _percent = _circle.querySelectorAll('.percent');
        var _left = _percent[0];
        var _right = _percent[1];
        var _num = _wrap.querySelector('.num');

        _wrap.style.width = rd + 'px';
        _wrap.style.height = rd + 'px';

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

        _num.style.width = rd - 2 * bd + 'px';
        _num.style.height = rd - 2 * bd + 'px';
        _num.style.lineHeight = rd - 2 * bd + 'px';
        _num.style.top = bd + 'px';
        _num.style.left = bd + 'px';
        _num.style.fontSize = rd / 5 + 'px';
        _num.style.color = fnc;

        var percent = 0;
        var _value = _this.props.value;
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
        }, 10);
    },
    render: function () {
        return (
            <div className="wrap" ref="progress">
                <div className="circle">
                    <div className="percent left"></div>
                    <div className="percent right wth0"></div>
                </div>
                <div className="num"><span>0</span>%</div>
            </div>
        );
    }
});
module.exports = Progress;
