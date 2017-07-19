/**
 * Created by Administrator on 2017/7/18.
 */
import Picker  from '../../../src/base/picker/index.js'; // 引入组件

// props测试
describe('picker-props测试', function () {
    it('---------------props测试----------------', function () {
        const picker = TestUtils.renderIntoDocument(<Picker/>);
        expect(picker.props.visible).to.not.be.ok;
        expect(picker.props.placeholder).to.be.equal('请选择');
        expect(picker.props.title).to.be.equal('请选择');
        expect(picker.props.cancelText).to.be.equal('取消');
        expect(picker.props.okText).to.be.equal('确定');
        expect(picker.props.format).to.be.equal('-');
        expect(picker.props.disabled).to.not.be.ok;
        expect(picker.props.data).to.be.empty;
        expect(picker.props.maxCols).to.be.equal(2);
        expect(picker.props.defaultValue).to.be.empty;
        expect(picker.props.onClick).to.be.equal(null);
        expect(picker.props.onChange).to.be.equal(null);
        expect(picker.props.onOk).to.be.equal(null);
        expect(picker.props.onCancel).to.be.equal(null);
        expect(picker.props.onMaskClick).to.be.equal(null);
        expect(picker.props.displayMember).to.be.equal('label');
        expect(picker.props.valueMember).to.be.equal('value');
    });
});

/*onMaskClick()方法测试*/
describe('Picker-onMaskClick()方法测试', function () {
    it('--------------onMaskClick()方法测试-----------------', function () {
        const picker = TestUtils.renderIntoDocument(<Picker/>);
        const pickerDOM = findDOMNode(picker);
        const pickerContainer = pickerDOM.querySelector('.ucs-picker-container');
        const pickerMask = pickerDOM.querySelector('.ucs-picker-popup-mask');
        TestUtils.Simulate.click(pickerDOM);
        TestUtils.Simulate.click(pickerMask);
        expect(pickerContainer.className).to.contain('ucs-picker-popup-mask-hidden');
    });
});

/*onCancel()方法测试*/
describe('Picker-onCancel()方法测试', function () {
    it('--------------onCancel()方法测试-----------------', function () {
        const picker = TestUtils.renderIntoDocument(<Picker defaultValue={['广东省','广州市','天河区']}/>);
        const pickerDOM = findDOMNode(picker);
        const pickerContainer = pickerDOM.querySelector('.ucs-picker-container');
        const pickerCancel = pickerDOM.querySelector('.ucs-picker-popup-header-left');
        TestUtils.Simulate.click(pickerDOM);
        TestUtils.Simulate.click(pickerCancel);
        expect(pickerContainer.className).to.contain('ucs-picker-popup-mask-hidden');
        expect(picker.state.value).to.include('广东省');
    });
});

