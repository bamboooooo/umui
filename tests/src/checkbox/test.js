import Checkbox from '../../../src/base/checkbox/index.js'; // 引入组件


describe('Checkbox测试', function () {
    describe('props测试', function () {
      // props测试
      describe('Checkbox-props测试', function () {
          var checkbox = TestUtils.renderIntoDocument(<Checkbox
            text="复选框"
            id="ucs-checkbox"
            className="my-checkbox"
            defaultChecked={true}
            disabled={true}
          />);
          var checkboxDom = findDOMNode(checkbox);
          
          it('props-id 测试', function () {
              expect(checkbox.props.id.indexOf('ucs-checkbox')).to.not.be.equal(-1);
          });
          it('props-className 测试', function () {
              expect(checkbox.props.className.indexOf('my-checkbox')).to.not.be.equal(-1);
          });
          it('props-text 测试', function () {
              expect(checkbox.props.text.indexOf('复选框')).to.not.be.equal(-1);
          });
          it('props-defaultChecked 测试', function () {
              expect(checkbox.props.defaultChecked).to.be.ok;
          });
          it('props-disabled 测试', function () {
              expect(checkbox.props.disabled).to.be.ok;
          });
      });
    });

    describe('function测试', function() {
        
      describe('Checkbox-function测试', function () {
          it('props-setChecked 测试', function () {
            var checkbox = TestUtils.renderIntoDocument(<Checkbox
              text="复选框"
              defaultChecked={false}
            />);
            var checkboxDom = findDOMNode(checkbox);

            var initChecked = checkboxDom.querySelectorAll('i.icon-check-square-o').length > 0 ? true : false;
            checkbox.setChecked(!initChecked);
            var nowChecked = checkboxDom.querySelectorAll('i.icon-check-square-o').length > 0 ? true : false;
            expect(initChecked != nowChecked).to.be.ok;
          });

          it('props-getChecked 测试', function () {
            var checkbox = TestUtils.renderIntoDocument(<Checkbox
              text="复选框"
              defaultChecked={true}
            />);
            expect(checkbox.getChecked()).to.be.ok;
          });

          it('props-setDisabled 测试', function () {
            var checkbox = TestUtils.renderIntoDocument(<Checkbox
              text="复选框"
              defaultChecked={false}
            />);
            var checkboxDom = findDOMNode(checkbox);
            
            checkbox.setDisabled(true);
            var initChecked = checkboxDom.querySelectorAll('i.icon-check-square-o').length > 0 ? true : false;
            TestUtils.Simulate.click(checkboxDom);
            var nowChecked = checkboxDom.querySelectorAll('i.icon-check-square-o').length > 0 ? true : false;
            expect(initChecked == nowChecked).to.be.ok;
          });

          it('props-clear 测试', function () {
            var checkbox = TestUtils.renderIntoDocument(<Checkbox
              text="复选框"
              defaultChecked={true}
            />);
            checkbox.clear();
            expect(checkbox.getChecked() == false).to.be.ok;
          });

          it('props-reset 测试', function () {
            var checkbox = TestUtils.renderIntoDocument(<Checkbox
              text="复选框"
              defaultChecked={true}
            />);
            var checkboxDom = findDOMNode(checkbox);
            TestUtils.Simulate.click(checkboxDom);
            checkbox.reset();
            expect(checkbox.getChecked()).to.be.ok;
          });
          

      });
    });


});

