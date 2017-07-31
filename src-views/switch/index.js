var Switch = require('../../src/base/switch');
var Root = React.createClass({
    componentDidMount: function () {
        this.isDisabled = true;
    },
    onClick1: function () {
        console.log('click');
    },
    setChecked: function () {
        this.refs.switch1.setChecked(false);
    },
    getChecked: function () {
        var c = this.refs.switch2.getChecked();
        console.log(c);
    },
    setDisabled: function () {
        if (!this.isDisabled) {
            this.refs.switch3.setDisabled(true);
            this.isDisabled = true;
        } else {
            this.refs.switch3.setDisabled(false);
            this.isDisabled = false;
        }
    },
    reset: function () {
        this.refs.switch1.reset();
    },
    render: function () {
        var config1 = {
            checked: true,
            className: 'custom-switch'
        };
        var config2 = {
            checked: false
        };
        var config3 = {
            checked: true,
            disabled: true
        };
        var config4 = {
            checked: false,
            disabled: true
        };
        return (
            <div>
                <ul className="list">
                    <li className="list-item">
                        <label className="label">
                            switch-on：
                        </label>
                        <div className="list-right">
                            <Switch ref="switch1" {...config1} />
                        </div>
                    </li>
                    <li className="list-item">
                        <label className="label">
                            switch-off:
                        </label>
                        <div className="list-right">
                            <Switch ref="switch2" {...config2} />
                        </div>
                    </li>
                    <li className="list-item">
                        <label className="label">
                            switch-on-disabled:
                        </label>
                        <div className="list-right">
                            <Switch ref="switch3" {...config3} />
                        </div>
                    </li>
                    <li className="list-item">
                        <label className="label">
                            switch-off-disabled:
                        </label>
                        <div className="list-right">
                            <Switch ref="switch4" {...config4} />
                        </div>
                    </li>
                </ul>
                <button onClick={this.setChecked}>设第一个为off</button>：
                <button onClick={this.getChecked}>获取第二个的checked</button>：
                <button onClick={this.setDisabled}>禁用/启用第三个</button>：
                <button onClick={this.reset}>重置第一个</button>：


            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
