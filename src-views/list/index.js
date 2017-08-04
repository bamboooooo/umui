/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/17
 * 说明：
 */
var List = require('../../src/complex/list');
var Root = React.createClass({
    _handleClick: function () {
        console.log('test');
    },
    render: function () {
        return (
            <div>
                <List className='project-list' header='这是列表头部' footer='这是列表底部'>
                    <List.Item className='Item' thumb='https://www.baidu.com/img/bd_logo1.png' extra='2017-08-06' arrow='right' align='top' touchExtra='hello world' onClick={this._handleClick}>
                        <p>abcdefghijklmnopqrst</p>
                    </List.Item>
                    <List.Item className='Item' thumb='https://www.baidu.com/img/bd_logo1.png' extra='2017-08-06' arrow='right' align='bottom' activeClass='active' onClick={this._handleClick}>
                        <p>abcdefghijklmnopqrst</p>
                    </List.Item>
                </List>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
