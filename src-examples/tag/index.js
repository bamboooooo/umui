/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/17
 * 说明：
 */
var Tag = require('../../src/base/tag');
var Root = React.createClass({
    componentDidMount: function () {
        var _this = this;
        _this.refs.tag.setValue(12345);

        console.log(_this.refs.tag.getValue());
    },
    render: function () {
        return (
            <div>
                <Tag ref="tag" value='123+'/>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
