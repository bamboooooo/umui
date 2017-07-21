var Progress = require('../../src/base/progress');
var Root = React.createClass({
    render: function () {
        return (
            <div>
                <Progress radius={50} border={4} color={['#ccc', '#f00', '#000']} value={50}></Progress>
                <Progress radius={100} border={6} color={['#ccc', '#0f0', '#000']} value={80}></Progress>
                <Progress radius={200} color={['#ccc', '#00f', '#00f']} value={100}></Progress>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
