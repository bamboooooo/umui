var classnames = require('classnames');
var Button = React.createClass({
    getDefaultProps: function () {
        return {
            id: null,
            className: null,
            name: null,
            disabled: false,
            onClick: null
        };
    },
    getInitialState: function () {
        return {
            className: classnames('ucs-button', this.props.className, this.props.disabled ? 'disabled' : ''),
            disabled: this.props.disabled ? this.props.disabled : false,
            value: this.props.value
        };
    },
    componentWillReceiveProps: function (newProps) {
        if (newProps !== this.props) {
            this.setState({
                value: newProps.value,
                className: classnames('ucs-button', newProps.className),
                disabled: newProps.disabled
            });
        }
    },
    _onClick: function () {
        this.props.onClick && this.props.onClick();
    },
    setValue: function (v) {
        this.setState({
            value: v
        });
    },
    setDisabled: function (v) {
        if (v) {
            this.setState({
                className: classnames(this.state.className, 'disabled'),
                disabled: true
            });
        } else {
            this.setState({
                className: classnames('ucs-button', this.props.className),
                disabled: false
            });
        }
    },
    render: function () {
        return (
            <button ref="button" id={this.props.id} name={this.props.name} className={this.state.className} disabled={this.state.disabled} onClick={this._onClick}>{this.state.value}</button>
        );
    }
});
module.exports = Button;
