<template>
  <div id="components">
    <head-line></head-line>
    <div class="container theme-showcase" role="main">
      <p>Hi</p>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import header from '../Framecomponents/header.vue'
import footer from '../Framecomponents/footer.vue'

export default {
  name: 'notFoundPage',
  created () {
    document.title = "UK Test - 페이지를 찾을 수 없습니다.";
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
</style>
