/**
 * Created by Administrator on 2017/7/18.
 */
import Popover, { Item }  from '../../../src/complex/popover/index.js'; // 引入组件

describe('Popover组件测试', function () {
    describe('props测试', function () {
        describe('Popover-props测试', function () {
            it('---------------props测试----------------', function () {
                const popover = TestUtils.renderIntoDocument(<Popover
                    mask={true}
                    overlayClassName={'fortest'}
                    overlayStyle={{left: '30px', top: '60px'}}
                    visible={false}
                    placement={'bottomLeft'}
                    overlay={[
                        (<Item key="4" value="scan" icon={(<img src='../images/1.png' />)}>扫一扫</Item>),
                        (<Item key="5" value="special" icon={(<img src='../images/1.png' />)} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                        (<Item key="6" value="button ct" icon={(<img src='../images/1.png' />)} disabled={true}>
                            <span style={{ marginRight: 5 }}>帮助</span>
                        </Item>)
                    ]}
                >
                    <div>
                        更多（下左）
                    </div>
                </Popover>);
                expect(popover.props.mask).to.be.ok;
                expect(popover.props.visible).to.not.be.ok;
                expect(popover.props.overlayClassName).to.be.equal('fortest');
                expect(popover.props.placement).to.be.equal('bottomLeft');
                expect(popover.props.overlayStyle).to.be.deep.equal({left: '30px', top: '60px'});
                expect(popover.props.overlay.length).to.be.equal(3);
            });
        });
    });
    describe('function测试', function () {
        describe('Popover-clickHandler()方法测试', function () {
            it('--------------clickHandler()方法测试-----------------', function () {
                const popover = TestUtils.renderIntoDocument(<Popover
                    mask={true}
                    overlayClassName={'fortest'}
                    overlayStyle={{left: '30px', top: '60px'}}
                    visible={false}
                    placement={'bottomLeft'}
                    overlay={[
                        (<Item key="4" value="scan" icon={(<img src='../images/1.png' />)}>扫一扫</Item>),
                        (<Item key="5" value="special" icon={(<img src='../images/1.png' />)} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                        (<Item key="6" value="button ct" icon={(<img src='../images/1.png' />)} disabled={true}>
                            <span style={{ marginRight: 5 }}>帮助</span>
                        </Item>)
                    ]}
                >
                    <div>
                        更多（下左）
                    </div>
                </Popover>);
                const popoverDOM = findDOMNode(popover);
                TestUtils.Simulate.click(popoverDOM);
                expect(popover.state.visible).to.be.ok;
            });
        });
        describe('Popover-_renderLayer()方法测试', function () {
            it('--------------_renderLayer()方法测试-----------------', function () {
                const popover = TestUtils.renderIntoDocument(<Popover></Popover>);
                const popoverContainer = document.querySelector('.ucs-popover');
                expect(popoverContainer.className).to.contain('ucs-popover');
            });
        });
        describe('Popover-onSelect()方法测试', function () {
            it('--------------onSelect()方法测试-----------------', function () {
                const popover = TestUtils.renderIntoDocument(<Popover
                    mask={true}
                    overlayClassName={'fortest'}
                    overlayStyle={{left: '30px', top: '60px'}}
                    visible={false}
                    placement={'bottomLeft'}
                    overlay={[
                        (<Item key="4" value="scan" icon={(<img src='../images/1.png' />)}>扫一扫</Item>),
                        (<Item key="5" value="special" icon={(<img src='../images/1.png' />)} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                        (<Item key="6" value="button ct" icon={(<img src='../images/1.png' />)} disabled={true}>
                            <span style={{ marginRight: 5 }}>帮助</span>
                        </Item>)
                    ]}
                >
                    <div>
                        更多（下左）
                    </div>
                </Popover>);
                const item = document.querySelectorAll('.ucs-popover-item')[1];
                TestUtils.Simulate.click(item);
                console.log('onselect', popover.getValue());
            });
        });
        describe('Popover-setValue()方法测试', function () {
            it('--------------setValue()方法测试-----------------', function () {
                const popover = TestUtils.renderIntoDocument(<Popover
                    mask={true}
                    overlayClassName={'fortest'}
                    overlayStyle={{left: '30px', top: '60px'}}
                    visible={false}
                    placement={'bottomLeft'}
                    overlay={[
                        (<Item key="4" value="scan" icon={(<img src='../images/1.png' />)}>扫一扫</Item>),
                        (<Item key="5" value="special" icon={(<img src='../images/1.png' />)} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                        (<Item key="6" value="button ct" icon={(<img src='../images/1.png' />)} disabled={true}>
                            <span style={{ marginRight: 5 }}>帮助</span>
                        </Item>)
                    ]}
                >
                    <div>
                        更多（下左）
                    </div>
                </Popover>);
                popover.setValue('special');
                expect(popover.state.value).to.be.equal('special');
            });
        });
        describe('Popover-getValue()方法测试', function () {
            it('--------------getValue()方法测试-----------------', function () {
                const popover = TestUtils.renderIntoDocument(<Popover
                    mask={true}
                    overlayClassName={'fortest'}
                    overlayStyle={{left: '30px', top: '60px'}}
                    visible={false}
                    placement={'bottomLeft'}
                    overlay={[
                        (<Item key="4" value="scan" icon={(<img src='../images/1.png' />)}>扫一扫</Item>),
                        (<Item key="5" value="special" icon={(<img src='../images/1.png' />)} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                        (<Item key="6" value="button ct" icon={(<img src='../images/1.png' />)} disabled={true}>
                            <span style={{ marginRight: 5 }}>帮助</span>
                        </Item>)
                    ]}
                >
                    <div>
                        更多（下左）
                    </div>
                </Popover>);
                popover.setValue('special');
                expect(popover.getValue()).to.be.equal('special');
            });
        });
        describe('Popover-clear()方法测试', function () {
            it('--------------clear()方法测试-----------------', function () {
                const popover = TestUtils.renderIntoDocument(<Popover
                    defaultValue={'scan'}
                    mask={true}
                    overlayClassName={'fortest'}
                    overlayStyle={{left: '30px', top: '60px'}}
                    visible={false}
                    placement={'bottomLeft'}
                    overlay={[
                        (<Item key="4" value="scan" icon={(<img src='../images/1.png' />)}>扫一扫</Item>),
                        (<Item key="5" value="special" icon={(<img src='../images/1.png' />)} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                        (<Item key="6" value="button ct" icon={(<img src='../images/1.png' />)} disabled={true}>
                            <span style={{ marginRight: 5 }}>帮助</span>
                        </Item>)
                    ]}
                >
                    <div>
                        更多（下左）
                    </div>
                </Popover>);
                popover.clear();
                expect(popover.state.value).to.be.empty;
            });
        });
        describe('Popover-reset()方法测试', function () {
            it('--------------reset()方法测试-----------------', function () {
                const popover = TestUtils.renderIntoDocument(<Popover
                    defaultValue={'scan'}
                    mask={true}
                    overlayClassName={'fortest'}
                    overlayStyle={{left: '30px', top: '60px'}}
                    visible={false}
                    placement={'bottomLeft'}
                    overlay={[
                        (<Item key="4" value="scan" icon={(<img src='../images/1.png' />)}>扫一扫</Item>),
                        (<Item key="5" value="special" icon={(<img src='../images/1.png' />)} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                        (<Item key="6" value="button ct" icon={(<img src='../images/1.png' />)} disabled={true}>
                            <span style={{ marginRight: 5 }}>帮助</span>
                        </Item>)
                    ]}
                >
                    <div>
                        更多（下左）
                    </div>
                </Popover>);
                popover.setValue('specail');
                popover.reset();
                expect(popover.state.value).to.be.equal('scan');
            });
        });
        describe('Popover-show()方法测试', function () {
            it('--------------show()方法测试-----------------', function () {
                const popover = TestUtils.renderIntoDocument(<Popover
                    mask={true}
                    overlayClassName={'fortest'}
                    overlayStyle={{left: '30px', top: '60px'}}
                    visible={false}
                    placement={'bottomLeft'}
                    overlay={[
                        (<Item key="4" value="scan" icon={(<img src='../images/1.png' />)}>扫一扫</Item>),
                        (<Item key="5" value="special" icon={(<img src='../images/1.png' />)} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                        (<Item key="6" value="button ct" icon={(<img src='../images/1.png' />)} disabled={true}>
                            <span style={{ marginRight: 5 }}>帮助</span>
                        </Item>)
                    ]}
                >
                    <div>
                        更多（下左）
                    </div>
                </Popover>);
                popover.show();
                expect(popover.state.visible).to.be.ok;
            });
        });
        describe('Popover-hide()方法测试', function () {
            it('--------------hide()方法测试-----------------', function () {
                const popover = TestUtils.renderIntoDocument(<Popover
                    mask={true}
                    overlayClassName={'fortest'}
                    overlayStyle={{left: '30px', top: '60px'}}
                    visible={false}
                    placement={'bottomLeft'}
                    overlay={[
                        (<Item key="4" value="scan" icon={(<img src='../images/1.png' />)}>扫一扫</Item>),
                        (<Item key="5" value="special" icon={(<img src='../images/1.png' />)} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                        (<Item key="6" value="button ct" icon={(<img src='../images/1.png' />)} disabled={true}>
                            <span style={{ marginRight: 5 }}>帮助</span>
                        </Item>)
                    ]}
                >
                    <div>
                        更多（下左）
                    </div>
                </Popover>);
                popover.hide();
                expect(popover.state.visible).to.not.be.ok;
            });
        });
    });
});

