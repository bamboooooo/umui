/**
* navBar 组件
* @description
*   位于 app 内容区的上方，系统状态栏的下方，并且提供在一系列页面中的导航能力
* @example
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
* @author wall
* @createTime 2017-08-03
*/

var classnames = require('classnames');
var PropTypes = React.PropTypes;

/**
* @param {string} id 组件id
* @param {string} className 组件class
* @param {string/Array[html]} leftItem 组件左边区域 
* @param {string/Array[html]} leftItem 组件右边区域 
*/
var NavBar = React.createClass({
    propTypes: {
        id: PropTypes.string,
        className: PropTypes.string,
        leftItem: PropTypes.node,
        rightItem: PropTypes.node
    },
    getDefaultProps: function () {
        return {
            id: null,
            className: null,
            leftItem: null,
            rightItem: null
        };
    },
    render: function () {
        // var props = this.props;
        var className = classnames('ucs-nav-bar', this.props.className);
        var id = this.props.id;
        var leftItem = this.props.leftItem;
        var rightItem = this.props.rightItem;


        return (
            <div id={id} className={className}>
                <div className="ucs-nav-bar-left">
                    {leftItem}
                </div>
                <div className="ucs-nav-bar-title">
                    {this.props.children}
                </div>
                <div className="ucs-nav-bar-right">
                    {rightItem}
                </div>
            </div>
        );
    }
});
module.exports = NavBar;
