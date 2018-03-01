# DatePicker组件
> 日期选择组件

## 一、功能说明
### 1.提供日期选择功能。

---

## 二、属性说明
> 组件属性通过props进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
id|dom元素id|string|无
disabled | 是否禁用 | bool |false
placeHolder | 占位符 | string | ''
name|dom元素name|string|无
title|标题|string|'请选择'
mode | 日期选择的类型, 可以是日期`date`、时间`time`、日期+时间`datetime` 、年`year`、 月 `month` | string | date
value | 当前选中时间, 对应 mode 下格式分别为:`YYYY-MM-DD`、`HH:mm`、`YYYY-MM-DD HH:mm` | string | 无
defaultValue | 初始默认值, 格式同 value | string |无
minDate | 最小可选日期, 格式同 value | string |无
maxDate | 最大可选日期, 格式同 value | string |无
format | 格式化日期 | string | YYYY-MM-DD HH:mm
okText|对应确认按钮的文案|string|'确定'
cancelText|对应取消按钮的文案|string|'取消'
onOk|点击确定的监控事件|function(value)|无
onCancel|点击取消的监控事件|function(value)|无
onMaskClick|点击蒙层的监控事件|function(value)|无
onChange | 时间发生变化的回调函数 | function(value) | 无

---

## 三、方法说明
### 1.setValue(v)
> 设置组件的日期value值

#### 参数
- v: string，例如：‘2017-02-02’

#### 返回值
- void


### 2.getValue()
> 获取组件的value值

#### 返回值
- string


### 3.setDisabled(v)
> 设置组件是否可用

#### 参数
- v: bool，true为禁用，false为启用

#### 返回值
- void

### 4.clear()
> 清空组件的值

#### 返回值
- void

### 5.reset()
> 重置组件的值，如果设置了defaultValue,执行此方法则将组件设置为默认值，如果组件没有设置默认值，则清空组件的值

#### 返回值
- void