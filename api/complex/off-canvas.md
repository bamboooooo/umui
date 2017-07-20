# OffCanvas组件
> 侧栏菜单组件
## 一、功能说明
### 1.用于在屏幕边缘显示应用导航等内容的面板。

---

## 二、属性说明

> 组件属性通过props进行传递。
> 组件内容通过children进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
id | dom元素id | string | 无
isDisabled | 是否禁用 | bool | false
maskClosable |点击蒙层是否允许关闭，默认允许|bool|true
sidebar | 侧栏菜单内容 | ReactNode | 
onOpenChange | open 状态切换时调用 | function | 
open | 开关状态 | bool | false
touch | 是否开启触摸手势,侧滑出菜单栏 | bool | true
transitions | 是否开启动画 | bool | true
width | 宽度 | string | 300

---

## 三、方法说明
### 1.show()
> 设置组件显示

#### 参数
- 无

#### 返回值
- void

### 2.hide()
> 设置组件隐藏

#### 参数
- 无

#### 返回值
- void
