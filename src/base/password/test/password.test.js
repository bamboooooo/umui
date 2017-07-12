// var  React =  require('react');
// var  ReactDOM =  require('react-dom');
var Password = require('../index');
var expect = require( 'chai');
var TestUtils = require( 'react-addons-test-utils');

// 浅渲染，将组件渲染成虚拟dom对象
function shallowRender(Component, props) {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Component {...props}/>);
    return renderer.getRenderOutput();
}


// props测试
 describe('Password-porps测试', function () {
    it('classNames测试', function () {
        const Password = shallowRender(Password, {className: {root:'666'}});
        expect(Password.props.className.indexOf('666')).to.be.not.equal(-1);
    });
});
  /*
//清除密码clear()的功能测试
describe('DOM Rendering', function () {
    it('Click the clear , the password should be deleted', function () {
        const password = TestUtils.renderIntoDocument(<Password/>);
        let clear = TestUtils.scryRenderedDOMComponentsWithTag(password, 'i');
        TestUtils.Simulate.click(clear);
        expect(password.value).to.equal('');
    });
});*/

// 真实dom渲染测试
/*describe('Password-功能测试', function(){
    it('use setDisabled() ，the password  should  be disabled', function(){
        console.log('$$$');
        /!*const Password = TestUtils.renderIntoDocument(<Password setDisabled={true}/>);
        const passwordDom = findDOMNode(Password);
        let input = passwordDom.querySelector('input');
        TestUtils.Simulate.change(input);
        expect(input.disabled).to.be.equal(true);*!/
    });
});*/


