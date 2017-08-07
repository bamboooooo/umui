/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/18
 * 说明：
 */

import SegmentedControl  from '../../../src/complex/segmented-control/index.js'; // 引入组件

var values = [
    {'icon': 'icon1', 'text': '分段一', 'value': '1'},
    {'icon': 'icon2', 'text': '分段二', 'value': '2'},
    {'icon': 'icon3', 'text': '分段三', 'value': '3'},
    {'icon': 'icon3', 'text': '分段三', 'value': '3'},
    {'icon': 'icon3', 'text': '分段三', 'value': '3'},
    {'icon': 'icon3', 'text': '分段三', 'value': '3'}
];

describe('SegmentedControl组件测试', function () {
    describe('props测试', function() {
        // props属性测试
        describe('SegmentedControl-props测试', function () {
            it('porps测试', function () {
                const segmented = TestUtils.renderIntoDocument(<SegmentedControl id="segmented" className="my-segmented" displayIcon={false} overflowNum={5} selectedIndex={2} values={values}/>);
                const segmentedDom = findDOMNode(segmented);
                expect(segmented.props.id.indexOf('segmented')).to.not.be.equal(-1);
                expect(segmented.props.className.indexOf('my-segmented')).to.not.be.equal(-1);
                expect(segmentedDom.querySelectorAll('.iconfont').length).to.be.equal(0);
                expect(segmentedDom.querySelectorAll('a')[1].className).to.be.equal('active');

                var buttons = segmentedDom.querySelectorAll('a');
                for (var i = 0; i < values.length; i++) {
                    // console.log(buttons[i].innerHTML);
                    expect(buttons[i].innerHTML.indexOf(values[i].text)).to.not.be.equal(-1);
                }
            });
        });
    });

    describe('function测试', function() {
        // onClic()方法测试
        describe('SegmentedControl-onClick()测试', function () {
            it('onClick()测试', function () {
                const segmented = TestUtils.renderIntoDocument(<SegmentedControl values={values} onClick={_onclick}/>);
                const segmentedDom = findDOMNode(segmented);
                const _button_3 = segmentedDom.querySelectorAll('a')[2];
                function _onclick(index) {
                    segmentedDom.id = index;
                }
                TestUtils.Simulate.click(_button_3);
                expect(segmentedDom.id).to.be.equal('2');
            });
        });

        // setValue()方法测试
        describe('SegmentedControl-setValue()测试', function () {
            it('setValue()测试', function () {
                const segmented = TestUtils.renderIntoDocument(<SegmentedControl values={values}/>);
                const segmentedDom = findDOMNode(segmented);
                segmented.setValue(2);
                expect(segmentedDom.querySelectorAll('a')[2].className).to.be.equal('active');
            });
        });

        // getValue()方法测试
        describe('SegmentedControl-getValue()测试', function () {
            it('getValue()测试', function () {
                const segmented = TestUtils.renderIntoDocument(<SegmentedControl values={values}/>);
                segmented.setValue(2);
                var index = segmented.getValue();
                expect(index).to.be.equal(2);
            });
        });
    });
});