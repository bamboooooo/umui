import PullRefresh  from '../../../src/base/pull-refresh/index.js'; // 引入组件
describe('PullRefresh-props测试', function () {
    describe('props测试', function () {
        // props测试
        describe('PullRefresh-props测试', function () {
            it('props测试', function () {
                var pullRefresh = shallowRender(PullRefresh, { id: 'pullrefresh1',  className: 'pullrefresh2', direction: 'up'});
                expect(pullRefresh.props.id).to.be.equal('pullrefresh1');
                expect(pullRefresh.props.className.indexOf('pullrefresh2')).to.not.be.equal(-1);
                expect(pullRefresh.props.children.props.children[2].ref).to.be.equal('pullrefreshBottom');
            });
        });
    });
    describe('function测试', function () {
        // function测试
        describe('PullRefresh-function测试-未达到临界值', function () {
            it('props测试', function () {
                var a = '1';
                function onRefresh() {
                    a = '2';
                }
                var pullRefresh = TestUtils.renderIntoDocument(<PullRefresh onRefresh={onRefresh} distance="90"><div>123</div></PullRefresh>);
                var pullRefreshDom = findDOMNode(pullRefresh);
                var pullRefreshScroller = pullRefreshDom.querySelector('.ucs-pullrefresh-scroller');
                var pullRefreshControlPull = pullRefreshDom.querySelector('.ucs-pullrefresh-control-top .ucs-pullrefresh-control-pull');
                var pullRefreshControlRelease = pullRefreshDom.querySelector('.ucs-pullrefresh-control-top .ucs-pullrefresh-control-release');
                TestUtils.Simulate.touchStart(pullRefreshScroller, createStartTouchEventObject({ x: 0,y:0 }));
                TestUtils.Simulate.touchMove(pullRefreshScroller, createMoveTouchEventObject({ x: 0,y:89 }));
                TestUtils.Simulate.touchEnd(pullRefreshScroller, createMoveTouchEventObject({ x: 0,y:89 }));
                expect(pullRefreshControlPull.style.display).to.be.equal('block');
                expect(pullRefreshControlRelease.style.display).to.be.equal('none');
                expect(a).to.be.equal('1');
                expect(pullRefresh.state.pullTopState).to.be.equal('pull');
            });
        });
        describe('PullRefresh-function测试-达到临界值-未触发touchend', function () {
            it('props测试', function () {
                var a = '1';
                function onRefresh() {
                    a = '2';
                }
                var pullRefresh = TestUtils.renderIntoDocument(<PullRefresh onRefresh={onRefresh} distance="90"><div>123</div></PullRefresh>);
                var pullRefreshDom = findDOMNode(pullRefresh);
                var pullRefreshScroller = pullRefreshDom.querySelector('.ucs-pullrefresh-scroller');
                var pullRefreshControlPull = pullRefreshDom.querySelector('.ucs-pullrefresh-control-top .ucs-pullrefresh-control-pull');
                var pullRefreshControlRelease = pullRefreshDom.querySelector('.ucs-pullrefresh-control-top .ucs-pullrefresh-control-release');
                TestUtils.Simulate.touchStart(pullRefreshScroller, createStartTouchEventObject({ x: 0,y:0 }));
                TestUtils.Simulate.touchMove(pullRefreshScroller, createMoveTouchEventObject({ x: 0,y:90 }));
                expect(pullRefreshControlPull.style.display).to.be.equal('none');
                expect(pullRefreshControlRelease.style.display).to.be.equal('block');
                expect(a).to.be.equal('1');
                expect(pullRefresh.state.pullTopState).to.be.equal('release');
            });
        });
        describe('PullRefresh-function测试-达到临界值-触发touchend', function () {
            it('props测试', function () {
                var a = '1';
                function onRefresh() {
                    a = '2';
                }
                var pullRefresh = TestUtils.renderIntoDocument(<PullRefresh onRefresh={onRefresh} distance="90"><div>123</div></PullRefresh>);
                var pullRefreshDom = findDOMNode(pullRefresh);
                var pullRefreshScroller = pullRefreshDom.querySelector('.ucs-pullrefresh-scroller');
                var pullRefreshControlRelease = pullRefreshDom.querySelector('.ucs-pullrefresh-control-top .ucs-pullrefresh-control-release');
                var pullRefreshControlTopLoading = pullRefreshDom.querySelector('.ucs-pullrefresh-control-top-loading');
                TestUtils.Simulate.touchStart(pullRefreshScroller, createStartTouchEventObject({ x: 0,y:0 }));
                TestUtils.Simulate.touchMove(pullRefreshScroller, createMoveTouchEventObject({ x: 0,y:90 }));
                TestUtils.Simulate.touchEnd(pullRefreshScroller, createMoveTouchEventObject({ x: 0,y:90 }));
                expect(pullRefreshControlRelease.style.display).to.be.equal('none');
                expect(pullRefreshControlTopLoading.style.display).to.be.equal('block');
                expect(a).to.be.equal('2');
                expect(pullRefresh.state.pullTopState).to.be.equal('loading');
            });
        });
    });

});

function createClientXY(x, y) {
    return { clientX: x, clientY: y };
}

function createStartTouchEventObject({ x = 0, y = 0 }) {
    return { touches: [createClientXY(x, y)] };
}

function createMoveTouchEventObject({ x = 0, y = 0}) {
    return { touches: [createClientXY(x, y)] };
}


