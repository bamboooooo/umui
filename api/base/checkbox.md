# Checkbox组件

> 多选框组件

## 一、功能说明

### 1.在一组可选项中进行多项选择时使用；

### 2.单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

---

## 二、属性说明

> 组件属性通过props进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
checked | 指定当前是否选中 | boolean | false
defaultChecked | 初始是否选中 | boolean | false
text | 关联的文案 | string | 无
className | 样式类名 | string | 无
disabled | 是否禁用 | boolean | false
onChange|绑定change事件的监控事件|function|无

---

## 三、方法说明
### 1.setChecked(v)
> 设置组件是否勾选

#### 参数
- v: bool，true为勾选，false为不勾选

#### 返回值
- void

### 2.getChecked()
> 获取组件是否勾选

#### 返回值
- bool，true为勾选，false为不勾选

### 3.setDisabled(v)
> 设置组件是否禁用

#### 返回值
- void
