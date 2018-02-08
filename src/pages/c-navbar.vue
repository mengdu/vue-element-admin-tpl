<template>
<div class="page-body">
  <div class="page-header">
    <h1 class="page-title">Navbar</h1>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >Navbar</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <m-box>
    <m-navbar>
      <m-navbar-brand>Navbar</m-navbar-brand>
      <m-nav>
        <m-nav-item name="home" active off-click>首页</m-nav-item>
        <m-nav-item path="/article" disabled>专栏</m-nav-item>
        <m-nav-item disabled>用户中心</m-nav-item>
        <m-nav-item>
          <m-dropdown>
            Administrator <i class="caret"></i>
            <m-dropdown-panel>
              <m-dropdown-item active>用户中心</m-dropdown-item>
              <m-dropdown-item>用户信息</m-dropdown-item>
              <m-dropdown-item>资料</m-dropdown-item>
              <m-dropdown-item path="/article">文章</m-dropdown-item>
              <m-dropdown-item name="login">退出</m-dropdown-item>
            </m-dropdown-panel>
          </m-dropdown>
        </m-nav-item>
      </m-nav>
      <m-nav align="right">
        <m-nav-item active><a href="https://www.lanyueos.com" target="_blank">主页</a></m-nav-item>
        <m-nav-item><a href="https://blog.lanyueos.com" target="_blank">博客</a></m-nav-item>
        <m-nav-item><a href="https://www.lanyueos.com" target="_blank">关于</a></m-nav-item>
      </m-nav>
    </m-navbar>
    <p></p>
    <m-navbar theme="dark">
      <m-navbar-brand>Navbar</m-navbar-brand>
      <m-nav>
        <m-nav-item name="home" off-click>首页</m-nav-item>
        <m-nav-item path="/article" disabled>专栏</m-nav-item>
        <m-nav-item disabled>用户中心</m-nav-item>
        <m-nav-item>
          <m-dropdown>
            Administrator <i class="caret"></i>
            <m-dropdown-panel>
              <m-dropdown-item>用户中心</m-dropdown-item>
              <m-dropdown-item>用户信息</m-dropdown-item>
              <m-dropdown-item>资料</m-dropdown-item>
              <m-dropdown-item path="/article">文章</m-dropdown-item>
              <m-dropdown-item name="login">退出</m-dropdown-item>
            </m-dropdown-panel>
          </m-dropdown>
        </m-nav-item>
      </m-nav>
    </m-navbar>
    <p></p>
    <m-navbar theme="info">
      <m-navbar-brand>Navbar</m-navbar-brand>
      <m-nav>
        <m-nav-item name="home" off-click>首页</m-nav-item>
        <m-nav-item path="/article" disabled>专栏</m-nav-item>
        <m-nav-item disabled>用户中心</m-nav-item>
        <m-nav-item>
          <m-dropdown>
            Administrator <i class="caret"></i>
            <m-dropdown-panel>
              <m-dropdown-item>用户中心</m-dropdown-item>
              <m-dropdown-item>用户信息</m-dropdown-item>
              <m-dropdown-item>资料</m-dropdown-item>
              <m-dropdown-item path="/article">文章</m-dropdown-item>
              <m-dropdown-item name="login">退出</m-dropdown-item>
            </m-dropdown-panel>
          </m-dropdown>
        </m-nav-item>
      </m-nav>
    </m-navbar>
    <p></p>
    <m-navbar theme="primary">
      <m-navbar-brand>Navbar</m-navbar-brand>
      <m-nav>
        <m-nav-item name="home" off-click>首页</m-nav-item>
        <m-nav-item path="/article" disabled>专栏</m-nav-item>
        <m-nav-item disabled>用户中心</m-nav-item>
        <m-nav-item>
          <m-dropdown>
            Administrator <i class="caret"></i>
            <m-dropdown-panel>
              <m-dropdown-item>用户中心</m-dropdown-item>
              <m-dropdown-item>用户信息</m-dropdown-item>
              <m-dropdown-item>资料</m-dropdown-item>
              <m-dropdown-item path="/article">文章</m-dropdown-item>
              <m-dropdown-item name="login">退出</m-dropdown-item>
            </m-dropdown-panel>
          </m-dropdown>
        </m-nav-item>
      </m-nav>
    </m-navbar>
    <p></p>
    <m-navbar theme="danger">
      <m-navbar-brand>Navbar</m-navbar-brand>
      <m-nav>
        <m-nav-item name="home" off-click>首页</m-nav-item>
        <m-nav-item path="/article" disabled>专栏</m-nav-item>
        <m-nav-item disabled>用户中心</m-nav-item>
        <m-nav-item>
          <m-dropdown>
            Administrator <i class="caret"></i>
            <m-dropdown-panel>
              <m-dropdown-item>用户中心</m-dropdown-item>
              <m-dropdown-item>用户信息</m-dropdown-item>
              <m-dropdown-item>资料</m-dropdown-item>
              <m-dropdown-item path="/article">文章</m-dropdown-item>
              <m-dropdown-item name="login">退出</m-dropdown-item>
            </m-dropdown-panel>
          </m-dropdown>
        </m-nav-item>
      </m-nav>
    </m-navbar>

    <p></p>
    <m-navbar theme="success">
      <m-navbar-brand>Navbar</m-navbar-brand>
      <m-nav>
        <m-nav-item name="home" off-click>首页</m-nav-item>
        <m-nav-item path="/article" disabled>专栏</m-nav-item>
        <m-nav-item disabled>用户中心</m-nav-item>
        <m-nav-item>
          <m-dropdown>
            Administrator <i class="caret"></i>
            <m-dropdown-panel>
              <m-dropdown-item>用户中心</m-dropdown-item>
              <m-dropdown-item>用户信息</m-dropdown-item>
              <m-dropdown-item>资料</m-dropdown-item>
              <m-dropdown-item path="/article">文章</m-dropdown-item>
              <m-dropdown-item name="login">退出</m-dropdown-item>
            </m-dropdown-panel>
          </m-dropdown>
        </m-nav-item>
      </m-nav>
    </m-navbar>
    
    <p></p>
    <m-navbar theme="warning">
      <m-navbar-brand>Navbar</m-navbar-brand>
      <m-nav>
        <m-nav-item name="home" off-click>首页</m-nav-item>
        <m-nav-item path="/article" disabled>专栏</m-nav-item>
        <m-nav-item disabled>用户中心</m-nav-item>
        <m-nav-item>
          <m-dropdown>
            Administrator <i class="caret"></i>
            <m-dropdown-panel>
              <m-dropdown-item>用户中心</m-dropdown-item>
              <m-dropdown-item>用户信息</m-dropdown-item>
              <m-dropdown-item>资料</m-dropdown-item>
              <m-dropdown-item path="/article">文章</m-dropdown-item>
              <m-dropdown-item name="login">退出</m-dropdown-item>
            </m-dropdown-panel>
          </m-dropdown>
        </m-nav-item>
      </m-nav>
    </m-navbar>
  </m-box>

</div>
</template>
