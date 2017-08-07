/**
 * Created by Administrator on 2017/7/18.
 */
import Swiper  from '../../../src/complex/swiper/index.js'; // 引入组件

describe('Swiper组件测试', function () {
    describe('props测试', function () {
        describe('Swiper-props测试', function () {
            it('---------------props测试----------------', function () {
                const swiper = TestUtils.renderIntoDocument(<Swiper defaultValue={1} dots={true} arrows={true} autoPlay={true}>
                    <Swiper.Item>1</Swiper.Item>
                    <Swiper.Item>2</Swiper.Item>
                    <Swiper.Item>3</Swiper.Item>
                </Swiper>);
                expect(swiper.props.defaultValue).to.be.equal(1);
                expect(swiper.props.dots).to.be.ok;
                expect(swiper.props.arrows).to.be.ok;
                expect(swiper.props.autoPlay).to.be.ok;
                expect(swiper.props.autoPlaySpeed).to.be.equal(3000);
            });
        });
    });
});
function createClientXY(x, y) {
    return { pageX: x, pageY: y };
}
function createStartTouchEventObject({ x = 0, y = 0 }) {
    return { touches: [createClientXY(x, y)] };
}
function createMoveTouchEventObject({ x = 0, y = 0}) {
    return {touches: [createClientXY(x, y)]};
}
