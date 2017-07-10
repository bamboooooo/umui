/**
 * Created by Administrator on 2017/6/27.
 */
var Picker = React.createClass({
    getDefaultProps: function () {
        return {

        };
    },
    getInitialState: function () {
        return {

        };
    },
    componentDidMount: function () {
        console.log(123);
    },
    render: function () {
        return (
            <div>
                <div className="am-picker-popup-mask"></div>
                <div tabIndex="-1" className="am-picker-popup-wrap " role="dialog">
                    <div role="document" className="am-picker-popup forss">
                        <div className="am-picker-popup-content">
                            <div className="am-picker-popup-body">
                                <div>
                                    <div className="am-picker-popup-header">
                                        <div className="am-picker-popup-item am-picker-popup-header-left">取消</div>
                                        <div className="am-picker-popup-item am-picker-popup-title"></div>
                                        <div className="am-picker-popup-item am-picker-popup-header-right">确定</div>
                                    </div>
                                    <div className="am-picker">
                                        <div className="am-picker-item">
                                            <div className="am-picker-col">
                                                <div className="am-picker-col-mask"></div>
                                                <div className="am-picker-col-indicator"></div>
                                                <div className="am-picker-col-content" style={{transformOrigin: 'left top 0px', transform: 'translate3d(0px, -34px, 0px) scale(1)'}}>
                                                    <div className="am-picker-col-item">安徽省</div>
                                                    <div className="am-picker-col-item am-picker-col-item-selected">澳门特别行政区</div>
                                                    <div className="am-picker-col-item">北京</div>
                                                    <div className="am-picker-col-item">广西壮族自治区</div>
                                                    <div className="am-picker-col-item">香港特别行政区</div>
                                                    <div className="am-picker-col-item">浙江省</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div tabIndex="0" style={{width: '0px', height: '0px', overflow: 'hidden'}}>sentinel</div>
                    </div>
                </div>
            </div>
        );
    },
});

module.exports = Picker;
