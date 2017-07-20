import Input from '../../../src/base/input/index.js'; // 引入组件

describe('Input组件测试', function() {
	describe('props测试', function() {
		// props测试
		describe('Input-props测试', function() {
			it('----------Input-props测试---------------', function() {
				const input = TestUtils.renderIntoDocument(
					<Input
	                type= 'tel'
	                className='usc-input-phone'
	                readOnly={true}
	                disabled={true}
	                placeHolder= 'phoneNumber'
	                id= 'phone'
	                name= 'phone'
	                value= '666666'
	                defaultValue= '123456'
	                isShowClear={false} 
	                maxLength= '15'
	            />);
				expect(input.props.type.indexOf('tel')).to.not.be.equal(-1);
				expect(input.props.className.indexOf('usc-input-phone')).to.not.be.equal(-1);
				expect(input.props.readOnly).to.be.ok;
				expect(input.props.disabled).to.be.ok;
				expect(input.props.placeHolder.indexOf('phoneNumber')).to.not.be.equal(-1);
				expect(input.props.id.indexOf('phone')).to.not.be.equal(-1);
				expect(input.props.name.indexOf('phone')).to.not.be.equal(-1);
				expect(input.props.value.indexOf('666666')).to.not.be.equal(-1);
				expect(input.props.defaultValue.indexOf('123456')).to.not.be.equal(-1);
				expect(input.props.isShowClear).to.not.be.ok;
				expect(input.props.maxLength.indexOf('15')).to.not.be.equal(-1);
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