/*onOk()方法测试*/
describe('Picker-onOk()方法测试', function () {
    it('--------------onOk()方法测试-----------------', function () {
        const majors = [
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
        const picker = TestUtils.renderIntoDocument(<Picker data={majors} displayMember={'value'} valueMember={'key'}/>);
        const pickerDOM = findDOMNode(picker);
        const pickerContainer = pickerDOM.querySelector('.ucs-picker-container');
        const pickerOk = pickerDOM.querySelector('.ucs-picker-popup-header-right');
        TestUtils.Simulate.click(pickerDOM);
        TestUtils.Simulate.click(pickerOk);
        expect(pickerContainer.className).to.contain('ucs-picker-popup-mask-hidden');
        expect(picker.state.value).to.include('计算机');
    });
});

/*setValue()方法测试*/
describe('Picker-setValue()方法测试', function () {
    it('--------------setValue()方法测试-----------------', function () {
        const majors = [
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
        const picker = TestUtils.renderIntoDocument(<Picker data={majors} displayMember={'value'} valueMember={'key'}/>);
        picker.setValue(['挖掘机']);
        expect(picker.state.value).to.include('挖掘机');
    });
});

/*getValue()方法测试*/
describe('Picker-getValue()方法测试', function () {
    it('--------------getValue()方法测试-----------------', function () {
        const majors = [
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
        const picker = TestUtils.renderIntoDocument(<Picker data={majors} displayMember={'value'} valueMember={'key'} defaultValue={['工业设计']}/>);
        const value = picker.getValue();
        expect(value).to.include('工业设计');
    });
});

/*setDisabled()方法测试*/
describe('Picker-setDisabled()方法测试', function () {
    it('--------------setDisabled()方法测试-----------------', function () {
        const picker = TestUtils.renderIntoDocument(<Picker/>);
        const pickerDOM = findDOMNode(picker);
        const pickerContainer = pickerDOM.querySelector('.ucs-picker-container');
        picker.setDisabled(true);
        TestUtils.Simulate.click(pickerDOM);
        expect(pickerContainer.className).to.contain('ucs-picker-popup-mask-hidden');
    });
});

/*reset()方法测试*/
describe('Picker-reset()方法测试', function () {
    it('--------------reset()方法测试-----------------', function () {
        const majors = [
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
        const picker = TestUtils.renderIntoDocument(<Picker data={majors} displayMember={'value'} valueMember={'key'} defaultValue={['工业设计']}/>);
        picker.setValue(['挖掘机']);
        picker.reset();
        expect(picker.state.value).to.include('工业设计');
    });
});

/*clear()方法测试*/
describe('Picker-clear()方法测试', function () {
    it('--------------clear()方法测试-----------------', function () {
        const majors = [
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
        const picker = TestUtils.renderIntoDocument(<Picker data={majors} displayMember={'value'} valueMember={'key'} defaultValue={['工业设计']}/>);
        picker.clear();
        expect(picker.state.value).to.be.empty;
    });
});

/*_onContainerClick()方法测试*/
describe('Picker-_onContainerClick()方法测试', function () {
    it('--------------_onContainerClick()方法测试-----------------', function () {
        const picker = TestUtils.renderIntoDocument(<Picker/>);
        const pickerDOM = findDOMNode(picker);
        const pickerCon = pickerDOM.querySelector('.ucs-picker');
        const pickerContainer = pickerDOM.querySelector('.ucs-picker-container');
        TestUtils.Simulate.click(pickerDOM);
        TestUtils.Simulate.click(pickerCon);
        expect(pickerContainer.className).to.not.contain('ucs-picker-popup-mask-hidden');
    });
});

/*_handleClick()和_toggle()方法测试*/
describe('Picker-_handleClick()和_toggle()方法测试', function () {
    it('--------------_handleClick()和_toggle()方法测试-----------------', function () {
        const picker = TestUtils.renderIntoDocument(<Picker/>);
        const pickerDOM = findDOMNode(picker);
        const pickerContainer = pickerDOM.querySelector('.ucs-picker-container');
        TestUtils.Simulate.click(pickerDOM);
        expect(pickerContainer.className).to.not.contain('ucs-picker-popup-mask-hidden');
    });
});

/*_getOptions()方法测试*/
describe('Picker-_getOptions()方法测试', function () {
    it('--------------_getOptions()方法测试-----------------', function () {
        const seasons = [
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
        const picker = TestUtils.renderIntoDocument(<Picker data={seasons}/>);
        const pickers = picker._getOptions(picker.props.data,0);
        expect(pickers.length).to.be.equal(2);
    });
});

/*_handleClick()方法测试*/
describe('Picker-_handleClick()方法测试', function () {
    it('--------------_handleClick()方法测试-----------------', function () {
        const picker = TestUtils.renderIntoDocument(<Picker/>);
        const pickerDOM = findDOMNode(picker);
        const pickerContainer = pickerDOM.querySelector('.ucs-picker-container');
        TestUtils.Simulate.click(pickerDOM);
        expect(pickerContainer.className).to.not.contain('ucs-picker-popup-mask-hidden');
    });
});

/*_onpickerChange()方法测试*/
describe('Picker-_onpickerChange()方法测试', function () {
    it('--------------_onpickerChange()方法测试-----------------', function () {
        const seasons = [
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
        const picker = TestUtils.renderIntoDocument(<Picker data={seasons} defaultValue={['2015', '夏']}/>);
        picker._onpickerChange(picker.props.data,1,'冬');
        expect(picker.state.value).to.include('冬');
    });
});

/*_getInitValue()方法测试*/
describe('Picker-_getInitValue()方法测试', function () {
    it('--------------_getInitValue()方法测试-----------------', function () {
        const seasons = [
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
        const picker = TestUtils.renderIntoDocument(<Picker data={seasons} defaultValue={['2015', '夏']}/>);
        const value = picker._getInitValue();
        expect(value).to.include('2015');
    });
});

