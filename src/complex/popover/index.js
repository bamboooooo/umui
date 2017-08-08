var classnames = require('classnames');
var Popover = React.createClass({
    getDefaultProps: function () {
        return {
            visible: false,
            displayMaskLayer: true,
            onVisibleChange: null,
            className: '',
            overlayStyle: {left: 0, top: 0},
            placement: 'bottomLeft',
            overlay: [],
            onSelect: null,
            defaultValue: '',
            id: '',
            autoSlideUp: true,
            style: {}
        };
    },
    getInitialState: function () {
        return {
            visible: this.props.visible,
            value: this.props.defaultValue
        };
    },
    componentDidMount: function () {
        this._layer = document.createElement('div');
        document.body.appendChild(this._layer);
        this._renderLayer();
    },
    componentDidUpdate: function () {
        this._renderLayer();
    },
    setValue: function (v) {
        this.setState({
            value: v
        });
    },
    getValue: function () {
        return this.state.value;
    },
    _renderLayer: function () {
        var layerElement = this.renderLayer();

        if (layerElement === null) {
            ReactDOM.render(<noscript />, this._layer);
        } else {
            ReactDOM.render(layerElement, this._layer);
        }
    },
    renderLayer: function () {
        var _this = this;

        var maskCls = classnames({
            'ucs-popover-mask': true,
            'ucs-popover-mask-hidden': !_this.props.displayMaskLayer || (_this.props.displayMaskLayer && !_this.state.visible)
        });
        var popoverCls = classnames({
            'ucs-popover': true,
            'ucs-popover-hidden': !_this.state.visible,
            ['ucs-popover-placement-' + _this.props.placement]: !!_this.props.placement,
            [_this.props.className]: !!_this.props.className
        });

        return (
            <div>
                <div className={maskCls} onClick={_this.props.autoSlideUp ? _this.clickHandler : ''}></div>
                <div id={_this.props.id} className={popoverCls} style={_this.props.overlayStyle} onClick={_this.clickHandler}>
                    <div className="ucs-popover-content">
                        <div className="ucs-popover-arrow"></div>
                        <div className="ucs-popover-inner">
                            {
                                _this.props.overlay.map(function (item, index) {
                                    return (
                                        <div key={index} className="ucs-popover-item" value={item.props.value} onClick={_this.onSelect.bind(_this, item.props.value)}>
                                            {
                                                item
                                            }
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    clickHandler: function () {
        this.props.onVisibleChange && this.props.onVisibleChange();
        this.setState({
            visible: !this.state.visible
        });
    },
    onSelect: function (v) {
        this.setState({
            value: v
        }, function () {
            this.props.onSelect && this.props.onSelect();
        });
    },
    clear: function () {
        this.setState({
            value: ''
        });
    },
    reset: function () {
        this.setState({
            value: this.props.defaultValue
        });
    },
    show: function () {
        this.setState({
            visible: true
        });
    },
    hide: function () {
        this.setState({
            visible: false
        });
    },
    render: function () {
        return (
            <div ref="popover" onClick={this.clickHandler} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
});
module.exports = Popover;

Popover.Item = React.createClass({
    getDefaultProps: function () {
        return {
            disabled: false
        };
    },
    clickHandler: function (e) {
        if (this.props.disabled) {
            e.stopPropagation();
            return;
        }
    },
    render: function () {
        return (
            <div className="ucs-popover-item-container" onClick={this.clickHandler}>
                <span className="ucs-popover-item-icon" aria-hidden="true">
                    {this.props.icon}
                </span>
                <span className="ucs-popover-item-content">
                    {this.props.children}
                </span>
            </div>
        );
    }
});
