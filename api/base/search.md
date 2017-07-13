# Search组件
> 搜索组件

## 一、功能说明
### 搜索组件。

---

## 二、属性说明
> 组件属性通过props进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
id|dom元素id|string|无
defaultValue | 搜索框默认值 | string | ''
value | 搜索框的值 | string | ''
disabled | 禁用	 | bool |false
name | switch 的 name | string | ''
placeholder | placeholder | string | ''
onChange|绑定change事件的监控事件|function|无
onFocus|搜索框获取焦点的监控事件|function|无
onBlur|搜索框失去焦点的监控事件|function|无
onSubmit|submit 事件 (点击键盘的 enter)|function|无


---

## 三、方法说明
### 1.setValue(v)
> 设置组件的value

#### 参数
- v: bool，true为开，false为关

#### 返回值
- void


### 2.getValue()
> 获取组件的value

#### 返回值
- string 返回搜索的关键字  


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