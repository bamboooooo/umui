# TabBar组件
> 标签栏组件方便用户在不同功能模块之间进行快速切换
## 一、功能说明
### 1.多用于页面的内容区块，起着控制小范围内的大块内容的分组和隐藏，起着保持界面整洁的作用。

---

## 二、属性说明

### TabBar

> 组件属性通过props进行传递。
> 组件内容通过children进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
displayText | 是否显示文本 | bool | true
hidden | 是否隐藏 | bool | false
id | dom元素id | string | 无

### TabBar.Item

> 子组件属性通过props进行传递。
> 子组件内容通过children进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
icon | 默认展示图片 | Image Source | 
selectedIcon | 选中后的展示图片 | Image Source | 
id | dom元素id | string | 无
title | 标题文字 | string | 无
selected | 是否选中 | bool | false
onClick | 点击事件 | function | 无
---

## 三、方法说明
### 1.setSelected(v)
> 设置组件的选中的项

#### 参数
- v: string类型，设置的值

#### 返回值
- void

### 2.getValue()
> 获取组件的选中的项

#### 返回值
- string 没有值时返回 ''

### 3.show()
> 设置组件显示

#### 参数
- 无

#### 返回值
- void

### 4.hide()
> 设置组件隐藏

#### 参数
- 无

#### 返回值
- void
