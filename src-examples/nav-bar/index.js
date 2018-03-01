var NavBar = require('../../src/complex/nav-bar');
var Root = React.createClass({
    getInitialState: function () {
        return {
        };
    },
    getDefaultProps: function () {
        return {
        };
    },
    render: function () {
        return (
            <div>
                <NavBar
                    id="ucs-nav-bar"
                    className="my-nav-bar"
                    leftItem={[
                        <span key="0"><i className="iconfont icon-arrow"></i></span>,
                        <span key="1">返回</span>
                    ]}
                    rightItem={[
                        <span key="0"><i className="iconfont icon-more-2"></i></span>
                    ]}
                >
                    <h1>我的标题</h1>
                </NavBar>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
