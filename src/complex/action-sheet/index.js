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
            onClick: null
        };
    },
    getInitialState: function () {
        return {
            className: classnames('ucs-actionsheet-container', this.props.className)
        };
    },
    _closeMask: function () {
        if (this.props.maskClosable) {
            this.refs.mask.style.display = 'none';
            this.refs.actionSheet.style.display = 'none';
        }
    },
    _onClick: function (index) {
        this.props.onClick && this.props.onClick(index);
    },
    show: function () {
        this.refs.mask.style.display = 'block';
        this.refs.actionSheet.style.display = 'block';
    },
    hide: function () {
        this.refs.mask.style.display = 'none';
        this.refs.actionSheet.style.display = 'none';
    },
    render: function () {
        var optionArray = this.props.option;
        var _this = this;
        return (
            <div>
                <div className="ucs-actionsheet-mask" onClick={this._closeMask} ref="mask">{this.props.title}</div>
                <aside
                    id={this.props.id}
                    className={this.state.className}
                    ref='actionSheet'>
                    <ul>
                        <li style={{display: this.props.title === '' ? 'none' : 'block'}} className="ucs-actionsheet-title">{this.props.title}</li>
                        {optionArray.map(function (item, index) {
                            return (
                                <li key={index} onClick={_this._onClick.bind(_this, index + 1)}>{item.text}</li>
                            );
                        })}
                    </ul>
                </aside>
            </div>
        );
    }
});
module.exports = ActionSheet;
