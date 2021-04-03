<!--
 * @Author: your name
 * @Date: 2021-04-01 09:43:57
 * @LastEditTime: 2021-04-01 17:07:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my_project\src\views\design\design_principle\index.vue
-->
<template>
  <div>
    <h1>设计原则</h1>
    <div class="all_principle">
      <div class="principle_item">
        <img src="/static/img/yizhi.png" alt="" />
        <div class="principle_title">
          <span>一致</span>
          <span>Consistency</span>
        </div>
      </div>
      <div class="principle_item">
        <img src="/static/img/fankui.png" alt="" />
        <div class="principle_title">
          <span>反馈</span>
          <span>Feedback</span>
        </div>
      </div>
      <div class="principle_item">
        <img src="/static/img/xiaolv.png" alt="" />
        <div class="principle_title">
          <span>效率</span>
          <span>Efficiency</span>
        </div>
      </div>
      <div class="principle_item">
        <img src="/static/img/kekong.png" alt="" />
        <div class="principle_title">
          <span>可控</span>
          <span>Controllability</span>
        </div>
      </div>
    </div>
    <div class="principle_analyze">
      <h3>一致性 Consistency</h3>
      <ul class="specific_description">
        <li>与现实生活一致：<span>与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</span></li>
        <li>在界面中一致：<span>所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</span></li>
      </ul>
    </div>
    <div class="principle_analyze">
      <h3>反馈 Feedback</h3>
      <ul class="specific_description">
        <li>控制反馈：<span>通过界面样式和交互动效让用户可以清晰的感知自己的操作；</span></li>
        <li>页面反馈：<span>操作后，通过页面元素的变化清晰地展现当前状态。</span></li>
      </ul>
    </div>
    <div class="principle_analyze">
      <h3>效率 Efficiency</h3>
      <ul class="specific_description">
        <li>简化流程：<span>设计简洁直观的操作流程；</span></li>
        <li>清晰明确：<span>语言表达清晰且表意明确，让用户快速理解进而作出决策；</span></li>
        <li>帮助用户识别：<span>界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</span></li>
      </ul>
    </div>
    <div class="principle_analyze">
      <h3>可控 Controllability</h3>
      <ul class="specific_description">
        <li>用户决策：<span>根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</span></li>
        <li>结果可控：<span>用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</span></li>
      </ul>
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
h3,h1 {
  margin: 0;
}
h1 {
  font-weight: 100;
}
.all_principle {
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
}
.principle_item {
  text-align: center;
  background-color: #FBFCFD;
  width: 24%;
}
.principle_item img {
  width: 80px;
  height: 80px;
  margin: 40px 0;
}
.principle_title {
  margin-bottom: 15px;
}
.principle_title span {
  text-align: center;
  display: block;
}
.principle_analyze {
  margin-top: 50px;
}
.specific_description {
  padding: 20px;
  margin: 0;
}
.specific_description li {
  font-size: 14px;
  color: #5e6d82;
  margin-top: 10px;
}
.specific_description span {
  color: #99a9bf;
}
</style>