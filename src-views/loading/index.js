/**
 * Created by maxuezhu on 2017/8/4.
 */
var Loading = require('../../src/base/loading');
var Root = React.createClass({
    _clickHandle: function () {
        Loading.show();
        console.log(Loading.show);
    },
    componentDidMount: function () {
        setTimeout(function () {
            Loading.hide();
        }, 5000);
    },
    render: function () {
        return (
            <button onClick={this._clickHandle}>loading</button>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
