/**
 * 创建人：DuHuiling
 * 创建时间：2017/8/2
 * 说明：Toast组件单元测试
 */
import Toast  from '../../../src/base/toast/index.js'; // 引入组件

describe('Toast组件测试', function () {
    describe('function测试', function() {
        // info()方法测试
        describe('Toast-info()测试', function () {
            this.timeout(5000);
            it('info()测试', function (done) {
                Toast.info({
                    'content':'默认设置'
                });
                const toast = document.getElementsByClassName('ucs-toast')[0];
                const _content = toast.querySelector('p').innerHTML;
                const _mask = toast.className;
                expect(_content).to.be.equal('默认设置');
                expect(_mask.indexOf('ucs-toast-nomask')).to.be.equal(-1);
                setTimeout(function () {
                    done();
                },3000);
            });
            it('duration:2000ms后Toast消失测试',function () {
                const toastLen = document.getElementsByClassName('ucs-toast').length;
                expect(toastLen).to.be.equal(0);
            });
        });

        //success()测试
        describe('Toast-success()测试', function () {
            it('success()测试', function () {
                Toast.success({
                    'content':'success()'
                });
                const toast = document.getElementsByClassName('ucs-toast')[0];
                expect(toast.className.indexOf('toast-success')).to.not.be.equal(-1);
            });
        });

        //fail()测试
        describe('Toast-fail()测试', function () {
            it('fail()测试', function () {
                Toast.fail({
                    'content':'fail()'
                });
                const toast = document.getElementsByClassName('ucs-toast')[0];
                expect(toast.className.indexOf('toast-fail')).to.not.be.equal(-1);
            });
        });

        //warning()测试
        describe('Toast-warning()测试', function () {
            it('warning()测试', function () {
                Toast.warning({
                    'content':'warning()'
                });
                const toast = document.getElementsByClassName('ucs-toast')[0];
                expect(toast.className.indexOf('toast-warning')).to.not.be.equal(-1);
            });
        });

        //onClose()测试
        describe('Toast-onClose()测试', function (){
            this.timeout(5000);
            it('onClose()测试', function (done) {
                Toast.info({
                    'content': 'onClose()测试',
                    'onClose': function () {
                        document.getElementsByTagName('body')[0].innerHTML = 'onClose()触发';
                    }
                });
                setTimeout(function () {
                    done();
                },3000);
            });
            it('onClose()触发',function () {
                const _txt = document.getElementsByTagName('body')[0].innerHTML;
                expect(_txt).to.be.equal('onClose()触发');
            });
        });
    });
});
