/**
 * Created by maxuezhu on 2017/8/2.
 */
var OffCanvas = require('../../src/complex/off-canvas');
var Root = React.createClass({
    getDefaultProps: function () {
        return {
            id: '333',
            sidebar: '123',
            onOpenChange: function () {
                console.log('芝麻开门嘛哩嘛哩哄');
            },
            touch: true,
            transitions: true,
            width: 300,
            maskClosable: true,
            isDisabled: false,
            open: false
        };
    },
    _clickHandle1: function () {
        this.refs.OffCanvas.show();
    },
    _clickHandle2: function () {
        this.refs.OffCanvas.hide();
    },
    render: function () {
        return (
            <div>
                <button onClick={this._clickHandle1}>弹出侧边栏</button>
                <button onClick={this._clickHandle2}>收起侧边栏</button>
                <div className="slider">
                    <OffCanvas ref="OffCanvas" {...this.props}>
                        点击按钮弹出侧边栏
                    </OffCanvas>
                </div>

            </div>

        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
