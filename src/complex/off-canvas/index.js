/**
 * Created by maxuezhu on 2017/8/2.
 */
var classnames = require('classnames');
var OffCanvas = React.createClass({
    getDefaultProps: function () {
        return {
            id: '',
            sidebar: '',
            onOpenChange: null,
            touch: true,
            transitions: true,
            width: 300,
            maskClosable: true,
            isDisabled: false,
            open: false
        };
    },
    getInitialState: function () {
        return {
            open: this.props.open,
            className: 'ucs-offcanvas',
            isDisabled: this.props.isDisabled,
            transitions: true,
            maskStyle: {
                opacity: this.props.open ? 1 : 0,
                visibility: this.props.open ? 'visible' : 'hidden'
            },
            sliderStyle: {
                transform: this.props.open ? 'translateX(-100%)' : 'translateX(-100%)',
                width: this.props.width ? this.props.width : 300,
                transition: this.props.transitions ? null : 'none'
            }
        };
    },
    show: function () {
        if (this.state.isDisabled) {
            return;
        }
        if (this.state.open) {
            return;
        }
        this.setState({
            open: true,
            maskStyle: {
                opacity: 1,
                visibility: 'visible'
            },
            sliderStyle: {
                transform: 'translateX(0)'
            }
        });
        this.props.onOpenChange ? this.props.onOpenChange() : null;
    },
    hide: function () {
        if (this.state.isDisabled) {
            return;
        }
        if (!this.state.open) {
            return;
        }
        this.setState({
            open: false,
            maskStyle: {
                opacity: 0,
                visibility: 'hidden'
            },
            sliderStyle: {
                transform: 'translateX(-100%)'
            }
        });
        this.props.onOpenChange ? this.props.onOpenChange() : null;
    },
    _clickHandle: function () {
        if (this.state.isDisabled) {
            return;
        }
        if (this.state.open) {
            this.hide();
        } else {
            this.show();
        }
    },
    _maskClickHandle: function () {
        if (this.props.maskClosable) {
            this._clickHandle();
        } else {
            return;
        }
    },
    _touchmoveHandle: function (e) {
        if (this.state.isDisabled) {
            return;
        }
        if (!this.props.touch) {
            return;
        }
        if (!e.touches) {
            return;
        }
        var opacity, transform, visibility, open;
        if (e.touches[0].clientX > this.props.width) {
            opacity = 1;
            transform = 'translateX(0)';
            visibility = 'visible';
            open = true;
        } else if (e.touches[0].clientX < 0) {
            opacity = 0;
            transform = 'translateX(-100%)';
            visibility = 'hidden';
            open = false;
        } else {
            opacity = e.touches[0].clientX / this.props.width;
            transform = 'translateX(-' + parseInt(this.props.width - e.touches[0].clientX, 10) + 'px)';
            visibility = 'visible';
            open = true;
        }
        this.setState({
            open: open,
            maskStyle: {
                opacity: opacity,
                visibility: visibility
            },
            sliderStyle: {
                transform: transform
            }
        });
    },
    _touchendHandle: function (e) {
        if (!this.props.touch) {
            return;
        }
        if (parseInt(e.changedTouches[0].clientX, 10) > 50) {
            this.show();
            this.setState({
                sliderStyle: {
                    transform: 'translateX(0)'
                }
            });
            this.props.onOpenChange ? this.props.onOpenChange() : null;
        } else {
            this.hide();
            this.setState({
                sliderStyle: {
                    transform: 'translateX(-100%)'
                }
            });
        }
    },
    render: function () {
        var classname = this.props.transitions ? this.state.className : classnames(this.state.className, 'notransition');
        if (this.props.touch) {var touchPart = <div className="ucs-offcanvas-touchPart" onTouchMove={this._touchmoveHandle} onTouchEnd={this._touchendHandle}></div>;}
        return (
            <div className={classname}>
                <div className="ucs-offcanvas-mask" ref="mask" onClick={this._maskClickHandle} style={this.state.maskStyle}></div>
                <div className="ucs-offcanvas-sidebar" ref="offcanvas" style={this.state.sliderStyle}>{this.props.sidebar}</div>
                <div className="ucs-offcanvas-con">
                    {touchPart}
                    {this.props.children}
                </div>
            </div>
        );
    }
});
module.exports = OffCanvas;
