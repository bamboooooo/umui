/**
 * Created by Administrator on 2017/7/18.
 */
import ResultSection  from '../../../src/complex/ResultSection/index.js'; // 引入组件

describe('Result组件测试', function () {
    describe('props测试', function () {
        describe('Result-props测试', function () {
            it('---------------props测试----------------', function () {
                const result = TestUtils.renderIntoDocument(<ResultSection img={<img src='../images/1.png' alt='' />} title={'验证成功'} message={'所提交内容已成功完成验证'}/>);
                expect(result.props.img.type).to.be.equal('img');
                expect(result.props.title).to.be.equal('验证成功');
                expect(result.props.message).to.be.equal('所提交内容已成功完成验证');
            });
        });
    });
});

