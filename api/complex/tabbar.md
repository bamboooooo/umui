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
id | dom元素id | string | 无
selected | 是否选中 | bool | false
onClick | 点击事件 | function | 无

### TabBar.Item

> 子组件属性通过props进行传递。
> 子组件内容通过children进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
---

## 三、方法说明
### 1.setSelected(i)
> 设置组件的选中的项

#### 参数
- i: string类型，设置当前索引值选中

#### 返回值
- void

### 2.getSelected()
> 获取组件的选中的项

#### 返回值
- index 选中项的索引值

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
