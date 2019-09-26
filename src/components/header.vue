<template>
  <div id="header">
    <h1 id="head-line"> Hello! </h1>
    <p class="credit">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'headline',
  data (){
    return {
      msg: 'i am sturtle'
    }
  }
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
