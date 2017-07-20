/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/18
 * 说明：
 */

import Tag from '../../../src/base/tag/index.js'; // 引入组件

describe('Input组件测试', function() {
    describe('props测试', function() {
        // props属性测试
        describe('Tag-props测试', function () {
            it('porps测试', function () {
                // const floatButton = shallowRender(FloatButton, { id: 'flybutton', className: 'to-fly', img: 'http://172.17.21.139:10080/uploads/user/avatar/6/avatar.png' ,text: '浮动按钮'});
                const tag = TestUtils.renderIntoDocument(<Tag id="tag" className="tag" value="123"/>);
                expect(tag.props.id.indexOf('tag')).to.not.be.equal(-1);
                expect(tag.props.className.indexOf('tag')).to.not.be.equal(-1);
                expect(tag.props.value.indexOf('123')).to.not.be.equal(-1);
            });
        });
    });

    describe('function测试', function() {
        // setValue(v)方法测试
        describe('Tag-setValue(v)测试', function () {
            it('setValue(v)测试', function () {
                const tag = TestUtils.renderIntoDocument(<Tag/>);
                tag.setValue('123');
                const _text = TestUtils.scryRenderedDOMComponentsWithTag(tag, 'i');
                expect(_text[0].innerHTML).to.be.equal("123");
            });
        });

        // getValue()方法测试
        describe('Tag-getValue()测试', function () {
            it('getValue()测试', function () {
                const tag = TestUtils.renderIntoDocument(<Tag value="123"/>);
                const _val = tag.getValue();
                const _text = TestUtils.scryRenderedDOMComponentsWithTag(tag, 'i');
                expect(_text[0].innerHTML).to.be.equal(_val);
            });
        });

        // hide()方法测试
        describe('Tag-hide()测试', function () {
            it('hide()测试', function () {
                const tag = TestUtils.renderIntoDocument(<Tag/>);
                tag.hide();
                const tagDOM = findDOMNode(tag);
                expect(tagDOM.className.indexOf('ucs-hide')).to.not.be.equal(-1);
            });
        });

        // show()方法测试
        describe('Tag-show()测试', function () {
            it('show()测试', function () {
                const tag = TestUtils.renderIntoDocument(<Tag/>);
                tag.hide();
                const tagDOM = findDOMNode(tag);
                console.log('调用hide()后的className:' + tagDOM.className);
                tag.show();
                console.log('调用show()后的className:' + tagDOM.className);
                expect(tagDOM.className.indexOf('ucs-hide')).to.be.equal(-1);
            });
        });
    });
});