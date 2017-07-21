import Input from '../../../src/base/input/index.js'; // 引入组件

describe('Input组件测试', function() {
    describe('props测试', function() {
        // props测试
        describe('Input-props测试', function() {
            it('----------Input-props测试---------------', function() {
                const input = TestUtils.renderIntoDocument(<Input
                    type= 'tel'
                    className='usc-input-phone'
                    readOnly={true}
                    disabled={true}
                    placeHolder= 'phoneNumber'
                    id= 'phone'
                    name= 'phone'
                    value= ''
                    defaultValue= '123456'
                    isShowClear={false}
                    maxLength= '15'
                />);
                const inputDom = findDOMNode(input);
                const inputEle = inputDom.querySelector('input');
                expect(input.props.type.indexOf('tel')).to.not.be.equal(-1);
                expect(input.props.className.indexOf('usc-input-phone')).to.not.be.equal(-1);
                expect(input.props.readOnly).to.be.ok;
                expect(input.props.disabled).to.be.ok;
                expect(input.props.placeHolder.indexOf('phoneNumber')).to.not.be.equal(-1);
                expect(input.props.id.indexOf('phone')).to.not.be.equal(-1);
                expect(input.props.name.indexOf('phone')).to.not.be.equal(-1);
                expect(input.props.value.indexOf('666666')).to.be.equal(-1);
                expect(input.props.defaultValue.indexOf('123456')).to.not.be.equal(-1);
                expect(inputEle.value).to.be.equal('123456');
                expect(input.props.isShowClear).to.not.be.ok;
                expect(inputDom.querySelector('span.ucs-showClose').style.display).to.be.equal('none');
                expect(input.props.maxLength.indexOf('15')).to.not.be.equal(-1);
                expect(inputEle.maxLength).to.be.equal(11);
            });
        });

        // props-onChange测试
        describe('Input-props-onChange测试', function(){
            it('----------props-onChange测试----------', function(){
                const input = TestUtils.renderIntoDocument(<Input onChange={_onChange} name="tiger" value="text" type="tel"/>);
                let targetName = 'cat';
                function _onChange (e) {
                    targetName = e.target.name;
                };
                const inputDom = findDOMNode(input);
                let inputEle = inputDom.querySelector('input');

                TestUtils.Simulate.change(inputEle);
                expect(targetName).to.be.equal("tiger");
                expect(inputEle.value).to.be.equal("");
            });
        });
        // props-onBlur测试
        describe('Input-props-onBlur测试', function(){
            it('----------props-onBlur测试----------',function(){
                const input = TestUtils.renderIntoDocument(<Input onBlur={_onBlur} name="tiger"/>);
                let targetName = 'cat';
                function _onBlur (e) {
                    targetName = e.target.name;
                };
                const inputDom = findDOMNode(input);
                let inputEle = inputDom.querySelector('input');

                TestUtils.Simulate.blur(inputEle);
                expect(targetName).to.be.equal("tiger");
            });
        });
        // props-onFocus测试
        describe('Input-props-onFocus测试', function(){
            it('----------props-onFocus测试----------',function(){
                const input = TestUtils.renderIntoDocument(<Input onFocus={_onFocus} name="tiger"/>);
                let targetName = 'cat';
                function _onFocus (e) {
                    targetName = e.target.name;
                };
                const inputDom = findDOMNode(input);
                let inputEle = inputDom.querySelector('input');

                TestUtils.Simulate.focus(inputEle);
                expect(targetName).to.be.equal("tiger");
            });
        });
        // props-afterValidation测试
        describe('Input-props-onBlur测试', function(){
            it('----------props-onBlur测试----------',function(){
                const input = TestUtils.renderIntoDocument(<Input type="tel" onBlur={_onBlur} name="telephoneInput" afterValidation={_afterValidation}/>);
                let targetName = '';
                let msg = '';
                function _onBlur (e) {
                    targetName = e.target.name;
                };
                function _afterValidation (e,result){
                    if(!result){
                        msg = e.target.name+'的手机号码格式不正确';
                    }
                };
                const inputDom = findDOMNode(input);
                let inputEle = inputDom.querySelector('input');

                inputEle.value = '123123';
                TestUtils.Simulate.blur(inputEle);
                expect(targetName).to.be.equal("telephoneInput");
                expect(msg).to.be.equal("telephoneInput的手机号码格式不正确");
            });
        });
    });


    describe('function测试', function() {
        // setValue()方法测试
        describe('Input-setValue()方法测试', function() {
            it('----------setValue()方法测试---------------', function() {
                const input = TestUtils.renderIntoDocument(<Input value="value1"/>);
                const inputDom = findDOMNode(input);
                input.setValue('value2');
                const inputText = inputDom.querySelector('input').value;
                expect(inputText).to.equal('value2');
            });
        });

        // getValue()方法
        describe('Input-getValue()方法测试', function() {
            it('----------getValue()方法测试---------------', function() {
                const input = TestUtils.renderIntoDocument(<Input value="value1"/>);
                const inputDom = findDOMNode(input);
                const inputGetValue = input.getValue();
                const inputDefaultText = inputDom.querySelector('input').value;
                expect(inputGetValue).to.equal(inputDefaultText);
            });
        });

        // setReadOnly()方法
        describe('Input-setReadOnly()方法测试', function() {
            it('----------setReadOnly()方法测试---------------', function() {
                const input = TestUtils.renderIntoDocument(<Input/>);
                const inputDom = findDOMNode(input).querySelector('input');
                input.setReadOnly(true);
                expect(inputDom.readOnly).to.be.ok;
                input.setReadOnly(false);
                expect(inputDom.readOnly).to.not.be.ok;
            });
        });

        // setDisabled()方法
        describe('Input-setDisabled()方法测试', function() {
            it('----------setDisabled()方法测试---------------', function() {
                const input = TestUtils.renderIntoDocument(<Input/>);
                const inputDom = findDOMNode(input).querySelector('input');
                input.setDisabled(true);
                expect(inputDom.disabled).to.be.ok;
                input.setDisabled(false);
                expect(inputDom.disabled).to.not.be.ok;
            });
        });

        // clear()方法
        describe('Input-clear()方法测试', function() {
            it('----------clear()方法测试---------------', function() {
                const input = TestUtils.renderIntoDocument(<Input value="test"/>);
                const inputDom = findDOMNode(input).querySelector('input');
                input.clear();
                const inputValue = inputDom.value;
                expect(inputValue).to.equal('');
            });
        });

        // clear()方法
        describe('Input-reset()方法测试', function() {
            it('----------reset()方法测试---------------', function() {
                const input = TestUtils.renderIntoDocument(<Input value="test" defaultValue="default"/>);
                const inputDom = findDOMNode(input).querySelector('input');
                input.reset();
                const inputValue = inputDom.value;
                expect(inputValue).to.equal('default');
            });
        });

        // onFocus()方法
        describe('Input-onFocus()方法测试', function() {
            it('----------onFocus()方法测试---------------', function() {
                const input = TestUtils.renderIntoDocument(<Input id="test"/>);
                const inputDom = findDOMNode(input).querySelector('input');
                input.onFocus();
                const focusEle = document.activeElement;
                expect(focusEle.id).to.equal(inputDom.id);
            });
        });
    });
});
