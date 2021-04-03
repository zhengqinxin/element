<!--
 * @Author: your name
 * @Date: 2021-04-01 17:18:35
 * @LastEditTime: 2021-04-02 15:28:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my_project\src\views\elemcompon\updatelog\index.vue
-->
<template>
  <div class="updatelog">
    <div class="updatelog_header">
      <h2>更新日志</h2>
      <el-button >GitHub Releases</el-button>
    </div>
    <div class="version_update">
      <div class="versionNum">
        <h3>2.15.1</h3>
        <span>2021-02-23</span>
      </div>
      <div class="bugType">
        <div class="bugFixes">Bug fixes</div>
        <div class="bug_item">
          <div>Drawer</div>
          <div>修复 Drawer bug (by @cs1707)</div>
          <div>Image</div>
          <div>
            修复 image object fit ratio 在 IE 下的 bug (#19583 by @charlie0228)
          </div>
          <div>Cascader</div>
          <div>修复 cascader panel active path (#20730 by @cs1707)</div>
          <div>Calendar</div>
          <div>修复 calendar 国际化 bug (#20758 by @iamkun)</div>
          <div>ColorPicker</div>
          <div>修复 bugs (by @UxieVerity)</div>
        </div>
        <div class="bugFixes optimization">Optimization</div>
        <div class="bug_item">
          <div>Doc</div>
          <div>更新 Axure 设计资源 v2.1.0 (by @iamkun)</div>
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
.updatelog_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h2 {
  font-weight: 100;
  display: inline-block;
}
.version_update {
  margin-top: 40px;
  border: 1px solid #ddd;
}
.versionNum {
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h3 {
  display: inline-block;
  margin-left: 30px;
}
.versionNum span {
  margin-right: 40px;
}
.bugType {
  padding: 40px 60px;
}
.bugFixes {
  font-weight: 700;
  font-size: 18px;
}
.bug_item {
  margin-top: 30px;
}
.bug_item div:nth-child(2n) {
  padding: 10px 0 20px;
}
.bug_item div:nth-child(2n)::before {
  content: "";
  display: inline-block;
  width: 2px;
  height: 2px;
  margin: 5px 8px;
  background-color: #000;
}
.optimization {
  margin-top: 60px;
}
</style>