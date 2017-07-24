# Picker组件
> 下拉选择组件

## 一、功能说明
### 1.下拉选择框。

---

## 二、属性说明
> 组件属性通过props进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
id|dom元素id|string|无
disabled | 是否禁用 | bool |false
placeHolder | 占位符 | string | '请选择'
title|标题|string|'请选择'
data|option数据,格式：[{label:'选项一',value:'1',children:[]}], 支持多级选择（联动/非联动）|json|无
format|多级时的连接符|string|'-'
maxCols | 最高级数（仅当级联时起效） | number | 2
value | 值 | Array | 无
defaultValue | 初始默认值（对应data中的value值）|Array|无
displayMember|对应data中的`label`|string|'label'
valueMember|对应data中的`value`|string|'value'
okText|对应确认按钮的文案|string|'确定'
cancelText|对应取消按钮的文案|string|'取消'
onOk|点击确定的监控事件|function(value)|无
onCancel|点击取消的监控事件|function(value)|无
onMaskClick|点击蒙层的监控事件|function(value)|无
onChange|绑定change事件的监控事件|function(value)|无


---

## 三、方法说明
### 1.setValue(v)
> 设置组件的value

#### 参数
- v: Array，设置的值

#### 返回值
- void


### 2.getValue()
> 获取组件的value

#### 返回值
- Array 没有值时返回''


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