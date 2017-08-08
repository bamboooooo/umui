var classnames = require('classnames');
var ActionSheet = React.createClass({
    getDefaultProps: function () {
        return {
            className: null,
            id: null,
            option: [],
            title: '',
            cancelButtonIndex: null,
            maskClosable: true,
            onClick: null,
            isShow: false
        };
    },
    getInitialState: function () {
        return {
            className: classnames('ucs-actionsheet-container', this.props.className)
        };
    },
    _closeMask: function () {
        if (this.props.maskClosable) {
            this.setState({
                isShow: false
            })
        }
    },
    _onClick: function (index) {
        this.props.onClick && this.props.onClick(index);
    },
    show: function () {
        this.setState({
            isShow: true
        })
    },
    hide: function () {
        this.setState({
            isShow: false
        })
    },
    render: function () {
        var optionArray = this.props.option;
        var _this = this;
        var isShow = {display: this.state.isShow? 'block' : 'none'};
        return (
            <div>
                <div className="ucs-actionsheet-mask" onClick={this._closeMask} style={isShow}>{this.props.title}</div>
                <aside
                    id={this.props.id}
                    className={this.state.className}
                    style={isShow}>
                    <ul>
                        <li style={{display: this.props.title === '' ? 'none' : 'block'}} className="ucs-actionsheet-title">{this.props.title}</li>
                        {optionArray.map(function (item, index) {
                            return (
                                <li key={index} onClick={_this._onClick.bind(_this, index)}>{item.text}</li>
                            );
                        })}
                    </ul>
                </aside>
            </div>
        );
    }
});
module.exports = ActionSheet;
