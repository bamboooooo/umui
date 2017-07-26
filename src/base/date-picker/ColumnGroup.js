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
        var value = this._getValue().concat();
        value[i] = v;
        this.props.onValueChange(value, i);
    },

    _getValue: function () {
        var { children, selectedValue } = this.props;

        if (selectedValue && selectedValue.length) {
            return selectedValue;
        }
        if (!children) {
            return [];
        }
        return children.map(function (c) {
            var cc = c.props.children;
            return cc && cc[0] && cc[0].value;
        });
    },
    render: function () {
        var _this = this;
        var prefixCls = this.props.prefixCls;
        var pickerPrefixCls = this.props.pickerPrefixCls;
        var indicatorStyle = this.props.indicatorStyle;
        var children = this.props.children;
        var selectedValue = this._getValue();
        var colElements = children.map(function (col, i) {
            return (
                <div key={col.key || i} className={prefixCls + '-item'}>
                    <Column
                        indicatorStyle={indicatorStyle}
                        prefixCls={pickerPrefixCls}
                        selectedValue={selectedValue[i]}
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
