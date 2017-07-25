var DatePicker = require('../../src/base/date-picker');
var Root = React.createClass({
    getInitialState: function () {
        return {
            date: '2008-08-08',
            defaultDate: '',
            disabled: false,
            minDate: '2000',
            maxDate: '2020'
        };
    },
    componentDidMount: function () {
        this.isDisabled = false;
    },
    setToday: function () {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        this.refs.datePicker1.setValue(year + '-' + month + '-' + day);
    },
    getTime: function () {
        var result = this.refs.datePicker2.getValue();
        console.log('获取值' + result);
    },
    setDisabled: function () {
        if (!this.isDisabled) {
            this.refs.datePicker2.setDisabled(true);
            this.isDisabled = true;
        } else {
            this.refs.datePicker2.setDisabled(false);
            this.isDisabled = false;
        }
    },
    clear: function () {
        this.refs.datePicker3.clear();
    },
    reset: function () {
        this.refs.datePicker3.reset();
    },
    render: function () {
        var config1 = {
            className: 'customClassName',
            id: 'customId',
            disabled: false,
            placeholder: '请选择日期',
            title: '选择日期',
            mode: 'date',
            value: '2008-08-08',
            defaultValue: '',
            minDate: '2000',
            maxDate: '2020',
            format: 'YYYY年MM月DD日',
            okText: '点我确定',
            cancelText: '点我取消',
            onOk: function (value) {
                console.log('外部ok value ->', value);
            },
            onCancel: function () {return null;},
            onMaskClick: function () {console.log('点击了蒙层');},
            onChange: function (value) {
                console.log('外部change value ->', value);
            }
        };
        var config2 = {
            className: 'customClassName2',
            id: 'customId2',
            disabled: false,
            placeholder: '请选择时间',
            title: '选择时间',
            mode: 'time',
            value: '14:29',
            defaultValue: '00:00',
            minDate: '09:00',
            maxDate: '18:00',
            format: 'HH时mm分',
            okText: '确定',
            cancelText: '取消',
            onOk: function (value) {
                console.log('外部ok value ->', value);
            },
            onCancel: function () {return null;},
            onMaskClick: function () {console.log('点击了蒙层');},
            onChange: function (value) {
                console.log('外部change value ->', value);
            }
        };
        var config3 = {
            className: 'customClassName3',
            id: 'customId3',
            disabled: false,
            placeholder: '请选择时间',
            title: '选择时间',
            mode: 'datetime',
            value: '2017-07-24 14:29',
            defaultValue: '2017-01-01 01:01',
            minDate: '2010-01-01 09:00',
            maxDate: '2020-12-31 18:00',
            okText: '确定',
            cancelText: '取消',
            onOk: function (value) {
                console.log('外部ok value ->', value);
            },
            onCancel: function () {return null;},
            onMaskClick: function () {console.log('点击了蒙层');},
            onChange: function (value) {
                console.log('外部change value ->', value);
            }
        };
        return (
            <div>
                <ul className="list">
                    <li className="list-item">
                        <label className="label">选择日期
                            <button onClick={this.setToday}>设为今天</button>：
                        </label>
                        <DatePicker ref="datePicker1" {...config1} />
                    </li>
                    <li className="list-item">
                        <label className="label">选择时间
                            <button onClick={this.getTime}>获取值</button>：
                            <button onClick={this.setDisabled}>禁用/启用</button>：
                        </label>
                        <DatePicker ref="datePicker2" {...config2} />
                    </li>
                    <li className="list-item">
                        <label className="label">
                            <button onClick={this.clear} style={{marginRight: '30px'}}>清空</button>
                            <button onClick={this.reset}>重置</button>：
                        </label>
                        <DatePicker ref="datePicker3" {...config3} />
                    </li>
                </ul>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
