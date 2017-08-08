var ResultSection = require('../../src/complex/resultSection');
var Root = React.createClass({
    render: function () {
        return (
            <div>
                <ResultSection
                    img={<img src='../images/1.png' alt='' />}
                    title={'验证成功'}
                    message={'所提交内容已成功完成验证'}
                >
                </ResultSection>
                <div className="ucs-whitespace" style={{height: '30px'}}></div>
                <ResultSection
                    img={<img src='../images/1.png' alt='' />}
                    title={'支付失败'}
                    message={'所选银行卡余额不足'}
                >
                </ResultSection>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
