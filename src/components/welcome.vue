<template>
  <div id="welcome">
    <div class="jumbotron text-center">
      <h1>Welcome!</h1>
      <p>
        해당 사이트는 UK test를 무료로 시험 볼 수 있는 사이트입니다.<br>별도의 회원가입, 유료구매 없이 UK test를 공부하세요!
      </p>
      <button type="button" class="btn btn-lg btn-link">바로가기</button>
    </div>
    <div class="page-header">
      <h1>How to do UK test?</h1>
    </div>
    <div class="description">
      <p>
        본, 테스트를 시작하면 다음과 같은 수열 10개 씩 2세트가 주어집니다.
      </p>
      <blockquote>
        <p>36426840789979740948470232458455633490222447695528</p>
        <p>22205768500774160340179681198439237852123864953998</p>
        <p>36243368711895598923375529865575506684070960867356</p>
        <p>...</p>
      </blockquote>
      <p>
        타이머가 시작하면 1분씩 총 10분이 주어집니다.
      </p>
      <p>
        당신은, 주어진 1분 안에 하나의 수열을 풀어야합니다.
      </p>
      <hr>
      <p>
        풀이 방법은 간단합니다.
      </p>
      <p>
        제일 처음 시작하면 수열의 가장 <strong>첫 번째 숫자</strong>와 그 다음 숫자를 더해줍니다.
      </p>
        만약 두 숫자를 더한 값이 10의 자리 수라면, <strong>1의 자리 수</strong>만 적어줍니다.
      </p>
      <blockquote>
        <h2>Example</h2>
        <p>3 6 4 2 6 8 4 0 7 8</p>
        <p>3 + 6 = 9</p>
        <p>6 + 4 = 10 -> 0</p>
        <p>4 + 2 = 6</p>
        <p>2 + 6 = 8</p>
        <p>6 + 8 = 14 -> 4</p>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome'
}
</script>

<style>
text-center {
  text-align: center;
}
</style>
