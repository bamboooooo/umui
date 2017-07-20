# Input组件
> 文本输入框组件

## 一、功能说明
### 1.文本输入框。

---

## 二、属性说明
> 组件属性通过props进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
type|输入类型，文本text，手机号tel（此时最大长度固定为11,maxLength设置无效），数字number|string|'text'
className | 样式类名 | string |无
readOnly | 是否只读 | bool | false
disabled | 是否禁用 | bool |false
placeHolder | 占位符 | string | ''
id|dom元素id|string|无
name|dom元素name|string|无
value | 值 | string | 无
defaultValue | 初始默认值|string|无
isShowClear |是否显示清除标签，当readOnly为false且disabled为false，以及value设置才有效|bool|false 
maxLength|最大长度|number|无
onChange|绑定change事件的监控事件|function|无
onBlur|绑定焦点离开事件|function|无
onFocus|绑定焦点获取事件|function|无
afterValidation|绑定校验回调事件,成功返回true,失败返回false|function|无


---

## 三、方法说明
### 1.setValue(v)
> 设置组件的value

#### 参数
- v: string类型，设置的值

#### 返回值
- void


### 2.getValue()
> 获取组件的value

#### 返回值
- string 没有值时返回''

### 3.setReadOnly(v)
> 设置组件是否只读

#### 参数
- v: bool，true为只读，false为可读可写。

#### 返回值
- void

### 4.setDisabled(v)
> 设置组件是否可用

#### 参数
- v: bool，true为禁用，false为启用

#### 返回值
- void

### 5.clear()
> 清空组件的值

#### 返回值
- void

### 6.reset()
> 重置组件的值，如果设置了defaultValue,执行此方法则将组件设置为默认值，如果组件没有设置默认值，则清空组件的值

#### 返回值
- void

### 7.focus()
> focus事件，为组件外部提供可以调用input的focus的方法。

#### 返回值
- void