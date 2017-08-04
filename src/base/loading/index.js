/**
 * Created by maxuezhu on 2017/8/1.
 * 说明：Loading组件
 */
var Loading = (function () {
    var div = document.createElement('div');
    var LoadingItem = React.createClass({
        render: function () {

            document.body.appendChild(div);
            return (
                <div className='ucs-loading'>
                    <div className="ucs-loading-mask"></div>
                    <div className="ucs-loading-con">
                        <div className="loading">
                            <i className="iconfont icon-loading" ref="loading"></i>
                        </div>
                    </div>
                </div>
            );
        }

    });

    return {
        show: function () {
            ReactDOM.render(<LoadingItem/>, div);
        },
        hide: function () {
            document.body.removeChild(div);
        }
    };
})();

module.exports = Loading;
