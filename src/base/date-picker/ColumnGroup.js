var classnames = require('classnames');
var Column = require('./Column');

var ColumnGroup = React.createClass({

    getDefaultProps: function () {
        return {
            prefixCls: '',
            pickerPrefixCls: '',
            onValueChange: function () {return null;},
            disabled: true
        };
    },

    _onValueChange: function (v, i) {
        var value = this.getValue().concat();
        value[i] = v;
        this.props.onValueChange(value, i);
    },

    getValue: function () {
        var _this = this;
        var { children, selectedValue } = this.props;

        if (selectedValue && selectedValue.length) {
            return selectedValue;
        }
        if (!children) {
            return [];
        }
        return children.map(function (c) {
            var cc = c.props.children;
            return cc && cc[0] && cc[0][_this.props.valueMember];
        });
    },
    render: function () {
        var _this = this;
        var prefixCls = this.props.prefixCls;
        var pickerPrefixCls = this.props.pickerPrefixCls;
        var indicatorStyle = this.props.indicatorStyle;
        var pure = this.props.pure;
        var children = this.props.children;
        var displayMember = this.props.displayMember;
        var valueMember = this.props.valueMember;
        var selectedValue = this.getValue();
        var colElements = children.map(function (col, i) {
            return (
                <div key={col.key || i} className={prefixCls + '-item'}>
                    <Column
                        pure={pure}
                        indicatorStyle={indicatorStyle}
                        prefixCls={pickerPrefixCls}
                        selectedValue={selectedValue[i]}
                        displayMember={displayMember}
                        valueMember={valueMember}
                        onValueChange={function (value) {_this._onValueChange(value, i);}}
                        {...col.props}
                    />
                </div>
            );
        });
        return (
            <div className={classnames(prefixCls)}>
                {colElements}
            </div>
        );
    }
});

module.exports = ColumnGroup;
