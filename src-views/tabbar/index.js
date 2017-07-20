/**
 * Created by chenzefang on 2017/7/19.
 */

var Tabbar = require('../../src/complex/tabbar');
var Root = React.createClass({
    onClick: function (index) {
        console.log(index);
    },
    componentDidMount: function () {
        this.refs.tabbar.setSelected(2);
    },
    render: function () {
        return (
            <Tabbar ref="tabbar" onClick={this.onClick}>
                <Tabbar.Item>
                    <a href="#">
                        <span className="ucs-icon icon-home-fill"></span>
                        <span className="ucs-tabbar-label">首页</span>
                    </a>
                </Tabbar.Item>
                <Tabbar.Item>
                    <a href="#">
                        <span className="ucs-icon icon-about"></span>
                        <span className="ucs-tabbar-label">消息</span>
                    </a>
                </Tabbar.Item>
                <Tabbar.Item>
                    <a href="#">
                        <span className="ucs-icon icon-mpack"></span>
                        <span className="ucs-tabbar-label">资产</span>
                    </a>
                </Tabbar.Item>
                <Tabbar.Item>
                    <a href="#">
                        <span className="ucs-icon icon-people-2-fill"></span>
                        <span className="ucs-tabbar-label">我的</span>
                    </a>
                </Tabbar.Item>
            </Tabbar>
        );
    }
});

ReactDOM.render(<Root />, document.getElementById('merry'));
