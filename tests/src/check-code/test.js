import CheckCode  from '../../../src/complex/check-code'; // 引入组件
describe('CheckCode-props测试', function () {
    describe('props测试', function () {
        // props测试
        describe('CheckCode-props测试', function () {
            it('props测试', function () {
                const checkcode = TestUtils.renderIntoDocument(<CheckCode id="checkcode" className="ucs-btn-code" disabled text="点击获取" temp="s" count="5" />);
                expect(checkcode.props.id.indexOf('checkcode')).to.not.be.equal(-1);
                expect(checkcode.props.className.indexOf('ucs-btn-code')).to.not.be.equal(-1);
                expect(checkcode.props.disabled).to.be.ok;
                expect(checkcode.props.text.indexOf('点击获取')).to.not.be.equal(-1);
                expect(checkcode.props.temp.indexOf('s')).to.not.be.equal(-1);
                expect(checkcode.props.count.indexOf('5')).to.not.be.equal(-1);
            });
        });
    });
    describe('function测试', function () {
        /*start()方法测试*/
        describe('CheckCode-start()方法测试', function () {
            it('----------start()方法测试---------------', function () {
                const checkcode = TestUtils.renderIntoDocument(<CheckCode />);
                const buttonDom = findDOMNode(checkcode);
                checkcode.start();
                const btnText = buttonDom.innerHTML;
                expect(btnText).to.not.equal('获取验证码');
            });
        });

        /*setDisabled()方法测试*/
        describe('CheckCode-setDisabled()方法测试', function () {
            it('--------------setDisabled()方法测试-----------------', function () {
                const checkcode = TestUtils.renderIntoDocument(<CheckCode />);
                const buttonDOM = findDOMNode(checkcode);
                // const inputItem = buttonDOM.querySelector('input');
                checkcode.setDisabled(true);
                expect(buttonDOM.disabled).to.be.ok;
                checkcode.setDisabled(false);
                expect(buttonDOM.disabled).to.not.be.ok;
            });
        });



        /*onClick()方法测试*/
        describe('CheckCode-reset()方法测试', function () {
            it('--------------reset()方法测试-----------------', function () {
                const checkcode = TestUtils.renderIntoDocument(<CheckCode />);
                const buttonDOM = findDOMNode(checkcode);
                checkcode.start();
                const btnText = buttonDOM.innerHTML;
                expect(btnText).to.not.equal('获取验证码');
                setTimeout(function () {
                    checkcode.reset();
                    expect(btnText).to.equal('获取验证码');
                },2000);
            });
        });
    });
});


