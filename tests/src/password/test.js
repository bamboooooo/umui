import TestUtils from 'react-dom/test-utils'; // 引入测试工具库
import { expect } from 'chai'; // 引入断言
import Password  from '../../../src/base/password/index.js'; // 引入组件
import {findDOMNode} from 'react-dom';
var sha1 = require('sha1');
var md5 = require('js-md5');
var sha256 = require('sha256');
// 浅渲染
function shallowRender(Component, props) {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Component {...props}/>);
    return renderer.getRenderOutput();
}
// props测试
describe('Password-porps测试', function () {
    it('porps测试', function () {
        const password = shallowRender(Password, { id: 'passwd', name: 'passwd', isShowClear:false ,placeHolder:'请输入验证码', displayChar: '.',maxLength: '6',encryptKey: '111', encryptType: 'md5'});
        expect(password.props.children[0].props.id.indexOf('passwd')).to.not.be.equal(-1);
        expect(password.props.children[0].props.name.indexOf('passwd')).to.not.be.equal(-1);
        expect(password.props.children[0].props.isShowClear).to.not.be.ok;
        expect(password.props.children[0].props.placeHolder).to.equal('请输入验证码');
        expect(password.props.children[0].props.displayChar).to.equal('.');
        expect(password.props.children[0].props.maxLength).to.equal('6');
        expect(password.props.children[0].props.encryptKey).to.equal('111');
        expect(password.props.children[0].props.encryptType).to.equal('md5');
    });
});
/*getValue()方法测试*/
describe('Password-getValue()方法测试', function () {
    it('----------getValue()方法测试---------------', function () {
        const password = TestUtils.renderIntoDocument(<Password encryptKey='111' encryptType='md5'/>);
        password.refs.password.value = '123456';
        var encryptType = password.props.encryptType;
        var encryptPassword = '';
        var formalPassword = '123456';
        switch (encryptType) {
            case 'md5':
                encryptPassword = md5(password.state.encryptKey + formalPassword);
                break;
            case 'sha1':
                encryptPassword = sha1(password.state.encryptKey + formalPassword);
                break;
            case 'sha256':
                encryptPassword = sha256(password.state.encryptKey + formalPassword);
                break;
            default:
                encryptPassword = formalPassword;
        }
        return encryptPassword;
        expect(password.getValue()).to.equal(encryptPassword);
    });
});

/*clear()方法测试*/
describe('Password-clear()方法测试', function () {
    it('--------------clear()方法测试-----------------', function () {
        const password = TestUtils.renderIntoDocument(<Password isShowClear={true}/>);
        const passwordDOM = findDOMNode(password);
        const clearItem = passwordDOM.querySelector('i');
        password.refs.password.value = '123456';
        TestUtils.Simulate.click(clearItem);
        expect(password.refs.password.value).to.equal('');
    });
});

/*setReadOnly()方法测试*/
describe('Password-setReadOnly()方法测试', function () {
    it('--------------setReadOnly()方法测试-----------------', function () {
        const password = TestUtils.renderIntoDocument(<Password/>);
        const passwordDOM = findDOMNode(password);
        const inputItem = passwordDOM.querySelector('input');
        password.setReadOnly(true);
        expect(inputItem.readOnly).to.be.ok;
    });
});

/*setDisabled()方法测试*/
describe('Password-setDisabled()方法测试', function () {
    it('--------------setDisabled()方法测试-----------------', function () {
        const password = TestUtils.renderIntoDocument(<Password/>);
        const passwordDOM = findDOMNode(password);
        const inputItem = passwordDOM.querySelector('input');
        password.setDisabled(true);
        expect(inputItem.disabled).to.be.ok;
    });
});

/*setEncryptKey()方法测试*/
describe('Password-setEncryptKey()方法测试', function () {
    it('--------------setEncryptKey()方法测试-----------------', function () {
        const password = TestUtils.renderIntoDocument(<Password/>);
        password.setEncryptKey('1111');
        expect(password.state.encryptKey).to.equal('1111');
    });
});
