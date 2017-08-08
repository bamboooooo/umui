var Picker = require('../../src/base/picker');
var District = require('./district');
var seasons = [
    [
        {
            label: '2013',
            value: '003'
        },
        {
            label: '2014',
            value: '004'
        },
        {
            label: '2015',
            value: '005'
        },
        {
            label: '2016',
            value: '006'
        }
    ],
    [
        {
            label: '春',
            value: 'a'
        },
        {
            label: '夏',
            value: 'b'
        },
        {
            label: '秋',
            value: 'c'
        },
        {
            label: '冬',
            value: 'd'
        }
    ]
];
var majors = [
    [
        {
            key: '001',
            value: '计算机'
        },
        {
            key: '002',
            value: '挖掘机'
        },
        {
            key: '003',
            value: '工业设计'
        },
        {
            key: '004',
            value: '心理学'
        }
    ]
];
var Root = React.createClass({
    getInitialState: function () {
        return {
            disabled: false
        };
    },
    setValue: function (v) {
        this.refs.picker1.setValue(v);
    },
    getValue: function () {
        console.log(this.refs.picker2.getValue());
    },
    setDisabled: function (e) {
        var btn = e.srcElement ? e.srcElement : e.target;
        if (this.state.disabled) {
            btn.innerHTML = '禁用';
        } else {
            btn.innerHTML = '启用';
        }
        this.setState({
            disabled: !this.state.disabled
        });
        this.refs.picker3.setDisabled(!this.state.disabled);
    },
    clear: function () {
        this.refs.picker4.clear();
    },
    reset: function () {
        this.refs.picker4.reset();
    },
    render: function () {
        var config1 = {
            placeholder: '请选择',
            title: '请选择',
            cancelText: '取消',
            okText: '确定',
            format: '-',
            disabled: false,
            data: District,
            maxCols: 3,
            defaultValue: [],
            onClick: function (v) {
                console.log('外部onClick ->', v);
            },
            onChange: function (v) {
                console.log('外部change value ->', v);
            },
            onOk: function (v) {
                console.log('外部onOk ->', v);
            },
            onCancel: function (v) {
                console.log('外部onCancel ->', v);
            },
            onMaskClick: function (v) {
                console.log('外部onMaskClick ->', v);
            },
            displayMember: 'label',
            valueMember: 'value',
            cascade: true
        };
        var config2 = {
            placeholder: '请选择',
            title: '请选择',
            cancelText: '取消',
            okText: '确定',
            format: '-',
            disabled: false,
            data: seasons,
            defaultValue: [
                {
                    label: '2015',
                    value: '005'
                },
                {
                    label: '夏',
                    value: 'b'
                }
            ],
            onClick: function (v) {
                console.log('外部onClick ->', v);
            },
            onChange: function (v) {
                console.log('外部change value ->', v);
            },
            onOk: function (v) {
                console.log('外部onOk ->', v);
            },
            onCancel: function (v) {
                console.log('外部onCancel ->', v);
            },
            onMaskClick: function (v) {
                console.log('外部onMaskClick ->', v);
            },
            displayMember: 'label',
            valueMember: 'value'
        };
        var config3 = {
            placeholder: '请选择专业',
            title: '',
            cancelText: '取消',
            okText: '确定',
            disabled: false,
            data: majors,
            defaultValue: [],
            onClick: function (v) {
                console.log('外部onClick ->', v);
            },
            onChange: function (v) {
                console.log('外部change value ->', v);
            },
            onOk: function (v) {
                console.log('外部onOk ->', v);
            },
            onCancel: function (v) {
                console.log('外部onCancel ->', v);
            },
            onMaskClick: function (v) {
                console.log('外部onMaskClick ->', v);
            },
            displayMember: 'value',
            valueMember: 'key'
        };
        var config4 = {
            placeholder: '请选择专业',
            title: '',
            cancelText: '取消',
            okText: '确定',
            disabled: false,
            data: majors,
            defaultValue: [
                {
                    key: '002',
                    value: '挖掘机'
                }
            ],
            onClick: function (v) {
                console.log('外部onClick ->', v);
            },
            onChange: function (v) {
                console.log('外部change value ->', v);
            },
            onOk: function (v) {
                console.log('外部onOk ->', v);
            },
            onCancel: function (v) {
                console.log('外部onCancel ->', v);
            },
            onMaskClick: function (v) {
                console.log('外部onMaskClick ->', v);
            },
            displayMember: 'value',
            valueMember: 'key'
        };
        return (
            <ul className="list">
                <li className="list-item"><label className="label">选择地区（多列，联动）<button onClick={this.setValue.bind(this, [{'value': '110000', 'label': '北京'}, {'value': '110100', 'label': '北京市'}, {'value': '110114', 'label': '昌平区'}])}>设值</button>：</label><Picker ref="picker1" {...config1}/></li>
                <li className="list-item"><label className="label">选择季节（多列，不联动）<button onClick={this.getValue}>获取值</button>：</label><Picker ref="picker2" {...config2}/></li>
                <li className="list-item"><label className="label">选择专业（单列）<button onClick={this.setDisabled}>禁用</button>：</label><Picker ref="picker3" {...config3}/></li>
                <li className="list-item"><label className="label"><button onClick={this.clear} style={{marginRight: '30px'}}>清空</button><button onClick={this.reset}>重置</button>：</label><Picker ref="picker4" {...config4}/></li>
            </ul>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
