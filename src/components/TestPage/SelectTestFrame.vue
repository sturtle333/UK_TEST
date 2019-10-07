<template>
  <div id="components">
    <head-line></head-line>
    <div class="container theme-showcase" role="main">
      <div class="page-header margin-space-top">
        <h1>UK 모의 테스트</h1>
      </div>
      <div class="contents-test-description">
        <p>
          해당 사이트는 여러 테스트 방법을 지원합니다.
          <ul>
            <li>연습하기 : 암산 훈련을 하시는 분들에게 추천합니다.</li>
            <li>모의고사 : 최대한 실제 시험용지와 비슷한 UI에서 모의고사를 치룹니다.</li>
            <li>타이머   : 용지로 연습 하시는 분들을 위해 타이머 기능만 따로 빼두었습니다.</li>
            <li>개발중 : 개발중입니다. º v º</li>
          </ul>
        </p>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import header from '../Framecomponents/header.vue'
import footer from '../Framecomponents/footer.vue'

export default {
  name: 'SelectTestFrame',
  created () {
    document.title = "UK Test - 테스트하기";
  },
  components: {
    'head-line': header,
    'nav-footer': footer
  }
}
</script>

<style>
  #components {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  margin-space-top {
    margin-top: 100%;
  }
</style>
