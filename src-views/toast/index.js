/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/17
 * 说明：
 */
var Toast = require('../../src/base/toast');
var Root = React.createClass({
    render: function () {
        return (
            <div>
                <Toast className='error'/>
                <Toast className='success'/>
                <Toast className='warning'/>
                <Toast className='info'/>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
