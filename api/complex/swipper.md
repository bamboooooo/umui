# Swipper组件
> 轮播组件

## 一、功能说明
### 1.常用于一组图片轮播。
### 2.当内容空间不足时，进行轮播展现。

---

## 二、属性说明
> 组件属性通过props进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
id|dom元素id|string|无
dots | 是否显示面板指示点 | bool | true
arrows | 是否显示箭头 | bool | false
direction | 滑动方向，可设置水平(horizontal)或垂直(vertical) | string | horizontal
autoplay | 是否自动切换 | bool | true
speed  | 切换时间,毫秒 | number | 300
autoInterval | 停留时间,毫秒 | number | 3000
onInit | 初始化回调函数 | function | 无
afterChange | 切换后的回调函数 | function | 无

---

## 三、方法说明
### 1.getCurrentIndex()
> 获取当前活动块(激活块)的索引

#### 返回值
- number