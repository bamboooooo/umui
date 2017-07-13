# Layer组件
> 自定义弹窗组件
## 一、功能说明
自定义弹窗内容，包括input之类的。

---

## 二、属性说明
> 组件属性通过props进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
id|dom元素id|string|无
title | 弹窗的title | React.element | 无
chidren | 弹窗内容	 | React.element |无
confirmText | 确定按钮的文案 | string | '确定'
cancelText|取消按钮的文案|string|'取消'
confirmBack | 点击确定按钮的回调事件 | function | 无
cancelBack | 点击取消按钮的回调事件 | function | 无
closable | 是否显示关闭按钮 | bool | true
closeBack | 点击关闭按钮的回调事件 | function | 无

---

## 三、方法说明
### 1.show()
> 打开自定义弹窗


#### 返回值
- void


### 2.hide()
> 关闭自定义弹窗

#### 返回值
- void


