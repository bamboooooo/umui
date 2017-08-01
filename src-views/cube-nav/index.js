
var CubeNav = require('../../src/complex/cube-nav');
var datasource = [
    {
        icon: 'http://cdn.youxiputao.com/attach/news/2014/03/25/cee281e371788349.jpg',
        title: '标题一很长很长很长很长很长很长很长很长很长很长很长很长',
        href: 'http://www.baidu.com'
    },
    {
        icon: 'http://img.zcool.cn/community/0122e655f8f3e06ac7251df8686c5f.png',
        title: '标题二',
        href: 'http://www.baidu.com'
    },
    {
        icon: 'http://img.zcool.cn/community/010831568f787532f87574be2da5e1.jpg@900w_1l_2o_100sh.jpg',
        title: '标题三',
        href: 'http://www.baidu.com'
    },
    {
        icon: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=f4bf47b3c1ef7609280691dc46b4c9b9/4a36acaf2edda3cc8492fb0e0be93901213f92ae.jpg',
        title: '标题四',
        href: 'http://www.baidu.com'
    },
    {
        icon: 'http://img.zcool.cn/community/0122e655f8f3e06ac7251df8686c5f.png',
        title: '标题五',
        href: 'http://www.baidu.com'
    },
    {
        icon: 'http://img.zcool.cn/community/01b97f5684bf1232f8759f043eb2cd.gif',
        title: '标题六',
        href: 'http://www.baidu.com'
    },
    {
        icon: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=f4bf47b3c1ef7609280691dc46b4c9b9/4a36acaf2edda3cc8492fb0e0be93901213f92ae.jpg',
        title: '标题七',
        href: 'http://www.baidu.com'
    },
    {
        icon: 'http://img.zcool.cn/community/0122e655f8f3e06ac7251df8686c5f.png',
        title: '标题八',
        href: 'http://www.baidu.com'
    }
];
var Root = React.createClass({
    onClick: function (index) {
        console.log(index);
    },
    render: function () {
        return (
            <CubeNav id="cubenav-id" className="custom-cubenav" data={datasource} num="4" />
        );
    }
});

ReactDOM.render(<Root />, document.getElementById('merry'));
