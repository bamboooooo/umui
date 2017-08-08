var classnames = require('classnames');
var Layer = React.createClass({
    getDefaultProps: function () {
        return {
            className: null,
            id: null,
            confirmText: '确定',
            cancelText: '取消',
            confirmBack: null,
            cancelBack: null,
            isShowClose: true,
            closeBack: null,
            isShow: false
        };
    },
    getInitialState: function () {
        return {
            className: classnames('ucs-layer-container', this.props.className)
        };
    },
    show: function () {
        this.setState({
            isShow: true
        });
    },
    hide: function () {
        this.setState({
            isShow: false
        });
    },
    render: function () {
        var isShow = {display: this.state.isShow ? 'block' : 'none'};
        return (
            <div ref="layer" style={isShow}>
                <div className="ucs-layer-mask"></div>
                <div
                    className={this.state.className}
                    id={this.props.id}>
                    <div className="ucs-layer-body">
                        <a href="javascript:;" className="alert-close" style={{display: this.props.isShowClose ? 'block' : 'none'}} onClick={this.props.closeBack}>×</a>
                        <div className="ucs-layer-title">{this.props.title}</div>
                        <div className="ucs-layer-text">
                            {this.props.children}
                        </div>
                        <div className="ucs-layer-button">
                            <a href="javascript:;" className="ucs-layer-btn confirm" onClick={this.props.confirmBack}>{this.props.confirmText}</a>
                            <a href="javascript:;" className="ucs-layer-btn cancel" onClick={this.props.cancelBack}>{this.props.cancelText}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Layer;
