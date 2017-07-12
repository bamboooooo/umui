var Password = require('../../src/base/password');
var Root = React.createClass({
    getDefaultProps: function () {
        return {
            placeHolder: '请输入密码',
            id: 'passsword',
            name: 'passsword',
            maxLength: '',
            isShowClear: true
        };
    },
    render: function () {
        return (
            <div>
                <Password ref="passwd" {...this.props} placeholder={this.props.placeHolder}/>
            </div>
        );
    },
    componentDidMount: function () {
        // this.refs.passwd.setDisabled(true);
        // this.refs.passwd.setReadOnly(true);
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
