import NavBar  from '../../../src/complex/nav-bar/index.js'; // 引入组件

var Root = (
  <NavBar
    id="ucs-nav-bar"
    className="my-nav-bar"
    leftItem={[
      <span key="0"><i className="iconfont icon-arrow"></i></span>,
      <span key="1">返回</span>
    ]}
    rightItem={[
      <span key="0"><i className="iconfont icon-more-2"></i></span>
    ]}
  >
    <h1>我的标题</h1>
  </NavBar>
);
const navBar = TestUtils.renderIntoDocument(Root);
const navBarDom = findDOMNode(navBar);
describe('NavBar测试', function () {
    describe('props测试', function () {
        // props测试
        describe('NavBar-props测试', function () {
            it('props-id 测试', function () {
                expect(navBar.props.id.indexOf('ucs-nav-bar')).to.not.be.equal(-1);
            });
            it('props-className 测试', function () {
                expect(navBar.props.className.indexOf('my-nav-bar')).to.not.be.equal(-1);
            });
            it('props-leftItem 测试', function () {
                expect(navBarDom.querySelectorAll('.ucs-nav-bar-left span').length).to.be.equal(2);
            });
            it('props-rightItem 测试', function () {
                expect(navBarDom.querySelectorAll('.ucs-nav-bar-right span').length).to.be.equal(1);
            });
            it('props.children 测试', function () {
                expect(navBarDom.querySelectorAll('.ucs-nav-bar-title h1').length).to.be.equal(1);
            });
        });
    });
});

