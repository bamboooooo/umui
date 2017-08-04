/**
 * Created by maxuezhu on 2017/8/2.
 */

import Loading from '../../../src/base/loading/index.js'; // 引入组件
describe('Loading', function () {
    describe('function测试', function () {
        /*show()方法测试*/
        describe('Loading-show()方法测试', function () {
            it('----------show()方法测试---------------', function () {
                Loading.show();
                var len = document.getElementsByClassName('ucs-loading').length;
                expect(len).to.equal(1);
            });
        });
        /*hide()方法测试*/
        describe('Loading-hide()方法测试', function () {
            it('----------hide()方法测试---------------', function () {
                Loading.show();
                var len = document.getElementsByClassName('ucs-loading').length;
                expect(len).to.equal(1);
                Loading.hide();
                var len = document.getElementsByClassName('ucs-loading').length;
                expect(len).to.equal(0);
            });
        });
    });
});