var classnames = require('classnames');
var Result = React.createClass({
    getDefaultProps: function () {
        return {
            img: '',
            title: '',
            message: '',
            sign: 'icon-xx'
        };
    },
    render: function () {
        var _this = this;
        var cls = classnames({
            'ucs-result-pic': true,
            [_this.props.sign]: !!_this.props.sign
        });
        return (
            <div className="ucs-result">
                <div className={cls}>
                    {_this.props.img}
                </div>
                <div className="ucs-result-title">{_this.props.title}</div>
                <div className="ucs-result-message">{_this.props.message}</div>
            </div>
        );
    }
});
module.exports = Result;
