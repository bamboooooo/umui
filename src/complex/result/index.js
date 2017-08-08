var Result = React.createClass({
    getDefaultProps: function () {
        return {
            img: '',
            title: '',
            message: ''
        };
    },
    render: function () {
        return (
            <div className="ucs-result">
                <div className="ucs-result-pic">
                    {this.props.img}
                </div>
                <div className="ucs-result-title">{this.props.title}</div>
                <div className="ucs-result-message">{this.props.message}</div>
            </div>
        );
    }
});
module.exports = Result;
