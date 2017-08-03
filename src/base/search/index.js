var classnames = require('classnames');

var Search = React.createClass({
    getDefaultProps: function () {
        return {
            className: '',
            id: null,
            defaultValue: '',
            value: '',
            disabled: false,
            name: null,
            placeholder: '搜索',
            onChange: null,
            onFocus: null,
            onBlur: null,
            onSubmit: null,
            onClick: null
        };
    },

    getInitialState: function () {
        return {
            className: classnames('ucs-search-value', this.props.className),
            value: this.props.value !== '' ? this.props.value : this.props.defaultValue,
            isShowClear: (this.props.value !== '' && !this.props.disabled) || false,
            disabled: this.props.disabled || false,
            focus: false
        };
    },

    componentDidMount: function () {
        if (this.state.value !== '') {
            this.setState({
                focus: true
            });
            !this.state.disabled &&
            this.setState({
                isShowClear: true
            });
        }
    },

    componentDidUpdate: function () {
        var realWidth = this.refs.searchCoverContainerRef.getBoundingClientRect().width;
        if (this.state.focus) {
            this.refs.searchCoverRef.style.width = Math.ceil(realWidth) + 'px';
        } else {
            this.refs.searchCoverRef.style.width = '100%';
        }
    },

    _onChange: function (e) {
        this.setState({
            value: e.target.value
        });
        this._showCloseHandler(this.refs.searchRef.value);
        this.props.onChange && this.props.onChange(e);
    },

    _onFocus: function (e) {
        this.setState({
            focus: true
        });
        this.props.onFocus && this.props.onFocus(e);
    },

    _onBlur: function (e) {
        if (this.state.value === '') {
            this.setState({
                focus: false
            });
        }
        this.props.onBlur && this.props.onBlur(e);
    },

    _onSubmit: function (e) {
        e.preventDefault();
        this.props.onSubmit && this.props.onSubmit(this.state.value);
    },

    _onClick: function () {
        this.props.onClick && this.props.onClick(this.state.value);
    },

    _showCloseHandler: function (value) {
        if (value !== '') {
            this.setState({
                isShowClear: true
            });
        } else {
            this.setState({
                isShowClear: false
            });
        }
    },

    _clearClick: function (e) {
        this.clear();
        this.setState({isShowClear: false});
        this.refs.searchRef.focus();
    },

    _onCancel: function () {
        this.clear();
        this.setState({
            focus: false,
            isShowClear: false
        });
    },

    setValue: function (v) {
        !this.state.disabled && this.setState({
            value: v,
            focus: true,
            isShowClear: true
        });
    },

    getValue: function () {
        return this.state.value;
    },

    setDisabled: function (v) {
        if (v) {
            this.setState({
                disabled: true,
                isShowClear: false
            });
        } else {
            this.setState({
                disabled: false
            });
            if (this.state.value === '') {
                this.setState({
                    isShowClear: false
                });
            } else {
                this.setState({
                    isShowClear: true
                });
            }
        }
    },

    clear: function () {
        if (!this.state.disabled) {
            this.setState({
                value: '',
                isShowClear: false
            });
        }
    },

    reset: function () {
        if (!this.state.disabled) {
            if (this.props.defaultValue) {
                this.setState({value: this.props.defaultValue});
            } else {
                this.clear();
            }
        }
    },

    render: function () {
        var wrapCls = classnames({
            'ucs-search': true,
            'ucs-search-focus': this.state.focus
        });
        var spanShowClose = {
            display: this.state.isShowClear && !this.state.disabled ? 'block' : 'none'
        };
        var coverPlaceholderStyle = {
            visibility: this.state.value !== '' ? 'hidden' : 'visible'
        };
        return (
            <form onSubmit={this._onSubmit} action="#" className={wrapCls}>
                <div className="ucs-search-input" onClick={this._onClick}>
                    <div className="ucs-search-cover" ref="searchCoverRef">
                        <span ref="searchCoverContainerRef">
                            <i className="ucs-search-cover-icon"></i>
                            <span className="ucs-search-cover-placeholder" style={coverPlaceholderStyle}>{this.props.placeholder}</span>
                        </span>
                    </div>
                    <input
                        ref="searchRef"
                        type="search"
                        className={this.state.className}
                        id={this.props.id}
                        name={this.props.name}
                        disabled={this.state.disabled}
                        value={this.state.value}
                        onChange={this._onChange}
                        onFocus={this._onFocus}
                        onBlur={this._onBlur}
                    />
                    <a href="javascript:;" onClick={this._clearClick}>
                        <span className="ucs-search-showClose" style={spanShowClose}></span>
                    </a>
                </div>
                <div className="ucs-search-cancel ucs-search-cancel-anim" onClick={this._onCancel}>取消</div>
            </form>
        );
    }
});

module.exports = Search;
