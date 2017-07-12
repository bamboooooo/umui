# ActionSheet组件
> 动作面板组件
## 一、功能说明
### 从底部弹出的模态框，提供和当前场景相关的 2 个以上的操作动作，也支持提供标题和描述。内置固定的展示样式、不支持特别灵活的修改。

---

## 二、属性说明
> 组件属性通过props进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
id|dom元素id|string|无
option|按钮标题列表|array|无
title|  顶部标题 | string | ''
cancelButtonIndex|按钮列表中取消按钮的索引位置|number|option.lenght-1
maskClosable |点击蒙层是否允许关闭，默认允许|bool|true
onClick|绑定click事件|`function(index)`|无


---

## 三、方法说明
### 1.show()
> 打开动作面板组件

#### 参数
- void

#### 返回值
- void


### 2.hide()
> 关闭动作面板组件

#### 参数
- void

#### 返回值
- void 
