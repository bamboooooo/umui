/**
 * Created by Administrator on 2017/6/27.
 */
var Helper = require("./helper");
var DatePanel = React.createClass({
    mixins: [Helper],
    getDefaultProps: function(){
        return {
            maxDate : null,
            minDate : new Date(1970, 0, 1)
        }
    },
    getInitialState: function(){
        var initVal = this.props.curDate,
            date = null;
        if(initVal){
            var arr = initVal.split('-');
            date = new Date(arr[0], arr[1]-1 , arr[2]);
        }
        else{
            date = new Date();
        }
        return {
            year : date.getFullYear(),
            month : date.getMonth(),
            date : date.getDate()
        }
    },
    componentDidMount: function(){
        var startX, startY, endX, endY;
        var _this = this;
        this.refs['md_datearea'].addEventListener('touchstart', function(event){
            var touch = event.touches[0];
            startY = touch.pageY;
            startX = touch.pageX;
        }, false);
        this.refs['md_datearea'].addEventListener('touchmove', function(event){
            var touch = event.touches[0];
            endY = (startY - touch.pageY);
            endX = touch.pageX;
        }, false);
        this.refs['md_datearea'].addEventListener('touchend', function(event){
            if((startX - endX)>200){//左滑
                _this.changeMonth(1);
            }else if((startX - endX)<-200){
                _this.changeMonth(-1);
            }
        }, false);
        this.setDateStr();
    },
    componentDidUpdate: function(){
        this.setDateStr();
    },
    //根据日期得到渲染天数的显示的HTML
    setDateStr : function(){
        var _this = this;
        var y = _this.state.year;
        var m = _this.state.month;
        var d = _this.state.date;

        _this.refs['md_datearea'].innerHTML = "";
        //计算1号是星期几，并补上上个月的末尾几天
        var week = _this.getWeekInMonth(y, m);
        var lastMonthDays = _this.getDaysInMonth(y, m-1);
        for(var j=week-1; j>=0; j--){
            var li = document.createElement('li'),dataDay = lastMonthDays-j;
            li.className = "prevdate";
            li.setAttribute("data-day",dataDay);
            li.innerHTML = dataDay;
            li.addEventListener('touchend', function(event){
                _this.changeMonth(-1);
            }, false);
            _this.refs['md_datearea'].appendChild(li);
        }
        //再补上本月的所有天;
        var currentMonthDays = _this.getDaysInMonth(y, m);
        //判断是否超出允许的日期范围
        var startDay = 1,
            endDay = currentMonthDays,
            thisDate = new Date(y, m, d),
            firstDate = new Date(y, m, 1);
        var lastDate =  new Date(y, m, currentMonthDays),
            minDateDay = _this.props.minDate.getDate();


        if(_this.props.minDate>lastDate){
            startDay = currentMonthDays+1;
        }
        else if(_this.props.minDate>=firstDate && _this.props.minDate<=lastDate){
            startDay = minDateDay;
        }

        if(this.props.maxDate){
            var maxDateDay = _this.props.maxDate.getDate();
            if(_this.props.maxDate<firstDate){
                endDay = startDay-1;
            }
            else if(_this.props.maxDate>=firstDate && _this.props.maxDate<=lastDate){
                endDay = maxDateDay;
            }
        }


        //将日期按允许的范围分三段拼接
        for(var i=1; i<startDay; i++){
            var li = document.createElement('li');
            li.className = "disabled";
            li.setAttribute("data-day",i);
            li.innerHTML = i;
            _this.refs['md_datearea'].appendChild(li);
        }
        for(var j=startDay; j<=endDay; j++){
            var current = '';
            if(y==_this.state.year && m==_this.state.month && d==j){
                current = 'current';
            }
            var li = document.createElement('li');
            li.className = current;
            li.setAttribute("data-day",j);
            li.innerHTML = j;
            li.addEventListener('touchend', function(event){
                _this.touchHandler(event);
            }, false);
            _this.refs['md_datearea'].appendChild(li);
        }
        for(var k=endDay+1; k<=currentMonthDays; k++){
            var li = document.createElement('li');
            li.className = "disabled";
            li.setAttribute("data-day",k);
            li.innerHTML = k;
            _this.refs['md_datearea'].appendChild(li);
        }

        //再补上下个月的开始几天
        var nextMonthStartWeek = (currentMonthDays + week) % 7;
        var nextMonthDays;
        if(((currentMonthDays + week)+(7-nextMonthStartWeek))==35){
            nextMonthDays = 14-nextMonthStartWeek;
        }else if(((currentMonthDays + week)+(7-nextMonthStartWeek))==42){
            nextMonthDays = 7-nextMonthStartWeek;
        }
        for(var i=1; i<=nextMonthDays; i++){
            var li = document.createElement('li');
            li.className = "nextdate";
            li.setAttribute("data-day",i);
            li.innerHTML = i;
            li.addEventListener('touchend', function(event){
                _this.changeMonth(1);
            }, false);
            _this.refs['md_datearea'].appendChild(li);
        }
    },
    touchHandler: function(e){
        var node = e.target || e.srcElement;
        var liArr = node.parentNode.childNodes;
        for(var i = 0; i < liArr.length; i ++){
            this.removeClass(liArr[i],"current");
        }
        this.addClass(node,'current');
        this.setState({
            date: node.getAttribute('data-day')
        });
    },
    changeMonth : function(add){
        var num = ~~this.state.month+add;
        //月份变动发生了跨年
        if(num>11){
            num = 0;
            this.setState({
                year: this.state.year+1
            });
        }
        else if(num<0){
            num = 11;
            this.setState({
                year: this.state.year-1
            });
        }
        this.setState({
            month: num
        });
    },
    changeYear : function(add){
        var num = ~~this.state.year+add;
        this.setState({
            year: num
        });
    },
    selectedHandler: function(){
        var monthValue = ~~this.state.month + 1;
        if(monthValue < 10){
            monthValue = '0' + monthValue;
        }
        var dateValue = this.state.date;
        if(dateValue < 10){
            dateValue = '0' + dateValue;
        }
        this.props.callBack(this.state.year+"-"+monthValue+"-"+dateValue);
    },
    cancelHandler: function(){
        this.props.callBack(this.props.curDate);
    },
    render: function(){
        var _this = this;
        return (
            <div>
                <div className="md_mask show"></div>
                <div className="md_panel show">
                    <div className="md_head">
                        <div className="md_selectarea">
                            <a className="md_prev change_year" href="javascript:void(0);" onTouchEnd={_this.changeYear.bind(_this,-1)}>&lt;</a>
                            <a ref="yeartag" className="md_headtext yeartag" href="javascript:void(0);">{_this.state.year}</a>
                            <a className="md_next change_year" href="javascript:void(0);" onTouchEnd={_this.changeYear.bind(_this,1)}>&gt;</a>
                        </div>
                        <div className="md_selectarea">
                            <a className="md_prev change_month" href="javascript:void(0);" onTouchEnd={_this.changeMonth.bind(_this,-1)}>&lt;</a>
                            <a ref="monthtag" className="md_headtext monthtag" href="javascript:void(0);">{_this.getMonth(_this.state.month)+'月'}</a>
                            <a className="md_next change_month" href="javascript:void(0);" onTouchEnd={_this.changeMonth.bind(_this,1)}>&gt;</a>
                        </div>
                    </div>
                    <div className="md_body">
                        <ul className="md_weekarea">
                            <li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li>
                        </ul>
                        <ul className="md_datearea in" ref="md_datearea"></ul>
                    </div>
                    <div className="md_foot">
                        <a href="javascript:void(0);" className="md_ok" onTouchEnd={_this.selectedHandler}>确定</a>
                        <a href="javascript:void(0);" className="md_cancel" onTouchEnd={_this.cancelHandler}>取消</a>
                    </div>
                </div>
            </div>
        );
    }
});

var Datepicker = React.createClass({
    getDefaultProps: function(){
        return {
            config: {
                maxDate : null,
                minDate : new Date(1970, 0, 1),
                placeholder: "请选择日期",
                defaultDate: ""
            }
        }
    },
    getInitialState: function(){
        return {

        }
    },
    componentDidMount: function(){
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    },
    clickHandler: function(){
        this._layer = document.createElement('div');
        document.body.appendChild(this._layer);
        this.renderLayer();
    },
    renderLayer: function() {
        ReactDOM.render(<DatePanel {...this.props.config} curDate={this.refs['ucs-date-picker'].value} callBack={this.callBack}/>,this._layer);
    },
    callBack: function(val){
        this.refs['ucs-date-picker'].value = val;
        if(this._layer){
            document.body.removeChild(this._layer);
            this._layer = null;
        }
    },
    render:function(){
        var _this = this;
        return (
            <div>
                <input type="text" onTouchEnd={_this.clickHandler} readOnly ref="ucs-date-picker" value={_this.props.config.defaultDate} placeholder={_this.props.config.placeholder}/>
            </div>
        )
    }
})

module.exports = Datepicker;