var ZScroller = require('zscroller');

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

function getChildMember (child, m) {
    return child[m];
}

function toChildrenArray (children) {
    return children;
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
            selectedValueState = children[0][this.props.valueMember];
        }
        return {
            selectedValue: selectedValueState
        };
    },

    componentDidMount: function () {
        this.itemHeight = this.indicator.offsetHeight;
        // compact
        this.content.style.padding = this.itemHeight * 3 + 'px 0';
        this.zscroller = new ZScroller(this.content, {
            scrollingX: false,
            snapping: true,
            penetrationDeceleration: 0.1,
            minVelocityToKeepDecelerating: 0.5,
            scrollingComplete: this.scrollingComplete.bind(this)
        });

        this.zscroller.setDisabled(this.props.disabled);
        this.zscroller.scroller.setSnapSize(0, this.itemHeight);
        this.select(this.state.selectedValue);
    },

    componentWillReceiveProps: function (nextProps) {
        if ('selectedValue' in nextProps) {
            this.setState({
                selectedValue: nextProps.selectedValue
            });
        }
        this.zscroller.setDisabled(nextProps.disabled);
    },

    shouldComponentUpdate: function (nextProps, nextState) {
        return this.state.selectedValue !== nextState.selectedValue || !isChildrenEqual(this.props.children, nextProps.children, this.props.pure);
    },

    componentDidUpdate: function () {
        this.zscroller.reflow();
        this.select(this.state.selectedValue);
    },

    componentWillUnmount: function () {
        this.zscroller.destroy();
    },

    getValue: function () {
        return this.props.selectedValue ? this.props.selectedValue : this.props.children && this.props.children[0] && this.props.children[0][this.props.valueMember];
    },

    scrollingComplete: function () {
        var { top } = this.zscroller.scroller.getValues();
        if (top >= 0) {
            this.doScrollingComplete(top);
        }
    },

    fireValueChange: function (selectedValue) {
        if (selectedValue !== this.state.selectedValue) {
            if (!('selectedValue' in this.props)) {
                this.setState({
                    selectedValue
                });
            }

            this.props.onValueChange(selectedValue);
        }
    },

    scrollTo: function (top) {
        this.zscroller.scroller.scrollTo(0, top);
    },

    select: function (value) {
        var children = toChildrenArray(this.props.children);
        for (var i = 0, len = children.length; i < len; i += 1) {
            if (getChildMember(children[i], this.props.valueMember) === value) {
                this.selectByIndex(i);
                return;
            }
        }
        this.selectByIndex(0);
    },

    selectByIndex: function (index) {
        if (index < 0 || index >= toChildrenArray(this.props.children).length || !this.itemHeight) {
            return;
        }
        this.scrollTo(index * this.itemHeight);
    },

    doScrollingComplete: function (top) {
        var index = top / this.itemHeight;
        var floor = Math.floor(index);
        if (index - floor > 0.5) {
            index = floor + 1;
        } else {
            index = floor;
        }

        var children = toChildrenArray(this.props.children);

        index = Math.min(index, children.length - 1);
        var child = children[index];
        if (child) {
            this.fireValueChange(getChildMember(child, this.props.valueMember));
        } else if (console.warn) {
            console.warn('child not found', children, index);
        }
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
                    className={selectedValue === item[_this.props.valueMember] ? selectedItemClassName : itemClassName}
                    key={item.value} >
                    {item.label}
                </div>
            );
        });
        return (
            <div
                className={prefixCls} >
                <div className={`${prefixCls}-indicator`} ref={function (indicator) {_this.indicator = indicator;}} style={indicatorStyle} />
                <div className={`${prefixCls}-content`} ref={function (content) { _this.content = content; }}>
                    {items}
                </div>
            </div>
        );
    }

});

module.exports = Column;
