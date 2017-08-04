import OffCanvas from '../../../src/complex/off-canvas/index.js'; // 引入组件
// props测试
describe('OffCanvas', function () {
    describe('props测试', function () {
        describe('OffCanvas-porps测试', function () {
            it('-------------porps-----------测试', function () {
                const offcanvas = TestUtils.renderIntoDocument(<OffCanvas
                    id="offcanvas"
                    sidebar= '123'
                    touch= {true}
                    transitions= {true}
                    width= '300'
                    maskClosable= {true}
                    isDisabled= {false}
                    open= {false}
                />);
                expect(offcanvas.props.id.indexOf('offcanvas')).to.not.be.equal(-1);
                expect(offcanvas.props.sidebar).to.be.equal('123');
                expect(offcanvas.props.width).to.be.equal('300');
                expect(offcanvas.props.onOpenChange).to.be.equal(null);
                expect(offcanvas.props.touch).to.be.ok;
                expect(offcanvas.props.transitions).to.be.ok;
                expect(offcanvas.props.maskClosable).to.be.ok;
                expect(offcanvas.props.isDisabled).to.not.be.ok;
                expect(offcanvas.props.open).to.not.be.ok;
            })
        });
        describe('Numberbox-porps-onOpenChange', function () {
            it('-------------porps-onOpenChange()-----------测试', function () {
                const offcanvas = TestUtils.renderIntoDocument(<OffCanvas id="123" onOpenChange = {function(){document.body.innerHTML = 'testtest'}}/>);
                offcanvas.show();
                expect(document.body.innerHTML).to.equal('testtest');
            })
        });
    });
    describe('function测试', function () {
        /*show()方法测试*/
        describe('OffCanvas-show()方法测试', function () {
            it('----------show()方法测试---------------', function () {
                const offcanvas = TestUtils.renderIntoDocument(<OffCanvas/>);
                offcanvas.show();
                expect(offcanvas.state.open).to.be.ok;
            });
        });
        /*hide()方法测试*/
        describe('OffCanvas-hide()方法测试', function () {
            it('----------hide()方法测试---------------', function () {
                const offcanvas = TestUtils.renderIntoDocument(<OffCanvas/>);
                offcanvas.hide();
                expect(offcanvas.state.open).to.not.be.ok;
            });
        });
       /*_clickHandle()方法测试*/
        describe('OffCanvas-_clickHandle()方法测试', function () {
            it('----------_clickHandle()方法测试---------------', function () {
                const offcanvas = TestUtils.renderIntoDocument(<OffCanvas/>);
                const offcanvasDom = findDOMNode(offcanvas);
                const maskpart = offcanvasDom.querySelector('.ucs-offcanvas-mask');
                offcanvas.show();
                TestUtils.Simulate.click(maskpart);
                expect(offcanvas.state.open).to.not.be.ok;
            });
        });
        /*_maskClickHandle()方法测试*/
        describe('OffCanvas-_maskClickHandle方法测试', function () {
            it('----------_maskClickHandle方法测试---------------', function () {
                const offcanvas = TestUtils.renderIntoDocument(<OffCanvas/>);
                const offcanvasDom = findDOMNode(offcanvas);
                const maskpart = offcanvasDom.querySelector('.ucs-offcanvas-mask');
                offcanvas.show();
                TestUtils.Simulate.click(maskpart);
                expect(offcanvas.state.open).to.not.be.ok;
            });
        });
        /*_touchmoveHandle(),_touchendHandle()方法测试*/
        describe('OffCanvas-_touchmoveHandle/_touchendHandle()', function () {
            it('----------_touchmoveHandle/_touchendHandle()方法测试---------------', function () {
                const offcanvas = TestUtils.renderIntoDocument(<OffCanvas/>);
                const offcanvasDom = findDOMNode(offcanvas);
                const touchpart = offcanvasDom.querySelector('.ucs-offcanvas-touchPart');
                const sidebar = offcanvasDom.querySelector('.ucs-offcanvas-sidebar');
                function createClientXY(x, y) {
                    return { clientX: x, clientY: y };
                }

                 function createStartTouchEventObject({ x = 0, y = 0 }) {
                    return { touches: [createClientXY(x, y)] };
                }

                 function createMoveTouchEventObject({ x = 0, y = 0}) {
                    return { changedTouches: [createClientXY(x, y)] };
                }

                TestUtils.Simulate.touchStart(touchpart, createStartTouchEventObject({ x: 0,y:0 }));
                TestUtils.Simulate.touchMove(touchpart, createMoveTouchEventObject({ x: 100,y:0 }));
                TestUtils.Simulate.touchEnd(touchpart, createMoveTouchEventObject({ x: 464,y:0 }));
                expect(offcanvas.state.sliderStyle.transform).to.equal('translateX(0)');
            });
        });
    });
});


