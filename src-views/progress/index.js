var Progress = require('../../src/base/progress');
var Root = React.createClass({
    setValue: function () {
        this.refs.myProgress.setValue(60);
    },
    render: function () {
        return (
            <div>
                <Progress radius={50} border={4} color={['orange', '#f00', '#000']} value={30}></Progress>
                <Progress radius={100} border={6} color={['#ccc', '#0f0', '#000']} value={80}></Progress>
                <Progress radius={200} color={['#ccc', '#00f', '#999']} value={100} ref="myProgress" className="myProgress">
                    <div className="full" style={{width: '100%', height: '30px', lineHeight: '30px', position: 'absolute', left: '0', bottom: '45px', fontSize: '30px', color: '#999'}}>满标</div>
                </Progress>
                <button onClick={this.setValue}>设值60%</button>
                <Progress type={'line'} color={['#ccc', 'orange', 'orange']} value={80}></Progress>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
