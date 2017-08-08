/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/18
 * 说明：
 */

import List  from '../../../src/complex/list/index.js'; // 引入组件

var _touchExtra = [
    {
        'text': '删除',
        'onClick': function () {
            console.log('删除');
        }
    },
    {
        'text': '关注',
        'onClick': function () {
            console.log('关注');
        }
    },
    {
        'text': '收藏',
        'onClick': function () {
            console.log('收藏');
        }
    }
];
var _handleClick = function (e) {
    document.body.innerHTML = 'Item的onClick事件';
};
var _touchMove = function () {
    document.body.innerHTML = 'Item的touchMove事件';
};
var item = (
    <List.Item className='my-list-item' thumb='https://www.baidu.com/img/bd_logo1.png' extra='2017-08-06' arrow='right' align='top' activeClassName='active' touchExtra={_touchExtra} onClick={_handleClick} touchMove={_touchMove}>
        <p>这是中间内容</p>
    </List.Item>
);
var Root = (
    <List className='project-list' id='mylist' header='这是列表头部' footer='这是列表底部'>
        {item}
        <List.Item className='Item' thumb='https://www.baidu.com/img/bd_logo1.png' extra='2017-08-06' arrow='right' align='bottom' onClick={_handleClick}>
            <p>这是中间内容</p>
        </List.Item>
    </List>
);

const list = TestUtils.renderIntoDocument(Root);
const listDom = findDOMNode(list);
const listItem = TestUtils.renderIntoDocument(item);
const listItemDom = findDOMNode(listItem);

describe('List组件测试', function () {
    describe('props测试', function() {
        // props属性测试
        describe('List测试', function () {
            it('porps测试', function () {
                expect(list.props.id.indexOf('mylist')).to.not.be.equal(-1);
                expect(list.props.className.indexOf('project-list')).to.not.be.equal(-1);
                const _header = listDom.querySelector('.ucs-list-header').innerHTML;
                expect(_header.indexOf('这是列表头部')).to.not.be.equal(-1);
                const _footer = listDom.querySelector('.ucs-list-footer').innerHTML;
                expect(_footer.indexOf('这是列表底部')).to.not.be.equal(-1);
            });
        });

        describe('List.Item测试', function () {
            it('porps测试', function () {
                expect(listItem.props.className.indexOf('my-list-item')).to.not.be.equal(-1);
                expect(listItem.props.activeClassName.indexOf('active')).to.not.be.equal(-1);

                const imgSrc = listItemDom.querySelector('img').getAttribute('src');
                expect(imgSrc.indexOf('https://www.baidu.com/img/bd_logo1.png')).to.not.be.equal(-1);

                expect(listItemDom.querySelector('.list-extra').innerHTML.indexOf('2017-08-06')).to.not.be.equal(-1);
                expect(listItemDom.querySelector('.list-extra').className.indexOf('extra-align-top')).to.not.be.equal(-1);
                expect(listItemDom.querySelector('.iconfont').className.indexOf('arrow-right')).to.not.be.equal(-1);

                var buttons = listItemDom.querySelector('.list-back-layer').childNodes;
                for (var i = 0; i < _touchExtra.length; i++) {
                    expect(buttons[i].innerHTML).to.be.equal(_touchExtra[i].text);
                }
            });
        });
    });

    describe('function测试', function() {
        // onClic()方法测试
        describe('List.Item-onClick()测试', function () {
            it('onClick()测试', function () {
                const front = listItemDom.querySelector('.list-front-layer');
                TestUtils.Simulate.click(front);
                expect(document.body.innerHTML).to.be.equal("Item的onClick事件");
            });
        });

        // touchMove()方法测试
        describe('List.Item-touchMove()测试', function () {
            it('touchMove()测试', function () {
                const front = listItemDom.querySelector('.list-front-layer');
                function createTouches(x, y) {
                    return {
                        touches: [
                            {
                                clientX: x,
                                clientY: y
                            }
                        ]
                    };
                }

                function createChangedTouches(x, y) {
                    return {
                        changedTouches: [
                            {
                                clientX: x,
                                clientY: y
                            }
                        ]
                    };
                }

                TestUtils.Simulate.touchStart(front, createTouches(200, 0));
                TestUtils.Simulate.touchMove(front, createTouches(100, 0));
                TestUtils.Simulate.touchEnd(front, createChangedTouches(80, 0));
                expect(document.body.innerHTML).to.be.equal("Item的touchMove事件");
            });
        });
    });
});