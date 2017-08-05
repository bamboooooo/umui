import Layer from '../../../src/complex/layer/index.js'; // 引入组件

describe('Layer组件测试', function() {
    describe('props测试', function() {
        // props测试
        describe('Layer-props测试', function() {
            it('----------ActionSheet-props测试---------------', function() {
                const Root = (<Layer className='testClass' id="testId" confirmText="按钮一" cancelText="按钮二" isShowClose={false}>
                    <Layer.Title>标题</Layer.Title>
                    <div className="ucs-layer-text">内容内容内容内容</div>
                </Layer>);

                const layer = TestUtils.renderIntoDocument(Root);
                const layerDom = findDOMNode(layer);
                expect(layer.props.className.indexOf('testClass')).to.not.be.equal(-1);
                expect(layer.props.id.indexOf('testId')).to.not.be.equal(-1);
                expect(layerDom.querySelector('.ucs-layer-title').innerHTML).to.be.equal('标题');
                expect(layerDom.querySelector('.ucs-layer-text').innerHTML).to.be.equal('内容内容内容内容');
                expect(layerDom.querySelector('.confirm').innerHTML).to.be.equal('按钮一');
                expect(layerDom.querySelector('.cancel').innerHTML).to.be.equal('按钮二');
                expect(layerDom.querySelector('.alert-close').style.display).to.be.equal('none');
            });
        });

        // confirmBack()方法
        describe('Layer-confirmBack()方法测试', function() {
            it('----------confirmBack()方法测试---------------', function() {
                const Root = (<Layer confirmBack={_clickHandler}> </Layer>);
                const layer = TestUtils.renderIntoDocument(Root);
                const layerDom = findDOMNode(layer);
                let testValue = 'test';
                function _clickHandler () {
                    testValue = 'test2';
                }
                TestUtils.Simulate.click(layerDom.querySelector('.confirm'));
                expect(testValue).to.be.equal('test2');
            });
        });

        // cancelBack()方法
        describe('Layer-cancelBack()方法测试', function() {
            it('----------cancelBack()方法测试---------------', function() {
                const Root = (<Layer cancelBack={_clickHandler}> </Layer>);
                const layer = TestUtils.renderIntoDocument(Root);
                const layerDom = findDOMNode(layer);
                let testValue = 'test';
                function _clickHandler () {
                    testValue = 'test2';
                }
                TestUtils.Simulate.click(layerDom.querySelector('.cancel'));
                expect(testValue).to.be.equal('test2');
            });
        });
        // closeBack()方法
        describe('Layer-closeBack()方法测试', function() {
            it('----------closeBack()方法测试---------------', function() {
                const Root = (<Layer closeBack={_clickHandler}> </Layer>);
                const layer = TestUtils.renderIntoDocument(Root);
                const layerDom = findDOMNode(layer);
                let testValue = 'test';
                function _clickHandler () {
                    testValue = 'test2';
                }
                TestUtils.Simulate.click(layerDom.querySelector('.alert-close'));
                expect(testValue).to.be.equal('test2');
            });
        });
    });

    describe('function测试', function() {
        // show()方法测试
        describe('Layer-show()方法测试', function() {
            it('----------ActionSheet-show()方法测试---------------', function() {
                const Root = (<Layer> </Layer>);
                const layer = TestUtils.renderIntoDocument(Root);
                const layerDom = findDOMNode(layer);
                layer.show();
                expect(layerDom.style.display).to.be.equal('block');
            });
        });
        // hide()方法测试
        describe('Layer-hide()方法测试', function() {
            it('----------ActionSheet-hide()方法测试---------------', function() {
                const Root = (<Layer> </Layer>);
                const layer = TestUtils.renderIntoDocument(Root);
                const layerDom = findDOMNode(layer);
                layer.show();
                layer.hide();
                expect(layerDom.style.display).to.be.equal('none');
            });
        });
    });
});
