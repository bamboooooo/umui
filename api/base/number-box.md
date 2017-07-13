# NumberBox组件
> 数字输入功能组件
## 一、功能说明
### 1.数组输入框，有`+`,`-`两个按钮，可按基数增减。

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
min|最小值|number|无
max|最大值|number|无
step|阀值|number|无
formatter|指定输入框展示值的格式|`function(value: number)`|无
value | 值 | string | 无
defaultValue | 初始默认值（对应data中的value值）|string|无
onChange|绑定change事件的监控事件|`function(value: number)`|无


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

### 4.clear()
> 清空组件的值

#### 返回值
- void

### 5.reset()
> 重置组件的值，如果设置了defaultValue,执行此方法则将组件设置为默认值，如果组件没有设置默认值，则清空组件的值

#### 返回值
- void