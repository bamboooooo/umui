/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/17
 * 说明：
 */
var SegmentedControl = require('../../src/complex/segmented-control');
var values = [
    {'icon': 'icon1', 'text': '分段一', 'value': '1'},
    {'icon': 'icon2', 'text': '分段二', 'value': '2'},
    {'icon': 'icon3', 'text': '分段三', 'value': '3'},
    {'icon': 'icon3', 'text': '分段三', 'value': '3'},
    {'icon': 'icon3', 'text': '分段三', 'value': '3'},
    {'icon': 'icon3', 'text': '分段三', 'value': '3'}
];
var Root = React.createClass({
    handlerClick: function (index) {
        console.log(index);
    },
    render: function () {
        return (
            <div>
                <SegmentedControl values = {values} displayIcon={false} onClick={this.handlerClick}/>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
