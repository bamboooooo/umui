# Select组件
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
placeHolder | 占位符 | string | ''
name|dom元素name|string|无
data|option数据[{option:'选项一',value:'1'}]|json|无
value | 值 | string | 无
defaultValue | 初始默认值（对应data中的value值）|string|无
onChange|绑定change事件的监控事件|function|无


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
- json {value:'1',option:'选项一',index:0}  没有值时返回''


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