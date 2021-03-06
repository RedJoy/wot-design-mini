## Toast 轻提示

### 引入

```json
{
  "usingComponents": {
    "wd-toast": "/wot-design/toast/index"
  }
}
```

### 基本用法

需要在页面中引入该组件，作为挂载点。

```html
<wd-toast id="wd-toast"/>
<wd-button bind:click="showToast">toast</wd-button>
```

```javascript
import Toast from '/wot-design/toast/toast.js'

Page({
  showToast () {
    Toast('提示信息')
  }
})
```

### 成功、异常、警告、常规

```javascript
Toast.success('操作成功')
Toast.error('手机验证码输入错误，请重新输入')
Toast.warning('提示信息')
Toast.info('常规提示信息')
```

### 提示位置

```javascript
// 顶部提示
Toast({
  position: 'top',
  msg: '提示信息'
})

// 底部提示
Toast({
  position: 'bottom',
  msg: '提示信息'
})
```

### 关闭提示

```javascript
Toast.close()
```

### loading 提示

```javascript
Toast.loading('加载中...')
```

修改 loading 指示器类型：

```javascript
Toast.loading({
  loadingType: 'spinner',
  msg: '加载中...'
})
```

手动关闭 loading：

```javascript
Toast.close()
```

### Attributes

| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| options    |	配置项，可以直接传入字符串作为提示信息     |	string / object   |	—           |	—       |

### options

| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
| msg        |	消息内容                             |	string   |	—           |	—       |
| duration   | 持续时间，单位 ms，为0时表示不自动关闭     |	Number   |	—           |	2000 |
| iconName   |	图标类型                             |	string    |	'success', 'error', 'warning' |	—      |
| iconSize | 左侧图标尺寸 | string | - | '42px' |
| iconClass  | 图标类目，自定义图标，可以使用 Icon 章节的那些图标类名，iconName 优先级更高  | string   | —             | —   |
| customIcon |	自定义图标，开启后可以通过 custom-icon-class 类名自定义图标 |	Boolean   |	—	            | false   |
| position   |	提示信息框的位置                      |	string   |	'top', 'middle', 'bottom'  |	'middle'  |
| zIndex  	 | toast 层级                           |	number   |	—            |	100     |
| loadingType | 加载指示器类型 | string | 'circle-outline', 'spinner','circle' | 'circle-outline' |
| loadingColor | 加载icon的颜色 | string | '' | '#4D80F0' |

### Methods

| 方法名称      | 说明       | 参数   |
|------------- |----------- |---------  |
| success | 成功提示 | options |
| error | 关闭提示 | options |
| info | 常规提示 | options |
| warning | 警告提示 | options |
| loading | 加载提示 | options |
| close         |手动关闭消息提示框，是Toast实例上的方法| —  |

### 外部样式类

| 类名     | 说明                |
|---------|---------------------|
| custom-class | 根结点样式 |
| custom-icon-class | 自定义图标类名 |