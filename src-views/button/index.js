var Button = require('../../src/base/button');
var Root = React.createClass({
    onClick1: function () {
        console.log('click');
    },
    onClick2: function () {
        console.log('取消');
    },
    onClick4: function () {
        this.refs.button4.setDisabled(true);
    },
    onClick5: function () {
        this.refs.button5.setValue('我变了');
    },
    render: function () {
        return (
            <div>
                <p>正常的使用</p>
                <Button ref="button1" id="test" value="确定" onClick={this.onClick1} />
                <p>取消的情况</p>
                <Button ref="button2" className="ucs-btn-cancel" value="取消" onClick={this.onClick2} />
                <p>禁用的情况</p>
                <Button ref="button3" disabled value="不可点击" />
                <p>设置禁用的情况</p>
                <Button ref="button4" value="点击/不可点击" onClick={this.onClick4} />
                <p>设置value的情况</p>
                <Button ref="button5" value="改变我" onClick={this.onClick5} />
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
