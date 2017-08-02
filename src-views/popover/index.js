var Popover = require('../../src/base/popover');
var Item = Popover.Item;
var Root = React.createClass({
    onSelect: function () {
      console.log('onSelect');
    },
    onVisibleChange: function () {
        console.log('onVisibleChange');
    },
    render: function () {
        return (
            <div>
                <div style={{marginLeft: '30px', marginTop: '30px'}}>
                    <Popover
                        mask={true}
                        onVisibleChange={this.onVisibleChange}
                        overlayClassName={'fortest'}
                        overlayStyle={{left: '30px', top: '60px'}}
                        visible={false}
                        placement={'bottomLeft'}
                        overlay={[
                            (<Item key="4" value="scan" icon={'1'} onSelect={this.onSelect}>扫一扫</Item>),
                            (<Item key="5" value="special" icon={'2'} style={{ whiteSpace: 'nowrap' }} onSelect={this.onSelect}>我的二维码</Item>),
                            (<Item key="6" value="button ct" icon={'3'} onSelect={this.onSelect}>
                                <span style={{ marginRight: 5 }}>帮助</span>
                            </Item>)
                        ]}
                    >
                        <div>
                            更多
                        </div>
                    </Popover>
                </div>
                <div style={{position: 'absolute', right: '30px', top: '100px'}}>
                    <Popover
                        mask={true}
                        overlayClassName={'fortest'}
                        overlayStyle={{right: '30px', top: '130px'}}
                        visible={false}
                        placement={'bottomRight'}
                        overlay={[
                            (<Item key="4" value="scan" icon={'1'}>扫一扫</Item>),
                            (<Item key="5" value="special" icon={'2'} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                            (<Item key="6" value="button ct" icon={'3'}>
                                <span style={{ marginRight: 5 }}>帮助</span>
                            </Item>)
                        ]}
                    >
                        <div>
                            更多
                        </div>
                    </Popover>
                </div>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
