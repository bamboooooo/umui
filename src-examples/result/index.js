var Result = require('../../src/complex/result');
var Root = React.createClass({
    render: function () {
        return (
            <div>
                <Result
                    img={<img src='../images/1.png' alt='' />}
                    title={'验证成功'}
                    message={'所提交内容已成功完成验证'}
                >
                </Result>
                <div className="ucs-whitespace" style={{height: '30px'}}></div>
                <Result
                    img={<img src='../images/1.png' alt='' />}
                    title={'支付失败'}
                    message={'所选银行卡余额不足'}
                >
                </Result>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
