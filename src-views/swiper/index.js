var Swiper = require('../../src/base/swiper');
var Root = React.createClass({
    render: function () {
        return (
            <Swiper defaultValue={1} dots={true} arrows={true} autoPlay={true}>
                <Swiper.Item>1</Swiper.Item>
                <Swiper.Item>2</Swiper.Item>
                <Swiper.Item>3</Swiper.Item>
            </Swiper>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
