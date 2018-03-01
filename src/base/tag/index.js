/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/19
 * 说明：
 * 1.角标用于提示，提醒等
 * 2.有新消息或内容有更新时，提醒用户查看
 */
var classnames = require('classnames');
var Tag = React.createClass({
    getDefaultProps: function () {
        return {
            id: null,
            className: null,
            value: null
        };
    },
    getInitialState: function () {
        return {
            value: this.props.value,
            hide: false
        };
    },
    setValue: function (v) {
        this.state.value = v;
        this.forceUpdate();
    },
    getValue: function () {
        return this.state.value;
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
    render: function () {
        var _class = classnames('ucs-tag', {'ucs-hide': this.state.hide}, this.props.className);
        return (
            <span id={this.props.id} className={_class}>
                {this.state.value
                    ? <i>{this.state.value}</i> : ''
                }
            </span>
        );
    }
});
module.exports = Tag;
