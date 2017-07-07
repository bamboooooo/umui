var classnames = require('classnames');
var sha1 = require('sha1');
var md5 = require('js-md5');
var sha256 = require('sha256');
var Password = React.createClass({
    getInitialState:function () {
        return{
            className:classnames('ucs-password',this.props.className),
            disabled:false,
            readOnly:false,
            isShowClear:false,
            encryptKey:'',
            encryptType:'',
            onChange:'',
            onBlur:'',
            onFocus:''
        }
    },
    getDefaultProps:function () {
        return{
            placeHolder:'',
            id:'',
            name:'',
            displayChar:'',
            maxLength:''
        }
    },
    getValue:function () {
        var encryptType = this.state.encryptType;
        var encryptPassword = '';
        switch(encryptType)
        {
            case 'md5':
                encryptPassword = md5(this.state.encryptKey);
                break;
            case 'sha1':
                encryptPassword = sha1(this.state.encryptKey);
                break;
            case 'sha256':
                encryptPassword = sha256(this.state.encryptKey);
                break;
            default:
        }
    },
    setReadOnly:function(v){
        if(v){
            this.setState({
                readOnly:true
            })
        }else {
            this.setState({
                readOnly:false
            })
        }
    },
    setDisabled:function(v){
        if(v){
            this.setState({
                className:classnames(this.state.className,'disabled'),
                disabled:true
            })
        }else {
            this.setState({
                className:classnames('ucs-password',this.props.className),
                disabled:false
            })
        }
    },
    clear:function(){
        this.refs.password.value='';
    },
    setEncryptKey:function (v) {
        this.setState({
            encryptKey:v
        })
    },

    /*显示清除的标签*/
    _isShowClear:function () {
        if(!this.state.disabled && !this.state.readOnly){
            this.refs.clear.style = "block";
        }else{
            this.refs.clear.style = "none";
        }
    },
    _keyUpHandle:function (e) {
        var passwordVal = this.refs.password.value;
        this.refs.passwordOut.value = passwordVal.replace(/./g,this.props.displayChar);
    },
    onChange:function (e) {
        this.props.onChange ? this.props.onChange(e) : '';
    },
    onBlur:function (e) {
        this.props.onBlur ? this.props.onBlur(e) : '';
    },
    onFocus:function (e) {
        this.props.onFocus ? this.props.onFocus(e) : '';
    },
    componentDidMount:function () {
        this._isShowClear();
    },
    render:function(){
        return(
            <div className="ucs-password">
                <input type="text" ref="password" {...this.props} className={this.state.className} disabled={this.state.disabled}  readOnly={this.state.readOnly} onKeyUp={this._keyUpHandle}></input>
                <i className="icon-clear" onClick={this.clear}>X</i>
            </div>
        )
    }
})
moudle.exports = Password;