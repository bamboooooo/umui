/**
 * Created by Administrator on 2017/7/18.
 */
import Popover, { Item }  from '../../../src/base/popover/index.js'; // 引入组件

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
});

