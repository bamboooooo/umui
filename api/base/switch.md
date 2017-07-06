# Switch组件
> 开关组件
## 一、功能说明
### 1.在两个互斥对象进行选择，eg：选择开或关。。

---

## 二、属性说明
> 组件属性通过props进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
id|dom元素id|string|无
checked | 是否默认选中 | bool | false
disabled | 禁用	 | bool |false
name | switch 的 name | string | ''
onChange|绑定change事件的监控事件|function|无


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
- bool true为开，false为关


### 3.setDisabled(v)
> 设置组件是否可用

#### 参数
- v: bool，true为禁用，false为启用

#### 返回值
- void