<!--
 * @Author: your name
 * @Date: 2021-04-01 09:51:15
 * @LastEditTime: 2021-04-02 14:58:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my_project\src\views\elemcompon\index.vue
-->
<template>
  <div class="elemcompon">
    <div class="component_nav">
      <router-link to="/elemcompon/updatelog" class="unchecked"><h4>更新日志</h4></router-link>
      <h4>Element React</h4>
      <h4>Element Angular</h4>
      <h4>开发指南</h4>
      <div class="fs14">
        <router-link to="/elemcompon/install" class="unchecked"><div>安装</div></router-link>
        <div>快速上手</div>
        <div>国际化</div>
        <div>自定义主题</div>
        <div>内置过渡动画</div>
      </div>
      <h4>组件</h4>

      <div class="fs14">
        <div class="navModuleKey">Basic</div>
        <div>Layout布局</div>
        <div>Container布局容器</div>
        <div>Color色彩</div>
        <div>Typography字体</div>
        <div>Border边框</div>
        <div>Icon图标</div>
        <router-link to="/elemcompon/buttoncompon" class="unchecked"><div>Button按钮</div></router-link> 
        <div>Link文字链接</div>
      </div>
      <div class="fs14">
        <div class="navModuleKey">Form</div>
        <div>Radio单选框</div>
        <div>Checkbox多选框</div>
        <div>Input输入框</div>
        <div>InputNumber计数器</div>
        <div>Select选择器</div>
        <div>Cascader级联选择器</div>
        <div>Switch开关</div>
        <div>Slider滑块</div>
      </div>
    </div>
    <div class="component_main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  filters: {},
};
</script>
<style>
.elemcompon {
  display: flex;
  justify-content: space-around;
}
.component_nav {
  width: 20%;
}
.fs14 {
  font-size: 14px;
}
.fs14 div {
  height: 40px;
  line-height: 40px;
}
.navModuleKey {
  font-size: 12px;
  color: #999;
}
.component_main {
  width: 70%;
}
.unchecked {
  color: #000;
  text-decoration: none;
}
.router-link-exact-active {
  color: #409eff;
}
</style>