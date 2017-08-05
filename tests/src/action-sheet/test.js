import ActionSheet from '../../../src/complex/action-sheet/index.js'; // 引入组件

describe('ActionSheet组件测试', function() {
    describe('props测试', function() {
        // props测试
        describe('ActionSheet-props测试', function() {
            it('----------ActionSheet-props测试---------------', function() {
                const actionSheet = TestUtils.renderIntoDocument(<ActionSheet
                    className='testClass'
                    id="testId"
                    option={[{text:'操作一'}]}
                    title="标题1"
                    cancelButtonIndex={0}
                    maskClosable={false}
                />);
                const actionSheetDom = findDOMNode(actionSheet);
                expect(actionSheet.props.className.indexOf('testClass')).to.not.be.equal(-1);
                expect(actionSheet.props.id.indexOf('testId')).to.not.be.equal(-1);
                expect(actionSheetDom.querySelectorAll('li')[0].innerHTML).to.be.equal('标题1');
                expect(actionSheetDom.querySelectorAll('li')[1].innerHTML).to.be.equal('取消');
                expect(actionSheetDom.querySelectorAll('li')[2].innerHTML).to.be.equal('操作一');
                actionSheet.show();
                TestUtils.Simulate.click(actionSheetDom.querySelector('.ucs-actionsheet-mask'));
                expect(actionSheetDom.querySelector('aside').style.display).to.be.equal('block');
                expect(actionSheetDom.querySelector('.ucs-actionsheet-mask').style.display).to.be.equal('block');
            });
        });

        // onClick()方法
        describe('ActionSheet-onClick()方法测试', function() {
            it('----------onClick()方法测试---------------', function() {
                const actionSheet = TestUtils.renderIntoDocument(<ActionSheet onClick={_clickHandler}/>);
                const actionSheetDom = findDOMNode(actionSheet);
                let testValue = 'test';
                function _clickHandler () {
                    testValue = 'test2';
                }
                TestUtils.Simulate.click(actionSheetDom.querySelector('aside'));
                expect(testValue).to.be.equal('test2');
            });
        });

    describe('function测试', function() {
           // show()方法测试
            describe('ActionSheet-show()方法测试', function() {
                it('----------ActionSheet-show()方法测试---------------', function() {
                    const actionSheet = TestUtils.renderIntoDocument(<ActionSheet/>);
                    const actionSheetDom = findDOMNode(actionSheet);
                    actionSheet.show();
                    expect(actionSheetDom.querySelector('aside').style.display).to.be.equal('block');
                    expect(actionSheetDom.querySelector('.ucs-actionsheet-mask').style.display).to.be.equal('block');
                });
            });
            // hide()方法测试
            describe('ActionSheet-hide()方法测试', function() {
                it('----------ActionSheet-hide()方法测试---------------', function() {
                    const actionSheet = TestUtils.renderIntoDocument(<ActionSheet/>);
                    const actionSheetDom = findDOMNode(actionSheet);
                    actionSheet.show();
                    actionSheet.hide();
                    expect(actionSheetDom.querySelector('aside').style.display).to.be.equal('none');
                    expect(actionSheetDom.querySelector('.ucs-actionsheet-mask').style.display).to.be.equal('none');
                });
            });
        });
    })
});