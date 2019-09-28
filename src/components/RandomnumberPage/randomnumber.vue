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
        <li role="presentation"><button class="contents-random-number-nav-btn">간단하게 생성</button></li>
        <li role="presentation"><a href="/">고급설정 후 생성</a></li>
      </ul>
      <p v-if="isSimple === true">심플버전</p>
      <p v-if="isSimple !== true">안심플버전</p>
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'randomnumber',
  data (){
    return{
      isSimple: true,
      msg: 'shit'
    }
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
