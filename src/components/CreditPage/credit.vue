<template>
  <div id="credit">
    <div id="contents-intro-header">
      <div class="contents-picture-self">
        <img data-src="holder.js/200x200" class="img-thumbnail" alt="200x200" style="width: 200px; height: 200px;" src="../../assets/selfPicture.jpg" data-holder-rendered="true">
      </div>
      <div class="contents-intro">
        <div class="page-header contents-intro">
          <h1 style="display: block;">안녕하세요.</h1>
        </div>
      </div>
    </div>
    <div class="contents-intro-content">
      <div class="contents-intro-description">
        <p>
          Sturtle333.
        </p>
        <p>
          사용해주셔서 감사합니다.
        </p>
      </div>
      <div class="contents-intro-link-btn">
        <span style="font-size: 2rem;">깃허브 바로가기</span>
        <a href="https://github.com/sturtle333">
          <img data-src="holder.js/200x200" class="img-thumbnail" alt="200x200" style="width: 50px; height: 50px; border-radius: 50%;" src="../../assets/giticon.png" data-holder-rendered="true">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'credit'
}
</script>

<style>
#contents-intro-header {
  display: flex;
  align-items: flex-end;
  flex: 1;
}
.contents-picture-self {
  flex: none;
  margin-right: 10%;
}
.contents-intro {
  flex: 1;
}
.contents-intro-content {
  margin-top: 10%;
  display: flex;
  flex-direction: row;
}
.contents-intro-link-btn {
}
.contents-intro-description {
  font-size: 3rem;
  flex-basis: 70%;
}
</style>
