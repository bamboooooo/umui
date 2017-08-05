var ActionSheet = require('../../src/complex/action-sheet');
var Root = React.createClass({
    getInitialState: function () {
        return {
            option: [
                {
                    text: '操作一',
                    clickHandler: null
                },
                {
                    text: '操作二',
                    clickHandler: null
                },
                {
                    text: '操作三',
                    clickHandler: null
                }
            ],
            option2: [
                {
                    text: '按钮一',
                    clickHandler: null
                },
                {
                    text: '按钮二',
                    clickHandler: null
                },
                {
                    text: '按钮三',
                    clickHandler: null
                }
            ]
        };
    },
    _listClickHandler: function () {
        alert('你点击了动作面板组件');
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
                <ActionSheet ref="actionSheet1" title="我是描述" option={this.state.option} onClick={this._listClickHandler} cancelButtonIndex={0}/>
                <ActionSheet ref="actionSheet2" title="我是描述2" option={this.state.option2} maskClosable={false} cancelButtonIndex={2}/>
                <button onClick={this._openActionSheet}>打开动作面板组件1</button>
                <button onClick={this._openActionSheet2}>打开动作面板组件2</button>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
