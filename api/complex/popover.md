# PopOver组件
> 浮出菜单组件
## 一、功能说明
### 1.辅助菜单：作为栏目辅助菜单，子菜单等；
### 2.筛选列表：作为页面的过滤筛选条件。
---

## 二、属性说明
> 组件属性通过props进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
id|dom元素id|string|无
autoSlideUp | 是否点击后收起 | bool | true
displayListsIcon | 是否显示菜单（列表）图标 | bool | true
displayMaskLayer | 是否显示遮罩层 | bool | true
onClick|绑定click事件|function(index)|无
lists | 弹出菜单（列表） | json | [{'icon': 'icon1', 'text': '菜单一', 'value': '1', 'href':''}, {'icon': 'icon2', 'text': '菜单二', 'value': '2', 'href':''}, {'icon': 'icon3', 'text': '菜单三', 'value': '3', 'href':''}]

`文本或图标内容放在children中:<Popover>更多</Popover>`

---


## 三、方法说明
### 1.setValue(v)
> 设置组件的选中的项

#### 参数
- v: string类型，设置的值

#### 返回值
- void

### 2.getValue()
> 获取组件的选中的项

#### 返回值
- string 没有值时返回 ''

### 3.setPopLists(obj)
> 修改组件的列表项

#### 参数
- obj: json类型，弹出菜单（列表）

#### 返回值
- void

### 4.clear()
> 清空组件已选的项

#### 返回值
- void

### 5.reset()
> 重置组件的值，将组件设置为默认选中项，如果组件没有设置默认项，则不执行任何操作

#### 返回值
- void


### 6.show()
> 设置组件显示

#### 参数
- 无

#### 返回值
- void

### 7.hide()
> 设置组件隐藏

#### 参数
- 无

#### 返回值
- void
