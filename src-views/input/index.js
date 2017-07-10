var Test = React.createClass({
	getInitialState:function(){
		return {
			a:'a',
			b:''
		}
	},
    render: function () {
        return (<div>dfdfdfdf</div>);
    },
});
var Root = (<div><Test/></div>);
function aa () {}
ReactDOM.render(Root, document.querySelector('#merry'));
