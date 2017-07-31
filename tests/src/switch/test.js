import Switch  from '../../../src/base/switch/index.js'; // 引入组件
describe('Switch-props测试', function () {
    describe('props测试', function () {
        // props测试
        describe('Switch-props测试', function () {
            it('props测试', function () {
                const switchComponent = shallowRender(Switch, { id: 'switch', className: 'custom-Switch', checked: true, disabled: true});
                expect(switchComponent.props.id.indexOf('switch')).to.not.be.equal(-1);
                expect(switchComponent.props.className.indexOf('custom-Switch')).to.not.be.equal(-1);
                expect(switchComponent.props.className.indexOf('ucs-switch-on')).to.not.be.equal(-1);
                expect(switchComponent.props.className.indexOf('ucs-switch-disabled')).to.not.be.equal(-1);
            });
        });
    });
    describe('function测试', function () {
        describe('Switch-setChecked()方法测试', function () {
            it('----------setChecked()方法测试---------------', function () {
                const switchComponent = TestUtils.renderIntoDocument(<Switch />);
                switchComponent.setChecked(true);
                switchComponent.state.checked = true;
                switchComponent.setChecked(false);
                switchComponent.state.checked = false;
            });
        });
        describe('Switch-getChecked()方法测试', function () {
            it('--------------getChecked()方法测试------------------', function () {
                const switchComponent = TestUtils.renderIntoDocument(<Switch />);
                expect(switchComponent.getChecked()).to.be.not.ok;
                switchComponent.setChecked(true);
                expect(switchComponent.getChecked()).to.be.ok;
            });
        });
        describe('Switch-setDisabled()方法测试', function () {
            it('--------------setDisabled()方法测试-----------------', function () {
                const switchComponent = TestUtils.renderIntoDocument(<Switch />);
                switchComponent.setDisabled(true);
                expect(switchComponent.state.disabled).to.be.ok;
                const switchComponentDOM = findDOMNode(switchComponent);
                TestUtils.Simulate.click(switchComponentDOM);
                expect(switchComponent.state.checked).to.be.not.ok;
            });
        });
        describe('Switch-reset()方法测试', function () {
            it('--------------reset()方法测试------------------', function () {
                const switchComponent = TestUtils.renderIntoDocument(<Switch checked="true" />);
                const switchComponentDOM = findDOMNode(switchComponent);
                TestUtils.Simulate.click(switchComponentDOM);
                switchComponent.reset();
                expect(switchComponent.state.checked).to.be.ok;
            });
        });
        describe('Switch-onClick()方法测试', function () {
            it('--------------onClick()方法测试-----------------', function () {
                const switchComponent = TestUtils.renderIntoDocument(<Switch onClick={clickHandle}/>);
                function clickHandle() {
                    switchComponent.refs.switch.value = '123';
                }
                const switchComponentDOM = findDOMNode(switchComponent);
                TestUtils.Simulate.click(switchComponentDOM);
                expect(switchComponent.state.checked).to.be.ok;
                expect(switchComponent.refs.switch.value).to.equal('123');
            });
        });
    });
});


