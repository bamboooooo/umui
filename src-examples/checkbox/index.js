var Checkbox = require('../../src/base/checkbox');
var Root = React.createClass({
    getInitialState: function () {
        return {
        };
    },
    getDefaultProps: function () {
        return {
        };
    },
    onChange: function (v) {
        console.log(v);
    },
    getChecked: function () {
        console.log(this.refs.checkbox1.getChecked());
    },
    setChecked: function () {
        this.refs.checkbox1.setChecked(true);
    },
    setDisabled: function () {
        this.refs.checkbox1.setDisabled(true);
    },
    setAbled: function () {
        this.refs.checkbox1.setDisabled(false);
    },
    reset: function () {
        this.refs.checkbox1.reset();
    },
    clear: function () {
        this.refs.checkbox1.clear();
    },
    render: function () {
        return (
            <div>
                <Checkbox
                    ref="checkbox1"
                    text="复选框"
                    id="ucs-checkbox1"
                    className="my-checkbox"
                    defaultChecked={true}
                    onChange={this.onChange}
                />
                <Checkbox
                    text="不可编辑状态"
                    id="ucs-checkbox2"
                    className="my-checkbox"
                    defaultChecked={false}
                    disabled={true}
                />
                <ul>
                    <li>
                        <button onClick={this.getChecked}>获取复选框的值</button>
                    </li>
                    <li>
                        <button onClick={this.setChecked}>设置复选框为勾选状态</button>
                    </li>
                    <li>
                        <button onClick={this.setDisabled}>设置复选框为不可编辑状态</button>
                    </li>
                    <li>
                        <button onClick={this.setAbled}>设置复选框为可编辑状态</button>
                    </li>
                    <li>
                        <button onClick={this.reset}>重置复选框</button>
                    </li>
                    <li>
                        <button onClick={this.clear}>清空复选框</button>
                    </li>
                </ul>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
