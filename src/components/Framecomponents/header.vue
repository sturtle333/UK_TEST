<template>
  <div id="header">
    <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="/">UK TEST</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li class="active"><a href="/test">테스트하기</a></li>
                <li><a href="/random/simple">랜덤숫자 생성기</a></li>
                <li><a href="/credit">제작자</a></li>
              </ul>
            </div><!--/.nav-collapse -->
          </div>
        </nav>
  </div>
</template>

<script>
export default {
  name: 'headline'
}
</script>

<style>
  #header {
    text-align: center;
    color: red;
    margin: 3rem;
  }
  #header #head-line {
    display: inline-block;
  }
  #header .credit {
    color : black;
    display: inline-block;
  }
</style>
