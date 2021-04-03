<!--
 * @Author: your name
 * @Date: 2021-04-01 09:49:29
 * @LastEditTime: 2021-04-01 16:05:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my_project\src\views\design\design_nav\index.vue
-->
<template>
  <div>
    <div>
      <div class="navclassify">
        <h2>导航</h2>
        <p>
          导航可以解决用户在访问页面时：在哪里，去哪里，怎样去的问题。一般导航会有「侧栏导航」和「顶部导航」2
          种类型。
        </p>
      </div>
      <div class="navclassify">
        <h2>选择合适的导航</h2>
        <p>
          选择合适的导航可以让用户在产品的使用过程中非常流畅，相反若是不合适就会引起用户操作不适（方向不明确），以下是「侧栏导航」和
          「顶部导航」的区别。
        </p>
      </div>
      <div class="navclassify asideNav">
        <h2>侧栏导航</h2>
        <div class="navdesc_left">
          <p>
            可将导航栏固定在左侧，提高导航可见性，方便页面之间切换；顶部可放置常用工具，如搜索条、帮助按钮、通知按钮等。适用于中后台的管理型、工具型网站。
          </p>
        </div>
        <div class="navtype_right">
          <div class="navtype_item">
            <div class="navimg">
              <img src="/static/img/navbar_1.png" alt="" />
            </div>
            <span>一级类目</span>
            <p>适用于结构简单的网站：只有一级页面时，不需要使用面包屑。</p>
          </div>
          <div class="navtype_item">
            <div class="navimg">
              <img src="/static/img/navbar_2.png" alt="" />
            </div>
            <span>二级类目</span>
            <p>
              侧栏中最多可显示两级导航；当使用二级导航时，我们建议搭配使用面包屑，方便用户定位自己的位置和快速返回。
            </p>
          </div>
          <div class="navtype_item">
            <div class="navimg">
              <img src="/static/img/navbar_3.png" alt="" />
            </div>
            <span>三级类目</span>
            <p>
              适用于较复杂的工具型后台，左侧栏为一级导航，中间栏可显示其对应的二级导航，也可放置其他的工具型选项。
            </p>
          </div>
        </div>
      </div>
      <div class="navclassify">
        <h2>顶部导航</h2>
        <div class="navdesc_left">
          <p>
            顺应了从上至下的正常浏览顺序，方便浏览信息；顶部宽度限制了导航的数量和文本长度。
          </p>
        </div>
        <div class="navtype_right">
          <div class="navimg">
            <img src="/static/img/navbar_4.png" alt="" />
          </div>
          <p style="margin-top: 20px;">适用于导航较少，页面篇幅较长的网站。</p>
        </div>
      </div>
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
h2 {
  margin: 0;
  font-weight: 100;
}
.navclassify {
  margin-top: 60px;
}
.navclassify:first-child {
  margin-top: 0;
}
.navclassify p {
  font-size: 14px;
  color: #5e6d82;
  margin-top: 30px;
}
.navclassify:first-child p {
  margin-top: 10px;
}
.asideNav::after {
  content: "";
  display: block;
  clear: both;
}
.navdesc_left {
  float: left;
  width: 34%;
}
.navtype_right {
  float: right;
  width: 64%;
}
.navimg {
  width: 100%;
  background-color: #f9fafc;
}
.navtype_right img {
  width: 520px;
  height: 340px;
  margin: 16px;
}
.navtype_item {
  margin-top: 60px;
}
.navtype_item:first-child {
  margin-top: 0;
}
.navtype_item span {
  display: block;
  font-size: 13px;
  margin-top: 20px;
}
.navtype_right p {
  margin: 0;
}
</style>