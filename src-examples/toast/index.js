/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/17
 * 说明：
 */
var Toast = require('../../src/base/toast');
var Root = React.createClass({
    _toast1: function () {
        Toast.success({
            content: '默认有mask,3秒消失'
        });
    },
    _toast2: function () {
        Toast.fail({
            content: 'mask:false',
            mask: false
        });
    },
    _toast3: function () {
        Toast.info({
            content: 'duration:5000',
            duration: 5000
        });
    },
    _toast4: function () {
        Toast.warning({
            content: 'onClose()回调函数',
            onClose: function () {
                console.log('onClose()触发了');
            }
        });
    },
    render: function () {
        return (
            <div>
                <button onClick={this._toast1}>默认的Toast</button>
                <br/><br/>
                <button onClick={this._toast2}>mask:false的Toast</button>
                <br/><br/>
                <button onClick={this._toast3}>duration:5000的Toast</button>
                <br/><br/>
                <button onClick={this._toast4}>有onClose()的Toast</button>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
