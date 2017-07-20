/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/20
 * 说明：Toast组件
 * 1. 自动消失弹窗组件
 * 2. 轻量级反馈/提示，可以用来显示不会打断用户操作的内容
 */
var classnames = require('classnames');
var Toast = React.createClass({
    getDefaultProps: function () {
        return {
            content: null,
            duration: 3000,
            mask: true,
            onClose: null
        };
    },
    getInitialState: function () {
        return {
            hide: false
        };
    },
    render: function () {
        var _class = classnames('ucs-toast', {'ucs-hide': this.state.hide}, this.props.className);
        return (
            <div className={_class}>1234564<br/>1111111</div>
        );
    }
});
module.exports = Toast;
