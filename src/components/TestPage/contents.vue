<template>
  <div id="contents">
      <div id="contents-nav">
        1
      </div>
      <div id="contents-content">
        2
      </div>
  </div>
</template>

<script>
export default {
  name: 'contents',
  data () {
    return {

    }
  }
}
</script>

<style>
  #contents {
    display: flex;
    flex-direction: row;
    flex: 1;
  }
  #contents #contents-nav {
    background-color: gray;
    flex: none;
    overflow: auto;
    width: 10rem;
  }
  #contents #contents-content {
    background-color: white;
    flex: 1;
    overflow: auto;
  }
</style>
