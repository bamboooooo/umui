import Grid  from '../../../src/complex/grid/index.js'; // 引入组件
var onClick = function (index) {
    gridDom.key = index;
    console.log(gridDom.key)
};
var _renderItem = function (item) {
    return <div className="test">{item.text}</div>;
};
var datasource = [
    {
        icon: 'http://cdn.youxiputao.com/attach/news/2014/03/25/cee281e371788349.jpg',
        text: '标题一'
    },
    {
        icon: 'http://img.zcool.cn/community/0122e655f8f3e06ac7251df8686c5f.png',
        text: '标题一'
    },
    {
        icon: 'http://img.zcool.cn/community/010831568f787532f87574be2da5e1.jpg@900w_1l_2o_100sh.jpg',
        text: '标题一'
    },
    {
        icon: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=f4bf47b3c1ef7609280691dc46b4c9b9/4a36acaf2edda3cc8492fb0e0be93901213f92ae.jpg',
        text: '标题一'
    },
    {
        icon: 'http://www.uimaker.com/uploads/allimg/131121/1_131121093448_6.png',
        text: '标题一'
    },
    {
        icon: 'http://img.zcool.cn/community/01b97f5684bf1232f8759f043eb2cd.gif',
        text: '标题一'
    }
];
var Root = (<Grid id="grid" className="ucs-test" data = {datasource} renderItem = {_renderItem} onClick={onClick} hasLine={false} />);
const grid = TestUtils.renderIntoDocument(Root);
const gridDom = findDOMNode(grid);
describe('Grid测试', function () {
    describe('props测试', function () {
        // props测试
        describe('Grid-props测试', function () {
            it('props测试', function () {
                const item = TestUtils.scryRenderedDOMComponentsWithClass(grid, 'test');
                expect(grid.props.id.indexOf('grid')).to.not.be.equal(-1);
                expect(grid.props.className.indexOf('ucs-test')).to.not.be.equal(-1);
                expect(gridDom.classList.contains('ucs-grid-line')).to.be.equal(false);
                expect(item.length).to.be.equal(6);
            });
        });
    });
    describe('function测试', function () {
        /*onClick()方法测试*/
        describe('Grid-onClick()方法测试', function () {
            it('--------------onClick()方法测试-----------------', function () {
                const item = TestUtils.scryRenderedDOMComponentsWithTag(grid, 'li');
                TestUtils.Simulate.click(item[1]);
                expect(gridDom.key).to.equal(1);
            });
        });
    });
});

