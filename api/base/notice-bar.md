# NoticeBar组件
> 通告栏用于显示通告信息
## 一、功能说明
### 1.无缝向左滚动显示通告信息；
### 2.不滚动，超出宽度以'...'显示；

---

## 二、属性说明
> 组件属性通过props进行传递。
> 组件内容通过children进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string | 无
displayCloseBtn | 是否显示关闭按钮 | bool | true
id | dom元素id | string | 无
scroll | 是否滚动 | bool | false
scrollSpeed | 滚动速度（scroll属性为true，该属性才有效） | number | 50
value | 通告文本 | string | 这是一条通告信息

---

## 三、方法说明
### 1.setValue(v)
> 设置通告信息内容

#### 参数
- v: string类型，要设置的通告信息

#### 返回值
- void

### 2.clickHandle(e)
> 通告栏点击事件

#### 参数
- e: 当前点击的事件的event对象

#### 返回值
- void

### 3.closeHandle(e)
> 关闭按钮点击事件

#### 参数
- e: 当前点击的事件的event对象

#### 返回值
- void

### 4.setDisplay(b)
> 设置组件显示或隐藏

#### 参数
- b: bool类型，true 显示； false 隐藏

#### 返回值
- void
