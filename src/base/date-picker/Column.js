
function isEmptyArray (a) {
    return !a || !a.length;
}

function isChildrenEqual (c1, c2, pure) {
    if (isEmptyArray(c1) && isEmptyArray(c2)) {
        return true;
    }
    if (pure) {
        return c1 === c2;
    }
    if (c1.length !== c2.length) {
        return false;
    }
    var len = c1.length;
    for (var i = 0; i < len; i += 1) {
        if (c1[i].value !== c2[i].value || c1[i].label !== c2[i].label) {
            return false;
        }
    }
    return true;
}

var Column = React.createClass({

    getDefaultProps: function () {
        return {
            prefixCls: 'ucs-datepicker-cascaderpicker',
            pure: true,
            onValueChange: function () {return null;}
        };
    },

    getInitialState: function () {
        var selectedValueState;
        var selectedValue = this.props.selectedValue;
        var defaultSelectedValue = this.props.defaultSelectedValue;
        var children = this.props.children;

        if (selectedValue !== undefined) {
            selectedValueState = selectedValue;
        } else if (defaultSelectedValue !== undefined) {
            selectedValueState = defaultSelectedValue;
        } else if (children && children.length) {
            selectedValueState = children[0]['value'];
        }
        return {
            selectedValue: selectedValueState,
            translateY: 0,
            pointStart: 0,
            pointEnd: 0
        };
    },

    componentDidMount: function () {
        this.itemHeight = this.indicator.offsetHeight;
        this.content.style.padding = this.itemHeight * 3 + 'px 0';
        this._select(this.state.selectedValue);
    },

    componentWillReceiveProps: function (nextProps) {
        if ('selectedValue' in nextProps) {
            this.setState({
                selectedValue: nextProps.selectedValue
            });
        }
    },

    shouldComponentUpdate: function (nextProps, nextState) {
        return this.state.selectedValue !== nextState.selectedValue || !isChildrenEqual(this.props.children, nextProps.children, this.props.pure);
    },

    componentDidUpdate: function (next1) {
        this._select(this.state.selectedValue);
    },

    _select: function (value) {
        var children = this.props.children;
        for (var i = 0, len = children.length; i < len; i += 1) {
            if (children[i]['value'] === value) {
                this._selectByIndex(i);
                return;
            }
        }
        this._selectByIndex(0);
    },

    _selectByIndex: function (index) {
        if (index < 0 || index >= this.props.children.length || !this.itemHeight) {
            return;
        }
        this._onMoveTo(index, 300);
    },

    _doScrollingComplete: function (top) {
        var index = top / this.itemHeight;
        var floor = Math.floor(index);
        if (index - floor > 0.5) {
            index = floor + 1;
        } else {
            index = floor;
        }

        var children = this.props.children;

        index = Math.min(index, children.length - 1);
        var child = children[index];
        if (child) {
            if (child['value'] !== this.state.selectedValue) {
                this.props.onValueChange(child['value']);
            }
        } else if (console.warn) {
            console.warn('child not found', children, index);
        }
    },

    // 获取触摸点的当前坐标
    _getPoint: function (event) {
        var touch = event.touches[0];
        return {
            x: touch.pageX,
            y: touch.pageY
        };
    },

    // 执行过渡动画
    _doTransition: function (offset, duration) {
        var style = this.content.style;
        style.webkitTransitionDuration = duration + 'ms';
        style.mozTransitionDuration = duration + 'ms';
        style.oTransitionDuration = duration + 'ms';
        style.transitionDuration = duration + 'ms';
        style.webkitTransform = 'translate3d(0, ' + offset + 'px, 0)';
        style.mozTransform = 'translate3d(0, ' + offset + 'px, 0)';
        style.oTransform = 'translate3d(0, ' + offset + 'px, 0)';
        style.transform = 'translate3d(0, ' + offset + 'px, 0)';
    },

    // 移动到指定编号
    _onMoveTo: function (index, speed) {
        var itemHeight = this._getItemHeight();
        if (itemHeight === 0) {
            return;
        }

        var offset = -index * itemHeight;

        this._doTransition(offset, speed);
        this.setState({
            translateY: offset
        });
    },

    _getItemHeight: function () {
        var items = this.content.children;

        if (!items || items.length === 0) {
            return 0;
        }
        return items[0].offsetHeight;
    },

    _onTouchStart: function (event) {
        var pointY = this._getPoint(event).y;
        this.setState({
            pointStart: pointY
        });
    },

    _onTouchMove: function (event) {
        event.preventDefault();
        var pointY = this._getPoint(event).y;
        var offset = this.state.translateY + (pointY - this.state.pointStart);

        this._doTransition(offset, 0);
        this.setState({
            pointEnd: pointY
        });
    },

    _onTouchEnd: function (event) {
        var offset = (this.state.pointEnd !== 0)
            ? this.state.translateY + (this.state.pointEnd - this.state.pointStart)
            : 0;
        var items = this.content.children;
        var itemHeight = items[0] && items[0].offsetHeight;
        var maxIndex = Math.abs(items.length - 1);
        var index = Math.round(offset / itemHeight);

        if (index > 0) {
            index = 0;
        } else {
            index = (Math.abs(offset) >= maxIndex * itemHeight)
                ? maxIndex
                : Math.abs(index);
        }

        this._onMoveTo(index, 300);
        this._doScrollingComplete(index * itemHeight);
    },

    render: function () {
        var _this = this;
        var prefixCls = this.props.prefixCls,
            children = this.props.children,
            indicatorStyle = this.props.indicatorStyle;

        var selectedValue = this.state.selectedValue;
        var itemClassName = prefixCls + '-item';
        var selectedItemClassName = itemClassName + ' ' + prefixCls + '-item-selected';
        var items = children.map(function (item) {
            return (
                <div
                    className={selectedValue === item['value'] ? selectedItemClassName : itemClassName}
                    key={item.value} >
                    {item.label}
                </div>
            );
        });
        return (
            <div
                className={prefixCls}
                onTouchStart={this._onTouchStart}
                onTouchMove={this._onTouchMove}
                onTouchEnd={this._onTouchEnd}>
                <div className={prefixCls + '-indicator'} ref={function (indicator) {_this.indicator = indicator;}} style={indicatorStyle} />
                <div className={prefixCls + '-content'} ref={function (content) {_this.content = content;}}>
                    {items}
                </div>
            </div>
        );
    }

});

module.exports = Column;
