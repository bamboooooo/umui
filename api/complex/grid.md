# Grid组件
> 网格组件
## 一、功能说明
### 1.在水平和垂直方向，将布局切分成若干等大的区块；
### 2.区块中的内容应该是同类元素，eg：都是图片，或者都是图标+文字。

---

## 二、属性说明

> 组件属性通过props进行传递。
> 组件内容通过children进行传递。

参数 | 说明 | 类型 | 默认值
---|---|---|---|---
className | 样式类名 | string |无
id | dom元素id | string | 无
data | 传入的数据 | Array | [{icon: 'http://imgdemo.png', text: '标题一'}, {icon: 'http://imgdemo.png', text: '标题二'}]
hasLine | 是否有边框 | boolean | true
onClick | 项目点击事件 | function | 无
