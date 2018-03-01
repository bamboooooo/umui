var classnames = require('classnames');
var CubeNav = React.createClass({
    getDefaultProps: function () {
        return {
            className: null,
            id: null,
            data: [],
            num: 4
        };
    },
    render: function () {
        var _self = this;
        var len = _self.props.data.length;
        var num = _self.props.num;
        var errorMsg = '';
        var list = '';
        if (Number(num) === 4 || Number(num) === 5) {
            if (Number(num) === 4 && Number(len) > 8) {
                errorMsg = 'cube-nav:当前配置一行显示' + num + '个，展示数据不能超过8个';
                console.error(errorMsg);
            } else if (Number(num) === 5 && Number(len) > 10) {
                errorMsg = 'cube-nav:当前配置一行显示' + num + '个，展示数据不能超过10个';
                console.error(errorMsg);
            } else {
                list = this.props.data.map(function (item, index) {
                    return (
                        <li className={classnames({'cubenav-num4': Number(num) === 4}, {'cubenav-num5': Number(num) === 5})} key={index}>
                            <div className="ucs-cubenav-content">
                                <a href={item.href}>
                                    <img className="cubenav-icon" src={item.icon}/>
                                    <div className="cubenav-title">{item.title}</div>
                                </a>
                            </div>
                        </li>
                    );
                });
            }
        } else {
            errorMsg = 'cube-nav:请设置一行显示4个或5个';
            console.error(errorMsg);
        }
        return (
            <div className={classnames('ucs-cubenav', this.props.className)} id={this.props.id}>
                <ul className="ucs-cubenav-nav">
                    {list}
                </ul>
            </div>
        );
    }
});

module.exports = CubeNav;
