<!--
 * @Author: your name
 * @Date: 2021-04-01 17:16:19
 * @LastEditTime: 2021-04-02 14:50:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my_project\src\views\elemcompon\install\index.vue
-->
<template>
  <div>
    <h1>安装</h1>
    <div>
      <div>
        <div class="installtype">npm安装</div>
        <p class="installdescription">推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
        <div class="code">npm i element-ui -S</div>
      </div>
      <div>
        <div class="installtype">CDN</div>
        <p class="installdescription">
          目前可以通过 unpkg.com/element-ui 获取到最新版本的资源，在页面上引入
          js 和 css 文件即可开始使用。
        </p>
        <div class="code">
          <div>&lt;!-- 引入样式 --&gt;</div>
          <div>&lt;link rel="stylesheet"
          href="https://unpkg.com/element-ui/lib/theme-chalk/index.css" /&gt;</div>
          <div>&lt;!-- 引入组件库 --&gt;</div>
          <div>&lt;script
          src="https://unpkg.com/element-ui/lib/index.js"&gt;&lt;/script&gt;</div>
          
        </div>
        <div class="suggest">
          我们建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来
          Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看 unpkg.com。
        </div>
      </div>
      <div>
        <div class="installtype">Hello world</div>
        <p class="installdescription">
          通过 CDN 的方式我们可以很容易地使用 Element 写出一个 Hello world
          页面。在线演示
        </p>
        <div class="code">npm i element-ui -S</div>
        <p class="installdescription">
          如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：快速上手。
        </p>
      </div>
    </div>
    <div class="skiplink">
      <a class="leftlink" href="#">更新日志</a>
      <a class="rightlink" href="#">快速上手</a>
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
h1 {
  font-weight: 100;
}
.installtype {
  font-size: 22px;
  margin-top: 60px;
}
.installdescription {
  font-size: 14px;
  color: #5E6D82;
}
.code {
  background-color: #fafafa;
  border: 1px solid #eaeefb;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  padding: 20px;
  letter-spacing: 1px;
  word-spacing: 2px;
}
.code div:nth-child(2n) {
  color: #3182bd;
  padding: 8px 0;
}
.code div:last-child {
  padding-bottom: 0;
}
.suggest {
  margin-top: 25px;
  padding: 25px 20px;
  border-radius: 5px;
  background-color: #ecf8ff;
  font-size: 14px;
  border-left: 5px solid #50bfff;
}
.skiplink {
  margin-top: 50px;
}
.skiplink a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
}
.skiplink::after {
  content: '';
  display: block;
  clear: both;
}
.leftlink {
  float: left;
  position: relative;
  margin-left: 10px;
}
.rightlink {
  float: right;
  position: relative;
  margin-right: 10px;
}
.leftlink::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  border-left: 1px solid #999;
  border-top: 1px solid #999;
  transform: rotate(-45deg);
  position: absolute;
  top: 7px;
  left: -10px;
}
.rightlink::after {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  border-left: 1px solid #999;
  border-top: 1px solid #999;
  transform: rotate(135deg);
  position: absolute;
  top: 7px;
  right: -10px; 
}
</style>