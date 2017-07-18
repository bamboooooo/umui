/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/17
 * 说明：漂浮按钮组件
 */
var classnames = require('classnames');
var FloatButton = React.createClass({
    getDefaultProps: function () {
        return {

        };
    },
    getInitialState: function () {
        return {
            hide: false
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
    render: function () {
        var _classname = classnames('ucs-float-button', this.props.className, {'ucs-hide': this.state.hide});
        var _textClass = classnames('ucs-float-button-text', {'ucs-float-only-text': !this.props.img});
        var _imgClass = classnames('ucs-float-button-img', {'ucs-float-only-img': !this.props.text});
        return (
            <div className={_classname} id={this.props.id} onClick = {this.props.onClick}>
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
