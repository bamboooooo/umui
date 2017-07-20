import Tabbar  from '../../../src/complex/tabbar/index.js'; // 引入组件
var onClick = function (index) {
    tabbarDom.key = index;
    console.log(tabbarDom.key)
}
var Root = (<Tabbar id="tab" className="ucs-test" selected={1} onClick={onClick}>
                <Tabbar.Item>
                    <a href="#">
                        <span className="ucs-icon icon-home-fill"></span>
                        <span className="ucs-tabbar-label">首页</span>
                    </a>
                </Tabbar.Item>
                <Tabbar.Item>
                    <a href="#">
                        <span className="ucs-icon icon-about"></span>
                        <span className="ucs-tabbar-label">消息</span>
                    </a>
                </Tabbar.Item>
            </Tabbar>);
const tabbar = TestUtils.renderIntoDocument(Root);
const tabbarDom = findDOMNode(tabbar);
describe('Tabbar测试', function () {
    describe('props测试', function () {
        // props测试
        describe('Tabbar-props测试', function () {
            it('props测试', function () {
                expect(tabbar.props.id.indexOf('tab')).to.not.be.equal(-1);
                expect(tabbar.props.className.indexOf('ucs-test')).to.not.be.equal(-1);
            });
        });
    });
    describe('function测试', function () {
        /*setSelected()方法测试*/
        describe('Tabbar-setSelected()方法测试', function () {
            it('----------setSelected()方法测试---------------', function () {

                tabbar.setSelected(0);
                const li = TestUtils.scryRenderedDOMComponentsWithTag(tabbar, 'li');
                expect(li[0].classList.contains('active')).to.not.be.equal(-1);
            });
        });
        /*getSelected()方法测试*/
        describe('Tabbar-getSelected()方法测试', function () {
            it('----------getSelected()方法测试---------------', function () {
                const i = tabbar.getSelected();
                expect(i).to.be.equal(0);
            });
        });

        /*show()方法测试*/
        describe('Tabbar-show()方法测试', function () {
            it('--------------show()方法测试-----------------', function () {
                tabbar.show();
                expect(tabbarDom.classList.contains('ucs-hide')).to.be.equal(false);
            });
        });

        /*hide()方法测试*/
        describe('Tabbar-hide()方法测试', function () {
            it('--------------hide()方法测试-----------------', function () {
                tabbar.hide();
                expect(tabbarDom.classList.contains('ucs-hide')).to.not.be.equal(false);
            });
        });


        /*onClick()方法测试*/
        describe('Tabbar-onClick()方法测试', function () {
            it('--------------onClick()方法测试-----------------', function () {
                const item = TestUtils.scryRenderedDOMComponentsWithTag(tabbar, 'li');
                TestUtils.Simulate.click(item[1]);
                expect(tabbarDom.key).to.equal(1);
            });
        });
    });
});

