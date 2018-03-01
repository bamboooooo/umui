var Input = require('../../src/base/input');
var Root = React.createClass({
    getInitialState: function () {
        return {
            msg: ''
        };
    },
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
    _onChange: function (e) {
        console.log('onChange');
        // console.log(e.target.name);
    },
    _onFocus: function () {
        this.refs.inputEle.onFocus();
    },
    _onBlur: function () {
        // console.log('onBlur');
    },
    onFocus: function (e) {
        // this.setState({msg: e.target.name});
    },
    validation: function (e, result) {
        if (!result) {
            this.setState({msg: e.target.name + '的手机号码不正确'});
        }
    },
    render: function () {
        return (
            <div className="ucs-input-example">
                {this.state.msg}
                <Input type="tel" ref="inputEle" name="a1" value="asdfafd" onFocus={this.onFocus} afterValidation={this.validation}/>
                <Input type="tel" ref="inputEle2" onFocus={this.onFocus} name="a2" afterValidation={this.validation}/>
                <Input type="tel" ref="inputEle3" value="sadfasfd" onFocus={this.onFocus} name="a3" afterValidation={this.validation}/>
                <Input type="tel" ref="inputEle4" onFocus={this.onFocus} name="a4" afterValidation={this.validation}/>
                <Input type="number" value="adfa" onFocus={this.onFocus}/>
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
