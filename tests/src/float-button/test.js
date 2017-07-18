/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/18
 * 说明：
 */

import FloatButton  from '../../../src/base/float-button/index.js'; // 引入组件

// props属性测试
describe('FloatButton-props测试', function () {
    it('porps测试', function () {
        // const floatButton = shallowRender(FloatButton, { id: 'flybutton', className: 'to-fly', img: 'http://172.17.21.139:10080/uploads/user/avatar/6/avatar.png' ,text: '浮动按钮'});
        const floatButton = TestUtils.renderIntoDocument(<FloatButton id="flybutton" className="to-fly" img="http://172.17.21.139:10080/uploads/user/avatar/6/avatar.png" text="浮动按钮"/>);
        expect(floatButton.props.id.indexOf('flybutton')).to.not.be.equal(-1);
        expect(floatButton.props.className.indexOf('to-fly')).to.not.be.equal(-1);
        expect(floatButton.props.img.indexOf('http://172.17.21.139:10080/uploads/user/avatar/6/avatar.png')).to.not.be.equal(-1);
        expect(floatButton.props.text.indexOf('浮动按钮')).to.not.be.equal(-1);
    });
});

// onClic()方法测试
describe('FloatButton-onClick()测试', function () {
    it('onClick()测试', function () {
        const floatButton = TestUtils.renderIntoDocument(<FloatButton onClick={_onclick}/>);
        const floatDOM = findDOMNode(floatButton);
        floatDOM.id = "test";
        function _onclick() {
            floatDOM.id = "test1"
        }
        TestUtils.Simulate.click(floatDOM);
        expect(floatDOM.id).to.be.equal("test1");
    });
});

// hide()方法测试
describe('FloatButton-hide()测试', function () {
    it('hide()测试', function () {
        const floatButton = TestUtils.renderIntoDocument(<FloatButton/>);
        floatButton.hide();
        const floatDOM = findDOMNode(floatButton);
        expect(floatDOM.className.indexOf('ucs-hide')).to.not.be.equal(-1);
    });
});

// show()方法测试
describe('FloatButton-show()测试', function () {
    it('show()测试', function () {
        const floatButton = TestUtils.renderIntoDocument(<FloatButton/>);
        floatButton.hide();
        const floatDOM = findDOMNode(floatButton);
        console.log('调用hide()后的className:'+floatDOM.className);
        floatButton.show();
        console.log('调用show()后的className:'+floatDOM.className);
        expect(floatDOM.className.indexOf('ucs-hide')).to.be.equal(-1);
    });
});