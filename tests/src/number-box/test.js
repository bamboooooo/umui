import Numberbox from '../../../src/base/number-box/index.js'; // 引入组件
// props测试
describe('Numberbox组件测试', function () {
    describe('props测试', function () {
        describe('Numberbox-porps测试', function () {
            it('-------------porps-----------测试', function () {
                const numberbox = TestUtils.renderIntoDocument(<Numberbox
                                                                name="numberbox"
                                                                id="numberbox"
                                                                max="100"
                                                                min="0"
                                                                defaultValue="0"
                                                                step="1"
                                                                />);
                expect(numberbox.props.id.indexOf('numberbox')).to.not.be.equal(-1);
                expect(numberbox.props.name.indexOf('numberbox')).to.not.be.equal(-1);
                expect(numberbox.props.max).to.be.equal('100');
                expect(numberbox.props.min).to.be.equal('0');
                expect(numberbox.props.defaultValue).to.be.equal('0');
                expect(numberbox.props.step).to.be.equal('1');
            })
        });
        describe('Numberbox-porps-onChange测试', function () {
            it('-------------porps-onChange()-----------测试', function () {
                const numberbox = TestUtils.renderIntoDocument(<Numberbox onChange={_changeHandle}/>);
                function _changeHandle() {
                    numberbox.refs.numberbox.value = '123';
                }
                const numberboxDOM = findDOMNode(numberbox);
                const inputItem = numberboxDOM.querySelector('input');
                TestUtils.Simulate.change(inputItem);
                expect(numberbox.refs.numberbox.value).to.equal('123');
            })
        });
    });
    describe('function测试', function () {
        /*setValue()方法测试*/
        describe('Numberbox-setValue()方法测试', function () {
            it('----------setValue()方法测试---------------', function () {
                const numberbox = TestUtils.renderIntoDocument(<Numberbox/>);
                numberbox.setValue('12345');
                expect(numberbox.refs.numberbox.value).to.equal('12345');
            });
        });
        /*getValue()方法测试*/
        describe('Numberbox-getValue()方法测试', function () {
            it('----------getValue()方法测试---------------', function () {
                const numberbox = TestUtils.renderIntoDocument(<Numberbox/>);
                numberbox.setValue('12345');
                expect(numberbox.getValue()).to.equal('12345');
            });
        });
        /*clear()方法测试*/
        describe('Numberbox-clear()方法测试', function () {
            it('--------------clear()方法测试-----------------', function () {
                const numberbox = TestUtils.renderIntoDocument(<Numberbox onBlur={_blurHandle}/>);
                function _blurHandle(){
                   numberbox.clear;
                };
                const numberboxDOM = findDOMNode(numberbox);
                numberbox.refs.numberbox.value = '123';
                const inputItem = numberboxDOM.querySelector('input');
                TestUtils.Simulate.blur(inputItem);
                expect(numberbox.refs.numberbox.value).to.equal('0');
            });
        });

        /*setDisabled()方法测试*/
        describe('Numberbox-setDisabled()方法测试', function () {
            it('--------------setDisabled()方法测试-----------------', function () {
                const numberbox = TestUtils.renderIntoDocument(<Numberbox/>);
                const numberboxDOM = findDOMNode(numberbox);
                const inputItem = numberboxDOM.querySelector('input');
                numberbox.setDisabled(true);
                expect(inputItem.disabled).to.be.ok;
            });
        });
        /*reset()方法测试*/
        describe('Numberbox-reset()方法测试', function () {
            it('--------------reset()方法测试-----------------', function () {
                const numberbox = TestUtils.renderIntoDocument(<Numberbox  defaultValue="100"/>);
                numberbox.reset();
                const numberboxDOM = findDOMNode(numberbox);
                const inputItem = numberboxDOM.querySelector('input');
                TestUtils.Simulate.blur(inputItem);
                expect(numberbox.refs.numberbox.value).to.equal('100');
            });
        });



        /*onChange()方法测试*/
        describe('Numberbox-onChange()方法测试', function () {
            it('--------------onChange()方法测试-----------------', function () {
                const numberbox = TestUtils.renderIntoDocument(<Numberbox onChange={changeHandle}/>);
                function changeHandle() {
                    numberbox.refs.numberbox.value = '123456';
                }
                const numberboxDOM = findDOMNode(numberbox);
                const inputItem = numberboxDOM.querySelector('input');
                TestUtils.Simulate.change(inputItem);
                expect(numberbox.refs.numberbox.value).to.equal('123456');
            });
        });

        /*onBlur()方法测试*/
        describe('Numberbox-onBlur()方法测试', function () {
            it('--------------onBlur()方法测试-----------------', function () {
                const numberbox = TestUtils.renderIntoDocument(<Numberbox onBlur={this._blurHandle}/>);
                function _blurHandle(){
                    numberbox.setDisabled();
                }
                const numberboxDOM = findDOMNode(numberbox);
                const inputItem = numberboxDOM.querySelector('input');
                numberbox.setDisabled(true);
                expect(inputItem.disabled).to.be.ok;
            });
        });
        /*onFocus()方法测试*/
        describe('Numberbox-onFocus()方法测试', function () {
            it('--------------onFocus()方法测试-----------------', function () {
                const numberbox = TestUtils.renderIntoDocument(<Numberbox onFocus={_focusHandle}/>);
                function _focusHandle() {
                    numberbox.setValue('12345');
                }
                const numberboxDOM = findDOMNode(numberbox);
                const inputItem = numberboxDOM.querySelector('input');
                TestUtils.Simulate.focus(inputItem);
                expect(numberbox.refs.numberbox.value).to.equal('12345');
            });
        });
        /*getformatValue()方法测试*/
        describe('Numberbox-getformatValue()方法测试', function () {
            it('--------------getformatValue()方法测试-----------------', function () {
                const numberbox = TestUtils.renderIntoDocument(<Numberbox/>);
                expect(numberbox.getformatValue()).to.equal('');
            });
        });
        /*_setFormatValue()方法测试*/
        describe('Numberbox-_setFormatValue()方法测试', function () {
            it('--------------_setFormatValue()方法测试-----------------', function () {
                const numberbox = TestUtils.renderIntoDocument(<Numberbox/>);
                numberbox._setFormatValue('12345');
                expect(numberbox.state.formatterValue).to.equal('12345');
            });
        });
        /*_setformalValue()方法测试*/
        describe('Numberbox-_setformalValue()方法测试', function () {
            it('--------------_setformalValue()方法测试-----------------', function () {
                const numberbox = TestUtils.renderIntoDocument(<Numberbox/>);
                numberbox._setformalValue('12345');
                expect(numberbox.state.formalValue).to.equal('12345');
            });
        });
        /*_blurHandle()方法测试*/
        describe('Numberbox-_blurHandle()方法测试', function () {
            it('--------------_blurHandle()方法测试-----------------', function () {
                const numberbox = TestUtils.renderIntoDocument(<Numberbox/>);
                const numberboxDOM = findDOMNode(numberbox);
                const inputItem = numberboxDOM.querySelector('input');
                TestUtils.Simulate.blur(inputItem);
                expect(numberbox.state.value).to.equal('0');
            });
        });
        /*_focusHandle()方法测试*/
        describe('Numberbox-_focusHandle()方法测试', function () {
            it('--------------_focusHandle()方法测试-----------------', function () {
                const numberbox = TestUtils.renderIntoDocument(<Numberbox/>);
                const numberboxDOM = findDOMNode(numberbox);
                const inputItem = numberboxDOM.querySelector('input');
                TestUtils.Simulate.focus(inputItem);
                expect(numberbox.state.value).to.equal(0);
            });
        });
        /*_plusHandle()方法测试*/
        describe('Numberbox-_focusHandle()方法测试', function () {
            it('--------------_focusHandle()方法测试-----------------', function () {
                const numberbox = TestUtils.renderIntoDocument(<Numberbox/>);
                numberbox._plusHandle();
                expect(numberbox.state.value).to.equal('1');
            });
        });
        /*_reduceHandle()方法测试*/
        describe('Numberbox-_reduceHandle()方法测试', function () {
            it('--------------_reduceHandle()方法测试-----------------', function () {
                const numberbox = TestUtils.renderIntoDocument(<Numberbox/>);
                numberbox.setValue(2);
                numberbox._reduceHandle();
                expect(numberbox.state.value).to.equal('1');
            });
        });
    });
});


