var Picker = require('../../src/base/picker');
var District = require('./district');
var seasons = [
    [
        {
            label: '2013',
            value: '2013'
        },
        {
            label: '2014',
            value: '2014'
        }
    ],
    [
        {
            label: '春',
            value: '春'
        },
        {
            label: '夏',
            value: '夏'
        }
    ]
];
var Root = React.createClass({
    render: function () {
        return (
            <div>
                <Picker.Group dataSource={District} cols={3}/>
                <Picker.Group dataSource={seasons}/>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
