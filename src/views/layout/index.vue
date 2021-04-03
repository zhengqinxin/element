<!--
 * @Author: your name
 * @Date: 2021-03-31 17:06:03
 * @LastEditTime: 2021-04-02 09:42:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my_project\src\views\layout\index.vue
-->
<template>
  <div>
    <div class="header">
      <div class="header_left">
        <img src="/static/img/下载.svg" alt="" />
      </div>
      <div class="header_right">
        <div class="search" @click="checkClick">
          <input type="text" class="searchbox">
          <span
            ><router-link to="/design" class="unchecked">指南</router-link>
          </span>
          <span
            ><router-link to="/elemcompon" class="unchecked">组件</router-link>
          </span>
          <span>主题</span>
          <span>资源</span>|
          <span>2.51</span>
          <span>中文</span>
        </div>
      </div>
    </div>
    <div class="main">
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
  methods: {
    checkClick(e) {
      var e = e.target;
      // var input = document.getElementsByTagName('input')
      // console.log(input);
      // if (e.innerHTML == "指南") {
      // }
    },
  },
  watch: {},
  filters: {},
};
</script>
<style scoped>
.header {
  width: 80%;
  height: 80px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dcdfe6;
}
.header_left::after {
  content: "";
  display: block;
  clear: both;
}
.search span {
  padding: 0 32px;
}
.main {
  width: 80%;
  margin: auto;
  min-height: 200px;
  padding-top: 30px;
}
.searchbox {
  border: 1px solid #999;
  border-radius: 5px;
  width: 200px;
  height: 32px;
}
.unchecked {
  color: #9eceff;
  font-weight: 100;
  text-decoration: none;
}
.unchecked:hover {
  color: #1989fa;
}
.router-link-exact-active {
  color: #1989fa;
}
.hide {
  display: none;
}
</style>