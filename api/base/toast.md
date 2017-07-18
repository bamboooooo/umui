# Toast组件
> 自动消失弹窗组件

## 一、功能说明
一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中,可全局调用。


---

## 二、属性说明
> 组件属性通过props进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
content | 弹窗内容	 | React.element或string | ''
duration | 自动关闭的延时，单位是秒 | number | 3
mask | 是否显示透明蒙层 | bool | true
onClose | 关闭之后的回调事件 | function | 无


---

## 三、方法说明

### 1.Toast.success(content,duration,mask,onClose)
### 2.Toast.fail(content,duration,mask,onClose)
### 3.Toast.info(content,duration,mask,onClose)
### 4.Toast.loading(content,duration,mask,onClose)
> 调用成功/失败/信息/加载的Toast

#### 参数
- content: 对应props参数
- duration: 对应props参数
- mask: 对应props参数
- onClose: 对应props参数 

#### 返回值
- void


> 注： duration = 0 时，onClose 无效，toast 不会消失；隐藏 toast 需要手动调用 hide

### 5.Toast.hide()
> 手动关闭Toast

#### 参数
- void

#### 返回值
- void
