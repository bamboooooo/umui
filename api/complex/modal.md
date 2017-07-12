# Modal组件
> 提示对话框组件
## 一、功能说明
用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认,可全局调用。


---

## 二、属性说明
> 组件属性通过props进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
title | 弹窗的title | string | ''
content | 弹窗内容	 | string |''
confirmText | 确定按钮的文案 | string | '确定'
cancelText|取消按钮的文案(仅当confirm起效)|string|'取消'
confirmBack | 点击确定按钮的回调事件 | function | 无
cancelBack | 点击取消按钮的回调事件(仅当confirm起效) | function | 无


---

## 三、方法说明
### 1.Modal.alert(v)
> 调用alert弹窗

#### 参数
- v: json，{title:'',content:''}


### 2.Modal.confirm(v)
> 获取组件的value

#### 参数
- v: json，{title:'',content:''}



