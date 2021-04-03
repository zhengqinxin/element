<!--
 * @Author: your name
 * @Date: 2021-03-31 18:09:35
 * @LastEditTime: 2021-04-01 17:05:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my_project\src\views\design\index.vue
-->
<template>
  <div class="design">
    <div class="design_nav">
        <div><router-link to="/design/design_principle" class="unchecked">设计原则</router-link> </div>
        <div><router-link to="/design/design_nav" class="unchecked">导航</router-link></div>
    </div>
    <div class="design_main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    props: {},
    components:{},
    data(){
      return {
      }
    },
    computed: {
    },
    methods: {
    },
    watch: {
    },
    filters: {}
  }
</script>
<style>
.design {
  display: flex;
  justify-content: space-around;
}
.design_nav {
  width: 20%;
}
.design_nav div {
  height: 40px;
}
.design_main {
  width: 70%;
}
.unchecked {
  color: #000;
  font-weight: 700;
  text-decoration: none;
}
.router-link-exact-active {
color: #409EFF;
}
</style>