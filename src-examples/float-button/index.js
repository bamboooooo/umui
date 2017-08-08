/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/17
 * 说明：
 */
var FloatButton = require('../../src/base/float-button');
var Root = React.createClass({
    componentDidMount: function () {
        // var _this = this;
        // setTimeout(function () {
        //     console.log(_this);
        //     _this.refs.fb.hide();
        // }, 3000);
        // setTimeout(function () {
        //     console.log(_this);
        //     _this.refs.fb.show();
        // }, 6000);
    },
    _click: function () {
        alert(123);
    },
    render: function () {
        return (
            <div>
                <FloatButton move={true} ref="fb" className="test" img="https://www.baidu.com/img/bd_logo1.png" text="百度" onClick={ this._click }/>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
