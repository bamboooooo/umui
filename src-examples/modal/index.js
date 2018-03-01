/**
 * Created by maxuezhu on 2017/8/4.
 */
var Modal = require('../../src/complex/modal');
var Button = require('../../src/base/button');
var Root = React.createClass({
    _clickHandle1: function () {
        Modal.confirm({
            title: '提示1',
            content: '确认删除xxx嘛？',
            confirmBack: function () {
                console.log('你选了确定');
            },
            cancelBack: function () {
                console.log('你选了取消');
            }
        });
    },
    _clickHandle2: function () {
        Modal.alert({
            title: '提示1',
            content: '确认删除xxx嘛？',
            confirmBack: function () {
                console.log('你选了确定');
            }
        });
    },
    render: function () {
        return (
            <div>
                <Button value="confrim弹窗" ref="confirm" onClick={this._clickHandle1}/>
                <Button value="alert弹窗" ref="alert" onClick={this._clickHandle2}/>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
