/**
 * Created by chenzefang on 2017/7/19.
 */
var classnames = require('classnames');
var Tabbar = React.createClass({
    getDefaultProps: function () {
        return {
            className: null,
            id: null,
            selected: 0,
            onClick: null
        };
    },
    getInitialState: function () {
        return {
            className: classnames('ucs-tabbar', this.props.className),
            selected: this.props.selected
        };
    },
    _onClick: function (index) {
        this.setState({
            selected: index
        });
        this.props.onClick && this.props.onClick(index);
    },

    /*
    * 设置选中项
    * */
    setSelected: function (v) {
        this.setState({
            selected: v
        });
    },

    /*
    * 返回选中项
    * */
    getSelected: function () {
        return this.state.selected;
    },

    /*
    * 显示组件
    * */
    show: function () {
        this.setState({
            className: classnames('ucs-tabbar', this.props.className, {'ucs-hide': false}),
        });
    },

    /*
    * 隐藏组件
    * */
    hide: function () {
        this.setState({
            className: classnames('ucs-tabbar', this.props.className, {'ucs-hide': true}),
        });
    },
    render: function () {
        var self = this;
        return (
            <div className= {self.state.className} id={this.props.id}>
                <ul className="ucs-tabbar-nav">
                    {this.props.children.map(function (item, index) {
                        var active = self.state.selected === index ? 'active' : '';
                        return (
                            <li className={active} key={index} onClick={self._onClick.bind(self, index)}>
                                {item.props.children}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
});

Tabbar.Item = React.createClass({
    render: function () {
        return (this.props.children);
    }
});
module.exports = Tabbar;
