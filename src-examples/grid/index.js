/**
 * Created by chenzefang on 2017/7/24.
 */

var Grid = require('../../src/complex/grid');
var datasource = [
    {
        icon: 'http://cdn.youxiputao.com/attach/news/2014/03/25/cee281e371788349.jpg',
        text: '标题一'
    },
    {
        icon: 'http://img.zcool.cn/community/0122e655f8f3e06ac7251df8686c5f.png',
        text: '标题二'
    },
    {
        icon: 'http://img.zcool.cn/community/010831568f787532f87574be2da5e1.jpg@900w_1l_2o_100sh.jpg',
        text: '标题三'
    },
    {
        icon: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=f4bf47b3c1ef7609280691dc46b4c9b9/4a36acaf2edda3cc8492fb0e0be93901213f92ae.jpg',
        text: '标题四'
    },
    {
        icon: 'http://img.zcool.cn/community/0122e655f8f3e06ac7251df8686c5f.png',
        text: '标题五'
    },
    {
        icon: 'http://img.zcool.cn/community/01b97f5684bf1232f8759f043eb2cd.gif',
        text: '标题六'
    }
];
var Root = React.createClass({
    onClick: function (index) {
        console.log(index);
    },
    _renderItem: function (item) {
        return <div>{item.text}</div>;
    },
    render: function () {
        return (
            <Grid data = {datasource} onClick={this.onClick} hasLine={true} />
        );
    }
});

ReactDOM.render(<Root />, document.getElementById('merry'));
