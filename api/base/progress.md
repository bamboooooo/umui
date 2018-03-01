# Progress组件
> 进度条组件

## 一、功能说明
### 1.用于直观的显示进度；
### 2.包括圆环进度条和直线进度条两种。

---

## 二、属性说明
> 组件属性通过props进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
id|dom元素id|string|无
className | 样式类名 | string |无
value | 百分比 | number | 0
info | 提示进度文案 | string | 0%
showInfo | 是否显示进度文案 | bool | true
animate | 是否显示动画效果 | bool | false
speed | 动画速度，毫秒为单位 | number | 1000
doc | 进度指示位置圆点(仅line有效) | bool | false
border | 边框(仅ring有效) | number | 10
radius | 半径(仅ring有效) | number | 100
color | 颜色列表，[背景色，最终色](仅ring有效) | array | ['#ccc','#f00']

---

## 三、方法说明
### 1.setValue(v)
> 设置进度百分比

#### 参数
- v: number类型

#### 返回值
- void

### 2.setInfo(v)
> 设置文案

#### 参数
- v: string类型

#### 返回值
- void


