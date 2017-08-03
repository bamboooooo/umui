var Search = require('../../src/base/search');
var Root = React.createClass({
    setValue: function () {
        this.refs.search.setValue('吃饭');
    },
    getValue: function () {
        var inputValue = this.refs.search.getValue();
        console.log(inputValue);
    },
    setDisabled: function (v) {
        this.refs.search.setDisabled(v);
    },
    clear: function () {
        this.refs.search.clear();
    },
    reset: function () {
        this.refs.search.reset();
    },
    _onChange: function (e) {
        console.log('onChange');
        // console.log(e.target.name);
    },
    _onFocus: function () {
        this.refs.inputEle.onFocus();
    },
    _onBlur: function () {
        // console.log('onBlur');
    },
    render: function () {
        var config1 = {
            id: 'search-id',
            className: 'custom-className',
            defaultValue: '基金',
            value: '股票',
            name: 'search-name',
            placeholder: '搜一下',
            onChange: function (e) {
                console.log('onChange');
                console.log(e.target.value);
            },
            onFocus: function (e) {
                console.log('onFocus');
                console.log(e.target.value);
            },
            onBlur: function (e) {
                console.log('onBlur');
                console.log(e.target.value);
            },
            onSubmit: function (e) {
                console.log('onSubmit');
                console.log(e);
            },
            onClick: function (e) {
                console.log('onclick');
                console.log(e);
            }
        };
        return (
            <div className="ucs-search-example">
                基础:
                <Search ref="searchbase" />

                操作：
                <Search ref="search" {...config1} />
                <ul>
                    <li style={{lineHeight: '50px'}}><button onClick={this.setValue}>设置搜索内容为“吃饭”</button></li>
                    <li style={{lineHeight: '50px'}}><button onClick={this.getValue}>获取搜索内容</button></li>
                    <li style={{lineHeight: '50px'}}><button onClick={this.setDisabled.bind(this, true)}>设置搜索内容Disabled=true</button></li>
                    <li style={{lineHeight: '50px'}}><button onClick={this.setDisabled.bind(this, false)}>设置搜索内容Disabled=false</button></li>
                    <li style={{lineHeight: '50px'}}><button onClick={this.clear}>清空搜索内容</button></li>
                    <li style={{lineHeight: '50px'}}><button onClick={this.reset}>重置搜索内容</button></li>
                </ul>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
