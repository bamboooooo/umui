var CheckCode = require('../../src/complex/check-code');
var Root = React.createClass({
    onClick1: function () {
        this.refs.checkCode.start();
    },
    onClick2: function () {
        this.refs.checkCode2.start();
    },
    onClick3: function () {
        this.refs.checkCode2.setDisabled(true);
    },
    onClick4: function () {
        this.refs.checkCode2.reset();
    },
    render: function () {
        return (
            <div>
                <h3>正常的使用</h3>
                <CheckCode ref="checkCode" id="test" onClick={this.onClick1} />
                <h3>禁用</h3>
                <CheckCode ref="checkCode1" disabled />
                <h3>功能测试</h3>
                <CheckCode ref="checkCode2" text="点击获取" temp="s" onClick={this.onClick2} />
                <br/>
                <a onClick={this.onClick3}>设为禁用</a>
                <br/>
                <a onClick={this.onClick4}>重置</a>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
