# Button组件
> 按钮用于开始一个即时操作
## 一、功能说明
### 1.标记了一个操作命令，响应用户点击行为，触发相应的业务逻辑。

---

## 二、属性说明
> 组件属性通过props进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
disabled | 是否禁用 | bool |false
id|dom元素id|string|无
onClick|绑定click事件的监控事件|function|无

---

## 三、方法说明
### 1.setValue(v)
> 设置组件的文本内容

#### 参数
- v: string类型，设置的值

#### 返回值
- void


### 2.setDisabled(v)
> 设置组件是否可用

#### 参数
- v: bool，true为禁用，false为启用

#### 返回值
- void


` <Button>Hello world!</Button> 最终会被渲染为 <button>Hello world!</button>，并且除了上表中的属性，其它属性都会直接传到 <button></button>。`