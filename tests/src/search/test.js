import Search from '../../../src/base/search/index.js'; // 引入组件

describe('Search组件测试', function() {
    describe('props测试', function() {
        // props测试
        describe('Search-props测试', function() {
            it('----------Search-props测试---------------', function() {
                var search = TestUtils.renderIntoDocument(<Search
                    id= 'ucs-search-test-id'
                    className='usc-search-test-classname'
                    disabled={true}
                    placeholder= 'search'
                    name= 'ucs-search-test-name'
                    value= 'umui'
                    defaultValue= 'abc'
                />);
                var searchDom = findDOMNode(search);
                var searchEle = searchDom.querySelector('input');
                var placeholder = searchDom.querySelector('.ucs-search-cover-placeholder');
                expect(searchEle.id.indexOf('ucs-search-test-id')).to.not.be.equal(-1);
                expect(searchEle.className.indexOf('usc-search-test-classname')).to.not.be.equal(-1);
                expect(searchEle.name.indexOf('ucs-search-test-name')).to.not.be.equal(-1);
                expect(searchEle.disabled).to.be.ok;
                expect(placeholder.innerHTML).to.be.equal('search');
                expect(searchEle.value).to.be.equal('umui');
                expect(search.props.defaultValue).to.be.equal('abc');
            });
        });
    });
    describe('内部function测试', function() {
        //onChange测试
        describe('Search-props-onChange测试', function(){
            it('----------props-onChange测试----------', function(){
                var search = TestUtils.renderIntoDocument(<Search onChange={_onChange} value="吃饭"/>);
                var newValue;
                function _onChange (e) {
                    newValue = e.target.value;
                };
                var searchDom = findDOMNode(search);
                var searchEle = searchDom.querySelector('input');
                TestUtils.Simulate.change(searchEle);
                expect(newValue).to.be.equal("吃饭");
            });
        });
        //onFocus测试
        describe('Search-props-onFocus测试', function(){
            it('----------props-onFocus测试----------', function(){
                var search = TestUtils.renderIntoDocument(<Search onFocus={_onFocus} value="吃饭"/>);
                var newValue;
                function _onFocus (e) {
                    newValue = e.target.value;
                };
                var searchDom = findDOMNode(search);
                var searchEle = searchDom.querySelector('input');
                TestUtils.Simulate.focus(searchEle);
                expect(newValue).to.be.equal("吃饭");
                expect(search.state.focus).to.be.equal(true);
            });
        });
        //onBlur测试
        describe('Search-props-onBlur测试', function(){
            it('----------props-onBlur测试----------', function(){
                var search = TestUtils.renderIntoDocument(<Search onBlur={_onBlur} value=""/>);
                var newValue;
                function _onBlur (e) {
                    newValue = '123';
                };
                var searchDom = findDOMNode(search);
                var searchEle = searchDom.querySelector('input');
                TestUtils.Simulate.blur(searchEle);
                expect(newValue).to.be.equal("123");
                expect(search.state.focus).to.be.equal(false);
            });
        });
        //onSubmit测试
        describe('Search-props-onSubmit测试', function(){
            it('----------props-onSubmit测试----------', function(){
                var search = TestUtils.renderIntoDocument(<Search onSubmit={_onSubmit} value="吃饭"/>);
                var newValue;
                function _onSubmit (e) {
                    newValue = '123';
                };
                var searchDom = findDOMNode(search);
                TestUtils.Simulate.submit(searchDom);
                expect(newValue).to.be.equal("123");
                expect(search.state.focus).to.be.equal(true);
            });
        });
        //onClick测试
        describe('Search-props-onClick测试', function(){
            it('----------props-onClick测试----------', function(){
                var search = TestUtils.renderIntoDocument(<Search onClick={_onClick} value="吃饭"/>);
                var newValue;
                function _onClick (e) {
                    newValue = '123';
                };
                var searchDom = findDOMNode(search);
                var searchInput = searchDom.querySelector('.ucs-search-input');
                TestUtils.Simulate.click(searchInput);
                expect(newValue).to.be.equal("123");
                expect(search.state.focus).to.be.equal(true);
            });
        });
    });
    describe('外部function测试', function() {
        //setValue测试
        describe('Search-setValue测试', function () {
            it('----------setValue测试----------', function () {
                var search = TestUtils.renderIntoDocument(<Search value="吃饭"/>);
                search.setValue('睡觉');
                var searchDom = findDOMNode(search);
                var searchEle = searchDom.querySelector('input');
                expect(searchEle.value).to.be.equal("睡觉");
            });
        });
        //getValue测试
        describe('Search-getValue测试', function () {
            it('----------getValue测试----------', function () {
                var search = TestUtils.renderIntoDocument(<Search value="吃饭" defaultValue="打豆豆"/>);
                search.getValue();
                var searchDom = findDOMNode(search);
                var searchEle = searchDom.querySelector('input');
                expect(searchEle.value).to.be.equal("吃饭");
            });
        });
        //setDisabled测试
        describe('Search-setDisabled测试', function () {
            it('----------setDisabled测试----------', function () {
                var search = TestUtils.renderIntoDocument(<Search value="吃饭" />);
                search.setDisabled(true);
                var searchDom = findDOMNode(search);
                var searchEle = searchDom.querySelector('input');
                expect(searchEle.disabled).to.be.equal(true);
            });
        });
        //clear测试
        describe('Search-clear测试', function () {
            it('----------clear测试----------', function () {
                var config = {value: '吃饭', disabled: true};
                var search = TestUtils.renderIntoDocument(<Search {...config} />);
                var searchDom = findDOMNode(search);
                var searchEle = searchDom.querySelector('input');
                search.clear();
                expect(searchEle.value).to.be.equal('吃饭');
                search.setDisabled(false);
                search.clear();
                expect(searchEle.value).to.be.equal('');

            });
        });
        //reset测试
        describe('Search-reset测试', function () {
            it('----------reset测试-有defaultValue----------', function () {
                var search = TestUtils.renderIntoDocument(<Search value="吃饭" defaultValue="打豆豆" />);
                search.reset();
                var searchDom = findDOMNode(search);
                var searchEle = searchDom.querySelector('input');
                expect(searchEle.value).to.be.equal('打豆豆');
            });
        });
        //reset测试
        describe('Search-reset测试', function () {
            it('----------reset测试-没有defaultValue----------', function () {
                var config = {value: '吃饭', disabled: true};
                var search = TestUtils.renderIntoDocument(<Search {...config} />);
                search.reset();
                var searchDom = findDOMNode(search);
                var searchEle = searchDom.querySelector('input');
                expect(searchEle.value).to.be.equal('吃饭');
                search.setDisabled(false);
                search.clear();
                expect(searchEle.value).to.be.equal('');
            });
        });
    });
});
