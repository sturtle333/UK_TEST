<template>
  <div id="random">
    <div class="page-header margin-space-top">
      <h1>랜덤 숫자 생성기</h1>
    </div>
    <div class="contents-random-number-description">
      <p>
        랜덤 숫자 생성기는 UK 테스트를 직접 문서로 출력하여 사용하는 사람들을 위하여 제작하였습니다.
      </p>
    </div>
    <hr>
    <div>
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation"><a href="../random/simple">간단하게 생성</a></li>
        <li role="presentation"><a href="../random/advance">고급설정 후 생성</a></li>
      </ul>
      <simple-gen v-if="this.$route.params.para !== 'advance'"></simple-gen>
      <p v-if="this.$route.params.para === 'advance'">안심플버전</p>
    </div>
  </div>
</template>

<script>
import Simple from './simpleGen.vue'

export default {
  name: 'randomnumber',
  data (){
    return{
      isSimple: true,
      msg: 'shit'
    }
  },
  components: {
    'simple-gen': Simple
  }
}
</script>

<style>
.contents-random-number-description{
  font-size: 2rem;
}
.contents-random-number-nav-btn {
  border: none;
  background-color: none;
  color: none;
}
</style>
