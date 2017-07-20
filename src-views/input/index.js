var Input = require('../../src/base/input');
var Root = React.createClass({
    getDefaultProps: function () {
        return {
        };
    },
    _setValue: function () {
        this.refs.inputEle.setValue('new text');
    },
    _getValue: function () {
        var inputValue = this.refs.inputEle.getValue();
        console.log(inputValue);
    },
    _setReadOnly: function () {
        this.refs.inputEle.setReadOnly(true);
    },
    _setDisabled: function () {
        this.refs.inputEle.setDisabled(true);
    },
    _clear: function () {
        this.refs.inputEle.clear();
    },
    _reset: function () {
        this.refs.inputEle.reset();
    },
    _onChange: function () {
        // console.log('onChange');
    },
    _onFocus: function () {
        this.refs.inputEle.onFocus();
    },
    _onBlur: function () {
        // console.log('onBlur');
    },
    render: function () {
        return (
            <div>
                <Input placeHolder="telephone" type="tel" ref="inputEle" onChange={this._onChange} defaultValue="123456"/>
                <input type="button" value="readOnly" onClick={this._setReadOnly} />
                <input type="button" value="disabled" onClick={this._setDisabled} />
                <input type="button" value="setValue" onClick={this._setValue} />
                <input type="button" value="getValue" onClick={this._getValue} />
                <input type="button" value="clear" onClick={this._clear} />
                <input type="button" value="reset" onClick={this._reset} />
                <input type="button" value="focus" onClick={this._onFocus} />
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
