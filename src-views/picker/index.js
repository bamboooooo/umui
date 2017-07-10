var Picker = require('../../src/base/picker');

var Root = React.createClass({
    getInitialState: function () {
        return {
            CascaderPicker: false,
            sValue: [],
            disabled: false
        };
    },
    render: function () {
        var province = ['安徽省', '澳门特别行政区', '北京', '广西壮族自治区', '香港特别行政区', '浙江省'];
        return (
            <Picker
                visible={this.state.CascaderPicker}
                title="请选择"
                placeholder="请选择"
                format=""
                disabled={this.state.disabled}
                dataSource={province}
                cols={1}
                displayMember="label"
                valueMember="label"
                value={this.state.sValue}
                onChange={function (value) {
                    console.log('外部change value ->', value);
                    this.setState({sValue: value});
                }}
                onOk={function (value) {
                    console.log(value);
                }}
                onCancel={function () {
                    console.log(123);
                }}
            />
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
