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
            valueMember: 'value'
        };
        var config2 = {
            placeholder: '请选择',
            title: '请选择',
            cancelText: '取消',
            okText: '确定',
            format: '-',
            disabled: false,
            data: seasons,
            defaultValue: ['2015', '夏'],
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
        return (
            <ul className="list">
                <li className="list-item"><label className="label">选择地区（多列，联动）：</label><Picker {...config1}/></li>
                <li className="list-item"><label className="label">选择季节（多列，不联动）：</label><Picker {...config2}/></li>
                <li className="list-item"><label className="label">选择专业（单列）：</label><Picker {...config3}/></li>
            </ul>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
