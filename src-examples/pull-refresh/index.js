var PullRefresh = require('../../src/complex/pull-refresh');
var Root = React.createClass({
    getInitialState: function () {
        return {
            data: [
                {
                    text: '内容1'
                },
                {
                    text: '内容2'
                },
                {
                    text: '内容3'
                },
                {
                    text: '内容4'
                },
                {
                    text: '内容5'
                },
                {
                    text: '内容6'
                },
                {
                    text: '内容7'
                },
                {
                    text: '内容8'
                },
                {
                    text: '内容9'
                },
                {
                    text: '内容10'
                }
            ]
        };
    },
    onRefresh: function (callback) {
        var newData;
        var _this = this;
        // 模拟3秒后获取到新数据
        setTimeout(function () {
            newData = [
                {
                    text: '新内容1' + Math.random()
                },
                {
                    text: '新内容2' + Math.random()
                },
                {
                    text: '新内容3' + Math.random()
                },
                {
                    text: '新内容4' + Math.random()
                },
                {
                    text: '新内容5' + Math.random()
                }
            ];
            if(false){
                _this.setState({
                    data: newData
                });
                callback();
            }else{
                _this.refs.pullRefresh.setTips('加载失败');
            }
        }, 2000);
    },
    render: function () {
        var _data = this.state.data.map(function (item, index) {
            return (
                <li key={index}>{item.text}</li>
            );
        });
        return (
            <div>
                <PullRefresh onRefresh={this.onRefresh} ref="pullRefresh" direction="down">
                    <ul>
                        {_data}
                    </ul>
                </PullRefresh>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
