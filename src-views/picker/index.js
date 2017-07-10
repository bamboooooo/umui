var Picker = require('../../src/base/picker');

var Root = React.createClass({
    render: function () {
        return (
            <Picker/>
        );
    },
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
