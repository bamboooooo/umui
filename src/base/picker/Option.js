/**
 * Created by Administrator on 2017/7/11.
 */
var Option = React.createClass({
    render: function () {
        return <div className={this.props.className} value={this.props.value}>{this.props.children}</div>;
    }
});
module.exports = Option;
