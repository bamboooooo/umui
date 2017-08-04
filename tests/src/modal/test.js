/**
 * Created by maxuezhu on 2017/8/4.
 */
import Modal from '../../../src/complex/modal/index.js'; // 引入组件
describe('Modal', function () {
    describe('props测试', function () {
        describe('Modal-porps测试', function () {
            it('-------------porps-----------测试', function () {
                Modal.alert({
                    title: '提示1',
                    content: '确认删除xxx嘛？',
                    confirmText:'确定'
                });
                const modaltile = document.getElementsByClassName('ucs-modal-title')[0].innerHTML;
                const modalcontent = document.getElementsByClassName('ucs-modal-content')[0].innerHTML;
                const modalbtn = document.getElementsByTagName('button')[0].innerHTML;
                expect(modaltile).to.equal('提示1');
                expect(modalcontent).to.equal('确认删除xxx嘛？');
                expect(modalbtn).to.equal('确定');
            })
        });
    });
    describe('function测试', function () {
        /*_confirmBack()方法测试*/
        describe('Modal-_confirmBack()方法测试', function () {
            it('----------_confirmBack()方法测试---------------', function () {
                    Modal.alert({
                        title: '提示1',
                        content: '确认删除xxx嘛？',
                        confirmText:'确定'
                    });
                    const modalbtn = document.getElementsByTagName('button')[0];
                    TestUtils.Simulate.click(modalbtn);
                    expect(document.getElementsByClassName('ucs-modal')[0]).to.equal(undefined);
            });
        });
        /*_cancelBack()方法测试*/
        describe('Modal-_cancelBack()方法测试', function () {
            it('----------_cancelBack()方法测试---------------', function () {
                    Modal.confirm({
                        title: '提示1',
                        content: '确认删除xxx嘛？',
                        confirmText: '确定',
                        cancelText: '取消'
                    });
                const modalbtn = document.getElementsByTagName('button')[1];
                TestUtils.Simulate.click(modalbtn);
                expect(document.getElementsByClassName('ucs-modal')[0]).to.equal(undefined);
            });
        });
        /*alert()方法测试*/
        describe('Modal-alert()方法测试', function () {
            it('----------alert()方法测试---------------', function () {
                Modal.alert({
                    title: '提示1',
                    content: '确认删除xxx嘛？',
                    confirmText:'确定'
                });
                expect(document.getElementsByClassName('ucs-modal')[0]).to.not.equal(undefined);
            });
        });
        /*confirm()方法测试*/
        describe('Modal-confirm()方法测试', function () {
            it('----------confirm()方法测试---------------', function () {
                it('----------alert()方法测试---------------', function () {
                    Modal.alert({
                        title: '提示1',
                        content: '确认删除xxx嘛？',
                        confirmText:'确定'
                    });
                    expect(document.getElementsByClassName('ucs-modal')[0]).to.not.equal(undefined);
                });
            });
        });
    });
});