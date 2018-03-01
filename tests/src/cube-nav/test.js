import CubeNav  from '../../../src/complex/cube-nav/index.js'; // 引入组件
var datasource = [
    {
        icon: 'http://cdn.youxiputao.com/attach/news/2014/03/25/cee281e371788349.jpg',
        title: '我是标题一',
        href: 'http://www.qq1.com'
    },
    {
        icon: 'http://img.zcool.cn/community/0122e655f8f3e06ac7251df8686c5f.png',
        title: '我是标题二',
        href: 'http://www.qq2.com'
    },
    {
        icon: 'http://img.zcool.cn/community/010831568f787532f87574be2da5e1.jpg@900w_1l_2o_100sh.jpg',
        title: '我是标题三',
        href: 'http://www.qq3.com'
    },
    {
        icon: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=f4bf47b3c1ef7609280691dc46b4c9b9/4a36acaf2edda3cc8492fb0e0be93901213f92ae.jpg',
        title: '我是标题四',
        href: 'http://www.qq4.com'
    },
    {
        icon: 'http://www.uimaker.com/uploads/allimg/131121/1_131121093448_6.png',
        title: '我是标题五',
        href: 'http://www.qq5.com'
    },
    {
        icon: 'http://img.zcool.cn/community/01b97f5684bf1232f8759f043eb2cd.gif',
        title: '我是标题六',
        href: 'http://www.qq6.com'
    }
];
describe('CubeNav测试', function () {
    describe('props测试', function () {
        // props测试
        describe('CubeNav-props测试', function () {
            it('props测试(className, id)', function () {
                const cubeNav = shallowRender(CubeNav, { id: 'cubenav-test-id', className: 'cubenav-test-class'});
                expect(cubeNav.props.id.indexOf('cubenav-test-id')).to.not.be.equal(-1);
                expect(cubeNav.props.className.indexOf('cubenav-test-class')).to.not.be.equal(-1);
            });
            it('props测试(num)', function () {
                const cubeNav = TestUtils.renderIntoDocument(<CubeNav num="5" data={datasource} />);
                const cubeNavDOM = findDOMNode(cubeNav);
                const cubenavNum5All = cubeNavDOM.querySelectorAll('.cubenav-num5');
                expect(cubenavNum5All.length).to.be.equal(datasource.length);
            });
            it('props测试(data)', function () {
                const cubeNav = TestUtils.renderIntoDocument(<CubeNav data={datasource} />);
                const cubeNavDOM = findDOMNode(cubeNav);
                const cubenavNum4 = cubeNavDOM.querySelectorAll('.cubenav-num4')[5];
                const cubenavNum4a = cubenavNum4.querySelector('a');
                expect(cubenavNum4a.href).to.be.equal('http://www.qq6.com/');
                const cubenavNum4img = cubenavNum4.querySelector('img');
                expect(cubenavNum4img.src).to.be.equal('http://img.zcool.cn/community/01b97f5684bf1232f8759f043eb2cd.gif');
                const cubenavNum4title = cubenavNum4.querySelector('.cubenav-title');
                expect(cubenavNum4title.innerHTML).to.be.equal('我是标题六');
            });
        });
    });
});

