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
            minDate: '05:10',
            maxDate: '19:50',
            format: 'hh时mm分',
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
            value: '2017-07-24 14:33',
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
        var config4 = {
            className: 'customClassName4',
            id: 'customId4',
            disabled: false,
            placeholder: '请选择年份',
            title: '选择年份',
            mode: 'year',
            value: '1997',
            defaultValue: '2017',
            minDate: '1990',
            maxDate: '2020',
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
        var config5 = {
            className: 'customClassName4',
            id: 'customId4',
            disabled: false,
            placeholder: '请选择月份',
            title: '选择月份',
            mode: 'month',
            value: '5',
            defaultValue: '4',
            minDate: '3',
            maxDate: '9',
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
                        <label className="label">选择日期：
                        </label>
                        <DatePicker ref="datePicker1" {...config1} />
                    </li>
                    <li className="list-item">
                        <label className="label">选择时间：
                        </label>
                        <DatePicker ref="datePicker2" {...config2} />
                    </li>
                    <li className="list-item">
                        <label className="label">选择具体时间：
                        </label>
                        <DatePicker ref="datePicker3" {...config3} />
                    </li>
                    <li className="list-item">
                        <label className="label">选择年份：
                        </label>
                        <DatePicker ref="datePicker4" {...config4} />
                    </li>
                    <li className="list-item">
                        <label className="label">选择月份：
                        </label>
                        <DatePicker ref="datePicker5" {...config5} />
                    </li>
                </ul>
                <button onClick={this.setToday}>设第一个为今天</button>：
                <button onClick={this.getTime}>获取第二个值</button>：
                <button onClick={this.setDisabled}>禁用/启用第二个</button>：
                <button onClick={this.clear}>清空第三个</button>：
                <button onClick={this.reset}>重置第三个</button>：
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
