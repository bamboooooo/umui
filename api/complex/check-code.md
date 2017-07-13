# CheckCode组件
> 获取验证码组件

## 一、功能说明
### 1.提供获取验证码功能。

---

## 二、属性说明
> 组件属性通过props进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
id|dom元素id|string|无
value | 值 | string | 无
defaultValue | 初始默认值|string|无
disabled | 是否禁用 | bool |false
count | 倒计时秒数 | number | 10
temp | 倒计时文案 | string | {count}秒后获取
text | 按钮文案 | string | 获取验证码

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

### 3.setDisabled(v)
> 设置组件是否可用

#### 参数
- v: bool，true为禁用，false为启用

#### 返回值
- void

### 4.start()
> 开始倒计时

#### 返回值
- void

### 5.stop()
> 停止倒计时

#### 返回值
- void

### 6.clear()
> 清空组件中input的值

#### 返回值
- void

### 7.reset()
> 重置组件的值，如果设置了defaultValue,执行此方法则将组件设置为默认值，如果组件没有设置默认值，则清空组件的值

#### 返回值
- void