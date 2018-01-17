<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">Button 按钮</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >Button 按钮</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  
<m-box>

  <div class="priview-box">
    <h1>Button 按钮 </h1>
    <p class="description">本页面代码可以在<a href="https://github.com/mengdu/vue-element-admin-tpl/blob/master/src/pages/c-button.vue"><code>src/pages/c-button.vue</code></a>找到。</p>
    

    <h2>Button 支持5种主题类型</h2>
    <p class="description">通过设置<code>type</code>属性来改变按钮主题；
    <code>type</code>可选值：<code>info</code>，<code>primary</code>，<code>warning</code>，<code>danger</code>，<code>success</code></p>
    <m-button>Default</m-button>
    <m-button type="info">Info</m-button>
    <m-button type="primary">Primary</m-button>
    <m-button type="warning">Warning</m-button>
    <m-button type="danger">Danger</m-button>
    <m-button type="success">Success</m-button>
    <p></p>

    <m-button type="info">信息</m-button>
    <m-button type="primary">主色</m-button>
    <m-button type="warning">警告</m-button>
    <m-button type="success">成功</m-button>
    <m-button type="danger">删除</m-button>

  </div>

  <div class="priview-box">
    <h2>Plain 朴素按钮</h2>
    <m-button plain>Default</m-button>
    <m-button type="info" plain>Info</m-button>
    <m-button type="primary" plain>Primary</m-button>
    <m-button type="warning" plain>Warning</m-button>
    <m-button type="danger" plain>Danger</m-button>
    <m-button type="success" plain>Success</m-button>
  </div>

  <div class="priview-box">
    <h2>Round 椭圆椭圆</h2>
    <m-button round>Default</m-button>
    <m-button type="info" round>Info</m-button>
    <m-button type="primary" round>Primary</m-button>
    <m-button type="warning" round>Warning</m-button>
    <m-button type="danger" round>Danger</m-button>
    <m-button type="success" round>Success</m-button>
  </div>
  <div class="priview-box">
    <h2>Active 样式</h2>
    <m-button active>Default</m-button>
    <m-button type="info" active>Info</m-button>
    <m-button type="primary" active>Primary</m-button>
    <m-button type="warning" active>Warning</m-button>
    <m-button type="danger" active>Danger</m-button>
    <m-button type="success" active>Success</m-button>
  </div>
  <div class="priview-box">
    <h2>Disabled 禁用效果</h2>
    <m-button disabled>Default</m-button>
    <m-button type="info" disabled>Info</m-button>
    <m-button type="primary" disabled>Primary</m-button>
    <m-button type="warning" disabled>Warning</m-button>
    <m-button type="danger" disabled>Danger</m-button>
    <m-button type="success" disabled>Success</m-button>
  </div>

  <div class="priview-box">
    <h2>Size 按钮尺寸</h2>
    <p class="description">通过<code>size</code>可设置尺寸，支持5种尺寸类型：<code>max</code>，<code>large</code>，<code>默认</code>，<code>small</code>，<code>mini</code></p>
    <m-button size="max">max</m-button>
    <m-button type="info" size="max">max</m-button>
    <m-button type="info" size="max" plain>max</m-button>
    <m-button type="info" size="max" round>max</m-button>
    <m-button type="info" size="max" round plain>Max按钮</m-button>
    <p></p>
    <m-button size="large">large</m-button>
    <m-button size="large" type="success">large</m-button>
    <m-button size="large" type="success" plain>large</m-button>
    <m-button size="large" type="success" round>large</m-button>
    <m-button size="large" type="success" round plain>large</m-button>
    <p></p>
    <m-button >Default</m-button>
    <m-button type="danger">Default</m-button>
    <m-button type="danger" plain>Default</m-button>
    <m-button type="danger" round>Default</m-button>
    <m-button type="danger" round plain>Default</m-button>
    <p></p>
    <m-button size="small" type="warning">small</m-button>
    <m-button size="small" type="warning" plain>small</m-button>
    <m-button size="small" type="warning" round>small</m-button>
    <m-button size="small" type="warning" round plain>small</m-button>
    <p></p>
    <m-button size="mini">mini</m-button>
    <m-button size="mini" type="info">信息</m-button>
    <m-button size="mini" type="success">更新</m-button>
    <m-button size="mini" type="warning">禁用</m-button>
    <m-button size="mini" type="danger">删除</m-button>
  </div>
  
  <div class="priview-box">
    <h2>Group 按钮组</h2>
    <p class="decription">通过<code>m-button-group</code>组件包裹<code>m-button</code>组件即可放在一个组里</p>
    <m-button-group>
      <m-button type="info">首页</m-button>
      <m-button type="info">热门</m-button>
      <m-button type="info">专栏</m-button>
    </m-button-group>
    <m-button-group>
      <m-button>首页</m-button>
      <m-button>热门</m-button>
      <m-button>专栏</m-button>
    </m-button-group>
    <m-button-group>
      <m-button type="info">Info</m-button>
      <m-button type="primary">Primary</m-button>
      <m-button type="warning">Warning</m-button>
      <m-button type="danger">Danger</m-button>
    </m-button-group>
  </div>

  <div class="priview-box">
    <h2>Block 块类型按钮</h2>
    <m-button block>Default</m-button>
    <m-button type="info" block>Info</m-button>
    <m-button type="primary" block>Primary</m-button>
    <m-button type="warning" block>Warning</m-button>
    <m-button type="danger" block>Danger</m-button>
    <m-button type="success" block>Success</m-button>
  </div>
</m-box>
</div>
</template>

