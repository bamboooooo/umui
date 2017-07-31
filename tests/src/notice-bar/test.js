import NoticeBar from '../../../src/base/notice-bar/index.js'; // 引入组件

describe('NoticeBar组件测试', function() {
    describe('props测试', function() {
        // props测试
        describe('NoticeBar-props测试', function() {
            it('----------NoticeBar-props测试---------------', function() {
                const noticeBar = TestUtils.renderIntoDocument(<NoticeBar
                    className='testClass'
                    displayCloseBtn={false}
                    id="testId"
                    scroll={false}
                    scrollSpeed={100}
                    value="testValue"
                />);
                const noticeBarDom = findDOMNode(noticeBar);
                expect(noticeBar.props.className.indexOf('testClass')).to.not.be.equal(-1);
                expect(noticeBarDom.querySelector('a.ucs-showClose').style.display).to.be.equal('none');
                expect(noticeBar.props.id.indexOf('testId')).to.not.be.equal(-1);
                expect(noticeBarDom.scrollLeft).to.be.equal(0);
                expect(noticeBar.props.scrollSpeed).to.be.equal(100);
                expect(noticeBarDom.querySelector('p').innerHTML).to.be.equal('testValue');
            });
        });

        // onClick()方法
        describe('Input-onClick()方法测试', function() {
            it('----------onClick()方法测试---------------', function() {
                const noticeBar = TestUtils.renderIntoDocument(<NoticeBar onClick={_clickHandler}/>);
                const noticeBarDom = findDOMNode(noticeBar);
                let testValue = 'test';
                function _clickHandler () {
                    testValue = 'test2';
                }
                TestUtils.Simulate.click(noticeBarDom);
                expect(testValue).to.be.equal('test2');
            });
        });
        // onClose()方法
        describe('Input-onClose()方法测试', function() {
            it('----------onClose()方法测试---------------', function() {
                const noticeBar = TestUtils.renderIntoDocument(<NoticeBar onClose={_closeHandler}/>);
                const noticeBarDom = findDOMNode(noticeBar);
                const closeBtn = noticeBarDom.querySelector('a.ucs-showClose');
                let testValue = 'test';
                function _closeHandler () {
                    testValue = 'test2';
                }
                TestUtils.Simulate.click(closeBtn);
                expect(noticeBarDom.style.display).to.equal('none');
                expect(closeBtn.style.display).to.equal('none');
                expect(testValue).to.be.equal('test2');
            });
        });
    });
    describe('function测试', function() {
        // setValue()方法测试
        describe('NoticeBar-setValue()方法测试', function() {
            it('----------NoticeBar-setValue()方法测试---------------', function() {
                const noticeBar = TestUtils.renderIntoDocument(<NoticeBar value="testValue"/>);
                const noticeBarDom = findDOMNode(noticeBar);
                noticeBar.setValue('testValue2');
                const noticeBarText = noticeBarDom.querySelector('p').innerHTML;
                expect(noticeBarText).to.equal('testValue2');
            });
        });
        // show()方法测试
        describe('NoticeBar-show()方法测试', function() {
            it('----------NoticeBar-show()方法测试---------------', function() {
                const noticeBar = TestUtils.renderIntoDocument(<NoticeBar style={{display:'none'}}/>);
                const noticeBarDom = findDOMNode(noticeBar);
                noticeBar.show();
                const noticeBarStyle = noticeBarDom.style.display;
                expect(noticeBarStyle).to.equal('block');
            });
        });

        // hide()方法测试
        describe('NoticeBar-hide()方法测试', function() {
            it('----------NoticeBar-hide()方法测试---------------', function() {
                const noticeBar = TestUtils.renderIntoDocument(<NoticeBar/>);
                const noticeBarDom = findDOMNode(noticeBar);
                noticeBar.hide();
                const noticeBarStyle = noticeBarDom.style.display;
                expect(noticeBarStyle).to.equal('none');
            });
        });
    })
});
