import Button  from '../../../src/base/button/index.js'; // 引入组件
describe('Button-props测试', function () {
    describe('Button-props测试', function () {
        // props测试
        describe('Button-props测试', function () {
            it('props测试', function () {
                const button = shallowRender(Button, { id: 'btn', name: 'btn', className: 'ucs-btn-cancel',disabled: true});
                expect(button.props.id.indexOf('btn')).to.not.be.equal(-1);
                expect(button.props.name.indexOf('btn')).to.not.be.equal(-1);
                expect(button.props.className.indexOf('ucs-btn-cancel')).to.not.be.equal(-1);
                expect(button.props.disabled).to.be.ok;
            });
        });
    });
    describe('Button-props测试', function () {
        /*setValue()方法测试*/
        describe('Button-setValue()方法测试', function () {
            it('----------setValue()方法测试---------------', function () {
                const button = TestUtils.renderIntoDocument(<Button value="确定"/>);
                const buttonDom = findDOMNode(button);
                button.setValue('取消');
                const btnText = buttonDom.innerHTML;
                expect(btnText).to.equal('取消');
            });
        });

        /*setDisabled()方法测试*/
        describe('Button-setDisabled()方法测试', function () {
            it('--------------setDisabled()方法测试-----------------', function () {
                const button = TestUtils.renderIntoDocument(<Button />);
                const buttonDOM = findDOMNode(button);
                // const inputItem = buttonDOM.querySelector('input');
                button.setDisabled(true);
                expect(buttonDOM.disabled).to.be.ok;
                button.setDisabled(false);
                expect(buttonDOM.disabled).to.not.be.ok;
            });
        });



        /*onClick()方法测试*/
        describe('Button-onClick()方法测试', function () {
            it('--------------onClick()方法测试-----------------', function () {
                const button = TestUtils.renderIntoDocument(<Button onClick={clickHandle}/>);
                function clickHandle() {
                    button.refs.button.value = '123456';
                }
                const buttonDOM = findDOMNode(button);
                TestUtils.Simulate.click(buttonDOM);
                expect(button.refs.button.value).to.equal('123456');
            });
        });
    });
});


