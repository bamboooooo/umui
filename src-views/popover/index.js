var Popover = require('../../src/base/popover');
var Item = Popover.Item;
var Root = React.createClass({
    onSelect: function (v) {
        console.log('选中值：', v);
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
                            (<Item key="4" value="scan" icon={(<img src='../images/1.png' />)}>扫一扫</Item>),
                            (<Item key="5" value="special" icon={(<img src='../images/1.png' />)} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                            (<Item key="6" value="button ct" icon={(<img src='../images/1.png' />)} disabled={true}>
                                <span style={{ marginRight: 5 }}>帮助</span>
                            </Item>)
                        ]}
                    >
                        <div>
                            更多（下左）
                        </div>
                    </Popover>
                </div>
                <div style={{position: 'absolute', right: '30px', top: '100px'}}>
                    <Popover
                        mask={false}
                        overlayClassName={'fortest'}
                        overlayStyle={{right: '30px', top: '130px'}}
                        visible={false}
                        placement={'bottomRight'}
                        overlay={[
                            (<Item key="4" value="scan" icon={(<img src='../images/1.png' />)}>扫一扫</Item>),
                            (<Item key="5" value="special" icon={(<img src='../images/1.png' />)} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                            (<Item key="6" value="button ct" icon={(<img src='../images/1.png' />)}>
                                <span style={{ marginRight: 5 }}>帮助</span>
                            </Item>)
                        ]}
                        onSelect={this.onSelect}
                    >
                        <div>
                            更多（下右）
                        </div>
                    </Popover>
                </div>
                <div style={{position: 'absolute', left: '150px', top: '200px'}}>
                    <Popover
                        mask={true}
                        overlayClassName={'fortest'}
                        overlayStyle={{left: '95px', top: '70px'}}
                        visible={false}
                        placement={'top'}
                        overlay={[
                            (<Item key="4" value="scan" icon={(<img src='../images/1.png' />)}>扫一扫</Item>),
                            (<Item key="5" value="special" icon={(<img src='../images/1.png' />)} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                            (<Item key="6" value="button ct" icon={(<img src='../images/1.png' />)}>
                                <span style={{ marginRight: 5 }}>帮助</span>
                            </Item>)
                        ]}
                    >
                        <div>
                            更多（上）
                        </div>
                    </Popover>
                </div>
                <div style={{position: 'absolute', left: '30px', top: '300px'}}>
                    <Popover
                        mask={true}
                        overlayClassName={'fortest'}
                        overlayStyle={{left: '105px', top: '245px'}}
                        visible={false}
                        placement={'right'}
                        overlay={[
                            (<Item key="4" value="scan" icon={(<img src='../images/1.png' />)}>扫一扫</Item>),
                            (<Item key="5" value="special" icon={(<img src='../images/1.png' />)} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                            (<Item key="6" value="button ct" icon={(<img src='../images/1.png' />)}>
                                <span style={{ marginRight: 5 }}>帮助</span>
                            </Item>)
                        ]}
                    >
                        <div>
                            更多（右）
                        </div>
                    </Popover>
                </div>
                <div style={{position: 'absolute', right: '30px', top: '300px'}}>
                    <Popover
                        mask={true}
                        overlayClassName={'fortest'}
                        overlayStyle={{right: '110px', top: '245px'}}
                        visible={false}
                        placement={'left'}
                        overlay={[
                            (<Item key="4" value="scan" icon={(<img src='../images/1.png' />)}>扫一扫</Item>),
                            (<Item key="5" value="special" icon={(<img src='../images/1.png' />)} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                            (<Item key="6" value="button ct" icon={(<img src='../images/1.png' />)}>
                                <span style={{ marginRight: 5 }}>帮助</span>
                            </Item>)
                        ]}
                    >
                        <div>
                            更多（左）
                        </div>
                    </Popover>
                </div>
            </div>
        );
    }
});
ReactDOM.render(<Root/>, document.getElementById('merry'));
