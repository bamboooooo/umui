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
            onSubmit: null
        };
    },

    getInitialState: function () {
        return {
            className: classnames('ucs-search-value', this.props.className, this.props.disabled ? 'disabled' : ''),
            value: this.props.value !== '' ? this.props.value : this.props.defaultValue,
            disabled: this.props.disabled || false,
            isShowClear: (!this.props.disabled && this.props.value !== '') ? true : false,
            focus: false
        };
    },

    componentDidUpdate: function () {
        const realWidth = this.refs.searchCoverContainerRef.getBoundingClientRect().width;
        if(this.state.focus) {
            this.refs.searchCoverRef.style.width = Math.ceil(realWidth) + 'px';
        }else{
            this.refs.searchCoverRef.style.width = '100%';
        }
    },

    componentDidMount: function () {
        if(this.state.value !== '' && !this.state.disabled){
            this.setState({
                focus: true,
                isShowClear: true
            })
        }
    },

    _onChange: function (e) {
        this.setState({value: e.target.value});
        this._showCloseHandler(this.refs.searchRef.value);
        if(e.target.value !== ''){

        }
        this.props.onChange && this.props.onChange(e);
    },

    _onFocus: function (e) {
        this.setState({
            focus: true
        });
        this.props.onFocus && this.props.onFocus(e);
    },

    _onBlur: function (e) {
        if(this.state.value === ''){
            this.setState({
                focus: false
            });
        }
        this.props.onBlur && this.props.onBlur(e);
    },

    _showCloseHandler: function (value) {
        if (value !== '' && !this.state.disabled) {
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
    _onSubmit: function () {
        event.preventDefault();
        if(this.props.onSubmit){
            this.props.onSubmit(this.state.value);
        }
        this.refs.searchRef.blur();
        return false;
    },

    setValue: function (v) {
        if(this.state.disabled) {
            return;
        }
        this.setState({
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
                disabled: false,
                isShowClear: true
            });
        }
    },

    clear: function () {
        this.setState({value: ''});
    },

    reset: function () {
        if (this.props.defaultValue) {
            this.setState({value: this.props.defaultValue});
        } else {
            this.clear();
        }
    },

    render: function () {
        console.log(this.state.isShowClear);
        var wrapCls = classnames({
            'ucs-search': true,
            'ucs-search-start': this.state.focus
        });
        var spanShowClose = {
            display: this.state.isShowClear ? 'block' : 'none'
        };
        var coverPlaceholderStyle = {
            visibility: this.state.value !== '' ? 'hidden' : 'visible'
        };
        return (
            <form onSubmit={this._onSubmit} action="#" className={wrapCls}>
                <div className="ucs-search-input">
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
                        disabled={this.state.disabled}
                        id={this.props.id}
                        name={this.props.name}
                        value={this.state.value}
                        onChange={this._onChange}
                        onFocus={this._onFocus}
                        onBlur={this._onBlur}
                        onSubmit={this._onSubmit}
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
