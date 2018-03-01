# SegmentedControl组件
> 分段组件
## 一、功能说明
### 1.将容器平均分成若干等份。

---

## 二、属性说明
> 组件属性通过props进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
id|dom元素id|string|无
displayIcon | 是否显示图标 | bool | true
overflowNum | 超过多少个分段，滑动显示 | number | 5
selectedIndex | 默认选中的分段 | string | 1
values | 显示在每个分段的文本内容 | json | [{'icon': 'icon1', 'text': '分段一', 'value': '1'}, {'icon': 'icon2', 'text': '分段二', 'value': '2'}, {'icon': 'icon3', 'text': '分段三', 'value': '3'}]
onClick|绑定click事件|function(index)|无

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
- string
