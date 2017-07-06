# Password组件
> 密码框组件
## 一、功能说明
### 1.密码输入框，支持设置密码显示样式，支持自定义设置加密规则。

---

## 二、属性说明
> 组件属性通过props进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
readOnly | 是否只读 | bool | false
disabled | 是否禁用 | bool |false
placeHolder | 占位符 | string | ''
id|dom元素id|string|无
name|dom元素name|string|无
displayChar |密码显示样式|string|浏览器默认样式
isShowClear |是否显示清除标签，当readOnly为false且disabled为false才有效|bool|false 
maxLength|最大长度|number|无
encryptKey|加密私钥|number|无
encryptType|加密类型，'md5','sha1','sha256'|string|无
onChange|绑定change事件的监控事件|function|无
onBlur|绑定焦点离开事件|function|无
onFocus|绑定焦点获取事件|function|无


---

## 三、方法说明

### 1.getValue()
> 获取组件的value

#### 返回值
- string 没有值时返回'',如果设置了encryptType,则返回对应加密后的值

### 2.setReadOnly(v)
> 设置组件是否只读

#### 参数
- v: bool，true为只读，false为可读可写。

#### 返回值
- void

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

### 5.setEncryptKey(v)
> 设置加密私钥

#### 参数
- v: string，加密私钥

#### 返回值
- void