import TestUtils from 'react-dom/test-utils'; // 引入测试工具库
import { expect } from 'chai'; // 引入断言
import Input  from '../../../src/base/input/index.js'; // 引入组件

// 浅渲染
function shallowRender(component, props) {
  const renderer = TestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}

// props测试
describe('Password-props测试', function () {
  it('txt测试', function () {
    const password = shallowRender(Input, {txt: 'sssssssss'});
    expect(password.props.txt.indexOf('sssssssss')).to.be.not.equal(-1);
  });
});
