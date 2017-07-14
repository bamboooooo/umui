var Password = require('../../src/base/password');
var Root = React.createClass({
    getDefaultProps: function () {
        return {
            placeHolder: '请输入密码',
            id: 'passsword',
            name: 'passsword',
            maxLength: '',
            isShowClear: true,
            encryptKey: '111',
            encryptType: 'md5'
        };
    },
    blurHandle: function () {
        console.log(this.refs.passwd.getValue());
    },
    render: function () {
        return (
            <div>
                <p>正常的使用</p>
                <Password ref="passwd" {...this.props} placeholder={this.props.placeHolder} onBlur={this.blurHandle}/>
                <p>禁止输入的情况</p>
                <Password ref="passwd1" {...this.props} placeholder={this.props.placeHolder} onBlur={this.blurHandle}/>
            </div>
        );
    },
    componentDidMount: function () {
        this.refs.passwd1.setDisabled(true);
        this.refs.passwd1.setReadOnly(true);
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
