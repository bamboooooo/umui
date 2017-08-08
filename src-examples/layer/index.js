var Layer = require('../../src/complex/layer');
var Root = React.createClass({
    _clickOpen: function () {
        this.refs.layer1.show();
    },
    _clickClose: function () {
        this.refs.layer1.hide();
    },
    render: function () {
        return (
            <div>
                <Layer ref="layer1" closeBack={this._clickClose}>
                    <Layer.Title>标题</Layer.Title>
                    <div className="ucs-layer-text">
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                    </div>
                </Layer>
                <button onClick={this._clickOpen}>显示弹窗</button>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
