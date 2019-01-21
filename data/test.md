# Button

> 常用的操作按钮

----------
## 引入
```js
import { WecashDrawer } from 'wecash-ui'

Vue.use(WecashDrawer)
```
## 按钮组

> 以按钮组的方式出现，常用于多项类似操作

## API

 参数 | 说明 | 类型 | 默认值 | 可选值
 --- | ---  | --- | --- | ---
 test | 按钮显示的内容 | string | - | -
 disabled | 按钮是否可用 |  boolean | false | true/false
 type | 按钮类型 | string | - | unimport/specical
 circle | 按钮是否为圆角 |  boolean | false | true/false
 circle_cend | c端按钮是否为圆角 |  boolean | false | true/false

## 🌰

```javascript
    let name = 'cml'
```
```html
<template>
  <div style="text-align:center">
    <p>正常的按钮</p>
    <WecashButton text="按钮"></WecashButton>
    <p>C端按钮</p>
    <WecashButton text="按钮" class="cend">  </WecashButton>
    <p>不重要的按钮</p>
    <WecashButton text="按钮" type="unimport"></WecashButton>
    <p>不可点击的按钮</p>
    <WecashButton text="按钮" disabled/>
    <p>圆角按钮</p>
    <WecashButton text="按钮" circle />
    <p>特别颜色按钮</p>
    <WecashButton text="按钮" circle type="special"/>
    <p>c端圆角按钮</p>
    <WecashButton text="按钮" circle_cend />
    <p>默认按钮组</p>
    <div>
      <WecashButtonGroup style="margin:0 auto">
        <WecashButton text="按钮" type="unimport"/>
        <WecashButton text="按钮" />
      </WecashButtonGroup>
      <p>c端按钮组</p>
      <WecashButtonGroup class="cend" style="margin:0 auto">
        <WecashButton text="按钮" type="unimport" class="cend"/>
        <WecashButton text="按钮" type="special" class="cend"/>
      </WecashButtonGroup>
    </div>
  </div>
</template>
```

