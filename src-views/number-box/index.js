var Numberbox = require('../../src/base/number-box');
var Root = React.createClass({
    getDefaultProps: function () {
        return {
            id: '1',
            name: 'numberbo1x',
            max: 100,
            min: 3,
            step: 10,
            onChange: function () {
                console.log(1);
            },
            defaultValue: '100',
            formatter: function (v) {
                return v + '.00';
            }
        };
    },
    clickHandle: function (e) {
        this.refs.numberbox.reset();
    },
    clickHandle1: function (e) {
        this.refs.numberbox1.setDisabled(true);
    },
    render: function () {
        return (
            <div>
                <p>重置组件的值</p>
                <Numberbox ref="numberbox" {...this.props} />
                <input type = "button" value="reset" onClick={this.clickHandle} className="btn" />
                <br/>
                <p>禁用</p>
                <Numberbox ref="numberbox1" {...this.props}/>
                <input type = "button" value="disabled" onClick={this.clickHandle1} className="btn"/>
                <br/>
                <p>正常使用</p>
                <Numberbox ref="numberbox2" {...this.props} />
            </div>

        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
