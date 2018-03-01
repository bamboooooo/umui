var Switch = React.createClass({
    getDefaultProps: function () {
        return {
            id: null,
            className: null,
            checked: false,
            disabled: false,
            onClick: null
        };
    },
    getInitialState: function () {
        return {
            disabled: this.props.disabled ? this.props.disabled : false,
            checked: this.props.checked
        };
    },
    setChecked: function (v) {
        this.setState({
            checked: v
        });
    },
    getChecked: function () {
        return this.state.checked;
    },
    setDisabled: function (v) {
        if (v) {
            this.setState({
                disabled: true
            });
        } else {
            this.setState({
                disabled: false
            });
        }
    },
    reset: function () {
        if (this.props.checked) {
            this.setState({
                checked: true
            });
        } else {
            this.setState({
                checked: false
            });
        }
    },
    _onClick: function () {
        if (this.state.disabled) {
            return;
        }
        this.setChecked(!this.state.checked);
        this.props.onClick && this.props.onClick();
    },
    render: function () {
        var baseCls = 'ucs-switch';
        var cleckedCls = this.state.checked ? baseCls + ' ucs-switch-on' : baseCls;
        var disabledCls = this.state.disabled ? cleckedCls + ' ucs-switch-disabled' : cleckedCls;
        var cls = this.props.className ? disabledCls + ' ' + this.props.className : disabledCls;
        return (
            <span ref="switch" className={cls} id={this.props.id} onClick={this._onClick}>
                <span className="ucs-switch-inner">
                </span>
            </span>
        );
    }
});
module.exports = Switch;
