var Column = require('./Column');

var ColumnGroup = React.createClass({

    getDefaultProps: function () {
        return {
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
        var children = this.props.children;
        var selectedValue = this.props.selectedValue;

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
        var children = this.props.children;
        var selectedValue = this._getValue();
        var colElements = children.map(function (col, i) {
            return (
                <div key={col.key || i} className="ucs-datepicker-column-group-item">
                    <Column
                        selectedValue={selectedValue[i]}
                        onValueChange={function (value) {_this._onValueChange(value, i);}}>
                        {col.props.children}
                    </Column>
                </div>
            );
        });
        return (
            <div className="ucs-datepicker-column-group">
                {colElements}
            </div>
        );
    }
});

module.exports = ColumnGroup;

