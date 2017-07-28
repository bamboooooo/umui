import DatePicker  from '../../../src/base/date-picker/index.js'; // 引入组件

// props测试
describe('DatePicker组件测试', function () {
    describe('props测试', function () {
        describe('DatePicker-porps测试', function () {
            it('porps测试', function () {
                var propsObj = {
                    id: 'test_id',
                    className: 'test_className',
                    visible: false,
                    placeholder: '请选择日期啊'
                };
                var datePicker = shallowRender(DatePicker, propsObj);
                expect(datePicker.props.id).to.be.equal('test_id');
                expect(datePicker.props.className.indexOf('test_className')).to.not.be.equal(-1);
                expect(datePicker.props.children[1].props.className.indexOf('ucs-datepicker-hidden')).to.not.be.equal(-1);
                expect(datePicker.props.children[0].props.children.indexOf('请选择日期啊')).to.be.equal(0);
            });
        });
    });
    describe('function测试', function () {
        /*onMaskClick()方法测试*/
        describe('DatePicker-onMaskClick()方法测试', function () {
            it('--------------onMaskClick()方法测试-----------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker/>);
                const datePickerDOM = findDOMNode(datePicker);
                const datePickerContainer = datePickerDOM.querySelector('.ucs-datepicker-container');
                const datePickerMask = datePickerDOM.querySelector('.ucs-datepicker-mask');
                const datePickerText = datePickerDOM.querySelector('.ucs-datepicker-text');
                TestUtils.Simulate.touchStart(datePickerText);
                TestUtils.Simulate.touchStart(datePickerMask);
                expect(datePickerContainer.className).to.contain('ucs-datepicker-hidden');
            });
        });
        /*onCancel()方法测试*/
        describe('DatePicker-onCancel()方法测试', function () {
            it('--------------onCancel()方法测试 不传参-----------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker />);
                const datePickerDOM = findDOMNode(datePicker);
                const datePickerContainer = datePickerDOM.querySelector('.ucs-datepicker-container');
                const datePickerCancel = datePickerDOM.querySelector('.ucs-datepicker-cancel');
                const datePickerText = datePickerDOM.querySelector('.ucs-datepicker-text');
                TestUtils.Simulate.touchStart(datePickerText);
                TestUtils.Simulate.touchStart(datePickerCancel);
                expect(datePickerContainer.className).to.contain('ucs-datepicker-hidden');
                expect(datePicker.initDate).to.be.equal('');
                expect(datePicker.state.date).to.be.equal('');
            });
            it('--------------onCancel()方法测试 只传defaultValue-----------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker defaultValue='2017-06-01'/>);
                const datePickerDOM = findDOMNode(datePicker);
                const datePickerContainer = datePickerDOM.querySelector('.ucs-datepicker-container');
                const datePickerCancel = datePickerDOM.querySelector('.ucs-datepicker-cancel');
                const datePickerText = datePickerDOM.querySelector('.ucs-datepicker-text');
                const value = new Date('2017-06-01').toString();
                TestUtils.Simulate.touchStart(datePickerText);
                TestUtils.Simulate.touchStart(datePickerCancel);
                expect(datePickerContainer.className).to.contain('ucs-datepicker-hidden');
                expect(datePicker.initDate.toString()).to.be.equal(value);
                expect(datePicker.state.date.toString()).to.be.equal(value);
            });
            it('--------------onCancel()方法测试 只传value-----------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker value="2017-11-11"/>);
                const datePickerDOM = findDOMNode(datePicker);
                const datePickerContainer = datePickerDOM.querySelector('.ucs-datepicker-container');
                const datePickerCancel = datePickerDOM.querySelector('.ucs-datepicker-cancel');
                const datePickerText = datePickerDOM.querySelector('.ucs-datepicker-text');
                const value = new Date('2017-11-11').toString();
                TestUtils.Simulate.touchStart(datePickerText);
                TestUtils.Simulate.touchStart(datePickerCancel);
                expect(datePickerContainer.className).to.contain('ucs-datepicker-hidden');
                expect(datePicker.initDate.toString()).to.be.equal(value);
                expect(datePicker.state.date.toString()).to.be.equal(value);
            });
            it('--------------onCancel()方法测试 传value和defaultValue-----------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker defaultValue='2017-06-01' value="2017-11-11"/>);
                const datePickerDOM = findDOMNode(datePicker);
                const datePickerContainer = datePickerDOM.querySelector('.ucs-datepicker-container');
                const datePickerCancel = datePickerDOM.querySelector('.ucs-datepicker-cancel');
                const datePickerText = datePickerDOM.querySelector('.ucs-datepicker-text');
                const value = new Date('2017-11-11').toString();
                TestUtils.Simulate.touchStart(datePickerText);
                TestUtils.Simulate.touchStart(datePickerCancel);
                expect(datePickerContainer.className).to.contain('ucs-datepicker-hidden');
                expect(datePicker.initDate.toString()).to.be.equal(value);
                expect(datePicker.state.date.toString()).to.be.equal(value);
            });
        });
        /*onOk()方法测试*/
        describe('DatePicker-onOk()方法测试', function () {
            it('--------------onOk()方法测试-传defaultValue-----------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker defaultValue='2017-06-01'/>);
                const datePickerDOM = findDOMNode(datePicker);
                const datePickerContainer = datePickerDOM.querySelector('.ucs-datepicker-container');
                const datePickerOk = datePickerDOM.querySelector('.ucs-datepicker-submit');
                const datePickerText = datePickerDOM.querySelector('.ucs-datepicker-text');
                const value = new Date('2017-06-01').toString();
                TestUtils.Simulate.touchStart(datePickerText);
                TestUtils.Simulate.touchStart(datePickerOk);
                expect(datePickerContainer.className).to.contain('ucs-datepicker-hidden');
                expect(datePicker.initDate.toString()).to.be.equal(value);
                expect(datePicker.state.date.toString()).to.be.equal(value);
            });
            it('--------------onOk()方法测试-传value-----------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker value="2017-06-01"/>);
                const datePickerDOM = findDOMNode(datePicker);
                const datePickerContainer = datePickerDOM.querySelector('.ucs-datepicker-container');
                const datePickerOk = datePickerDOM.querySelector('.ucs-datepicker-submit');
                const datePickerText = datePickerDOM.querySelector('.ucs-datepicker-text');
                const value = new Date('2017-06-01').toString();
                TestUtils.Simulate.touchStart(datePickerText);
                TestUtils.Simulate.touchStart(datePickerOk);
                expect(datePickerContainer.className).to.contain('ucs-datepicker-hidden');
                expect(datePicker.initDate.toString()).to.be.equal(value);
                expect(datePicker.state.date.toString()).to.be.equal(value);
            });
        });
        describe('DatePicker-对外方法测试', function () {
            it('--------------setValue()方法测试------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker value="2017-06-01"/>);
                datePicker.setValue('2017-11-11');
                expect(datePicker.state.date.toString()).to.be.equal(new Date('2017-11-11').toString());
            });
            it('--------------getValue()方法测试------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker value="2017-06-01"/>);
                expect(new Date(datePicker.getValue()).toString()).to.be.equal(new Date('2017-06-01').toString());
            });
            it('--------------setDisabled()方法测试------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker value="2017-06-01"/>);
                const datePickerDOM = findDOMNode(datePicker);
                const datePickerContainer = datePickerDOM.querySelector('.ucs-datepicker-container');
                const datePickerText = datePickerDOM.querySelector('.ucs-datepicker-text');
                datePicker.setDisabled(true);
                expect(datePickerText.className).to.contain('ucs-datepicker-disabled');
                TestUtils.Simulate.touchStart(datePickerText);
                expect(datePickerContainer.className).to.contain('ucs-datepicker-hidden');
                datePicker.setDisabled(false);
                expect(datePickerText.className).to.not.contain('ucs-datepicker-disabled');
                TestUtils.Simulate.touchStart(datePickerText);
                expect(datePickerContainer.className).to.not.contain('ucs-datepicker-hidden');
            });
            it('--------------clear()方法测试------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker value="2017-06-01"/>);
                datePicker.clear();
                expect(datePicker.state.date).to.be.empty;
                expect(datePicker.initDate).to.be.empty;
            });
            it('--------------reset()方法测试 不传defaultValue------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker value="2017-06-01"/>);
                datePicker.reset();
                expect(datePicker.state.date).to.be.empty;
                expect(datePicker.initDate).to.be.empty;
            });
            it('--------------reset()方法测试 传defaultValue------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker value="2017-06-01"
                                                                            defaultValue="2017-11-11"/>);
                datePicker.reset();
                expect(datePicker.state.date.toString()).to.be.equal(new Date('2017-11-11').toString());
                expect(datePicker.initDate.toString()).to.be.equal(new Date('2017-11-11').toString());
            });
        });
        describe('DatePicker-内部方法测试', function () {
            it('--------------_isExtendMoment()方法测试 mode=date------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker mode="date" />);
                const value = datePicker._isExtendMoment('2017-06-01');
                expect(value.toString()).to.be.equal(new Date('2017-06-01').toString());
            });
            it('--------------_isExtendMoment()方法测试 mode=datetime------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker mode="datetime" />);
                const value = datePicker._isExtendMoment('2017-06-01 09:30:15');
                expect(value.toString()).to.be.equal(new Date('2017-06-01 09:30:15').toString());
            });
            it('--------------_isExtendMoment()方法测试 mode=time------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker mode="time" />);
                const value = datePicker._isExtendMoment('09:30:15');
                expect(value.toString()).to.be.equal(new Date('1970-01-01 09:30:15').toString());
            });
            it('--------------_isExtendMoment()方法测试 mode=year------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker mode="year" />);
                const value = datePicker._isExtendMoment('2017');
                expect(value.toString()).to.be.equal(new Date('2017-01-01').toString());
            });
            it('--------------_isExtendMoment()方法测试 mode=month------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker mode="month" />);
                const value = datePicker._isExtendMoment('09');
                expect(value.toString()).to.be.equal(new Date('1970-09-01').toString());
            });
            it('--------------_onValueChange()方法测试------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker mode="date" value="2017-06-01" />);
                datePicker._onValueChange(['2018'], 0);
                expect(datePicker.state.date.toString()).to.be.equal(new Date('2018-06-01').toString());
                datePicker._onValueChange(['2018','10'], 1);
                expect(datePicker.state.date.toString()).to.be.equal(new Date('2018-11-01').toString());
                datePicker._onValueChange(['2018','10', '11'], 2);
                expect(datePicker.state.date.toString()).to.be.equal(new Date('2018-11-11').toString());
            });
            it('--------------_getDefaultMinDate()方法测试------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker />);
                const value = datePicker._getDefaultMinDate();
                expect(value.toString()).to.be.equal(new Date('1990-01-01 00:00').toString());
            });
            it('--------------_getMinDate()方法测试 有默认最小值------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker minDate="2000-01-01" />);
                const value = datePicker._getMinDate();
                expect(value.toString()).to.be.equal(new Date('2000-01-01').toString());
            });
            it('--------------_getMinDate()方法测试 没有默认最小值------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker />);
                const value = datePicker._getMinDate();
                expect(value.toString()).to.be.equal(new Date('1990-01-01 00:00').toString());
            });
            it('--------------_getDefaultMaxDate()方法测试------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker />);
                const value = datePicker._getDefaultMaxDate();
                expect(value.toString()).to.be.equal(new Date('2020-12-31 23:59:00').toString());
            });
            it('--------------_getMaxDate()方法测试 有默认最小值------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker maxDate="2040-01-01" />);
                const value = datePicker._getMaxDate();
                expect(value.toString()).to.be.equal(new Date('2040-01-01').toString());
            });
            it('--------------_getMaxDate()方法测试 没有默认最小值------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker />);
                const value = datePicker._getMaxDate();
                expect(value.toString()).to.be.equal(new Date('2020-12-31 23:59:00').toString());
            });
            it('--------------_getDateData()方法测试------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker />);
                const value = datePicker._getDateData();
                expect(value[0].key).to.be.equal('year');
                expect(value[1].key).to.be.equal('month');
                expect(value[2].key).to.be.equal('day');
                expect(value[0].props.children[0].value).to.be.equal('1990');
                expect(value[1].props.children[5].value).to.be.equal('5');
                expect(value[2].props.children[20].value).to.be.equal('21');
            });
            it('--------------_getTimeData()方法测试------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker />);
                const value = datePicker._getTimeData();
                expect(value[0].key).to.be.equal('hours');
                expect(value[1].key).to.be.equal('minutes');
                expect(value[0].props.children[18].value).to.be.equal('18');
                expect(value[1].props.children[58].value).to.be.equal('58');
            });
            it('--------------_getValueCols()方法测试------------------', function () {
                const datePicker = TestUtils.renderIntoDocument(<DatePicker />);
                const value = datePicker._getValueCols();
                expect(value.value.toString()).to.be.equal(['1990', '0', '1'].toString());
            });


        });
    });
});

