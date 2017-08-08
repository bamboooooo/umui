var NoticeBar = require('../../src/base/notice-bar');
var Root = React.createClass({
    getInitialState: function () {
        return {
            msg: ''
        };
    },
    getDefaultProps: function () {
        return {
        };
    },
    _onClick: function () {
        alert('onClick');
    },
    _onClose: function () {
        alert('onClose');
    },
    _setValue: function () {
        this.refs.noticeBar1.setValue('测试通告测试通告测试通告测试通告测试通告测试通告测试通告测试通告测试通告测试通告测试通告');
    },
    _show: function () {
        this.refs.noticeBar1.show();
    },
    _hide: function () {
        this.refs.noticeBar1.hide();
    },
    render: function () {
        return (
            <div>
                <NoticeBar scroll={false} value="这是一条通告信息这是一条通告信息这是一条通告信息这是一条通告信息" ref="noticeBar1" displayCloseBtn={false}/>
                <NoticeBar scroll={true} onClick={this._onClick} onClose={this._onClose} value="这是一条通告信息"/>
                <NoticeBar scroll={true} onClick={this._onClick} onClose={this._onClose} value="这是一条通告信息这是一条通告信息这是一条通告信息这是一条通告信息" scrollSpeed={10}/>
                <input type="button" value="setValue" onClick={this._setValue}/>
                <input type="button" value="show" onClick={this._show}/>
                <input type="button" value="hide" onClick={this._hide}/>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
