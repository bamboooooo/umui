/**
 * Created by maxuezhu on 2017/8/4.
 * 说明：提示对话框组件
 */
var Button = require('../../base/button');
var Modal = (function () {
    var div = document.createElement('div');
    var ConfirmItem = React.createClass({
        getDefaultProps: function () {
            return {
                title: '',
                content: '',
                confirmText: '确定',
                cancelText: '取消',
                confirmBack: null,
                cancelBack: null
            };
        },
        getInitialState: function () {
            return {
                className: 'ucs-modal'
            };
        },
        _confirmBack: function () {
            document.body.removeChild(div);
            this.props.confirmBack ? this.props.confirmBack() : null;
        },
        _cancelBack: function () {
            document.body.removeChild(div);
            this.props.cancelBack ? this.props.cancelBack() : null;
        },
        render: function () {
            document.body.appendChild(div);
            return (
                <div className={this.state.className} ref="modal">
                    <div className="ucs-modal-mask"></div>
                    <div className="ucs-modal-wrapper">
                        <div className="ucs-modal-con">
                            <div className="ucs-modal-title">{this.props.title}</div>
                            <div className="ucs-modal-content">{this.props.content}</div>
                            <Button value={this.props.confirmText} ref="confirm" onClick={this._confirmBack}/>
                            <Button value={this.props.cancelText} ref="cancel" className="ucs-btn-cancel" onClick={this._cancelBack}/>
                        </div>
                    </div>

                </div>
            );
        }
    });
    var AlertItem = React.createClass({
        getDefaultProps: function () {
            return {
                title: '',
                content: '',
                confirmText: '确定',
                confirmBack: null
            };
        },
        getInitialState: function () {
            return {
                className: this.props.className ? this.props.className : 'ucs-modal'
            };
        },
        _confirmBack: function () {
            document.body.removeChild(div);
            this.props.confirmBack ? this.props.confirmBack() : null;
        },
        render: function () {
            if (div.innerHTML === '') {
                document.body.appendChild(div);
            }
            return (
                <div className={this.state.className}>
                    <div className="ucs-modal-mask"></div>
                    <div className="ucs-modal-wrapper">
                        <div className="ucs-modal-con">
                            <div className="ucs-modal-title">{this.props.title}</div>
                            <div className="ucs-modal-content">{this.props.content}</div>
                            <Button value={this.props.confirmText} ref="confirm" className="alert-btn" onClick={this._confirmBack}/>
                        </div>
                    </div>

                </div>
            );
        }
    });
    return {
        alert: function (v) {
            ReactDOM.render(<AlertItem {...v}/>, div);
        },
        confirm: function (v) {
            ReactDOM.render(<ConfirmItem {...v}/>, div);
        }
    };
})();

module.exports = Modal;
