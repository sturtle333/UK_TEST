<template>
  <div id="banner">
    <button class="banner-button">
      테스트하기
    </button>
    <button class="banner-button">
      랜덤숫자 발생기
    </button>
  </div>
</template>

<script>
  export default {
    name: 'banner',
    data () {
      return {

      }
    }
  }
</script>

<style>
  #banner {
    background-color: black;
    display: flex;
    flex-direction: row;
  }
  #banner .banner-button {
    background-color : black;
    color : white;
    flex : 1;
    overflow : auto;
  }
  #banner .banner-button:hover {
    background-color : white;
    color : black;
  }
</style>
