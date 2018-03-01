/**
 * Created by chenzefang on 2017/7/24.
 */
var classnames = require('classnames');
var Grid = React.createClass({
    getDefaultProps: function () {
        return {
            className: null,
            id: null,
            hasLine: true,
            data: null,
            onClick: null
        };
    },
    getInitialState: function () {
        return {
            className: classnames('ucs-grid', this.props.className, this.props.hasLine ? 'ucs-grid-line' : null)
        };
    },
    _onClick: function (index) {
        this.props.onClick && this.props.onClick(index);
    },
    render: function () {
        var _self = this;
        var len = _self.props.data.length;
        var curIndex = 1;
        var liDom = [];
        var realDom = [];
        var columnNum = 3;
        var width = 100 / columnNum;
        this.props.data.map(function (item, index) {
            var content = [];
            if (_self.props.renderItem) {
                content.push(_self.props.renderItem(item));
            } else {
                content.push(
                    <div>
                        <img className="grid-icon" src={item.icon}/>
                        <div className="grid-title">{item.text}</div>
                    </div>
                );
            }
            liDom.push(<li className='' key={index} style={{width: width + '%'}} onClick={_self._onClick.bind(_self, index)}>
                <div className="ucs-grid-content">
                    {content}
                </div>

            </li>);
            if (columnNum * curIndex - 1 === index && len >= index) {
                realDom.push(
                    <ul className="ucs-grid-nav">
                        {liDom}
                    </ul>
                );
                liDom = [];
                curIndex++;
            } else if (index === len - 1) {
                realDom.push(
                    <ul className="ucs-grid-nav">
                        {liDom}
                    </ul>
                );
            }
        });
        return (
            <div className= {_self.state.className} id={this.props.id}>
                {realDom}
            </div>
        );
    }
});

module.exports = Grid;
