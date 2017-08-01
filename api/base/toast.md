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

### 1.Toast.success(obj)
### 2.Toast.fail(obj)
### 3.Toast.info(obj)
### 4.Toast.loading(obj)
> 调用成功/失败/信息/加载的Toast

#### 参数
- obj:{
        content: 对应props参数
        duration: 对应props参数
        mask: 对应props参数
        onClose: 对应props参数
    }

#### 返回值
- void

