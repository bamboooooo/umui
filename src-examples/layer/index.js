var Layer = require('../../src/complex/layer');
var Root = React.createClass({
    _clickOpen: function () {
        this.refs.layer1.show();
    },
    _clickClose: function () {
        this.refs.layer1.hide();
    },
    _clickConfirm: function () {
        alert('我是确认按钮');
    },
    _clickCancel: function () {
        this.refs.layer1.hide();
    },
    render: function () {
        return (
            <div>
                <Layer ref="layer1" closeBack={this._clickClose} title={'我是标题'} confirmBack={this._clickConfirm} cancelBack={this._clickCancel}>
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                </Layer>
                <button onClick={this._clickOpen}>显示弹窗</button>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
