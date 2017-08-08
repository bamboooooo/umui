var ActionSheet = require('../../src/complex/action-sheet');
var Root = React.createClass({
    getInitialState: function () {
        return {
            option: [
                {
                    text: '操作一'
                },
                {
                    text: '取消'
                },
                {
                    text: '操作三'
                },
                {
                    text: '操作二'
                }
            ],
            option2: [
                {
                    text: '按钮一'
                },
                {
                    text: '按钮二'
                },
                {
                    text: '按钮三'
                },
                {
                    text: '取消'
                }
            ]
        };
    },
    _listClickHandler: function (index) {
        alert('你点击了第' + (index + 1) + '个按钮');
    },
    _openActionSheet: function () {
        this.refs.actionSheet1.show();
    },
    _closeActionSheet: function () {
        this.refs.actionSheet1.hide();
    },
    _openActionSheet2: function () {
        this.refs.actionSheet2.show();
    },
    _closeActionSheet2: function () {
        this.refs.actionSheet2.hide();
    },
    render: function () {
        return (
            <div>
                <ActionSheet ref="actionSheet1" title="我是描述" option={this.state.option} onClick={this._listClickHandler}/>
                <ActionSheet ref="actionSheet2" title="我是描述2" option={this.state.option2} maskClosable={false}/>
                <button onClick={this._openActionSheet}>打开动作面板组件1</button>
                <button onClick={this._openActionSheet2}>打开动作面板组件2</button>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
