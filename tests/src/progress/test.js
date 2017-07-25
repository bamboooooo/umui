/**
 * Created by Administrator on 2017/7/18.
 */
import Progress  from '../../../src/base/progress/index.js'; // 引入组件

describe('Progress组件测试', function () {
    describe('props测试', function () {
        describe('Progress-props测试', function () {
            it('---------------props测试----------------', function () {
                const progress = TestUtils.renderIntoDocument(<Progress/>);
                expect(progress.props.type).to.be.equal('ring');
                expect(progress.props.radius).to.be.equal(100);
                expect(progress.props.border).to.be.equal(10);
                expect(progress.props.color).to.include('#ccc');
                expect(progress.props.animate).to.be.ok;
                expect(progress.props.speed).to.be.equal(10);
                expect(progress.props.className).to.be.empty;
            });
        });
    });
    describe('function测试', function () {
        /*ringHandler()方法测试*/
        describe('Progress-ringHandler()方法测试', function () {
            it('--------------ringHandler()方法测试-----------------', function () {
                const progress = TestUtils.renderIntoDocument(<Progress value={80} animate={false}/>);
                const progressDOM = findDOMNode(progress);
                const num = progressDOM.querySelector('.num-info');
                progress.ringHandler();
                expect(num.childNodes[0].innerHTML).to.be.equal('80');
            });
        });
    });
    describe('function测试', function () {
        /*lineHandler()方法测试*/
        describe('Progress-lineHandler()方法测试', function () {
            it('--------------lineHandler()方法测试-----------------', function () {
                const progress = TestUtils.renderIntoDocument(<Progress value={80} animate={false} type={'line'}/>);
                const progressDOM = findDOMNode(progress);
                const num = progressDOM.querySelector('.num-info');
                progress.lineHandler();
                expect(num.childNodes[0].innerHTML).to.be.equal('80');
            });
        });
    });
    describe('function测试', function () {
        /*setValue()方法测试*/
        describe('Progress-setValue()方法测试', function () {
            it('--------------setValue()方法测试-----------------', function () {
                const progress = TestUtils.renderIntoDocument(<Progress value={80}/>);
                progress.setValue(60);
                expect(progress.state.value).to.be.equal(60);
            });
        });
    });
});

