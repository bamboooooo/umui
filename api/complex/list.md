# List组件

> 列表组件

## 一、功能说明
### 垂直排列，显示当前内容、状态和可进行的操作的列表。

```
// 列表结构示意图

-------------------------------------------
列表标题
-------------------------------------------
-------------------------------------------
|  * * * *  标题文字                      |
|  * 图  *                      内容文字> |
|  * 片  *  副标题文字                    |
|  * * * *                                |
-------------------------------------------
-------------------------------------------
|  * * * *  标题文字           内容文字   |
|  * 图  *                              > |
|  * 片  *  副标题文字                    |
|  * * * *                                |
-------------------------------------------
-------------------------------------------
|  * * * *  标题文字                      |
|  * 图  *                              > |
|  * 片  *  副标题文字                    |
|  * * * *                     内容文字   |
-------------------------------------------

```

---

## 二、属性说明

> 组件List属性通过props进行传递。
> 组件内容通过children进行传递。

### List

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
id | dom元素id | string | 无
header | 头部内容 | string/React.element | 无
footer | 底部内容 | string/React.element | 无
---

### List.Item

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
thumb | 左边缩略图(string类型为img src) | string/React.element | 无
extra | 内容文字 | string/React.element | 无
arrow | 右边箭头方向(右，上，下，不显示)，可选`right`,`up`,`down`,`empty`,或者自定义dom | string/React.element | `right`
align | 内容文字垂直对齐，可选`top`，`middle`，`bottom` | string | `middle`
multipleLine | 多行显示 | boolean | `false`
wrap | 是否换行 | boolean | `false`
activeClassName | active样式表现 | string | 无
touchExtra | 滑动后显示的内容 | string/React.element | 无
onClick | 点击事件 | function | 无
touchMove | 滑动事件 | function | 无

### List.Item.Brief

辅助显示副标题

```
// 示例
<List header={() => '带副标题'} className="my-list">
  <Item>
    标题文字 <Brief>副标题</Brief>
  </Item>
</List>
```


## 三、方法说明

### List.Item

#### 1.onClick(e)
> 监听当前项的点击事件

##### 参数
- e: object类型,event对象

##### 返回值
- void

#### 2.touchMove(e, direct)
> 监听当前项手指滑动事件

##### 参数
- e: object类型，event对象
- direct: string类型，可选'left'、'right'

##### 返回值
- void



